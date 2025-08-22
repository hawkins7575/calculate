import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Table } from 'react-bootstrap';

const SalaryInfo = () => (
  <Card className="mt-4">
    <Card.Header as="h5">실급여 공제 항목 상세</Card.Header>
    <Card.Body>
      <h6><strong>1. 4대보험</strong></h6>
      <p>
        대한민국 근로자라면 의무적으로 가입해야 하는 사회보험으로, 국민연금, 건강보험, 고용보험, 산재보험으로 구성됩니다. 
        이 중 산재보험료는 전액 사업주 부담이므로, 근로자 부담분은 국민연금, 건강보험, 고용보험 세 가지입니다.
      </p>
      <ul>
        <li><strong>국민연금:</strong> 기준소득월액의 9% (사업주 4.5%, 근로자 4.5%)</li>
        <li><strong>건강보험:</strong> 보수월액의 7.09% (사업주 3.545%, 근로자 3.545%)</li>
        <li><strong>장기요양보험:</strong> 건강보험료의 12.95% (건강보험료에 비례)</li>
        <li><strong>고용보험:</strong> 보수월액의 1.6% (사업주 0.8%, 근로자 0.8%)</li>
      </ul>
      <small className="text-muted">* 위 요율은 2024년 기준이며, 변동될 수 있습니다. 국민연금과 건강보험은 상한액이 있습니다.</small>

      <h6 className="mt-4"><strong>2. 소득세 및 지방소득세</strong></h6>
      <p>
        근로소득에 부과되는 세금으로, 국세인 소득세와 지방세인 지방소득세로 나뉩니다. 
        소득세는 국세청에서 제공하는 간이세액표에 따라 결정되며, 소득 수준과 부양가족 수에 따라 달라집니다. 
        지방소득세는 소득세의 10%입니다.
      </p>
      <small className="text-muted">* 본 계산기는 간이세액표를 매우 단순화하여 적용했으므로, 실제 공제액과 차이가 있을 수 있습니다.</small>

      <h6 className="mt-4"><strong>3. 중요 안내</strong></h6>
      <p>
        본 계산기는 사용자의 편의를 위해 주요 공제 항목을 바탕으로 예상 실수령액을 제공합니다. 
        실제 실수령액은 비과세 소득, 추가 공제(예: 학자금 상환, 주택자금 공제 등), 회사별 정책 등에 따라 달라질 수 있으므로, 
        정확한 금액은 급여명세서나 국세청 자료를 통해 확인하시기 바랍니다.
      </p>
    </Card.Body>
  </Card>
);

interface SalaryResult {
  netMonthlyPay: string;
  nationalPension: string;
  healthInsurance: string;
  longTermCare: string;
  employmentInsurance: string;
  incomeTax: string;
  localIncomeTax: string;
}

function SalaryCalculator() {
  const [salaryType, setSalaryType] = useState('annual'); // 'annual' or 'monthly'
  const [salaryAmount, setSalaryAmount] = useState<string>('');
  const [dependents, setDependents] = useState<string>('1'); // 본인 포함
  const [childrenUnder20, setChildrenUnder20] = useState<string>('0');
  const [result, setResult] = useState<SalaryResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const amount = parseFloat(salaryAmount);
    const dep = parseInt(dependents);
    const child = parseInt(childrenUnder20);

    if (isNaN(amount) || amount <= 0 || isNaN(dep) || dep < 1 || isNaN(child) || child < 0) {
      setError('유효한 급여액, 부양가족수, 자녀수를 입력해주세요.');
      setResult(null);
      return;
    }
    setError('');

    let monthlyBaseSalary = salaryType === 'annual' ? amount / 12 : amount;

    // 4대보험 (2024년 기준 근사치)
    const nationalPensionRate = 0.045; // 국민연금 (본인 부담분)
    const healthInsuranceRate = 0.03545; // 건강보험 (본인 부담분)
    const longTermCareRate = 0.1295; // 장기요양보험 (건강보험료의 12.95%)
    const employmentInsuranceRate = 0.008; // 고용보험 (본인 부담분)

    // 국민연금 상한액 (2024년 기준 월 소득 590만원 초과 시 265,500원)
    const nationalPension = Math.min(monthlyBaseSalary * nationalPensionRate, 265500);
    const healthInsurance = monthlyBaseSalary * healthInsuranceRate;
    const longTermCare = healthInsurance * longTermCareRate;
    const employmentInsurance = monthlyBaseSalary * employmentInsuranceRate;

    const totalSocialInsurance = nationalPension + healthInsurance + longTermCare + employmentInsurance;

    // 소득세 및 지방소득세 (간이세액표 매우 간소화된 근사치)
    // 실제 간이세액표는 매우 복잡하므로, 여기서는 매우 단순화된 로직을 사용합니다.
    // 정확한 계산을 위해서는 국세청 간이세액표를 참조해야 합니다.
    let taxableIncome = monthlyBaseSalary - totalSocialInsurance;
    let incomeTax = 0;

    // 부양가족 및 자녀 수에 따른 공제 (매우 단순화)
    // 실제로는 소득 구간별, 부양가족 수별로 세액이 정해져 있습니다.
    if (taxableIncome > 0) {
      if (dep === 1) {
        if (taxableIncome < 2000000) incomeTax = taxableIncome * 0.005;
        else if (taxableIncome < 4000000) incomeTax = taxableIncome * 0.01;
        else incomeTax = taxableIncome * 0.02;
      } else if (dep === 2) {
        if (taxableIncome < 2500000) incomeTax = taxableIncome * 0.003;
        else if (taxableIncome < 5000000) incomeTax = taxableIncome * 0.008;
        else incomeTax = taxableIncome * 0.015;
      } else { // dep >= 3
        if (taxableIncome < 3000000) incomeTax = taxableIncome * 0.001;
        else if (taxableIncome < 6000000) incomeTax = taxableIncome * 0.005;
        else incomeTax = taxableIncome * 0.01;
      }
    }

    // 자녀 수에 따른 추가 공제 (매우 단순화)
    incomeTax = Math.max(0, incomeTax - (child * 10000)); // 자녀 1인당 월 1만원 공제 (예시)

    const localIncomeTax = incomeTax * 0.1; // 지방소득세는 소득세의 10%

    const totalDeductions = totalSocialInsurance + incomeTax + localIncomeTax;
    const netMonthlyPay = monthlyBaseSalary - totalDeductions;

    setResult({
      netMonthlyPay: netMonthlyPay.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      nationalPension: nationalPension.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      healthInsurance: healthInsurance.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      longTermCare: longTermCare.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      employmentInsurance: employmentInsurance.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      incomeTax: incomeTax.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      localIncomeTax: localIncomeTax.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
    });
  };

  return (
    <>
      <Card className="p-4">
        <Card.Title as="h2" className="text-center mb-4">실급여 계산기</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="salary-type">
            <Form.Label column sm={4}>급여 종류</Form.Label>
            <Col sm={8}>
              <Form.Check
                inline
                type="radio"
                label="연봉"
                name="salaryType"
                value="annual"
                checked={salaryType === 'annual'}
                onChange={(e) => setSalaryType(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="월급"
                name="salaryType"
                value="monthly"
                checked={salaryType === 'monthly'}
                onChange={(e) => setSalaryType(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="salary-amount">
            <Form.Label column sm={4}>{salaryType === 'annual' ? '연봉 (원)' : '월급 (원)'}</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={salaryAmount}
                onChange={(e) => setSalaryAmount(e.target.value)}
                placeholder={salaryType === 'annual' ? '예: 40,000,000' : '예: 3,000,000'}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="dependents">
            <Form.Label column sm={4}>부양가족수 (본인 포함)</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={dependents}
                onChange={(e) => setDependents(e.target.value)}
                min="1"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="children-under-20">
            <Form.Label column sm={4}>20세 이하 자녀수</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                value={childrenUnder20}
                onChange={(e) => setChildrenUnder20(e.target.value)}
                min="0"
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
            <Alert variant="success">
              <Row>
                <Col><strong>월 예상 실수령액:</strong></Col>
                <Col className="text-end"><strong style={{ fontSize: '1.5rem' }}>{result.netMonthlyPay} 원</strong></Col>
              </Row>
            </Alert>
            <h5 className="mt-4">공제 내역</h5>
            <Table striped bordered hover responsive size="sm">
              <thead>
                <tr>
                  <th>구분</th>
                  <th className="text-end">금액 (원)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>국민연금</td><td className="text-end">{result.nationalPension}</td></tr>
                <tr><td>건강보험</td><td className="text-end">{result.healthInsurance}</td></tr>
                <tr><td>장기요양보험</td><td className="text-end">{result.longTermCare}</td></tr>
                <tr><td>고용보험</td><td className="text-end">{result.employmentInsurance}</td></tr>
                <tr><td>소득세</td><td className="text-end">{result.incomeTax}</td></tr>
                <tr><td>지방소득세</td><td className="text-end">{result.localIncomeTax}</td></tr>
              </tbody>
            </Table>
          </div>
        )}
      </Card>
      <SalaryInfo />

      {/* 세금 절약 및 급여 최적화 가이드 */}
      <Card className="mt-4">
        <Card.Header as="h5">💰 세금 절약 및 급여 최적화 가이드</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6><strong>1. 세액공제 활용법</strong></h6>
              <ul>
                <li><strong>연금저축:</strong> 연 700만원 한도, 최대 92.4만원 세액공제</li>
                <li><strong>퇴직연금 IRP:</strong> 연 700만원 한도, 추가 세액공제</li>
                <li><strong>장기펀드/ISA:</strong> 연 600만원 한도, 최대 79.2만원 공제</li>
                <li><strong>주택청약종합저축:</strong> 연 240만원 한도, 40% 세액공제</li>
                <li><strong>신용카드 등:</strong> 급여의 25% 초과분에 대해 15-30% 공제</li>
              </ul>
              
              <h6 className="mt-4"><strong>2. 소득공제 극대화</strong></h6>
              <ul>
                <li><strong>인적공제:</strong> 부양가족 1인당 150만원 공제</li>
                <li><strong>주택자금:</strong> 주택담보대출 이자, 월세액 소득공제</li>
                <li><strong>교육비:</strong> 자녀 교육비, 직업능력개발 훈련비</li>
                <li><strong>의료비:</strong> 급여 3% 초과분 전액 공제</li>
                <li><strong>기부금:</strong> 급여의 100%까지 소득공제</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6><strong>3. 직장인 절세 꿀팁</strong></h6>
              <ul>
                <li><strong>연말정산 미리 준비:</strong> 영수증 체계적 관리</li>
                <li><strong>체크카드 vs 신용카드:</strong> 체크카드 30%, 신용카드 15% 공제</li>
                <li><strong>전통시장/대중교통:</strong> 40% 소득공제 혜택</li>
                <li><strong>도서/공연비:</strong> 연 100만원 한도, 30% 공제</li>
                <li><strong>안경구입비:</strong> 1인당 연 50만원 한도 의료비 공제</li>
              </ul>
              
              <h6 className="mt-4"><strong>4. 퇴직연금 활용법</strong></h6>
              <ul>
                <li><strong>확정기여형(DC):</strong> 투자상품 직접 선택 가능</li>
                <li><strong>개인형 IRP:</strong> 퇴직금 rollover + 추가 납입</li>
                <li><strong>연금수령:</strong> 55세 이후 연금수령 시 세제혜택</li>
                <li><strong>중도인출:</strong> 주택구입, 의료비 등 특별한 경우만</li>
              </ul>
            </Col>
          </Row>
          
          <Alert variant="info" className="mt-4">
            <h6><strong>📊 소득구간별 절세 전략</strong></h6>
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <h6 className="text-primary">연소득 3천만원 이하</h6>
                  <p className="mb-0">신용카드 소득공제<br/>주택청약 적극 활용</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h6 className="text-primary">연소득 3-7천만원</h6>
                  <p className="mb-0">연금저축 + IRP<br/>세액공제 최대 활용</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h6 className="text-primary">연소득 7천만원 이상</h6>
                  <p className="mb-0">장기펀드 + ISA<br/>종합적 세무설계 필요</p>
                </div>
              </Col>
            </Row>
          </Alert>
          
          <Alert variant="success" className="mt-3">
            <h6><strong>💡 실급여 늘리는 실전 팁</strong></h6>
            <Row>
              <Col md={6}>
                <p><strong>연말정산 환급:</strong> 평균 30-50만원 환급 가능</p>
                <p><strong>부양가족 추가:</strong> 1인당 연 22.5만원 세금 절약</p>
              </Col>
              <Col md={6}>
                <p><strong>연금저축 가입:</strong> 연 최대 92.4만원 절약</p>
                <p><strong>ISA 계좌:</strong> 200만원까지 비과세 투자수익</p>
              </Col>
            </Row>
          </Alert>
          
          <Alert variant="warning" className="mt-3">
            <h6><strong>⚠️ 주의할 점</strong></h6>
            <ul className="mb-0">
              <li>과도한 소득공제로 인한 건강보험료 급증 주의</li>
              <li>연금저축은 55세 이후에만 수령 가능 (중도해지 시 손해)</li>
              <li>신용카드 소득공제는 급여 25% 이상 사용해야 혜택</li>
              <li>허위 영수증 제출 시 가산세 부과</li>
            </ul>
          </Alert>
        </Card.Body>
      </Card>
    </>
  );
}

export default SalaryCalculator;