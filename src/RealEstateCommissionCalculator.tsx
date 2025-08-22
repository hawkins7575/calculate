import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, Alert, Table } from 'react-bootstrap';

const CommissionRateInfo = () => (
  <Card className="mt-4">
    <Card.Header as="h3">부동산 중개보수 요율표</Card.Header>
    <Card.Body>
      <h5 className="mt-2">주택 (아파트, 빌라, 단독주택 등)</h5>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>구분</th>
            <th>거래금액</th>
            <th>상한요율</th>
            <th>한도액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={6}>매매/교환</td>
            <td>5천만원 미만</td>
            <td>0.6%</td>
            <td>25만원</td>
          </tr>
          <tr>
            <td>5천만원 이상 ~ 2억원 미만</td>
            <td>0.5%</td>
            <td>80만원</td>
          </tr>
          <tr>
            <td>2억원 이상 ~ 9억원 미만</td>
            <td>0.4%</td>
            <td rowSpan={4}>-</td>
          </tr>
          <tr>
            <td>9억원 이상 ~ 12억원 미만</td>
            <td>0.5%</td>
          </tr>
          <tr>
            <td>12억원 이상 ~ 15억원 미만</td>
            <td>0.6%</td>
          </tr>
          <tr>
            <td>15억원 이상</td>
            <td>0.7%</td>
          </tr>
          <tr>
            <td rowSpan={6}>임대차 등</td>
            <td>5천만원 미만</td>
            <td>0.5%</td>
            <td>20만원</td>
          </tr>
          <tr>
            <td>5천만원 이상 ~ 1억원 미만</td>
            <td>0.4%</td>
            <td>30만원</td>
          </tr>
          <tr>
            <td>1억원 이상 ~ 6억원 미만</td>
            <td>0.3%</td>
            <td rowSpan={4}>-</td>
          </tr>
          <tr>
            <td>6억원 이상 ~ 12억원 미만</td>
            <td>0.4%</td>
          </tr>
          <tr>
            <td>12억원 이상 ~ 15억원 미만</td>
            <td>0.5%</td>
          </tr>
          <tr>
            <td>15억원 이상</td>
            <td>0.6%</td>
          </tr>
        </tbody>
      </Table>
      <small className="text-muted">* 분양권의 경우, '거래금액'은 (거래당시까지 불입한 금액 + 프리미엄)을 기준으로 합니다.</small>

      <h5 className="mt-4">오피스텔 (주거용)</h5>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>구분</th>
            <th>상한요율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>매매/교환</td>
            <td>0.5%</td>
          </tr>
          <tr>
            <td>임대차 등</td>
            <td>0.4%</td>
          </tr>
        </tbody>
      </Table>

      <h5 className="mt-4">그 외 (토지, 상가 등)</h5>
      <p>0.9% 이내에서 중개의뢰인과 개업공인중개사가 서로 협의하여 결정</p>

      <hr />
      <small className="text-muted">
        * 위 요율은 법정 상한 요율이며, 실제 중개보수는 이 범위 내에서 중개의뢰인과 개업공인중개사가 협의하여 결정합니다.
        <br />
        * 중개보수에는 부가가치세(VAT)가 포함되어 있지 않습니다.
      </small>
    </Card.Body>
  </Card>
);

function RealEstateCommissionCalculator() {
  const [transactionType, setTransactionType] = useState('purchase');
  const [propertyType, setPropertyType] = useState('housing');
  const [price, setPrice] = useState<string>(''); // 매매가, 보증금, 또는 기납입액
  const [monthlyRent, setMonthlyRent] = useState<string>('');
  const [premium, setPremium] = useState<string>('');
  const [result, setResult] = useState<{ commission: string; appliedRate: string } | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setPrice('');
    setMonthlyRent('');
    setPremium('');
    setResult(null);
    setError('');
  }, [transactionType, propertyType]);

  const getRateAndLimit = (p: number, isLease: boolean) => {
    const currentPropertyType = propertyType === 'presale' ? 'housing' : propertyType;

    if (currentPropertyType === 'housing') {
      if (!isLease) {
        if (p < 50000000) return { rate: 0.006, limit: 250000 };
        if (p < 200000000) return { rate: 0.005, limit: 800000 };
        if (p < 900000000) return { rate: 0.004, limit: Infinity };
        if (p < 1200000000) return { rate: 0.005, limit: Infinity };
        if (p < 1500000000) return { rate: 0.006, limit: Infinity };
        return { rate: 0.007, limit: Infinity };
      } else {
        if (p < 50000000) return { rate: 0.005, limit: 200000 };
        if (p < 100000000) return { rate: 0.004, limit: 300000 };
        if (p < 600000000) return { rate: 0.003, limit: Infinity };
        if (p < 1200000000) return { rate: 0.004, limit: Infinity };
        if (p < 1500000000) return { rate: 0.005, limit: Infinity };
        return { rate: 0.006, limit: Infinity };
      }
    } else if (currentPropertyType === 'officetel') {
      if (!isLease) return { rate: 0.005, limit: Infinity };
      return { rate: 0.004, limit: Infinity };
    } else {
      return { rate: 0.009, limit: Infinity };
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const p = parseFloat(price) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    const prem = parseFloat(premium) || 0;

    let effectivePrice = 0;
    const isLease = transactionType === 'jeonse' || transactionType === 'wolse';

    if (propertyType === 'presale') {
        effectivePrice = p + prem;
    } else if (transactionType === 'wolse') {
        const calculatedPrice = p + (rent * 100);
        effectivePrice = calculatedPrice < 50000000 ? p + (rent * 70) : calculatedPrice;
    } else {
        effectivePrice = p;
    }

    if (effectivePrice <= 0) {
      setError('금액을 정확히 입력해주세요.');
      setResult(null);
      return;
    }
    setError('');

    const { rate, limit } = getRateAndLimit(effectivePrice, isLease);
    const calculatedCommission = effectivePrice * rate;
    const finalCommission = Math.min(calculatedCommission, limit);

    setResult({
      commission: finalCommission.toLocaleString('ko-KR', { maximumFractionDigits: 0 }),
      appliedRate: `${(rate * 100).toFixed(1)}%`,
    });
  };

  const renderPriceFields = () => {
    if (propertyType === 'presale') {
      return (
        <>
          <Form.Group as={Row} className="mb-3" controlId="re-paidAmount">
            <Form.Label column sm={4}>기납입액 (원)</Form.Label>
            <Col sm={8}>
              <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="계약금 + 중도금" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="re-premium">
            <Form.Label column sm={4}>프리미엄 (원)</Form.Label>
            <Col sm={8}>
              <Form.Control type="number" value={premium} onChange={(e) => setPremium(e.target.value)} placeholder="P" />
            </Col>
          </Form.Group>
        </>
      );
    }

    if (transactionType === 'wolse') {
      return (
        <>
          <Form.Group as={Row} className="mb-3" controlId="re-deposit">
            <Form.Label column sm={4}>보증금 (원)</Form.Label>
            <Col sm={8}>
              <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="re-monthlyRent">
            <Form.Label column sm={4}>월세 (원)</Form.Label>
            <Col sm={8}>
              <Form.Control type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} />
            </Col>
          </Form.Group>
        </>
      );
    }

    return (
      <Form.Group as={Row} className="mb-3" controlId="re-price">
        <Form.Label column sm={4}>{transactionType === 'purchase' ? '매매가 (원)' : '전세가 (원)'}</Form.Label>
        <Col sm={8}>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Col>
      </Form.Group>
    );
  };

  return (
    <>
      <Card className="p-4">
        <Card.Title as="h2" className="text-center mb-4">부동산 중개보수 계산기</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="re-propertyType">
            <Form.Label column sm={4}>건물 종류</Form.Label>
            <Col sm={8}>
              <Form.Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="housing">주택 (아파트, 빌라 등)</option>
                <option value="officetel">오피스텔</option>
                <option value="presale">분양권</option>
                <option value="other">그 외 (상가, 토지 등)</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {propertyType !== 'presale' && (
              <Form.Group as={Row} className="mb-3" controlId="re-transactionType">
              <Form.Label column sm={4}>거래 유형</Form.Label>
              <Col sm={8}>
                  <Form.Select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                  <option value="purchase">매매</option>
                  <option value="jeonse">전세</option>
                  <option value="wolse">월세</option>
                  </Form.Select>
              </Col>
              </Form.Group>
          )}

          {renderPriceFields()}

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
                <Col>적용 상한 요율:</Col>
                <Col className="text-end"><strong>{result.appliedRate}</strong></Col>
              </Row>
              <hr />
              <Row className="align-items-center">
                <Col><strong>최대 중개보수 (VAT 별도):</strong></Col>
                <Col className="text-end"><strong style={{ fontSize: '1.5rem' }}>{result.commission} 원</strong></Col>
              </Row>
            </Alert>
          </div>
        )}
      </Card>
      <CommissionRateInfo />
      
      {/* 중개보수 절약 방법 */}
      <Card className="mt-4">
        <Card.Header as="h5">💰 중개보수 절약 방법</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6><strong>1. 협상 전략</strong></h6>
              <ul>
                <li><strong>복수 공인중개사 견적 비교:</strong> 2-3곳에서 견적을 받아 비교하세요</li>
                <li><strong>상한요율 인지:</strong> 법정 상한 요율을 미리 확인하고 협상하세요</li>
                <li><strong>서비스 범위 명확화:</strong> 제공받을 서비스를 명확히 하고 필요 없는 서비스는 제외하세요</li>
                <li><strong>계약 전 협상:</strong> 중개계약 체결 전에 중개보수를 먼저 협의하세요</li>
              </ul>
              
              <h6 className="mt-4"><strong>2. 직거래 활용</strong></h6>
              <ul>
                <li><strong>온라인 플랫폼:</strong> 직방, 네이버부동산 등 직거래 매물 활용</li>
                <li><strong>지인 소개:</strong> 지인이나 동네 카페 게시판 활용</li>
                <li><strong>건물 관리사무소:</strong> 아파트 관리사무소에 매물 문의</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6><strong>3. 법적 보호 받기</strong></h6>
              <ul>
                <li><strong>중개계약서 작성:</strong> 중개보수율을 명시한 계약서 작성 필수</li>
                <li><strong>거래 실패 시:</strong> 거래 무산 시 중개보수 지불 의무 없음</li>
                <li><strong>과도한 요구 신고:</strong> 상한요율 초과 요구 시 시군구청에 신고</li>
                <li><strong>영수증 보관:</strong> 중개보수 지급 영수증 반드시 보관</li>
              </ul>
              
              <h6 className="mt-4"><strong>4. 절약 꿀팁</strong></h6>
              <ul>
                <li><strong>성수기 피하기:</strong> 이사 성수기(3-4월) 피해서 거래</li>
                <li><strong>여러 매물 동시 진행:</strong> 한 중개사에서 여러 매물 볼 때 할인 요청</li>
                <li><strong>단순 거래:</strong> 복잡한 조건 없는 단순 거래로 진행</li>
                <li><strong>현금 거래:</strong> 대출 관련 업무 없이 현금 거래 시 할인 가능</li>
              </ul>
            </Col>
          </Row>
          
          <Alert variant="warning" className="mt-4">
            <h6><strong>⚠️ 주의사항</strong></h6>
            <ul className="mb-0">
              <li>중개보수는 거래 성사 후에만 지급 의무가 있습니다</li>
              <li>계약서에 명시되지 않은 추가 비용 요구는 거부할 수 있습니다</li>
              <li>과도하게 낮은 중개보수는 서비스 품질 저하로 이어질 수 있습니다</li>
              <li>무면허 중개업자 이용 시 법적 보호를 받기 어렵습니다</li>
            </ul>
          </Alert>
        </Card.Body>
      </Card>
    </>
  );
}

export default RealEstateCommissionCalculator;