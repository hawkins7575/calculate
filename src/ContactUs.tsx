import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface PageProps {
  onBack: () => void;
}

const ContactUs: React.FC<PageProps> = ({ onBack }) => {
  return (
    <Card className="p-4">
      <Card.Header as="h2">문의하기</Card.Header>
      <Card.Body>
        <Card.Text>
          사이트 이용 중 궁금한 점이나 개선 사항이 있다면 언제든지 문의해 주세요.
          최대한 빠르게 답변드리겠습니다.
        </Card.Text>
        <Card.Text>
          <strong>이메일:</strong> example@example.com
        </Card.Text>
        <Card.Text>
          <strong>운영 시간:</strong> 평일 09:00 - 18:00
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

export default ContactUs;
