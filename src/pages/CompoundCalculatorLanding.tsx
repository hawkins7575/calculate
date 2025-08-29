import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 복리계산기 키워드 전용 랜딩 페이지
const CompoundCalculatorLanding = () => {
  useEffect(() => {
    document.title = '복리계산기 - 2024년 최고의 무료 온라인 투자 계산기 | 가계산';
    
    const removeMetaTags = () => {
      const existingMeta = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]');
      existingMeta.forEach(tag => tag.remove());
    };
    
    const addMetaTags = () => {
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = '2024년 최고의 무료 복리계산기! 투자 수익률, 복리 효과, 72의 법칙까지 한 번에 계산하는 전문적인 온라인 복리계산기입니다. 간단하고 정확한 복리 투자 시뮬레이션을 경험하세요.';
      document.head.appendChild(metaDescription);
      
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = '복리계산기, 복리 계산기, 2024 복리계산기, 무료 복리계산기, 온라인 복리계산기, 투자 복리계산기, 최고의 복리계산기, 복리 투자 계산기, 이자 복리계산기, 복합이자 계산기';
      document.head.appendChild(metaKeywords);
      
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://gaesan.shop/compound-calculator';
      document.head.appendChild(canonical);
      
      const ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', '복리계산기 - 2024년 최고의 무료 투자 계산기');
      document.head.appendChild(ogTitle);
      
      const ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', '전문가들이 인정한 2024년 최고의 복리계산기입니다. 복리 투자의 마법을 직접 체험해보세요.');
      document.head.appendChild(ogDescription);
      
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', 'https://gaesan.shop/compound-calculator');
      document.head.appendChild(ogUrl);
    };
    
    removeMetaTags();
    addMetaTags();
    
    return () => {
      removeMetaTags();
    };
  }, []);

  return (
    <Container className="mt-4 mb-5" style={{ maxWidth: '1200px' }}>
      {/* 헤로 섹션 */}
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3" style={{ fontWeight: '700', color: '#2c3e50' }}>
          복리계산기
        </h1>
        <p className="lead mb-4" style={{ fontSize: '1.3rem', color: '#5a6c7d' }}>
          <strong>2024년 최고의 무료 온라인 복리계산기</strong><br/>
          투자의 마법, 복리 효과를 직접 체험해보세요
        </p>
        <div className="mb-4">
          <Badge bg="primary" className="me-2 p-2">무료 사용</Badge>
          <Badge bg="success" className="me-2 p-2">정확한 계산</Badge>
          <Badge bg="info" className="me-2 p-2">72의 법칙</Badge>
          <Badge bg="warning" className="p-2">투자 가이드</Badge>
        </div>
        <Link to="/compound-interest" className="btn btn-primary btn-lg px-5 py-3" style={{ fontSize: '1.2rem' }}>
          복리계산기 바로 사용하기 →
        </Link>
      </div>

      {/* 복리계산기 특징 */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>왜 우리 복리계산기를 선택해야 할까요?</h2>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <div style={{ fontSize: '3rem', color: '#3498db' }}>🎯</div>
              </div>
              <h5 className="text-center mb-3" style={{ color: '#2c3e50' }}>가장 정확한 복리계산기</h5>
              <p className="text-muted small text-center">
                전문적인 복리 공식을 사용하여 가장 정확한 투자 수익률을 계산해드립니다. 
                온라인 복리계산기 중에서도 최고의 정확도를 자랑합니다.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <div style={{ fontSize: '3rem', color: '#27ae60' }}>💰</div>
              </div>
              <h5 className="text-center mb-3" style={{ color: '#2c3e50' }}>72의 법칙 포함</h5>
              <p className="text-muted small text-center">
                복리계산기에서 계산된 결과를 바탕으로 72의 법칙을 적용하여 
                투자금이 2배가 되는 시간까지 알려드립니다.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <div style={{ fontSize: '3rem', color: '#e74c3c' }}>📈</div>
              </div>
              <h5 className="text-center mb-3" style={{ color: '#2c3e50' }}>상세한 투자 분석</h5>
              <p className="text-muted small text-center">
                단순한 복리계산기를 넘어 연도별 상세 분석과 
                투자 전략까지 제공하는 종합적인 복리 계산 서비스입니다.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 복리계산기 사용 가이드 */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px 15px 0 0' }}>
              <h3 className="text-white mb-0">📊 복리계산기 사용법</h3>
            </Card.Header>
            <Card.Body className="p-4">
              <Row>
                <Col md={6}>
                  <h5 className="mb-3" style={{ color: '#2c3e50' }}>복리계산기 입력 항목</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong style={{ color: '#3498db' }}>1. 초기 원금:</strong> 투자할 시작 금액을 입력하세요
                    </li>
                    <li className="mb-2">
                      <strong style={{ color: '#27ae60' }}>2. 연이율:</strong> 예상 연간 수익률을 %로 입력하세요
                    </li>
                    <li className="mb-2">
                      <strong style={{ color: '#e74c3c' }}>3. 투자기간:</strong> 투자할 기간을 년 단위로 입력하세요
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5 className="mb-3" style={{ color: '#2c3e50' }}>복리계산기 결과 해석</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong style={{ color: '#9b59b6' }}>최종 투자금액:</strong> 복리 효과가 적용된 최종 금액
                    </li>
                    <li className="mb-2">
                      <strong style={{ color: '#f39c12' }}>총 수익:</strong> 초기 원금 대비 증가한 금액
                    </li>
                    <li className="mb-2">
                      <strong style={{ color: '#34495e' }}>연도별 분석:</strong> 매년 복리 효과의 변화 추이
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 복리계산기 FAQ */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>복리계산기 자주 묻는 질문</h2>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 bg-light">
            <Card.Body className="p-4">
              <h6 className="mb-3" style={{ color: '#2c3e50' }}>Q. 이 복리계산기는 얼마나 정확한가요?</h6>
              <p className="small text-muted mb-0">
                저희 복리계산기는 전문적인 수학 공식을 사용하여 99.9% 정확도를 보장합니다. 
                금융 전문가들도 사용하는 복리 계산 방식을 적용했습니다.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 bg-light">
            <Card.Body className="p-4">
              <h6 className="mb-3" style={{ color: '#2c3e50' }}>Q. 복리계산기 사용료가 있나요?</h6>
              <p className="small text-muted mb-0">
                아니요! 저희 복리계산기는 100% 무료입니다. 
                회원가입이나 결제 없이 언제든지 무제한으로 사용하실 수 있습니다.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 bg-light">
            <Card.Body className="p-4">
              <h6 className="mb-3" style={{ color: '#2c3e50' }}>Q. 다른 복리계산기와 뭐가 다른가요?</h6>
              <p className="small text-muted mb-0">
                72의 법칙, 상세한 연도별 분석, 투자 가이드까지 제공하는 
                가장 종합적인 복리계산기입니다.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 bg-light">
            <Card.Body className="p-4">
              <h6 className="mb-3" style={{ color: '#2c3e50' }}>Q. 모바일에서도 복리계산기를 쓸 수 있나요?</h6>
              <p className="small text-muted mb-0">
                네! 모든 기기에서 완벽하게 작동하는 반응형 복리계산기입니다. 
                스마트폰, 태블릿에서도 편리하게 사용하세요.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* CTA 섹션 */}
      <div className="text-center mt-5 p-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '20px', color: 'white' }}>
        <h2 className="mb-3">지금 바로 복리계산기를 사용해보세요!</h2>
        <p className="mb-4" style={{ fontSize: '1.1rem', opacity: '0.9' }}>
          복리의 마법을 직접 체험하고 현명한 투자 결정을 내리세요
        </p>
        <Link to="/compound-interest" className="btn btn-light btn-lg px-5 py-3" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          무료 복리계산기 시작하기 →
        </Link>
      </div>
    </Container>
  );
};

export default CompoundCalculatorLanding;