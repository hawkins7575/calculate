import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Table, Accordion } from 'react-bootstrap';

// --- Child Components ---

const BmiChart = ({ bmiValue }: { bmiValue: number }) => {
  // Calculate pointer position (from BMI 10 to 40)
  const minBmi = 10;
  const maxBmi = 40;
  const percentage = ((Math.min(maxBmi, Math.max(minBmi, bmiValue)) - minBmi) / (maxBmi - minBmi)) * 100;

  return (
    <div className="bmi-chart-container my-4">
      <div className="bmi-gauge"></div>
      <div className="bmi-pointer" style={{ left: `${percentage}%` }}></div>
      <div className="bmi-labels">
        <span>18.5</span>
        <span>23</span>
        <span>25</span>
      </div>
    </div>
  );
};

const BmiInfo = () => (
  <Card className="mt-4">
    <Card.Header as="h5">BMI 지수 정보</Card.Header>
    <Card.Body>
      <h6><strong>계산 공식</strong></h6>
      <p>BMI = 체중(kg) &divide; (신장(m) &times; 신장(m))</p>
      <h6 className="mt-4"><strong>아시아/태평양 기준 (대한비만학회)</strong></h6>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>분류</th>
            <th>BMI 지수 범위</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>저체중</td>
            <td>18.5 미만</td>
          </tr>
          <tr>
            <td>정상</td>
            <td>18.5 ~ 22.9</td>
          </tr>
          <tr>
            <td>과체중</td>
            <td>23 ~ 24.9</td>
          </tr>
          <tr>
            <td>비만</td>
            <td>25 이상</td>
          </tr>
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

// --- Main Component ---

interface BmiResult {
  bmi: string;
  category: string;
  variant: 'success' | 'warning' | 'danger' | 'info';
  bmiValue: number;
}

function BmiCalculator() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BmiResult | null>(null);
  const [error, setError] = useState<string>('');

  const getBmiCategory = (bmi: number): BmiResult => {
    const bmiStr = bmi.toFixed(1);
    if (bmi < 18.5) return { bmi: bmiStr, category: '저체중', variant: 'info', bmiValue: bmi };
    if (bmi < 23) return { bmi: bmiStr, category: '정상', variant: 'success', bmiValue: bmi };
    if (bmi < 25) return { bmi: bmiStr, category: '과체중', variant: 'warning', bmiValue: bmi };
    return { bmi: bmiStr, category: '비만', variant: 'danger', bmiValue: bmi };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError('신장과 체중을 정확히 입력해주세요.');
      setResult(null);
      return;
    }
    setError('');

    const bmi = w / Math.pow(h / 100, 2);
    setResult(getBmiCategory(bmi));
  };

  return (
    <>
      <Card className="p-4">
        <Card.Title as="h2" className="text-center mb-4">BMI 계산기</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="bmi-height">
            <Form.Label column sm={4}>신장 (cm)</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="예: 175"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="bmi-weight">
            <Form.Label column sm={4}>체중 (kg)</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="예: 70"
              />
            </Col>
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" size="lg">
              계산하기
            </Button>
          </div>
        </Form>

        {error && (
          <Alert variant="danger" className="mt-4">
            {error}
          </Alert>
        )}

        {result && !error && (
          <div className="mt-4">
            <hr />
            <h3 className="text-center">계산 결과</h3>
            <BmiChart bmiValue={result.bmiValue} />
            <Alert variant={result.variant}>
              <Row className="align-items-center">
                <Col><strong>BMI 지수:</strong></Col>
                <Col className="text-end"><strong style={{ fontSize: '1.5rem' }}>{result.bmi}</strong></Col>
              </Row>
              <hr />
              <Row>
                <Col>비만도 분류:</Col>
                <Col className="text-end"><strong>{result.category}</strong></Col>
              </Row>
            </Alert>
          </div>
        )}
      </Card>
      <BmiInfo />

      <Accordion defaultActiveKey="0" className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>BMI의 한계</Accordion.Header>
          <Accordion.Body>
            <p>BMI는 신장과 체중만을 이용한 지표이므로, 개인의 체지방률이나 근육량을 정확히 반영하지 못할 수 있습니다. 예를 들어, 근육량이 많은 사람은 BMI가 높게 나올 수 있지만 비만이 아닐 수 있습니다.</p>
            <p>따라서 BMI는 건강 상태를 평가하는 여러 지표 중 하나로 활용되어야 하며, 절대적인 기준으로 삼아서는 안 됩니다.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>건강한 BMI 유지를 위한 팁</Accordion.Header>
          <Accordion.Body>
            <h6>1. 균형 잡힌 식단</h6>
            <p>다양한 영양소를 골고루 섭취하고, 가공식품보다는 자연식품 위주로 식단을 구성하는 것이 중요합니다.</p>
            <h6>2. 규칙적인 운동</h6>
            <p>유산소 운동과 근력 운동을 병행하여 체지방을 줄이고 근육량을 늘리는 것이 건강한 BMI 유지에 도움이 됩니다.</p>
            <h6>3. 충분한 수면</h6>
            <p>수면 부족은 호르몬 불균형을 초래하여 식욕 증가 및 체중 증가로 이어질 수 있습니다. 하루 7~8시간의 충분한 수면을 취하세요.</p>
            <h6>4. 스트레스 관리</h6>
            <p>스트레스는 폭식이나 불규칙한 식습관의 원인이 될 수 있습니다. 명상, 취미 활동 등으로 스트레스를 효과적으로 관리하세요.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>BMI와 건강 위험</Accordion.Header>
          <Accordion.Body>
            <h6>저체중 (BMI 18.5 미만)</h6>
            <p>면역력 저하, 빈혈, 골다공증, 영양 불균형 등의 위험이 증가할 수 있습니다.</p>
            <h6>과체중 (BMI 23 이상 ~ 25 미만) 및 비만 (BMI 25 이상)</h6>
            <p>심혈관 질환, 당뇨병, 고혈압, 고지혈증, 관절염, 수면 무호흡증 등 다양한 만성 질환의 발생 위험이 크게 증가합니다.</p>
            <p>건강한 BMI 범위를 유지하는 것은 질병 예방과 건강한 삶을 위해 매우 중요합니다.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* 실천 가능한 건강관리 가이드 */}
      <Card className="mt-4">
        <Card.Header as="h5">💪 실천 가능한 건강관리 가이드</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6><strong>1. 식단 관리</strong></h6>
              <ul>
                <li><strong>규칙적인 식사:</strong> 하루 3끼 일정한 시간에 섭취</li>
                <li><strong>포션 컨트롤:</strong> 작은 접시 사용, 천천히 꼭꼭 씹어먹기</li>
                <li><strong>단백질 충분 섭취:</strong> 체중 1kg당 1.2-1.6g 단백질</li>
                <li><strong>식이섬유 늘리기:</strong> 채소, 과일, 통곡물 중심 식단</li>
                <li><strong>물 충분히 마시기:</strong> 하루 8-10잔 (1.5-2L) 수분 섭취</li>
              </ul>
              
              <h6 className="mt-4"><strong>2. 운동 계획</strong></h6>
              <ul>
                <li><strong>유산소 운동:</strong> 주 5일, 30분씩 빠르게 걷기/조깅</li>
                <li><strong>근력 운동:</strong> 주 2-3일, 주요 근육군 전체 운동</li>
                <li><strong>유연성 운동:</strong> 매일 10분씩 스트레칭</li>
                <li><strong>일상 활동 늘리기:</strong> 계단 이용, 한 정거장 먼저 내리기</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6><strong>3. 생활습관 개선</strong></h6>
              <ul>
                <li><strong>충분한 수면:</strong> 하루 7-8시간 양질의 수면</li>
                <li><strong>스트레스 관리:</strong> 명상, 취미활동, 사회적 관계 유지</li>
                <li><strong>금연/금주:</strong> 흡연 중단, 적당한 음주 (주 2회 이하)</li>
                <li><strong>정기 건강검진:</strong> 연 1회 종합검진, 혈압/혈당 체크</li>
              </ul>
              
              <h6 className="mt-4"><strong>4. BMI 구간별 목표</strong></h6>
              <ul>
                <li><strong>저체중 (18.5 미만):</strong> 근력운동 + 영양섭취 늘리기</li>
                <li><strong>정상 (18.5-22.9):</strong> 현재 체중 유지 + 근육량 증가</li>
                <li><strong>과체중 (23-24.9):</strong> 주 0.5kg 감량 목표</li>
                <li><strong>비만 (25 이상):</strong> 주 1kg 감량, 전문가 상담 권장</li>
              </ul>
            </Col>
          </Row>
          
          <Alert variant="info" className="mt-4">
            <h6><strong>🎯 건강한 체중감량을 위한 황금 공식</strong></h6>
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <h5 className="text-primary">70%</h5>
                  <p className="mb-0"><strong>식단</strong><br/>칼로리 제한과 영양균형</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h5 className="text-primary">20%</h5>
                  <p className="mb-0"><strong>운동</strong><br/>유산소 + 근력운동</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h5 className="text-primary">10%</h5>
                  <p className="mb-0"><strong>생활습관</strong><br/>수면, 스트레스 관리</p>
                </div>
              </Col>
            </Row>
          </Alert>
          
          <Alert variant="success" className="mt-3">
            <h6><strong>📅 4주 건강 챌린지</strong></h6>
            <Row>
              <Col md={6}>
                <p><strong>1주차:</strong> 물 하루 8잔 마시기</p>
                <p><strong>2주차:</strong> 매일 30분 걷기 추가</p>
              </Col>
              <Col md={6}>
                <p><strong>3주차:</strong> 야식 끊기, 11시 전 잠자리</p>
                <p><strong>4주차:</strong> 근력운동 주 2회 시작</p>
              </Col>
            </Row>
          </Alert>
          
          <Alert variant="warning" className="mt-3">
            <h6><strong>⚠️ 주의사항</strong></h6>
            <ul className="mb-0">
              <li>급격한 체중 변화(주 2kg 이상)는 건강에 해로울 수 있습니다</li>
              <li>기존 질환이 있는 경우 운동 전 의사와 상담하세요</li>
              <li>극단적인 다이어트는 요요현상의 원인이 됩니다</li>
              <li>체중보다는 체지방률과 근육량을 함께 고려하세요</li>
            </ul>
          </Alert>
        </Card.Body>
      </Card>
    </>
  );
}

export default BmiCalculator;
