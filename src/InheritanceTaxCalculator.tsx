import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table, Alert } from 'react-bootstrap';
import SocialShare from './components/SocialShare';
import AdSense from './components/AdSense';

interface TaxResult {
  taxableAmount: number;
  basicDeduction: number;
  taxAmount: number;
  finalAmount: number;
  taxRate: number;
  taxBrackets: Array<{
    range: string;
    rate: string;
    tax: number;
  }>;
}

const InheritanceTaxCalculator = () => {
  const [totalAssets, setTotalAssets] = useState<string>('');
  const [debt, setDebt] = useState<string>('');
  const [relationship, setRelationship] = useState<string>('spouse');
  const [taxType, setTaxType] = useState<string>('inheritance');
  const [result, setResult] = useState<TaxResult | null>(null);

  const calculateTax = () => {
    const assets = parseFloat(totalAssets) || 0;
    const debtAmount = parseFloat(debt) || 0;
    
    if (assets <= 0) {
      alert('올바른 값을 입력해주세요.');
      return;
    }

    // 기초공제 금액 설정
    let basicDeduction = 0;
    if (taxType === 'inheritance') {
      // 상속세 기초공제
      switch (relationship) {
        case 'spouse':
          basicDeduction = 500000000; // 5억원 + 배우자공제 별도
          break;
        case 'children':
          basicDeduction = 200000000; // 2억원
          break;
        case 'parents':
          basicDeduction = 200000000; // 2억원
          break;
        case 'others':
          basicDeduction = 200000000; // 2억원
          break;
      }
    } else {
      // 증여세 기초공제
      switch (relationship) {
        case 'spouse':
          basicDeduction = 600000000; // 6억원 (10년간)
          break;
        case 'children':
          basicDeduction = 50000000; // 5천만원 (10년간)
          break;
        case 'parents':
          basicDeduction = 50000000; // 5천만원 (10년간)
          break;
        case 'others':
          basicDeduction = 10000000; // 1천만원 (10년간)
          break;
      }
    }

    const taxableAmount = Math.max(0, assets - debtAmount - basicDeduction);
    
    // 상속세/증여세 계산 (누진세율)
    let taxAmount = 0;
    let currentAmount = taxableAmount;
    const taxBrackets = [];
    
    const brackets = [
      { min: 0, max: 100000000, rate: 0.10 }, // 1억원 이하 10%
      { min: 100000001, max: 500000000, rate: 0.20 }, // 1억원~5억원 20%
      { min: 500000001, max: 1000000000, rate: 0.30 }, // 5억원~10억원 30%
      { min: 1000000001, max: 3000000000, rate: 0.40 }, // 10억원~30억원 40%
      { min: 3000000001, max: Infinity, rate: 0.50 } // 30억원 초과 50%
    ];

    let cumulativeTax = 0;
    for (const bracket of brackets) {
      if (taxableAmount <= bracket.min - 1) break;
      
      const bracketAmount = Math.min(taxableAmount, bracket.max) - bracket.min + 1;
      if (bracketAmount > 0) {
        const bracketTax = bracketAmount * bracket.rate;
        cumulativeTax += bracketTax;
        
        taxBrackets.push({
          range: bracket.max === Infinity 
            ? `${(bracket.min / 100000000).toFixed(0)}억원 초과`
            : `${(bracket.min / 100000000).toFixed(0)}억원~${(bracket.max / 100000000).toFixed(0)}억원`,
          rate: `${(bracket.rate * 100).toFixed(0)}%`,
          tax: bracketTax
        });
      }
    }

    taxAmount = cumulativeTax;
    const finalAmount = assets - debtAmount - taxAmount;
    const effectiveRate = taxableAmount > 0 ? (taxAmount / taxableAmount) * 100 : 0;

    const calculationResult: TaxResult = {
      taxableAmount,
      basicDeduction,
      taxAmount,
      finalAmount: Math.max(0, finalAmount),
      taxRate: effectiveRate,
      taxBrackets
    };

    setResult(calculationResult);
  };

  const resetForm = () => {
    setTotalAssets('');
    setDebt('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">상속세 증여세 계산기</h2>
        <p className="text-muted">
          상속세와 증여세를 미리 계산하여 절세 계획을 세워보세요
        </p>
      </div>

      {/* 헤더 광고 */}
      <div className="text-center mb-4">
        <AdSense 
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
              <h5 className="mb-0">📋 세금 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>세금 유형</Form.Label>
                  <Form.Select 
                    value={taxType} 
                    onChange={(e) => setTaxType(e.target.value)}
                  >
                    <option value="inheritance">상속세</option>
                    <option value="gift">증여세</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    계산할 세금 유형을 선택하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>총 자산 가액 (원)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 1000000000"
                    value={totalAssets}
                    onChange={(e) => setTotalAssets(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    {taxType === 'inheritance' ? '상속받을' : '증여받을'} 총 자산 가액을 입력하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>채무액 (원)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 100000000"
                    value={debt}
                    onChange={(e) => setDebt(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    부채나 장례비용 등을 입력하세요 (선택사항)
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>관계</Form.Label>
                  <Form.Select 
                    value={relationship} 
                    onChange={(e) => setRelationship(e.target.value)}
                  >
                    <option value="spouse">배우자</option>
                    <option value="children">직계비속 (자녀 등)</option>
                    <option value="parents">직계존속 (부모 등)</option>
                    <option value="others">기타 친족</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    {taxType === 'inheritance' ? '피상속인과의' : '증여자와의'} 관계를 선택하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateTax}>
                    {taxType === 'inheritance' ? '상속세' : '증여세'} 계산하기
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
            <>
              <Card>
                <Card.Header>
                  <h5 className="mb-0">💰 계산 결과</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center mb-4">
                    <h3 className="text-danger mb-0">
                      {result.taxAmount.toLocaleString()}원
                    </h3>
                    <small className="text-muted">예상 {taxType === 'inheritance' ? '상속세' : '증여세'}</small>
                  </div>

                  <hr />

                  <Row className="text-center">
                    <Col md={6}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">과세표준</h6>
                        <strong>{result.taxableAmount.toLocaleString()}원</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">실효세율</h6>
                        <strong>{result.taxRate.toFixed(2)}%</strong>
                      </div>
                    </Col>
                  </Row>

                  <Alert variant="info" className="mb-0">
                    <small>
                      <strong>기초공제:</strong> {result.basicDeduction.toLocaleString()}원<br />
                      <strong>실수령액:</strong> {result.finalAmount.toLocaleString()}원
                    </small>
                  </Alert>
                </Card.Body>
              </Card>

              {result.taxBrackets.length > 0 && (
                <Card className="mt-3">
                  <Card.Header>
                    <p className="mb-0 small"><strong>📊 세율 구간별 계산</strong></p>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>과세구간</th>
                          <th>세율</th>
                          <th>세액</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.taxBrackets.map((bracket, index) => (
                          <tr key={index}>
                            <td>{bracket.range}</td>
                            <td>{bracket.rate}</td>
                            <td>{Math.round(bracket.tax).toLocaleString()}원</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              )}
            </>
        </Col>
      </Row>
      )}

      {/* 결과 후 광고 */}
      {result && (
        <div className="my-4 text-center">
          <AdSense
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
              <p className="mb-0 small"><strong>📚 {taxType === 'inheritance' ? '상속세' : '증여세'} 안내</strong></p>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <strong>• 기초공제:</strong> 관계에 따라 차등 적용
                </li>
                <li className="mb-2">
                  <strong>• 누진세율:</strong> 10%~50% (과세구간별 차등)
                </li>
                <li className="mb-2">
                  <strong>• 신고기한:</strong> {taxType === 'inheritance' ? '6개월' : '3개월'} 이내
                </li>
                <li className="mb-0">
                  <strong>• 납부기한:</strong> 신고기한과 동일
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <SocialShare 
            title="상속세 증여세 계산기 - 세금 절세 계획 수립"
            description="자산규모와 가족관계에 따른 상속세와 증여세를 계산하고 절세 방법을 알아보세요"
            hashtags={['상속세계산기', '증여세', '절세', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default InheritanceTaxCalculator;