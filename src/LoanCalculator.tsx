import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import SocialShare from './components/SocialShare';

interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  paymentSchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');
  const [paymentType, setPaymentType] = useState<string>('원리금균등');
  const [result, setResult] = useState<LoanResult | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const months = parseInt(loanTerm) * 12;
    
    if (principal <= 0 || annualRate < 0 || months <= 0) {
      alert('올바른 값을 입력해주세요.');
      return;
    }

    const monthlyRate = annualRate / 12;
    let monthlyPayment: number;
    let paymentSchedule: Array<any> = [];
    let totalPayment = 0;
    let balance = principal;

    if (paymentType === '원리금균등') {
      // 원리금균등 상환방식
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                     (Math.pow(1 + monthlyRate, months) - 1);

      for (let month = 1; month <= months; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        paymentSchedule.push({
          month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance)
        });

        totalPayment += monthlyPayment;
      }
    } else {
      // 원금균등 상환방식
      const principalPayment = principal / months;
      
      for (let month = 1; month <= months; month++) {
        const interestPayment = balance * monthlyRate;
        const payment = principalPayment + interestPayment;
        balance -= principalPayment;

        paymentSchedule.push({
          month,
          payment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance)
        });

        totalPayment += payment;
      }
      
      monthlyPayment = paymentSchedule[0].payment;
    }

    const totalInterest = totalPayment - principal;

    const calculationResult: LoanResult = {
      monthlyPayment,
      totalPayment,
      totalInterest,
      paymentSchedule: paymentSchedule.slice(0, 12) // 첫 12개월만 표시
    };

    setResult(calculationResult);
  };

  const resetForm = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">대출이자 계산기</h2>
        <p className="text-muted">
          대출 조건에 따른 월 상환액과 총 이자를 계산해보세요
        </p>
      </div>


      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">📋 대출 조건 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>대출 금액 (원)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 100000000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    대출받을 총 금액을 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>연 이자율 (%)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="예: 3.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    연간 이자율을 퍼센트로 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>대출 기간 (년)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 20"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    대출 상환 기간을 년 단위로 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>상환 방식</Form.Label>
                  <Form.Select 
                    value={paymentType} 
                    onChange={(e) => setPaymentType(e.target.value)}
                  >
                    <option value="원리금균등">원리금균등 상환</option>
                    <option value="원금균등">원금균등 상환</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    상환 방식을 선택하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateLoan}>
                    대출이자 계산하기
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
        <Row className="mt-4">
          <Col>
            <>
              <Card className="mb-3">
                <Card.Header>
                  <h5 className="mb-0">💰 계산 결과</h5>
                </Card.Header>
                <Card.Body>
                  <Row className="text-center">
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">월 상환액</h6>
                        <h4 className="text-primary mb-0">
                          {result.monthlyPayment.toLocaleString()}원
                        </h4>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">총 상환액</h6>
                        <h5 className="mb-0">
                          {result.totalPayment.toLocaleString()}원
                        </h5>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">총 이자</h6>
                        <h5 className="text-danger mb-0">
                          {result.totalInterest.toLocaleString()}원
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  <p className="mb-0 small"><strong>📊 상환 스케줄 (첫 12개월)</strong></p>
                </Card.Header>
                <Card.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>회차</th>
                        <th>상환액</th>
                        <th>원금</th>
                        <th>이자</th>
                        <th>잔액</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.paymentSchedule.map((payment, index) => (
                        <tr key={index}>
                          <td>{payment.month}</td>
                          <td>{Math.round(payment.payment).toLocaleString()}</td>
                          <td>{Math.round(payment.principal).toLocaleString()}</td>
                          <td>{Math.round(payment.interest).toLocaleString()}</td>
                          <td>{Math.round(payment.balance).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </>
        </Col>
      </Row>
      )}


      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <p className="mb-0 small"><strong>📚 대출 상환 방식 안내</strong></p>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <strong>• 원리금균등:</strong> 매월 동일한 금액 상환
                </li>
                <li className="mb-2">
                  <strong>• 원금균등:</strong> 매월 동일한 원금 + 감소하는 이자
                </li>
                <li className="mb-2">
                  <strong>• 총 이자:</strong> 원금균등이 일반적으로 더 적음
                </li>
                <li className="mb-0">
                  <strong>• 초기 부담:</strong> 원리금균등이 일반적으로 더 적음
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <SocialShare 
            title="대출이자 계산기 - 원리금균등과 원금균등 상환액 계산"
            description="대출 조건에 따른 월 상환액과 총 이자를 계산하고 상환 계획을 세워보세요"
            hashtags={['대출계산기', '이자계산', '상환액', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LoanCalculator;