import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Header 
              className="text-center py-4" 
              style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: 'white',
                borderRadius: '15px 15px 0 0',
                border: 'none'
              }}
            >
              <h1 className="mb-2" style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                🔒 개인정보처리방침
              </h1>
              <p className="mb-0 opacity-90">사용자의 개인정보를 안전하게 보호합니다</p>
            </Card.Header>
            <Card.Body className="p-5" style={{ lineHeight: '1.7' }}>
              <div className="text-center mb-4">
                <Badge bg="info" className="px-3 py-2" style={{ fontSize: '0.9rem' }}>
                  <i className="bi bi-calendar"></i> 최종 업데이트: 2024년 8월 28일
                </Badge>
              </div>

              <div className="mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px', backgroundColor: '#e3f2fd' }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>📋</span>
                  </div>
                  <h2 style={{ color: '#1976d2', fontWeight: '600', margin: 0 }}>
                    1. 개인정보의 처리 목적 및 수집
                  </h2>
                </div>
                
                <div className="ps-4 border-start border-primary border-3">
                  <p className="mb-3" style={{ fontSize: '1.1rem', color: '#555' }}>
                    가계산(gaesan.shop)은 사용자의 개인정보 보호를 매우 중요하게 생각합니다. 
                    본 웹사이트는 사용자가 계산기를 이용할 때 입력한 수치 데이터를 서버에 저장하지 않으며, 
                    모든 계산은 사용자의 브라우저(클라이언트 사이드)에서만 처리됩니다.
                  </p>
                  
                  <div className="alert alert-success border-0" style={{ backgroundColor: '#e8f5e8' }}>
                    <h5 className="alert-heading mb-3">
                      <i className="bi bi-shield-check text-success"></i> 수집하지 않는 정보
                    </h5>
                    <ul className="mb-0">
                      <li className="mb-1">개인 식별 정보 (이름, 주소, 전화번호, 이메일 등)</li>
                      <li className="mb-1">계산기에 입력된 수치 데이터</li>
                      <li className="mb-1">금융 정보 또는 개인 자산 정보</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px', backgroundColor: '#fff3e0' }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>🍪</span>
                  </div>
                  <h2 style={{ color: '#f57c00', fontWeight: '600', margin: 0 }}>
                    2. 쿠키 및 유사 기술
                  </h2>
                </div>
                
                <div className="ps-4 border-start border-warning border-3">
                  <p className="mb-4" style={{ fontSize: '1.1rem', color: '#555' }}>
                    본 사이트는 서비스 개선과 사용자 경험 향상을 위해 다음과 같은 쿠키를 사용할 수 있습니다:
                  </p>
                  
                  <Row className="g-3">
                    <Col md={4}>
                      <div className="p-3 border rounded" style={{ backgroundColor: '#e8f5e8' }}>
                        <h6 className="text-success fw-bold">필수 쿠키</h6>
                        <small>웹사이트의 기본 기능 제공을 위한 쿠키</small>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="p-3 border rounded" style={{ backgroundColor: '#e3f2fd' }}>
                        <h6 className="text-primary fw-bold">분석 쿠키</h6>
                        <small>웹사이트 사용 통계 분석 (Google Analytics)</small>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="p-3 border rounded" style={{ backgroundColor: '#fce4ec' }}>
                        <h6 className="text-danger fw-bold">광고 쿠키</h6>
                        <small>관련성 있는 광고 제공 (Google AdSense)</small>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

        <Card.Title className="mt-4">3. 제3자 서비스 (Google AdSense 및 Analytics)</Card.Title>
        <Card.Text>
          본 웹사이트는 Google AdSense 광고 서비스와 Google Analytics 분석 서비스를 사용합니다:
        </Card.Text>
        <Card.Text>
          <strong>Google AdSense:</strong> 사용자에게 관련성 있는 광고를 제공하기 위해 쿠키와 웹 비콘을 사용합니다. 
          Google이 수집하는 정보와 사용 방법에 대해서는 
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google 개인정보처리방침</a>을 참조하세요.
        </Card.Text>
        <Card.Text>
          <strong>Google Analytics:</strong> 웹사이트 트래픽과 사용 패턴을 분석하기 위해 사용됩니다. 
          IP 주소는 익명화되어 처리되며, 개인 식별 정보는 수집되지 않습니다.
        </Card.Text>

        <Card.Title className="mt-4">4. 사용자 권리 및 선택권</Card.Title>
        <Card.Text>
          사용자는 다음과 같은 권리를 가집니다:
        </Card.Text>
        <Card.Text>
          <ul>
            <li><strong>쿠키 거부:</strong> 브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다</li>
            <li><strong>광고 개인화 거부:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서 개인화 광고를 비활성화할 수 있습니다</li>
            <li><strong>Analytics 추적 거부:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics 옵트아웃 브라우저 애드온</a>을 설치할 수 있습니다</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">5. 데이터 보안</Card.Title>
        <Card.Text>
          본 사이트는 HTTPS 암호화 프로토콜을 사용하여 사용자와 서버 간의 통신을 보호합니다. 
          개인정보를 서버에 저장하지 않으므로 데이터 유출 위험이 최소화됩니다.
        </Card.Text>

        <Card.Title className="mt-4">6. 아동 개인정보 보호</Card.Title>
        <Card.Text>
          본 서비스는 만 13세 미만 아동을 대상으로 하지 않으며, 
          의도적으로 만 13세 미만 아동의 개인정보를 수집하지 않습니다. 
          만약 만 13세 미만 아동의 개인정보가 수집되었음을 인지하게 될 경우, 
          즉시 해당 정보를 삭제하겠습니다.
        </Card.Text>

        <Card.Title className="mt-4">7. 개인정보처리방침 변경</Card.Title>
        <Card.Text>
          본 개인정보처리방침은 법령 변경이나 서비스 개선을 위해 수정될 수 있습니다. 
          중요한 변경사항이 있을 경우, 웹사이트를 통해 공지하겠습니다. 
          변경된 방침은 게시일로부터 효력을 발생합니다.
        </Card.Text>

        <Card.Title className="mt-4">8. 연락처</Card.Title>
        <Card.Text>
          개인정보처리방침에 관한 문의사항이 있으시면 '문의하기' 페이지를 통해 연락해 주세요. 
          사용자의 개인정보 보호를 위해 최선을 다하겠습니다.
        </Card.Text>
              
              <div className="text-center mt-5 pt-4" style={{ borderTop: '2px solid #e9ecef' }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={onBack}
                  style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  🧮 계산기로 돌아가기
                </Button>
                <div className="mt-3">
                  <small className="text-muted">
                    궁금한 점이 있으시면 언제든 문의해 주세요
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

export default PrivacyPolicy;
