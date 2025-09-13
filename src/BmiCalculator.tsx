import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import AdSense from './components/AdSense';
import SocialShare from './components/SocialShare';

interface BmiResult {
  bmi: number;
  category: string;
  idealWeightMin: number;
  idealWeightMax: number;
  weightDiff: number;
}

const BmiCalculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BmiResult | null>(null);

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return '저체중';
    if (bmi < 23) return '정상';
    if (bmi < 25) return '과체중';
    if (bmi < 30) return '비만 1단계';
    if (bmi < 35) return '비만 2단계';
    return '비만 3단계';
  };

  const calculateBmi = () => {
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);

    if (h <= 0 || w <= 0 || isNaN(h) || isNaN(w)) {
      alert('올바른 수치를 입력해주세요.');
      setResult(null);
      return;
    }

    const bmi = w / (h * h);
    const category = getBmiCategory(bmi);
    
    // 이상적인 체중 범위 (BMI 18.5-22.9)
    const idealWeightMin = 18.5 * h * h;
    const idealWeightMax = 22.9 * h * h;
    
    // 현재 체중과 이상적인 체중 범위의 차이
    let weightDiff = 0;
    if (w < idealWeightMin) {
      weightDiff = idealWeightMin - w;
    } else if (w > idealWeightMax) {
      weightDiff = w - idealWeightMax;
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      idealWeightMin: Math.round(idealWeightMin * 10) / 10,
      idealWeightMax: Math.round(idealWeightMax * 10) / 10,
      weightDiff: Math.round(weightDiff * 10) / 10
    });
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setResult(null);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '정상': return 'text-success';
      case '저체중': return 'text-info';
      case '과체중': return 'text-warning';
      default: return 'text-danger';
    }
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">BMI 계산기</h2>
        <p className="text-muted">
          체질량지수를 계산하고 건강한 체중관리 방법을 확인하세요
        </p>
      </div>

      {/* 헤더 광고 */}
      <div className="text-center mb-4">
        <AdSense 
          adType="manual"
          slot="7865432109"
          format="auto"
          responsive={true}
          style={{ 
            minHeight: '90px',
            maxHeight: '120px'
          }}
          className="header-ad"
        />
      </div>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">⚖️ 신체 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>신장 (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    신장을 cm 단위로 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>체중 (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.1"
                    placeholder="예: 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    체중을 kg 단위로 입력하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateBmi}>
                    BMI 계산하기
                  </Button>
                  <Button variant="outline-secondary" onClick={resetForm}>
                    다시 계산
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <div className="sticky-top" style={{ top: '20px' }}>
            <AdSense
              adType="manual"
              slot="7865432109"
              format="auto"
              responsive={true}
              style={{ 
                minHeight: '250px',
                marginBottom: '20px'
              }}
              className="sidebar-ad"
            />
          </div>
        </Col>
      </Row>

      {result && (
        <Row className="mt-4">
          <Col>
            <Card>
                <Card.Header>
                  <h5 className="mb-0">📊 계산 결과</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center mb-4">
                    <h3 className="text-primary mb-0">
                      BMI {result.bmi}
                    </h3>
                    <h5 className={`mb-0 ${getCategoryColor(result.category)}`}>
                      {result.category}
                    </h5>
                  </div>

                  <Row className="text-center">
                    <Col md={6}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">이상적인 체중 범위</h6>
                        <strong>
                          {result.idealWeightMin}kg - {result.idealWeightMax}kg
                        </strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">체중 차이</h6>
                        <strong>
                          {result.weightDiff === 0 ? '이상적 범위' : 
                           result.category === '저체중' ? `+${result.weightDiff}kg 필요` :
                           result.category !== '정상' ? `-${result.weightDiff}kg 필요` : '이상적 범위'}
                        </strong>
                      </div>
                    </Col>
                  </Row>

                  <h6 className="mt-3 mb-2">BMI 기준표 (아시아/태평양 기준)</h6>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>분류</th>
                        <th>BMI 범위</th>
                        <th>건강 위험도</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={result.category === '저체중' ? 'table-info' : ''}>
                        <td>저체중</td>
                        <td>18.5 미만</td>
                        <td>영양부족, 면역력 저하</td>
                      </tr>
                      <tr className={result.category === '정상' ? 'table-success' : ''}>
                        <td>정상</td>
                        <td>18.5 - 22.9</td>
                        <td>건강한 체중</td>
                      </tr>
                      <tr className={result.category === '과체중' ? 'table-warning' : ''}>
                        <td>과체중</td>
                        <td>23 - 24.9</td>
                        <td>약간 위험</td>
                      </tr>
                      <tr className={result.category.includes('비만') ? 'table-danger' : ''}>
                        <td>비만 1단계</td>
                        <td>25 - 29.9</td>
                        <td>위험</td>
                      </tr>
                      <tr className={result.category === '비만 2단계' ? 'table-danger' : ''}>
                        <td>비만 2단계</td>
                        <td>30 - 34.9</td>
                        <td>높은 위험</td>
                      </tr>
                      <tr className={result.category === '비만 3단계' ? 'table-danger' : ''}>
                        <td>비만 3단계</td>
                        <td>35 이상</td>
                        <td>매우 높은 위험</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* 결과 후 광고 */}
      {result && (
        <div className="my-4 text-center">
          <AdSense
            adType="manual"
            slot="7865432109"
            format="auto"
            responsive={true}
            style={{ 
              minHeight: '200px'
            }}
            className="infeed-ad"
          />
        </div>
      )}

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <p className="mb-0 small"><strong>💪 건강한 체중관리 팁</strong></p>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6><strong>저체중인 경우</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-1">• 균형 잡힌 영양 섭취</li>
                    <li className="mb-1">• 단백질 충분히 섭취</li>
                    <li className="mb-1">• 근력 운동으로 근육량 증가</li>
                    <li className="mb-1">• 규칙적인 식사습관</li>
                  </ul>

                  <h6><strong>과체중/비만인 경우</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-1">• 칼로리 섭취량 조절</li>
                    <li className="mb-1">• 유산소 운동 30분 이상</li>
                    <li className="mb-1">• 규칙적인 식사와 간식 제한</li>
                    <li className="mb-1">• 충분한 수면과 스트레스 관리</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6><strong>일반적인 건강 관리</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-1">• 주 3-4회 이상 운동</li>
                    <li className="mb-1">• 하루 8잔 이상 물 마시기</li>
                    <li className="mb-1">• 금연, 금주 또는 절주</li>
                    <li className="mb-1">• 정기적인 건강검진</li>
                  </ul>

                  <h6><strong>주의사항</strong></h6>
                  <ul className="list-unstyled small mb-0">
                    <li className="mb-1">• BMI는 참고 지표일 뿐입니다</li>
                    <li className="mb-1">• 근육량이 많은 경우 높게 나올 수 있음</li>
                    <li className="mb-1">• 전문의와 상담 후 체중관리 시작</li>
                    <li className="mb-0">• 급격한 체중 변화는 피하세요</li>
                  </ul>
                </Col>
              </Row>
              
              <div className="mt-4">
                <h6 className="mb-3"><strong>🥗 권장 칼로리 섭취량</strong></h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-primary mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>👨 성인 남성</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 일반 활동: 2,200-2,500kcal/일</li>
                          <li>• 활발한 활동: 2,500-3,000kcal/일</li>
                          <li>• 체중감량: 1,800-2,000kcal/일</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-danger mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>👩 성인 여성</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 일반 활동: 1,800-2,000kcal/일</li>
                          <li>• 활발한 활동: 2,000-2,400kcal/일</li>
                          <li>• 체중감량: 1,400-1,600kcal/일</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-warning">
                  <h6 className="mb-2"><strong>🏃‍♂️ 운동별 칼로리 소모량 (1시간 기준, 70kg 성인)</strong></h6>
                  <div className="row small">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• 걷기(빠름): 약 280kcal</li>
                        <li>• 조깅: 약 490kcal</li>
                        <li>• 수영: 약 420kcal</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• 자전거: 약 360kcal</li>
                        <li>• 요가: 약 180kcal</li>
                        <li>• 웨이트트레이닝: 약 220kcal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <SocialShare 
            title="BMI 계산기 - 건강한 체중 관리의 시작"
            description="키와 몸무게만 입력하면 체질량지수(BMI)를 즉시 계산해드립니다"
            hashtags={['BMI계산기', '체질량지수', '건강관리', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default BmiCalculator;