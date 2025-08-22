import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <Card>
      <Card.Header as="h2">개인정보처리방침</Card.Header>
      <Card.Body>
        <Card.Title>1. 개인정보의 처리 목적</Card.Title>
        <Card.Text>
          본 웹사이트는 사용자가 입력한 계산 조건 외 어떠한 개인정보도 수집하거나 저장하지 않습니다. 모든 계산은 사용자의 브라우저 내에서만 이루어집니다.
        </Card.Text>

        <Card.Title className="mt-4">2. 광고에 대하여</Card.Title>
        <Card.Text>
          본 웹사이트는 구글 애드센스 광고를 포함할 수 있습니다. 구글 애드센스는 쿠키를 사용하여 사용자의 관심사에 따른 광고를 제공할 수 있습니다.
          사용자는 구글의 광고 및 콘텐츠 네트워크 개인정보처리방침을 방문하여 쿠키 사용을 거부할 수 있습니다.
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

export default PrivacyPolicy;
