import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import SocialShare from './components/SocialShare';

interface SalaryResult {
  grossSalary: number;
  netSalary: number;
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
  totalDeductions: number;
}

const SalaryCalculator = () => {
  const [salaryType, setSalaryType] = useState<string>('annual');
  const [salary, setSalary] = useState<string>('');
  const [dependents, setDependents] = useState<string>('1');
  const [result, setResult] = useState<SalaryResult | null>(null);

  const calculateSalary = () => {
    const grossAmount = parseFloat(salary);
    const numDependents = parseInt(dependents);

    if (grossAmount <= 0 || isNaN(grossAmount)) {
      alert('올바른 급여 금액을 입력해주세요.');
      setResult(null);
      return;
    }

    // 월급여로 변환
    const monthlySalary = salaryType === 'annual' ? grossAmount / 12 : grossAmount;

    // 4대보험 계산
    const nationalPension = Math.min(monthlySalary * 0.045, 243000); // 상한 540만원
    const healthInsurance = Math.min(monthlySalary * 0.03545, 387945); // 상한 109.05만원
    const longTermCare = healthInsurance * 0.1295;
    const employmentInsurance = monthlySalary * 0.008;

    // 간단한 소득세 계산 (실제는 더 복잡함)
    const taxableIncome = monthlySalary - nationalPension - healthInsurance - longTermCare - employmentInsurance - 200000; // 근로소득공제 간소화
    
    let incomeTax = 0;
    if (taxableIncome > 0) {
      // 매우 간단한 세율표 적용
      if (taxableIncome <= 1200000) {
        incomeTax = taxableIncome * 0.06;
      } else if (taxableIncome <= 4600000) {
        incomeTax = 72000 + (taxableIncome - 1200000) * 0.15;
      } else {
        incomeTax = 582000 + (taxableIncome - 4600000) * 0.24;
      }
      
      // 부양가족 공제 (매우 간단화)
      incomeTax = Math.max(0, incomeTax - (numDependents - 1) * 12500);
    }

    const localIncomeTax = incomeTax * 0.1;

    const totalDeductions = nationalPension + healthInsurance + longTermCare + employmentInsurance + incomeTax + localIncomeTax;
    const netSalary = monthlySalary - totalDeductions;

    setResult({
      grossSalary: monthlySalary,
      netSalary,
      nationalPension,
      healthInsurance,
      longTermCare,
      employmentInsurance,
      incomeTax,
      localIncomeTax,
      totalDeductions
    });
  };

  const resetForm = () => {
    setSalary('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-3">
        <h2 className="mb-3">실급여 계산기</h2>
        <p className="text-muted">
          4대보험과 세금 공제 후 실제 수령액을 계산하고 절세 방법을 알아보세요
        </p>
      </div>

      <Row className="justify-content-center">
        <Col xs={12} lg={8} xl={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">💰 급여 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>급여 형태</Form.Label>
                  <Form.Select 
                    value={salaryType} 
                    onChange={(e) => setSalaryType(e.target.value)}
                  >
                    <option value="annual">연봉</option>
                    <option value="monthly">월급</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    급여 형태를 선택하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    {salaryType === 'annual' ? '연봉 (원)' : '월급 (원)'}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={salaryType === 'annual' ? '예: 40000000' : '예: 3000000'}
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    {salaryType === 'annual' ? '세전 연봉을 입력하세요' : '세전 월급을 입력하세요'}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>부양가족 수</Form.Label>
                  <Form.Select 
                    value={dependents} 
                    onChange={(e) => setDependents(e.target.value)}
                  >
                    <option value="1">본인만 (1명)</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명 이상</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    본인 포함 부양가족 수를 선택하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateSalary}>
                    실급여 계산하기
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
                  <h5 className="mb-0">💸 계산 결과</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center mb-4">
                    <h4 className="text-primary mb-0">
                      {Math.round(result.netSalary).toLocaleString()}원
                    </h4>
                    <small className="text-muted">월 실수령액</small>
                  </div>

                  <Row className="text-center">
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">세전 월급</h6>
                        <strong>{Math.round(result.grossSalary).toLocaleString()}원</strong>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">총 공제액</h6>
                        <strong className="text-danger">{Math.round(result.totalDeductions).toLocaleString()}원</strong>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">실수령률</h6>
                        <strong>{((result.netSalary / result.grossSalary) * 100).toFixed(1)}%</strong>
                      </div>
                    </Col>
                  </Row>

                  <h6 className="mt-3 mb-2">공제 항목별 세부 내역</h6>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>공제 항목</th>
                        <th>공제액</th>
                        <th>비율</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>국민연금</td>
                        <td>{Math.round(result.nationalPension).toLocaleString()}원</td>
                        <td>4.5%</td>
                      </tr>
                      <tr>
                        <td>건강보험</td>
                        <td>{Math.round(result.healthInsurance).toLocaleString()}원</td>
                        <td>3.545%</td>
                      </tr>
                      <tr>
                        <td>장기요양보험</td>
                        <td>{Math.round(result.longTermCare).toLocaleString()}원</td>
                        <td>건강보험의 12.95%</td>
                      </tr>
                      <tr>
                        <td>고용보험</td>
                        <td>{Math.round(result.employmentInsurance).toLocaleString()}원</td>
                        <td>0.8%</td>
                      </tr>
                      <tr>
                        <td>소득세</td>
                        <td>{Math.round(result.incomeTax).toLocaleString()}원</td>
                        <td>소득구간별</td>
                      </tr>
                      <tr>
                        <td>지방소득세</td>
                        <td>{Math.round(result.localIncomeTax).toLocaleString()}원</td>
                        <td>소득세의 10%</td>
                      </tr>
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
              <p className="mb-0 small"><strong>💡 절세 및 급여 관리 팁</strong></p>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6><strong>절세 방법</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">
                      <strong>• 연금저축:</strong> 연 700만원 한도, 최대 92.4만원 세액공제
                    </li>
                    <li className="mb-2">
                      <strong>• IRP 퇴직연금:</strong> 추가 700만원, 최대 92.4만원 세액공제
                    </li>
                    <li className="mb-2">
                      <strong>• 주택청약저축:</strong> 연 240만원 한도, 최대 33.6만원 세액공제
                    </li>
                    <li className="mb-2">
                      <strong>• 신용카드 등:</strong> 총급여의 25% 초과분, 최대 330만원 소득공제
                    </li>
                    <li className="mb-0">
                      <strong>• 장기 투자:</strong> <a href="/" className="text-primary">복리계산기</a>로 투자 수익률을 계산해보세요
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6><strong>4대보험 혜택</strong></h6>
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">
                      <strong>• 국민연금:</strong> 노령연금, 장애연금, 유족연금 지급
                    </li>
                    <li className="mb-2">
                      <strong>• 건강보험:</strong> 의료비 본인부담률 경감
                    </li>
                    <li className="mb-2">
                      <strong>• 장기요양보험:</strong> 노인 장기요양 서비스
                    </li>
                    <li className="mb-2">
                      <strong>• 고용보험:</strong> 실업급여, 육아휴직급여 등
                    </li>
                  </ul>
                </Col>
              </Row>
              
              <div className="mt-3 p-3 bg-light rounded">
                <h6 className="mb-2"><strong>⚠️ 주요 안내사항</strong></h6>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-1">• 본 계산기는 예상 금액으로, 실제 급여명세서와 차이가 있을 수 있습니다</li>
                  <li className="mb-1">• 비과세 항목(식대, 교통비 등)은 포함되지 않았습니다</li>
                  <li className="mb-1">• 실제 소득세는 연말정산을 통해 정확히 계산됩니다</li>
                  <li className="mb-0">• 정확한 계산은 급여담당자나 세무사에게 문의하시기 바랍니다</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h6 className="mb-3"><strong>💰 연봉별 실수령액 비교 (근사치)</strong></h6>
                <div className="table-responsive">
                  <table className="table table-sm table-striped">
                    <thead>
                      <tr>
                        <th>세전 연봉</th>
                        <th>월 실수령액</th>
                        <th>연 실수령액</th>
                        <th>실수령률</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2,400만원</td>
                        <td>약 175만원</td>
                        <td>약 2,100만원</td>
                        <td>87.5%</td>
                      </tr>
                      <tr>
                        <td>3,600만원</td>
                        <td>약 255만원</td>
                        <td>약 3,060만원</td>
                        <td>85.0%</td>
                      </tr>
                      <tr>
                        <td>4,800만원</td>
                        <td>약 335만원</td>
                        <td>약 4,020만원</td>
                        <td>83.8%</td>
                      </tr>
                      <tr>
                        <td>6,000만원</td>
                        <td>약 410만원</td>
                        <td>약 4,920만원</td>
                        <td>82.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="alert alert-success">
                  <h6 className="mb-2"><strong>💡 비과세 항목 활용법</strong></h6>
                  <div className="row small">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• 식대: 월 20만원까지 비과세</li>
                        <li>• 교통비: 월 20만원까지 비과세</li>
                        <li>• 육아휴직급여: 소득세 면제</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• 야간근무수당: 일부 비과세</li>
                        <li>• 출산/보육 수당: 비과세</li>
                        <li>• 학자금: 조건부 비과세</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={8} xl={6} className="text-center">
          <SocialShare 
            title="실급여 계산기 - 4대보험과 세금 공제 후 실제 수령액 계산"
            description="연봉과 월급에 따른 실수령액을 정확하게 계산하고 절세 방법을 알아보세요"
            hashtags={['급여계산기', '실수령액', '4대보험', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SalaryCalculator;