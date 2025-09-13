import React, { useState } from 'react';
import { Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import SocialShare from './components/SocialShare';
import AdSense from './components/AdSense';

interface RetirementResult {
  totalAmount: number;
  avgSalary: number;
  workingDays: number;
  formula: string;
}

const RetirementCalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState<string>('');
  const [workingYears, setWorkingYears] = useState<string>('');
  const [workingMonths, setWorkingMonths] = useState<string>('');
  const [result, setResult] = useState<RetirementResult | null>(null);

  const calculateRetirement = () => {
    const salary = parseFloat(monthlySalary);
    const years = parseInt(workingYears) || 0;
    const months = parseInt(workingMonths) || 0;
    
    if (salary <= 0 || (years === 0 && months === 0)) {
      alert('올바른 값을 입력해주세요.');
      return;
    }

    const totalMonths = years * 12 + months;
    const avgSalary = salary;
    const workingDays = totalMonths * 30;
    
    // 퇴직금 계산: (평균임금 × 30일) × 근속년수
    // 1년 미만의 경우 월할 계산
    const totalAmount = (avgSalary * 30) * (totalMonths / 12);

    const calculationResult: RetirementResult = {
      totalAmount,
      avgSalary,
      workingDays,
      formula: `(${avgSalary.toLocaleString()}원 × 30일) × ${(totalMonths/12).toFixed(2)}년`
    };

    setResult(calculationResult);
  };

  const resetForm = () => {
    setMonthlySalary('');
    setWorkingYears('');
    setWorkingMonths('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">퇴직금 계산기</h2>
        <p className="text-muted">
          근로기준법에 따른 퇴직금을 정확하게 계산해보세요
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
              <h5 className="mb-0">📋 근무 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>월 평균 급여 (원)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 3000000"
                    value={monthlySalary}
                    onChange={(e) => setMonthlySalary(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    세전 월급여 기준으로 입력하세요
                  </Form.Text>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>근속 년수</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="예: 5"
                        value={workingYears}
                        onChange={(e) => setWorkingYears(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>추가 개월수</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="예: 6"
                        value={workingMonths}
                        onChange={(e) => setWorkingMonths(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateRetirement}>
                    퇴직금 계산하기
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
                <h5 className="mb-0">💰 계산 결과</h5>
              </Card.Header>
              <Card.Body>
                <div className="text-center mb-4">
                  <h3 className="text-primary mb-0">
                    {result.totalAmount.toLocaleString()}원
                  </h3>
                  <small className="text-muted">예상 퇴직금</small>
                </div>

                <hr />

                <Row className="text-center">
                  <Col md={6}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">월 평균 급여</h6>
                      <strong>{result.avgSalary.toLocaleString()}원</strong>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">총 근무일수</h6>
                      <strong>{result.workingDays}일</strong>
                    </div>
                  </Col>
                </Row>

                <Alert variant="info" className="mb-0">
                  <small>
                    <strong>계산 공식:</strong><br />
                    {result.formula}
                  </small>
                </Alert>
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
              <p className="mb-0 small"><strong>📚 퇴직금 안내</strong></p>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <strong>• 지급 조건:</strong> 1년 이상 근속 시 지급
                </li>
                <li className="mb-2">
                  <strong>• 계산 기준:</strong> 평균임금 × 30일 × 근속년수
                </li>
                <li className="mb-2">
                  <strong>• 평균임금:</strong> 퇴직 전 3개월 평균 급여
                </li>
                <li className="mb-0">
                  <strong>• 지급 시기:</strong> 퇴직일로부터 14일 이내
                </li>
              </ul>
              
              <div className="mt-4">
                <h6 className="mb-3"><strong>🏦 퇴직연금 vs 퇴직금</strong></h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-primary mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>🎯 확정기여형(DC)</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 회사가 매월 기여금 납입</li>
                          <li>• 개인이 운용 방법 결정</li>
                          <li>• 운용 성과에 따라 수령액 결정</li>
                          <li>• 55세부터 연금 수령 가능</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-success mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>📊 확정급여형(DB)</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 회사가 급여액을 미리 약속</li>
                          <li>• 근속년수×급여 기준으로 산정</li>
                          <li>• 안정적인 급여액 보장</li>
                          <li>• 회사가 운용 리스크 부담</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-warning">
                  <h6 className="mb-2"><strong>💰 퇴직금 세금 및 활용법</strong></h6>
                  <div className="row small">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• <strong>퇴직소득세:</strong> 근속년수별 누진세율</li>
                        <li>• <strong>IRP 이체:</strong> 세금 이연 혜택</li>
                        <li>• <strong>연금 수령:</strong> 세제 혜택 존재</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• <strong>일시수령:</strong> 퇴직소득세 부과</li>
                        <li>• <strong>중간정산:</strong> 무주택자 등 조건 필요</li>
                        <li>• <strong>운용 수익:</strong> 운용사 수수료 고려</li>
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
            title="퇴직금 계산기 - 근로기준법에 따른 정확한 퇴직금 계산"
            description="근속년수와 평균임금으로 퇴직금을 정확하게 계산하고 퇴직연금 정보를 확인하세요"
            hashtags={['퇴직금계산기', '퇴직연금', '근로기준법', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default RetirementCalculator;