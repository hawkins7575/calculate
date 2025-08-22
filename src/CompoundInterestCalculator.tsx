import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Table, Accordion } from 'react-bootstrap';

const CompoundInterestInfo = () => (
  <Card className="mt-4">
    <Card.Header as="h5">복리(Compound Interest)란?</Card.Header>
    <Card.Body>
      <h6><strong>계산 공식 (연 복리 기준)</strong></h6>
      <p className='text-center bg-light p-2 rounded'>
        <strong>최종 금액 = 원금 &times; (1 + 연이율)<sup>투자기간(년)</sup></strong>
      </p>
      <h6 className="mt-4"><strong>복리의 마법</strong></h6>
      <p>
        복리는 "이자에 이자가 붙는" 방식입니다. 처음에는 그 효과가 미미해 보일 수 있지만, 시간이 지남에 따라 눈덩이처럼 불어나는 기하급수적인 성장을 만들어냅니다. 
        원금뿐만 아니라 누적된 이자에도 계속해서 이자가 발생하기 때문입니다.
      </p>
      <p>
        알베르트 아인슈타인이 "복리는 세계 8대 불가사의"라고 말했다는 일화가 있을 정도로, 장기적인 관점에서 부를 축적하는 가장 강력한 원리 중 하나입니다. 
        투자를 일찍 시작할수록 더 오랜 기간 동안 복리의 혜택을 누릴 수 있습니다.
      </p>
    </Card.Body>
  </Card>
);

interface IYearlyData {
  year: number;
  endAmount: string;
  interestEarned: string;
}

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [years, setYears] = useState<string>('');
  const [result, setResult] = useState<IYearlyData[] | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseInt(years);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
      setError('유효한 숫자를 입력해주세요 (원금과 기간은 0보다 커야 합니다).');
      setResult(null);
      return;
    }
    setError('');

    const yearlyData: IYearlyData[] = [];
    let currentAmount = p;

    for (let i = 1; i <= t; i++) {
      const interest = currentAmount * r;
      currentAmount += interest;
      yearlyData.push({
        year: i,
        interestEarned: interest.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
        endAmount: currentAmount.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      });
    }

    setResult(yearlyData);
  };

  return (
    <>
      <Card className="p-4">
        <Card.Title as="h2" className="text-center mb-4">복리 계산기</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="ci-principal">
            <Form.Label column sm={4}>초기 원금 (원)</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="예: 1,000,000"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="ci-rate">
            <Form.Label column sm={4}>연이율 (%)</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                step="0.01"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="예: 5"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="ci-years">
            <Form.Label column sm={4}>투자기간 (년)</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="예: 10"
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
            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th>연차</th>
                  <th>해당 연도 이자 (원)</th>
                  <th>연도 말 원리금 (원)</th>
                </tr>
              </thead>
              <tbody>
                {result.map((data) => (
                  <tr key={data.year}>
                    <td>{data.year}년차</td>
                    <td className="text-end">{data.interestEarned}</td>
                    <td className="text-end"><strong>{data.endAmount}</strong></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Card>
      <CompoundInterestInfo />

      <Accordion defaultActiveKey="0" className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>복리 극대화 팁</Accordion.Header>
          <Accordion.Body>
            <h6>1. 일찍 시작하라</h6>
            <p>복리의 가장 큰 힘은 시간에서 나옵니다. 투자를 일찍 시작할수록 복리 효과가 극대화되어 자산이 기하급수적으로 불어납니다.</p>
            <h6>2. 꾸준히 투자하라</h6>
            <p>정기적으로 소액이라도 꾸준히 투자하면, 시장의 변동성에 덜 영향을 받으면서 장기적으로 안정적인 복리 수익을 기대할 수 있습니다.</p>
            <h6>3. 수익률을 높여라</h6>
            <p>안정적인 범위 내에서 조금이라도 더 높은 수익률을 추구하는 것이 중요합니다. 1%의 차이가 장기적으로는 엄청난 차이를 만듭니다.</p>
            <h6>4. 비용을 최소화하라</h6>
            <p>투자 수수료, 세금 등 불필요한 비용은 복리 효과를 갉아먹습니다. 저렴한 수수료의 상품을 선택하고 세금 혜택을 최대한 활용하세요.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>복리 관련 오해</Accordion.Header>
          <Accordion.Body>
            <h6>1. 단기 투자에도 효과적이다?</h6>
            <p>복리는 장기 투자에서 그 진정한 힘을 발휘합니다. 단기적인 시장 변동성 속에서는 복리 효과를 체감하기 어렵습니다.</p>
            <h6>2. 무조건 높은 수익률이 최고다?</h6>
            <p>높은 수익률은 높은 위험을 동반합니다. 자신의 투자 성향과 목표에 맞는 적절한 위험 수준 내에서 수익률을 추구하는 것이 중요합니다.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>역사적 복리 수익률 (참고)</Accordion.Header>
          <Accordion.Body>
            <p>역사적으로 주식 시장은 장기적으로 연평균 7~10% 내외의 복리 수익률을 기록해왔습니다. 이는 인플레이션을 감안한 실질 수익률이기도 합니다. 채권이나 예금은 이보다 낮은 수익률을 보이지만, 위험도 또한 낮습니다.</p>
            <p>물론 과거의 수익률이 미래를 보장하지는 않지만, 복리 투자의 잠재력을 이해하는 데 좋은 참고 자료가 됩니다.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* 스마트 투자 전략 */}
      <Card className="mt-4">
        <Card.Header as="h5">🚀 스마트 투자 전략</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6><strong>1. 분산 투자 전략</strong></h6>
              <ul>
                <li><strong>자산 클래스 분산:</strong> 주식, 채권, 부동산, 원자재 등으로 분산</li>
                <li><strong>지역 분산:</strong> 국내외 다양한 시장에 투자</li>
                <li><strong>시간 분산:</strong> 정기적인 적립식 투자로 시점 리스크 분산</li>
                <li><strong>섹터 분산:</strong> IT, 헬스케어, 금융 등 다양한 업종에 투자</li>
              </ul>
              
              <h6 className="mt-4"><strong>2. 달러 코스트 평균법</strong></h6>
              <ul>
                <li><strong>정기 투자:</strong> 매월 일정 금액을 꾸준히 투자</li>
                <li><strong>가격 변동 활용:</strong> 하락장에서는 더 많은 주식, 상승장에서는 적은 주식 매입</li>
                <li><strong>감정 배제:</strong> 시장 상황에 관계없이 기계적으로 투자</li>
                <li><strong>장기적 관점:</strong> 최소 5년 이상 장기 투자 권장</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6><strong>3. 연령별 투자 전략</strong></h6>
              <ul>
                <li><strong>20-30대:</strong> 주식 70-80%, 채권 20-30% (공격적 투자)</li>
                <li><strong>40대:</strong> 주식 60-70%, 채권 30-40% (균형 투자)</li>
                <li><strong>50대 이상:</strong> 주식 40-50%, 채권 50-60% (안정적 투자)</li>
                <li><strong>은퇴 후:</strong> 주식 30%, 채권 70% (보수적 투자)</li>
              </ul>
              
              <h6 className="mt-4"><strong>4. 세금 효율적 투자</strong></h6>
              <ul>
                <li><strong>ISA 계좌:</strong> 연 2,000만원 한도, 비과세 혜택</li>
                <li><strong>연금저축:</strong> 연 700만원 한도, 세액공제 혜택</li>
                <li><strong>퇴직연금 IRP:</strong> 연 700만원 한도, 추가 세액공제</li>
                <li><strong>장기보유 특별공제:</strong> 3년 이상 보유 시 양도소득세 감면</li>
              </ul>
            </Col>
          </Row>
          
          <Alert variant="info" className="mt-4">
            <h6><strong>📈 성공적인 복리 투자를 위한 핵심 원칙</strong></h6>
            <Row>
              <Col md={6}>
                <ul className="mb-0">
                  <li><strong>일찍 시작:</strong> 투자는 하루라도 빨리 시작하세요</li>
                  <li><strong>꾸준함:</strong> 시장 상황에 관계없이 꾸준히 투자</li>
                  <li><strong>장기 관점:</strong> 최소 10년 이상의 장기 관점 유지</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="mb-0">
                  <li><strong>수수료 최소화:</strong> 저비용 ETF나 인덱스 펀드 활용</li>
                  <li><strong>재투자:</strong> 배당금과 이자를 재투자하여 복리 효과 극대화</li>
                  <li><strong>감정 통제:</strong> 시장 변동에 휩쓸리지 말고 계획대로 실행</li>
                </ul>
              </Col>
            </Row>
          </Alert>
          
          <Alert variant="success" className="mt-3">
            <h6><strong>💡 복리 투자 시뮬레이션 예시</strong></h6>
            <p className="mb-2">매월 50만원씩 30년간 투자 시 (연 7% 수익률 가정):</p>
            <ul className="mb-0">
              <li><strong>총 투자원금:</strong> 1억 8,000만원</li>
              <li><strong>최종 투자금액:</strong> 약 6억 1,000만원</li>
              <li><strong>복리 수익:</strong> 약 4억 3,000만원 (투자원금의 2.4배)</li>
            </ul>
          </Alert>
        </Card.Body>
      </Card>
    </>
  );
}

export default CompoundInterestCalculator;
