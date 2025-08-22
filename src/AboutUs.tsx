import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface PageProps {
  onBack: () => void;
}

const AboutUs: React.FC<PageProps> = ({ onBack }) => {
  return (
    <Card className="p-4">
      <Card.Header as="h2">사이트 소개</Card.Header>
      <Card.Body>
        <Card.Text>
          이 사이트는 일상생활에 필요한 다양한 계산기를 제공하여 사용자 여러분의 편의를 돕기 위해 제작되었습니다.
          복리 계산, 부동산 중개보수 계산, BMI 계산, 실급여 계산 등 유용한 도구들을 한곳에 모았습니다.
        </Card.Text>
        <Card.Text>
          저희는 항상 사용자 여러분의 피드백에 귀 기울이며, 더 나은 서비스를 제공하기 위해 노력하고 있습니다.
          궁금한 점이나 개선 사항이 있다면 언제든지 문의해 주세요.
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

export default AboutUs;
