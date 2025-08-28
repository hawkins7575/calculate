import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

interface PageProps {
  onBack: () => void;
}

const ContactUs: React.FC<PageProps> = ({ onBack }) => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Header 
              className="text-center py-4" 
              style={{ 
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', 
                color: '#333',
                borderRadius: '15px 15px 0 0',
                border: 'none'
              }}
            >
              <h1 className="mb-2" style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                📞 문의하기
              </h1>
              <p className="mb-0" style={{ color: '#555' }}>언제든지 편하게 연락주세요</p>
            </Card.Header>
            <Card.Body className="p-5" style={{ lineHeight: '1.7' }}>
        <Card.Title>💬 언제든지 연락주세요</Card.Title>
        <Card.Text>
          가계산을 이용해 주셔서 감사합니다! 
          사이트 이용 중 궁금한 점이나 개선 사항, 새로운 기능 제안이 있으시면 
          언제든지 부담 없이 문의해 주세요. 
          사용자 여러분의 소중한 의견이 더 나은 서비스를 만드는 원동력입니다.
        </Card.Text>

        <Card.Title className="mt-4">📧 연락 방법</Card.Title>
        <div className="p-3 mb-3" style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
          <Card.Text className="mb-2">
            <strong>📮 이메일:</strong> gaesan.shop@gmail.com
          </Card.Text>
          <Card.Text className="mb-2">
            <strong>⏰ 답변 시간:</strong> 24시간 이내 (평일 기준)
          </Card.Text>
          <Card.Text className="mb-0">
            <strong>🕒 운영 시간:</strong> 평일 09:00 - 18:00 (한국시간)
          </Card.Text>
        </div>

        <Card.Title className="mt-4">❓ 자주 묻는 질문</Card.Title>
        <Card.Text>
          <strong>Q. 계산 결과가 정확한가요?</strong><br/>
          A. 최신 기준과 공식을 반영하여 정확한 계산을 제공하지만, 
          실제 금융 상품이나 법규는 변동될 수 있으므로 
          중요한 결정 시에는 전문가와 상담하시기 바랍니다.
        </Card.Text>
        <Card.Text>
          <strong>Q. 개인정보가 저장되나요?</strong><br/>
          A. 아니요. 모든 계산은 브라우저에서만 처리되며, 
          입력하신 데이터는 서버에 전송되거나 저장되지 않습니다.
        </Card.Text>
        <Card.Text>
          <strong>Q. 새로운 계산기를 추가해 주실 수 있나요?</strong><br/>
          A. 네! 많은 분들이 필요로 하는 계산기라면 적극 검토하여 추가하겠습니다. 
          구체적인 요청사항을 이메일로 보내주세요.
        </Card.Text>

        <Card.Title className="mt-4">📝 문의 시 포함해 주세요</Card.Title>
        <Card.Text>
          더 정확하고 빠른 답변을 위해 다음 정보를 포함해 주시면 도움이 됩니다:
          <ul>
            <li><strong>문의 유형:</strong> 버그 신고, 기능 제안, 사용법 문의 등</li>
            <li><strong>사용 환경:</strong> 브라우저 종류, 모바일/PC 여부</li>
            <li><strong>구체적인 상황:</strong> 어떤 계산기에서 어떤 문제가 발생했는지</li>
            <li><strong>스크린샷:</strong> 문제가 있는 화면 (선택사항)</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">🎯 문의 유형별 안내</Card.Title>
        <div className="row">
          <div className="col-md-6">
            <Card.Text>
              <strong>🐛 버그 신고</strong><br/>
              - 계산 결과 오류<br/>
              - 화면 표시 문제<br/>
              - 기능 동작 오류
            </Card.Text>
          </div>
          <div className="col-md-6">
            <Card.Text>
              <strong>💡 기능 제안</strong><br/>
              - 새로운 계산기 요청<br/>
              - 기존 기능 개선 아이디어<br/>
              - 사용자 경험 개선 제안
            </Card.Text>
          </div>
        </div>

              <div className="alert border-0 mt-4" style={{ backgroundColor: '#e8f5e8' }}>
                <h5 className="alert-heading text-success">
                  <i className="bi bi-heart-fill"></i> 함께 만들어가는 가계산
                </h5>
                <p className="mb-0">
                  여러분의 피드백은 가계산을 발전시키는 가장 소중한 자산입니다. 
                  작은 의견이라도 주저하지 마시고 언제든지 공유해 주세요!
                </p>
              </div>
              
              <div className="text-center mt-5 pt-4" style={{ borderTop: '2px solid #e9ecef' }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={onBack}
                  style={{ 
                    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#333'
                  }}
                >
                  🧮 계산기로 돌아가기
                </Button>
                <div className="mt-3">
                  <small className="text-muted">
                    소중한 의견 감사합니다! 빠른 시일 내에 답변드리겠습니다
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

export default ContactUs;
