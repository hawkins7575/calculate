import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 복리 계산기 랜딩 페이지
export const CompoundInterestLanding = () => {
  useEffect(() => {
    document.title = '복리 계산기 온라인 - 투자 수익률 시뮬레이션 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-gradient mb-4">복리 계산기 - 투자의 마법을 체험하세요</h1>
              <p className="lead text-muted">
                아인슈타인이 "인류 최대의 발명"이라고 칭한 복리의 힘을 직접 확인해보세요.<br/>
                원금과 수익률만 입력하면 미래 자산을 쉽게 계산할 수 있습니다.
              </p>
              <Link to="/compound-interest" className="btn btn-primary btn-lg px-5 py-3">
                📊 지금 바로 계산하기
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>🎯 정확한 계산</h4>
                <p>실제 금융 공식을 적용한 정확한 복리 계산 결과를 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>📈 시각적 그래프</h4>
                <p>원금과 이자의 증가 추이를 한눈에 볼 수 있는 차트를 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>💡 투자 가이드</h4>
                <p>나이대별 자산 배분과 실전 투자 전략을 함께 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Header as="h3">💰 복리 투자의 핵심 원칙</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>⏰ 시간의 마법</h5>
                    <p>투자 기간이 길수록 복리 효과는 기하급수적으로 증가합니다. 10년과 20년의 차이는 단순히 2배가 아닙니다.</p>
                    
                    <h5>🔄 꾸준함의 힘</h5>
                    <p>매월 정기적인 적립 투자로 시장의 변동성을 줄이고 안정적인 수익을 추구하세요.</p>
                  </Col>
                  <Col md={6}>
                    <h5>📊 수익률의 중요성</h5>
                    <p>연 5%와 7%의 차이는 장기적으로 엄청난 차이를 만듭니다. 수수료가 낮은 상품을 선택하세요.</p>
                    
                    <h5>🎯 목표 설정</h5>
                    <p>명확한 투자 목표와 기간을 설정하고, 복리 계산기로 필요한 월 적립액을 역산해보세요.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// 부동산 중개보수 계산기 랜딩 페이지
export const RealEstateLanding = () => {
  useEffect(() => {
    document.title = '부동산 중개보수 계산기 - 법정 요율 기준 수수료 계산 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-gradient mb-4">부동산 중개보수 계산기</h1>
              <p className="lead text-muted">
                법정 상한요율 기준으로 정확한 중개보수를 계산하세요.<br/>
                과도한 수수료 요구로부터 여러분의 권익을 보호해드립니다.
              </p>
              <Link to="/real-estate" className="btn btn-primary btn-lg px-5 py-3">
                🏠 지금 바로 계산하기
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>⚖️ 법정 요율</h4>
                <p>공인중개사법에 따른 정확한 상한요율을 적용합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>💰 비용 절약</h4>
                <p>중개보수 절약 방법과 협상 전략을 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>📋 상세 가이드</h4>
                <p>매매, 임대차별 상세한 수수료 정보를 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Header as="h3">🏡 중개보수 절약 핵심 팁</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>📜 법정 요율 숙지</h5>
                    <p>매매: 거래금액에 따라 0.5%~0.9%, 임대차: 0.5%~0.8%의 상한요율이 법으로 정해져 있습니다.</p>
                    
                    <h5>🤝 협상의 여지</h5>
                    <p>상한요율은 최대치이므로 협상을 통해 더 낮은 수수료로 계약할 수 있습니다.</p>
                  </Col>
                  <Col md={6}>
                    <h5>📊 여러 업체 비교</h5>
                    <p>같은 지역 내 여러 공인중개사무소의 수수료를 비교해보세요.</p>
                    
                    <h5>⚠️ 과도한 요구 거부</h5>
                    <p>법정 상한요율을 초과하는 요구는 불법입니다. 신고할 수 있습니다.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// BMI 계산기 랜딩 페이지
export const BmiLanding = () => {
  useEffect(() => {
    document.title = 'BMI 계산기 - 체질량지수 측정 및 건강상태 진단 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-gradient mb-4">BMI 계산기 - 건강한 체중 관리의 시작</h1>
              <p className="lead text-muted">
                키와 몸무게만 입력하면 체질량지수(BMI)를 즉시 계산해드립니다.<br/>
                아시아인 기준으로 정확한 건강상태 진단을 받아보세요.
              </p>
              <Link to="/bmi" className="btn btn-primary btn-lg px-5 py-3">
                💪 지금 바로 계산하기
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>🎯 정확한 진단</h4>
                <p>WHO 기준과 아시아인 특화 기준을 모두 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>📊 상세 결과</h4>
                <p>BMI 수치와 함께 건강 위험도를 자세히 분석해드립니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>💡 관리 가이드</h4>
                <p>체중 관리와 건강 개선을 위한 실용적인 조언을 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Header as="h3">🌟 건강한 체중 관리 핵심</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>🍎 균형 잡힌 식단</h5>
                    <p>단백질, 탄수화물, 지방의 균형을 맞춘 식단으로 건강한 체중을 유지하세요.</p>
                    
                    <h5>🏃‍♀️ 규칙적인 운동</h5>
                    <p>주 3-4회, 30분 이상의 유산소 운동과 근력 운동을 병행하세요.</p>
                  </Col>
                  <Col md={6}>
                    <h5>💧 충분한 수분</h5>
                    <p>하루 8잔 이상의 물을 마시고, 신진대사를 활발하게 유지하세요.</p>
                    
                    <h5>😴 양질의 수면</h5>
                    <p>7-8시간의 충분한 수면으로 호르몬 균형을 맞추세요.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// 실급여 계산기 랜딩 페이지
export const SalaryLanding = () => {
  useEffect(() => {
    document.title = '실급여 계산기 - 4대보험 공제 후 실수령액 계산 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <h1 className="text-gradient mb-4">실급여 계산기 - 정확한 실수령액 확인</h1>
              <p className="lead text-muted">
                4대보험과 각종 세금 공제 후 실제로 받는 급여를 정확히 계산해보세요.<br/>
                연말정산 절세 방법과 급여 최적화 전략도 함께 제공합니다.
              </p>
              <Link to="/salary" className="btn btn-primary btn-lg px-5 py-3">
                💰 지금 바로 계산하기
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>📋 정확한 계산</h4>
                <p>최신 세율과 4대보험료율을 적용한 정확한 계산 결과를 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>💡 절세 가이드</h4>
                <p>연말정산과 각종 공제 항목을 활용한 절세 방법을 안내합니다.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <h4>📊 상세 분석</h4>
                <p>각 공제 항목별 상세 내역과 설명을 제공합니다.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Header as="h3">💼 급여 최적화 핵심 전략</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>🏠 주택 관련 공제</h5>
                    <p>주택청약종합저축, 주택담보대출 이자공제 등을 적극 활용하세요.</p>
                    
                    <h5>📚 교육비 공제</h5>
                    <p>본인과 가족의 교육비, 직무 관련 교육비를 빠짐없이 공제받으세요.</p>
                  </Col>
                  <Col md={6}>
                    <h5>💳 신용카드 공제</h5>
                    <p>체크카드와 현금영수증 사용으로 소득공제 한도를 늘리세요.</p>
                    
                    <h5>📈 연금저축 공제</h5>
                    <p>연금저축과 IRP를 활용해 세액공제와 노후준비를 동시에 하세요.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};