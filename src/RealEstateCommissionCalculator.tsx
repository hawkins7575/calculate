import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import SocialShare from './components/SocialShare';

interface CommissionResult {
  commission: number;
  appliedRate: number;
  effectivePrice: number;
}

const RealEstateCommissionCalculator = () => {
  const [propertyType, setPropertyType] = useState<string>('housing');
  const [transactionType, setTransactionType] = useState<string>('purchase');
  const [price, setPrice] = useState<string>('');
  const [monthlyRent, setMonthlyRent] = useState<string>('');
  const [premium, setPremium] = useState<string>('');
  const [result, setResult] = useState<CommissionResult | null>(null);

  const getRateAndLimit = (effectivePrice: number, isLease: boolean) => {
    if (propertyType === 'housing') {
      if (!isLease) {
        // 매매/교환
        if (effectivePrice < 50000000) return { rate: 0.006, limit: 250000 };
        if (effectivePrice < 200000000) return { rate: 0.005, limit: 800000 };
        if (effectivePrice < 900000000) return { rate: 0.004, limit: Infinity };
        if (effectivePrice < 1200000000) return { rate: 0.005, limit: Infinity };
        if (effectivePrice < 1500000000) return { rate: 0.006, limit: Infinity };
        return { rate: 0.007, limit: Infinity };
      } else {
        // 임대차
        if (effectivePrice < 50000000) return { rate: 0.005, limit: 200000 };
        if (effectivePrice < 100000000) return { rate: 0.004, limit: 300000 };
        if (effectivePrice < 600000000) return { rate: 0.003, limit: Infinity };
        if (effectivePrice < 1200000000) return { rate: 0.004, limit: Infinity };
        if (effectivePrice < 1500000000) return { rate: 0.005, limit: Infinity };
        return { rate: 0.006, limit: Infinity };
      }
    } else if (propertyType === 'officetel') {
      if (!isLease) {
        // 매매
        if (effectivePrice < 50000000) return { rate: 0.006, limit: 250000 };
        if (effectivePrice < 200000000) return { rate: 0.005, limit: 800000 };
        if (effectivePrice < 900000000) return { rate: 0.004, limit: Infinity };
        return { rate: 0.005, limit: Infinity };
      } else {
        // 임대차
        if (effectivePrice < 50000000) return { rate: 0.005, limit: 200000 };
        if (effectivePrice < 100000000) return { rate: 0.004, limit: 300000 };
        if (effectivePrice < 600000000) return { rate: 0.003, limit: Infinity };
        return { rate: 0.004, limit: Infinity };
      }
    } else {
      // 기타 상가, 토지 등
      return { rate: 0.009, limit: Infinity };
    }
  };

  const calculateCommission = () => {
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
      alert('금액을 정확히 입력해주세요.');
      setResult(null);
      return;
    }

    const { rate, limit } = getRateAndLimit(effectivePrice, isLease);
    const calculatedCommission = effectivePrice * rate;
    const finalCommission = Math.min(calculatedCommission, limit);

    setResult({
      commission: finalCommission,
      appliedRate: rate * 100,
      effectivePrice
    });
  };

  const resetForm = () => {
    setPrice('');
    setMonthlyRent('');
    setPremium('');
    setResult(null);
  };

  const renderPriceInputs = () => {
    if (propertyType === 'presale') {
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>기납입액 (원)</Form.Label>
            <Form.Control
              type="number"
              placeholder="계약금 + 중도금"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Text className="text-muted">
              계약금과 중도금의 합계를 입력하세요
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>프리미엄 (원)</Form.Label>
            <Form.Control
              type="number"
              placeholder="프리미엄 금액"
              value={premium}
              onChange={(e) => setPremium(e.target.value)}
            />
            <Form.Text className="text-muted">
              프리미엄이 있는 경우 입력하세요
            </Form.Text>
          </Form.Group>
        </>
      );
    }

    if (transactionType === 'wolse') {
      return (
        <>
          <Form.Group className="mb-3">
            <Form.Label>보증금 (원)</Form.Label>
            <Form.Control
              type="number"
              placeholder="보증금"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Text className="text-muted">
              월세 보증금을 입력하세요
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>월세 (원)</Form.Label>
            <Form.Control
              type="number"
              placeholder="월 임대료"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
            />
            <Form.Text className="text-muted">
              월 임대료를 입력하세요
            </Form.Text>
          </Form.Group>
        </>
      );
    }

    return (
      <Form.Group className="mb-3">
        <Form.Label>
          {transactionType === 'purchase' ? '매매가 (원)' : '전세가 (원)'}
        </Form.Label>
        <Form.Control
          type="number"
          placeholder={transactionType === 'purchase' ? '매매 가격' : '전세 가격'}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Form.Text className="text-muted">
          {transactionType === 'purchase' ? '매매 거래가격을 입력하세요' : '전세 보증금을 입력하세요'}
        </Form.Text>
      </Form.Group>
    );
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">부동산 중개보수 계산기</h2>
        <p className="text-muted">
          법정 상한요율 기준 중개보수를 계산하고 절약 방법을 알아보세요
        </p>
      </div>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">🏠 거래 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>건물 종류</Form.Label>
                  <Form.Select 
                    value={propertyType} 
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="housing">주택 (아파트, 빌라 등)</option>
                    <option value="officetel">오피스텔</option>
                    <option value="presale">분양권</option>
                    <option value="other">그 외 (상가, 토지 등)</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    거래할 부동산의 종류를 선택하세요
                  </Form.Text>
                </Form.Group>

                {propertyType !== 'presale' && (
                  <Form.Group className="mb-3">
                    <Form.Label>거래 유형</Form.Label>
                    <Form.Select 
                      value={transactionType} 
                      onChange={(e) => setTransactionType(e.target.value)}
                    >
                      <option value="purchase">매매</option>
                      <option value="jeonse">전세</option>
                      <option value="wolse">월세</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                      거래 방식을 선택하세요
                    </Form.Text>
                  </Form.Group>
                )}

                {renderPriceInputs()}

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateCommission}>
                    중개보수 계산하기
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
                  <h5 className="mb-0">💰 계산 결과</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-center mb-4">
                    <h4 className="text-primary mb-0">
                      {result.commission.toLocaleString()}원
                    </h4>
                    <small className="text-muted">예상 중개보수</small>
                  </div>

                  <Row className="text-center">
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">거래금액</h6>
                        <strong>{result.effectivePrice.toLocaleString()}원</strong>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">적용요율</h6>
                        <strong>{result.appliedRate.toFixed(2)}%</strong>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mb-3">
                        <h6 className="text-muted mb-1">거래금액 대비</h6>
                        <strong>{((result.commission / result.effectivePrice) * 100).toFixed(2)}%</strong>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <p className="mb-0 small"><strong>💡 중개보수 절약 팁</strong></p>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <strong>• 협상 가능:</strong> 법정 상한요율이므로 협상으로 더 낮출 수 있습니다
                </li>
                <li className="mb-2">
                  <strong>• 복수 업체 비교:</strong> 여러 중개업소의 수수료를 비교해보세요
                </li>
                <li className="mb-2">
                  <strong>• 서비스 확인:</strong> 단순히 저렴한 것보다 서비스 품질도 고려하세요
                </li>
                <li className="mb-0">
                  <strong>• 계약서 확인:</strong> 중개보수는 계약 성사 후에만 지급 의무가 발생합니다
                </li>
              </ul>
              
              <div className="mt-4">
                <h6 className="mb-3"><strong>🏠 부동산 거래 시 추가 비용</strong></h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-primary mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>🛒 매수 시 비용</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 취득세: 1~4% (지역/면적별 차등)</li>
                          <li>• 인지세: 거래금액의 0.15%</li>
                          <li>• 등록면허세: 0.08~0.2%</li>
                          <li>• 법무사 비용: 30~80만원</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 bg-light mb-3">
                      <div className="card-body p-3">
                        <p className="text-danger mb-1" style={{ fontSize: '0.75rem', fontWeight: '600' }}>💰 매도 시 비용</p>
                        <ul className="list-unstyled small mb-0">
                          <li>• 양도소득세: 6~45% (보유기간별)</li>
                          <li>• 인지세: 거래금액의 0.15%</li>
                          <li>• 등록면허세: 소유권이전 시</li>
                          <li>• 법무사 비용: 30~50만원</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-info">
                  <h6 className="mb-2"><strong>📋 중개보수 지급 시기</strong></h6>
                  <div className="row small">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• <strong>매매:</strong> 잔금 지급 시</li>
                        <li>• <strong>전세:</strong> 계약금 지급 시</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• <strong>월세:</strong> 입주 시</li>
                        <li>• <strong>분할납부:</strong> 협의에 따라 가능</li>
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
            title="부동산 중개보수 계산기 - 법정 상한요율 기준 중개수수료 계산"
            description="매매, 전세, 월세 중개보수를 정확하게 계산하고 절약 방법을 알아보세요"
            hashtags={['부동산중개보수', '중개수수료', '부동산거래', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default RealEstateCommissionCalculator;