import React from 'react';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

interface PageProps {
  onBack: () => void;
}

const TermsOfService: React.FC<PageProps> = ({ onBack }) => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Header 
              className="text-center py-4" 
              style={{ 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
                color: 'white',
                borderRadius: '15px 15px 0 0',
                border: 'none'
              }}
            >
              <h1 className="mb-2" style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                📜 이용약관
              </h1>
              <p className="mb-0 opacity-90">서비스 이용 시 지켜야 할 약속들</p>
            </Card.Header>
            <Card.Body className="p-5" style={{ lineHeight: '1.7' }}>
              <div className="text-center mb-4">
                <Badge bg="warning" className="px-3 py-2" style={{ fontSize: '0.9rem', color: 'black' }}>
                  <i className="bi bi-calendar"></i> 최종 업데이트: 2024년 8월 28일
                </Badge>
              </div>

              <div className="alert alert-info border-0 mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                <h5 className="alert-heading">
                  <i className="bi bi-info-circle text-info"></i> 환영합니다!
                </h5>
                <p className="mb-0" style={{ fontSize: '1.1rem' }}>
                  가계산(gaesan.shop)에 오신 것을 환영합니다. 
                  본 이용약관은 사용자와 사이트 운영자 간의 권리, 의무, 책임사항을 규정합니다. 
                  사이트를 이용함으로써 귀하는 본 이용약관에 동의하는 것으로 간주됩니다.
                </p>
              </div>

        <Card.Title className="mt-4">1. 서비스 개요</Card.Title>
        <Card.Text>
          본 사이트는 사용자에게 다음과 같은 무료 온라인 계산기 서비스를 제공합니다:
          <ul>
            <li>복리 계산기</li>
            <li>부동산 중개보수 계산기</li>
            <li>BMI(체질량지수) 계산기</li>
            <li>실급여 계산기</li>
            <li>은퇴자금 계산기</li>
            <li>대출 계산기</li>
            <li>상속세 계산기</li>
            <li>보육비 계산기</li>
            <li>적금 계산기</li>
            <li>관련 금융/건강 가이드 및 블로그 콘텐츠</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">2. 서비스 이용 및 계산 결과</Card.Title>
        <Card.Text>
          <strong>2.1 계산 결과의 성격:</strong><br/>
          본 사이트에서 제공하는 모든 계산 결과는 입력된 조건을 바탕으로 한 <strong>참고용 추정치</strong>이며, 
          어떠한 법적 효력이나 보장을 제공하지 않습니다.
        </Card.Text>
        <Card.Text>
          <strong>2.2 정확성 면책:</strong><br/>
          실제 금융 상품의 이자율, 세율, 수수료, 법규 등은 시시각각 변화할 수 있으며, 
          금융기관, 정부기관, 전문가와의 상담을 통해 정확한 정보를 확인하시기 바랍니다.
        </Card.Text>
        <Card.Text>
          <strong>2.3 의사결정 책임:</strong><br/>
          본 계산 결과를 바탕으로 한 모든 투자, 보험 가입, 대출, 기타 금융 의사결정에 대한 책임은 전적으로 사용자에게 있습니다.
        </Card.Text>

        <Card.Title className="mt-4">3. 사용자의 의무</Card.Title>
        <Card.Text>
          사용자는 다음 사항을 준수해야 합니다:
          <ul>
            <li>서비스를 합법적인 목적으로만 사용</li>
            <li>다른 사용자나 제3자의 권리 침해 금지</li>
            <li>사이트의 정상 운영을 방해하는 행위 금지</li>
            <li>허위 정보 입력 또는 시스템 조작 시도 금지</li>
            <li>사이트의 콘텐츠를 상업적 목적으로 무단 복제, 배포 금지</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">4. 개인정보 보호</Card.Title>
        <Card.Text>
          본 사이트는 사용자의 개인정보 보호를 위해 최선을 다합니다. 
          개인정보의 수집, 이용, 제공, 관리에 관한 사항은 별도의 
          <strong> 개인정보처리방침</strong>에 따라 처리됩니다. 
          자세한 내용은 개인정보처리방침 페이지를 참조해 주십시오.
        </Card.Text>

        <Card.Title className="mt-4">5. 지적재산권</Card.Title>
        <Card.Text>
          본 사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 소프트웨어, 로고 등)의 지적재산권은 
          사이트 운영자 또는 해당 권리자에게 귀속됩니다. 
          사용자는 사이트 운영자의 사전 서면 동의 없이 이를 복제, 배포, 전송, 표시, 공연, 방송, 
          기타 방법으로 사용할 수 없습니다.
        </Card.Text>

        <Card.Title className="mt-4">6. 광고 및 제3자 서비스</Card.Title>
        <Card.Text>
          본 사이트는 Google AdSense를 통한 광고를 게재할 수 있습니다. 
          광고 내용이나 광고주가 제공하는 상품/서비스에 대한 책임은 해당 광고주에게 있으며, 
          사이트 운영자는 이에 대해 책임을 지지 않습니다.
        </Card.Text>

        <Card.Title className="mt-4">7. 서비스 이용 제한 및 중단</Card.Title>
        <Card.Text>
          사이트 운영자는 다음의 경우 사용자의 서비스 이용을 제한하거나 중단할 수 있습니다:
          <ul>
            <li>본 이용약관을 위반한 경우</li>
            <li>서비스의 정상적인 운영을 방해한 경우</li>
            <li>기술적 문제나 정기 점검이 필요한 경우</li>
            <li>법적 요구사항이나 정부 정책에 따라 필요한 경우</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">8. 책임의 한계</Card.Title>
        <Card.Text>
          <strong>8.1 서비스 제공:</strong><br/>
          사이트는 "있는 그대로(as-is)" 제공되며, 서비스의 정확성, 완전성, 
          적시성, 안전성에 대해 명시적 또는 묵시적 보증을 하지 않습니다.
        </Card.Text>
        <Card.Text>
          <strong>8.2 손해 면책:</strong><br/>
          서비스 이용과 관련하여 발생하는 직접적, 간접적, 특별, 결과적 손해에 대해 
          사이트 운영자는 책임을 지지 않습니다. 여기에는 다음이 포함됩니다:
          <ul>
            <li>투자 손실 또는 기회 손실</li>
            <li>데이터 손실 또는 시스템 장애</li>
            <li>제3자로 인한 손해</li>
            <li>서비스 중단으로 인한 손해</li>
          </ul>
        </Card.Text>

        <Card.Title className="mt-4">9. 준거법 및 관할</Card.Title>
        <Card.Text>
          본 이용약관은 대한민국 법률에 따라 해석되며, 
          서비스 이용과 관련하여 발생하는 분쟁에 대해서는 
          사이트 운영자의 소재지를 관할하는 법원이 전속 관할권을 가집니다.
        </Card.Text>

        <Card.Title className="mt-4">10. 약관 변경</Card.Title>
        <Card.Text>
          사이트 운영자는 필요에 따라 본 이용약관을 변경할 수 있으며, 
          변경된 약관은 사이트에 게시된 날로부터 효력을 발생합니다. 
          중요한 변경사항의 경우 사전에 공지하겠습니다. 
          변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하시기 바랍니다.
        </Card.Text>

        <Card.Title className="mt-4">11. 연락처</Card.Title>
        <Card.Text>
          본 이용약관에 관한 문의사항이 있으시면 사이트 내 '문의하기' 페이지를 통해 연락해 주세요.
        </Card.Text>
              
              <div className="text-center mt-5 pt-4" style={{ borderTop: '2px solid #e9ecef' }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={onBack}
                  style={{ 
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
                    이용약관에 동의하시면 서비스를 자유롭게 이용하실 수 있습니다
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

export default TermsOfService;
