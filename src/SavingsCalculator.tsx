import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import SocialShare from './components/SocialShare';
import { InFeedAd, HeaderAd, SidebarAd } from './components/AdSenseUnits';

interface SavingsResult {
  totalDeposit: number;
  totalInterest: number;
  finalAmount: number;
  monthlyInterest: number;
  yearlyBreakdown: Array<{
    year: number;
    totalDeposit: number;
    totalInterest: number;
    balance: number;
  }>;
}

const SavingsCalculator = () => {
  const [savingsType, setSavingsType] = useState<string>('regular');
  const [monthlyAmount, setMonthlyAmount] = useState<string>('');
  const [initialAmount, setInitialAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const [interestTax, setInterestTax] = useState<string>('15.4');
  const [result, setResult] = useState<SavingsResult | null>(null);

  const calculateSavings = () => {
    const monthly = parseFloat(monthlyAmount) || 0;
    const initial = parseFloat(initialAmount) || 0;
    const rate = parseFloat(interestRate) / 100;
    const months = parseInt(period);
    const taxRate = parseFloat(interestTax) / 100;

    if ((savingsType === 'regular' && monthly <= 0) || (savingsType === 'lump' && initial <= 0) || rate < 0 || months <= 0) {
      alert('올바른 값을 입력해주세요.');
      return;
    }

    let totalDeposit = 0;
    let totalInterest = 0;
    let balance = initial;
    const yearlyBreakdown = [];

    if (savingsType === 'regular') {
      // 적금 계산 (매월 납입)
      const monthlyRate = rate / 12;
      totalDeposit = monthly * months;
      
      // 적금 이자 계산 (매월 복리)
      for (let month = 1; month <= months; month++) {
        balance += monthly;
        const monthlyInterestEarned = balance * monthlyRate;
        balance += monthlyInterestEarned;
        totalInterest += monthlyInterestEarned;

        // 연간 단위로 저장
        if (month % 12 === 0 || month === months) {
          const year = Math.ceil(month / 12);
          yearlyBreakdown.push({
            year,
            totalDeposit: monthly * month,
            totalInterest: totalInterest * (1 - taxRate), // 세후 이자
            balance: monthly * month + totalInterest * (1 - taxRate)
          });
        }
      }
    } else {
      // 예금 계산 (일시 납입)
      totalDeposit = initial;
      balance = initial;
      
      for (let month = 1; month <= months; month++) {
        const monthlyInterestEarned = balance * (rate / 12);
        totalInterest += monthlyInterestEarned;
        balance += monthlyInterestEarned;

        // 연간 단위로 저장
        if (month % 12 === 0 || month === months) {
          const year = Math.ceil(month / 12);
          yearlyBreakdown.push({
            year,
            totalDeposit: initial,
            totalInterest: totalInterest * (1 - taxRate), // 세후 이자
            balance: initial + totalInterest * (1 - taxRate)
          });
        }
      }
    }

    // 세후 이자 계산
    const netInterest = totalInterest * (1 - taxRate);
    const finalAmount = totalDeposit + netInterest;
    const monthlyInterest = netInterest / months;

    const calculationResult: SavingsResult = {
      totalDeposit,
      totalInterest: netInterest,
      finalAmount,
      monthlyInterest,
      yearlyBreakdown: yearlyBreakdown.map(item => ({
        ...item,
        totalInterest: Math.round(item.totalInterest),
        balance: Math.round(item.balance)
      }))
    };

    setResult(calculationResult);
  };

  const resetForm = () => {
    setMonthlyAmount('');
    setInitialAmount('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">적금 예금 계산기</h2>
        <p className="text-muted">
          적금과 예금의 만기 수익을 계산하여 최적의 저축 계획을 세워보세요
        </p>
      </div>

      {/* 헤더 광고 */}
      <HeaderAd />

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">💰 저축 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>저축 유형</Form.Label>
                  <Form.Select 
                    value={savingsType} 
                    onChange={(e) => setSavingsType(e.target.value)}
                  >
                    <option value="regular">적금 (매월 납입)</option>
                    <option value="lump">예금 (일시 납입)</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    저축 방식을 선택하세요
                  </Form.Text>
                </Form.Group>

                {savingsType === 'regular' ? (
                  <Form.Group className="mb-3">
                    <Form.Label>월 납입액 (원)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="예: 500000"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      매월 납입할 금액을 입력하세요
                    </Form.Text>
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Label>예금 원금 (원)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="예: 10000000"
                      value={initialAmount}
                      onChange={(e) => setInitialAmount(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      일시에 예치할 금액을 입력하세요
                    </Form.Text>
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>연이율 (%)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="예: 3.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    연간 이자율을 입력하세요 (세전)
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>저축 기간 (개월)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 24"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    저축 기간을 개월 단위로 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>이자소득세율 (%)</Form.Label>
                  <Form.Select 
                    value={interestTax} 
                    onChange={(e) => setInterestTax(e.target.value)}
                  >
                    <option value="15.4">15.4% (일반)</option>
                    <option value="9.5">9.5% (세금우대상품)</option>
                    <option value="0">0% (비과세상품)</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    적용되는 세율을 선택하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateSavings}>
                    수익 계산하기
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
          <div className="sticky-top" style={{top: '20px'}}>
            <Card className="border-0 bg-light">
              <Card.Body className="text-center">
                <div style={{minHeight: '250px'}} className="d-flex align-items-center justify-content-center">
                  <div>
                    <h6 className="text-muted mb-3">광고 영역</h6>
                    <div className="bg-white border rounded p-4" style={{minHeight: '200px'}}>
                      <p className="text-muted small mb-0">Google AdSense<br/>광고가 여기에 표시됩니다</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      {result && (
        <Row className="mt-4">
          <Col>
            <Card>
                <Card.Header>
                  <h5 className="mb-0">💸 계산 결과</h5>
                </Card.Header>
                <Card.Body>
                  <Row className="text-center">
                    <Col md={3}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">총 납입액</h6>
                        <h5 className="mb-0">
                          {result.totalDeposit.toLocaleString()}원
                        </h5>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">세후 이자</h6>
                        <h5 className="text-success mb-0">
                          {result.totalInterest.toLocaleString()}원
                        </h5>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">월평균 이자</h6>
                        <h6 className="mb-0">
                          {result.monthlyInterest.toLocaleString()}원
                        </h6>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">만기 수령액</h6>
                        <h4 className="text-primary mb-0">
                          {result.finalAmount.toLocaleString()}원
                        </h4>
                      </div>
                    </Col>
                  </Row>

                  <h6 className="mt-3 mb-2">연도별 수익 현황</h6>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>연도</th>
                        <th>납입 원금</th>
                        <th>세후 이자</th>
                        <th>잔액</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearlyBreakdown.map((year, index) => (
                        <tr key={index}>
                          <td>{year.year}년차</td>
                          <td>{year.totalDeposit.toLocaleString()}원</td>
                          <td>{year.totalInterest.toLocaleString()}원</td>
                          <td><strong>{year.balance.toLocaleString()}원</strong></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <p className="mb-0 small"><strong>💡 저축 상품 선택 가이드</strong></p>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6><strong>적금 vs 예금</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">
                      <strong>• 적금:</strong> 매월 일정액 납입, 목돈 마련에 유리
                    </li>
                    <li className="mb-2">
                      <strong>• 예금:</strong> 일시 납입, 여유자금 운용에 적합
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6><strong>세금 혜택</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">
                      <strong>• 일반상품:</strong> 이자소득세 15.4%
                    </li>
                    <li className="mb-2">
                      <strong>• 세금우대:</strong> 9.5% (연 300만원 한도)
                    </li>
                    <li className="mb-2">
                      <strong>• 비과세:</strong> ISA, 주택청약 등
                    </li>
                  </ul>
                </Col>
              </Row>
              
              <h6><strong>저축 전략</strong></h6>
              <ul className="list-unstyled small mb-3">
                <li className="mb-1">
                  <strong>• 금리 비교:</strong> 은행별 금리를 꼼꼼히 비교하세요
                </li>
                <li className="mb-1">
                  <strong>• 중도해지:</strong> 약정기간 준수로 최대 이자를 받으세요
                </li>
                <li className="mb-1">
                  <strong>• 자동이체:</strong> 급여이체 시 우대금리 혜택 활용
                </li>
                <li className="mb-0">
                  <strong>• 분산 저축:</strong> 예금자보호 한도(5천만원) 고려
                </li>
              </ul>
              
              <div className="mt-4">
                <h6 className="mb-3"><strong>🏦 목적별 저축상품 추천</strong></h6>
                <div className="table-responsive">
                  <table className="table table-sm table-striped">
                    <thead>
                      <tr>
                        <th>저축 목적</th>
                        <th>추천 상품</th>
                        <th>기간</th>
                        <th>특징</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>비상금</td>
                        <td>CMA, MMF</td>
                        <td>수시</td>
                        <td>높은 유동성</td>
                      </tr>
                      <tr>
                        <td>결혼자금</td>
                        <td>적금</td>
                        <td>2-3년</td>
                        <td>목표액 설정</td>
                      </tr>
                      <tr>
                        <td>주택구입</td>
                        <td>주택청약</td>
                        <td>장기</td>
                        <td>세액공제 혜택</td>
                      </tr>
                      <tr>
                        <td>노후준비</td>
                        <td>연금저축</td>
                        <td>장기</td>
                        <td>세제혜택</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="alert alert-info">
                  <h6 className="mb-2"><strong>💰 예금자보호법 안내</strong></h6>
                  <p className="mb-0 small">
                    <strong>보호 한도:</strong> 금융기관별 원금과 이자 합계 5천만원까지 보장<br/>
                    <strong>보호 대상:</strong> 예금, 적금, 예적금신탁, 금전신탁 등<br/>
                    <strong>주의사항:</strong> 파생상품, 펀드, 보험은 보호 대상 아님
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <SocialShare 
            title="적금 예금 계산기 - 저축 계획과 이자 수익 계산"
            description="적금과 예금의 만기 수익을 계산하고 최적의 저축 계획을 세워보세요"
            hashtags={['적금계산기', '예금이자', '저축계획', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SavingsCalculator;