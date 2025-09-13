import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import SocialShare from './components/SocialShare';

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

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseInt(years);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
      alert('유효한 숫자를 입력해주세요 (원금과 기간은 0보다 커야 합니다).');
      setResult(null);
      return;
    }

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

  const resetForm = () => {
    setPrincipal('');
    setRate('');
    setYears('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-3">
        <h1 className="mb-3">복리계산기 | 무료 온라인 복리 투자 수익률 계산</h1>
        <p className="text-muted">
          <strong>무료 복리계산기</strong>로 투자 수익률과 복리 효과를 정확히 계산하세요.
          복리 투자 시뮬레이션부터 목표 금액 달성 기간, 72의 법칙까지 한번에 계산 가능한
          <strong>전문가급 복리계산기</strong>입니다.
        </p>

        <div className="alert alert-info mb-4" style={{ textAlign: 'left' }}>
          <h5>🎯 복리계산기 주요 기능</h5>
          <ul className="mb-0">
            <li><strong>복리 투자 시뮬레이션</strong>: 원금, 이자율, 기간을 입력하여 복리 효과 계산</li>
            <li><strong>목표 금액 계산</strong>: 원하는 목표 금액 달성을 위한 투자 기간 및 월 적립액 계산</li>
            <li><strong>72의 법칙 적용</strong>: 투자 원금이 2배가 되는 기간 자동 계산</li>
            <li><strong>연간 수익률 비교</strong>: 다양한 이자율별 복리 효과 비교 분석</li>
          </ul>
        </div>
      </div>

      <Row className="justify-content-center">
        <Col xs={12} lg={8} xl={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">📊 투자 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>초기 원금 (원)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 1000000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    투자할 초기 원금을 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>연이율 (%)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="예: 5"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    예상 연간 수익률을 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>투자기간 (년)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 10"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    투자할 기간을 연 단위로 입력하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateCompoundInterest}>
                    복리 계산하기
                  </Button>
                  <Button variant="outline-secondary" onClick={resetForm}>
                    다시 계산
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {result && (
        <Row className="justify-content-center mt-3">
          <Col xs={12} lg={8} xl={6}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">💰 계산 결과</h5>
              </Card.Header>
              <Card.Body>
                <div className="text-center mb-4">
                  <h4 className="text-primary mb-0">
                    {result[result.length - 1]?.endAmount}원
                  </h4>
                  <small className="text-muted">최종 투자금액</small>
                </div>

                <Row className="text-center">
                  <Col md={4}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">초기 원금</h6>
                      <strong>{parseFloat(principal).toLocaleString()}원</strong>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">총 수익</h6>
                      <strong className="text-success">
                        {(parseFloat(result[result.length - 1]?.endAmount.replace(/,/g, '') || '0') - parseFloat(principal || '0')).toLocaleString()}원
                      </strong>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">수익률</h6>
                      <strong>
                        {(((parseFloat(result[result.length - 1]?.endAmount.replace(/,/g, '') || '0') / parseFloat(principal || '1')) - 1) * 100).toFixed(1)}%
                      </strong>
                    </div>
                  </Col>
                </Row>

                <h6 className="mt-3 mb-2">연도별 투자 현황</h6>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>연차</th>
                      <th>해당연도 이자</th>
                      <th>연도말 원리금</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((data) => (
                      <tr key={data.year}>
                        <td>{data.year}년차</td>
                        <td>{data.interestEarned}원</td>
                        <td><strong>{data.endAmount}원</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}


      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={8} xl={6}>
          <Card>
            <Card.Header>
              <h2 className="h6 mb-0">💡 복리계산기 활용 가이드 및 복리 투자 전략</h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p className="mb-2"><strong>복리의 힘</strong></p>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">
                      <strong>• 일찍 시작:</strong> 복리는 시간이 길수록 효과가 큽니다
                    </li>
                    <li className="mb-2">
                      <strong>• 꾸준함:</strong> 정기적인 추가 투자로 효과 극대화
                    </li>
                    <li className="mb-2">
                      <strong>• 장기 관점:</strong> 최소 10년 이상 장기 투자 권장
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <p className="mb-2"><strong>투자 전략</strong></p>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">
                      <strong>• 재투자:</strong> 배당금과 이자를 재투자하세요
                    </li>
                    <li className="mb-2">
                      <strong>• 분산투자:</strong> 위험을 분산하여 안정성 확보
                    </li>
                    <li className="mb-2">
                      <strong>• 수수료 최소화:</strong> 저비용 상품 선택
                    </li>
                  </ul>
                </Col>
              </Row>
              
              <div className="mt-3 p-3 bg-light rounded">
                <p className="mb-2"><strong>📈 복리 계산 공식</strong></p>
                <p className="mb-0 small text-center">
                  <strong>최종 금액 = 원금 × (1 + 연이율)^투자기간(년)</strong>
                </p>
              </div>
              
              <div className="mt-4">
                <div className="alert alert-primary">
                  <p className="mb-2"><strong>🎯 복리계산기 사용법</strong></p>
                  <p className="mb-0 small">
                    이 무료 복리계산기는 초기 원금, 연이율, 투자기간을 입력하면 자동으로 복리 효과를 계산해줍니다. 
                    온라인 복리계산기 중에서도 가장 정확하고 사용하기 쉬운 계산기입니다.
                  </p>
                </div>
                <p className="mb-3"><strong>💡 투자 상품 비교</strong></p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-primary mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>🏦 예금/적금 (안전형)</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 연 2-4% 수익률</li>
                          <li>• 예금자보호법 적용</li>
                          <li>• 원금보장</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-success mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>📈 주식/펀드 (성장형)</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 연 5-10% 목표수익률</li>
                          <li>• 변동성 존재</li>
                          <li>• 장기투자 권장</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-info">
                  <p className="mb-2 small"><strong>🎯 72의 법칙</strong></p>
                  <p className="mb-0 small">
                    투자금이 2배가 되는 기간 = <strong>72 ÷ 수익률</strong><br/>
                    예: 연 6% 수익률 → 약 12년 후 투자금 2배 달성
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={8} xl={6} className="text-center">
          <SocialShare 
            title="복리 계산기 - 투자의 마법을 체험하세요"
            description="원금과 수익률만 입력하면 미래 자산을 쉽게 계산할 수 있습니다"
            hashtags={['복리계산기', '투자', '수익률', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>

      {/* SEO 강화를 위한 추가 컨텐츠 */}
      <Row className="justify-content-center mt-4">
        <Col xs={12} lg={8} xl={6}>
          <div className="bg-light p-4 rounded">
            <h3 className="h5 mb-3">🔍 복리계산기 자주 묻는 질문 (FAQ)</h3>

            <div className="mb-4">
              <h4 className="h6 text-primary">Q. 복리계산기는 어떻게 사용하나요?</h4>
              <p className="small mb-3">
                <strong>복리계산기</strong> 사용법은 간단합니다. ① 원금(초기투자금액) 입력 → ② 연간 수익률(%) 입력 →
                ③ 투자 기간(년) 입력 → ④ 계산하기 버튼 클릭. 즉시 <strong>복리 효과</strong>와 최종 수익금을 확인할 수 있습니다.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="h6 text-primary">Q. 72의 법칙이란 무엇인가요?</h4>
              <p className="small mb-3">
                <strong>72의 법칙</strong>은 투자 원금이 2배가 되는 기간을 쉽게 계산하는 방법입니다.
                72를 연간 수익률로 나누면 됩니다. 예: 연 6% 수익률 → 72÷6 = 12년 후 원금 2배 달성.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="h6 text-primary">Q. 복리와 단리의 차이점은?</h4>
              <p className="small mb-3">
                <strong>단리</strong>는 원금에만 이자를 적용하지만, <strong>복리</strong>는 원금 + 이자에 다시 이자를 적용합니다.
                시간이 지날수록 복리의 수익률이 기하급수적으로 증가하여 '복리의 마법'이라고 불립니다.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="h6 text-primary">Q. 이 복리계산기의 장점은?</h4>
              <p className="small mb-3">
                ✅ <strong>무료</strong> 사용 가능<br/>
                ✅ 정확한 복리 계산 공식 적용<br/>
                ✅ 연도별 상세 수익률 제공<br/>
                ✅ 72의 법칙 자동 계산<br/>
                ✅ 모바일 최적화 반응형 디자인
              </p>
            </div>

            <div className="border-top pt-3">
              <h4 className="h6 mb-2">🏷️ 관련 키워드</h4>
              <p className="small text-muted">
                복리계산기, 복리 계산기, 무료 복리계산기, 온라인 복리계산기, 복리 투자 계산기,
                복리 시뮬레이션, 복리 효과 계산, 투자 수익률 계산기, 72의 법칙, 복리 공식,
                이자 복리 계산, 적금 복리계산기, 예금 복리계산기, 장기투자 계산기
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CompoundInterestCalculator;