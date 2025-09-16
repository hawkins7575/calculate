import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

interface PageProps {
  onBack: () => void;
}

const AboutUs: React.FC<PageProps> = ({ onBack }) => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Header 
              className="text-center py-4" 
              style={{ 
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
                color: 'white',
                borderRadius: '15px 15px 0 0',
                border: 'none'
              }}
            >
              <h1 className="mb-2" style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                🧮 가계산
              </h1>
              <p className="mb-0 opacity-90">가정의 계산을 간편하게</p>
            </Card.Header>
            <Card.Body className="p-5" style={{ lineHeight: '1.7' }}>
        <Card.Title>🧮 가계산이란?</Card.Title>
        <Card.Text>
          <strong>가계산(gaesan.shop)</strong>은 '가정의 계산을 간편하게'라는 의미로, 
          일상생활에서 자주 필요한 다양한 계산기를 무료로 제공하는 온라인 서비스입니다. 
          복잡한 금융 계산부터 건강 관리까지, 신뢰할 수 있는 계산 도구를 한곳에 모았습니다.
        </Card.Text>

        <Card.Title className="mt-4">🎯 서비스 목표</Card.Title>
        <Card.Text>
          우리의 목표는 누구나 쉽게 사용할 수 있는 정확하고 유용한 계산 도구를 제공하는 것입니다:
          <ul>
            <li><strong>간편함:</strong> 복잡한 가입 절차 없이 즉시 이용 가능</li>
            <li><strong>정확성:</strong> 최신 기준과 공식을 반영한 정확한 계산</li>
            <li><strong>실용성:</strong> 실제 생활에서 바로 활용할 수 있는 계산기</li>
            <li><strong>접근성:</strong> 모든 기기에서 언제든지 무료로 이용</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">📊 제공 서비스</Card.Title>
        <Card.Text>
          가계산에서는 다음과 같은 계산기 서비스를 제공합니다:
        </Card.Text>
        <Card.Text>
          <strong>💰 금융 계산기</strong>
          <ul>
            <li>복리계산기 - 투자 수익률 및 복리 효과 계산</li>
            <li>은퇴자금 계산기 - 은퇴 후 필요 자금 계산</li>
            <li>대출 계산기 - 대출 이자 및 상환 계획</li>
            <li>적금 계산기 - 적금 만기 및 이자 계산</li>
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>🏠 부동산 계산기</strong>
          <ul>
            <li>부동산 중개보수 계산기 - 거래 수수료 계산</li>
            <li>상속세 계산기 - 상속세 예상 금액 계산</li>
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>💼 생활 계산기</strong>
          <ul>
            <li>실급여 계산기 - 세후 실수령액 계산</li>
            <li>보육비 계산기 - 육아 관련 비용 계산</li>
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>🏃‍♀️ 건강 계산기</strong>
          <ul>
            <li>BMI 계산기 - 체질량지수 및 건강 상태 확인</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">📚 전문 가이드</Card.Title>
        <Card.Text>
          단순한 계산기를 넘어서, 각 계산기에 대한 상세한 활용 가이드와 
          전문적인 해설을 블로그를 통해 제공합니다. 
          계산 결과를 올바르게 이해하고 실생활에 적용할 수 있도록 도와드립니다.
        </Card.Text>

        <Card.Title className="mt-4">🔒 개인정보 보호</Card.Title>
        <Card.Text>
          가계산은 사용자의 개인정보 보호를 최우선으로 생각합니다. 
          모든 계산은 사용자의 브라우저에서만 처리되며, 
          입력된 데이터는 서버에 저장되지 않습니다. 
          안전하고 신뢰할 수 있는 서비스를 제공합니다.
        </Card.Text>

        <Card.Title className="mt-4">🚀 지속적인 개선</Card.Title>
        <Card.Text>
          가계산은 사용자의 피드백을 바탕으로 지속적으로 발전하고 있습니다:
          <ul>
            <li>새로운 계산기 추가 및 기능 개선</li>
            <li>최신 법규 및 기준 반영</li>
            <li>사용자 인터페이스 개선</li>
            <li>모바일 최적화 및 접근성 향상</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">💌 문의 및 건의사항</Card.Title>
        <Card.Text>
          더 나은 서비스 제공을 위해 사용자 여러분의 소중한 의견을 기다립니다. 
          궁금한 점이나 개선 사항, 새로운 계산기 요청 등이 있으시면 
          언제든지 '문의하기' 페이지를 통해 연락해 주세요. 
          여러분의 목소리가 가계산을 더욱 발전시키는 원동력입니다.
        </Card.Text>

              <div className="text-center mt-4 p-4" style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
                borderRadius: '15px',
                color: 'white'
              }}>
                <h4 className="mb-0" style={{ fontWeight: '600' }}>
                  📈 가계산과 함께 스마트한 가정 경제 관리를 시작하세요!
                </h4>
              </div>
              
              <div className="text-center mt-5 pt-4" style={{ borderTop: '2px solid #e9ecef' }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={onBack}
                  style={{ 
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  🧮 계산기 사용하기
                </Button>
                <div className="mt-3">
                  <small className="text-muted">
                    지금 바로 다양한 계산기를 무료로 이용해보세요
                  </small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
