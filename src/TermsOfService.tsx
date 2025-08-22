import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface PageProps {
  onBack: () => void;
}

const TermsOfService: React.FC<PageProps> = ({ onBack }) => {
  return (
    <Card className="p-4">
      <Card.Header as="h2">이용약관</Card.Header>
      <Card.Body>
        <Card.Text>
          이 웹사이트(이하 "사이트")는 사용자에게 다양한 계산기 서비스를 제공합니다.
          사이트를 이용함으로써 귀하는 본 이용약관에 동의하는 것으로 간주됩니다.
        </Card.Text>
        <Card.Text>
          <strong>1. 서비스 이용</strong><br/>
          본 사이트에서 제공하는 모든 계산 결과는 참고용이며, 어떠한 법적 효력도 가지지 않습니다.
          정확한 정보는 관련 전문가와 상담하시기 바랍니다.
        </Card.Text>
        <Card.Text>
          <strong>2. 개인정보 보호</strong><br/>
          본 사이트는 개인정보처리방침에 따라 사용자의 개인정보를 보호합니다.
          자세한 내용은 개인정보처리방침 페이지를 참조해 주십시오.
        </Card.Text>
        <Card.Text>
          <strong>3. 책임의 한계</strong><br/>
          사이트는 서비스 제공과 관련하여 발생할 수 있는 어떠한 손해에 대해서도 책임을 지지 않습니다.
        </Card.Text>
        <Card.Text>
          <strong>4. 약관 변경</strong><br/>
          사이트는 본 이용약관을 사전 통지 없이 변경할 수 있으며, 변경된 약관은 사이트에 게시된 날로부터 효력을 발생합니다.
        </Card.Text>
        
        <hr />
        <div className="d-grid">
          <Button variant="secondary" onClick={onBack}>
            계산기로 돌아가기
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TermsOfService;
