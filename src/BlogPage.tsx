import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

const BlogPage = ({ onBack }: { onBack: () => void }) => {
  const blogPosts = [
    {
      id: 1,
      title: "복리 투자의 기초: 시간이 만드는 마법",
      summary: "복리 효과를 이해하고 장기 투자의 중요성을 알아보세요. 작은 금액으로 시작해도 시간이 지나면 큰 차이를 만들 수 있습니다.",
      content: `
        복리는 투자의 가장 강력한 도구 중 하나입니다. 단리와 달리 복리는 원금뿐만 아니라 이미 발생한 이자에도 이자가 붙는 방식입니다.

        예를 들어, 100만원을 연 5% 복리로 투자했을 때:
        - 1년 후: 105만원
        - 2년 후: 110만 2,500원
        - 10년 후: 162만 8,895원
        - 20년 후: 265만 3,298원

        시간이 지날수록 그 효과는 기하급수적으로 증가합니다. 투자를 시작하는 나이가 중요한 이유가 바로 여기에 있습니다.
      `,
      date: "2024-01-15",
      category: "투자기초"
    },
    {
      id: 2,
      title: "부동산 중개보수 완벽 가이드",
      summary: "부동산 거래 시 지불해야 하는 중개보수의 계산법과 절약 방법을 상세히 알아보세요.",
      content: `
        부동산 중개보수는 거래금액에 따라 차등적으로 적용됩니다. 2023년 기준 중개보수율은 다음과 같습니다:

        **주택의 경우:**
        - 5천만원 이하: 0.6% 이내
        - 5천만원 초과 2억원 이하: 0.5% 이내
        - 2억원 초과: 0.4% 이내

        **상가·사무실의 경우:**
        - 거래금액에 관계없이 0.9% 이내

        중개보수는 거래 성사 시에만 지불하며, 계약이 무산될 경우 지불 의무가 없습니다.
      `,
      date: "2024-01-10",
      category: "부동산"
    },
    {
      id: 3,
      title: "BMI 지수의 올바른 이해와 건강관리",
      summary: "BMI 지수의 의미와 한계점, 그리고 건강한 체중 관리 방법에 대해 알아보세요.",
      content: `
        BMI(Body Mass Index)는 신장과 체중을 이용해 비만도를 평가하는 지표입니다. 

        **BMI 계산법:**
        BMI = 체중(kg) ÷ 신장(m)²

        **한국인 기준 BMI 분류:**
        - 18.5 미만: 저체중
        - 18.5~22.9: 정상
        - 23~24.9: 과체중
        - 25 이상: 비만

        하지만 BMI는 근육량과 체지방을 구분하지 못하는 한계가 있습니다. 따라서 BMI와 함께 체지방률, 허리둘레 등을 종합적으로 고려해야 합니다.
      `,
      date: "2024-01-05",
      category: "건강"
    },
    {
      id: 4,
      title: "2024년 급여 공제항목 완전정리",
      summary: "급여에서 차감되는 각종 공제항목들을 상세히 알아보고, 실수령액을 계산해보세요.",
      content: `
        급여에서 차감되는 주요 공제항목들을 정리하면 다음과 같습니다:

        **4대보험 (2024년 기준):**
        - 국민연금: 4.5% (상한액 월 265,500원)
        - 건강보험: 3.545%
        - 장기요양보험: 건강보험료의 12.95%
        - 고용보험: 0.8%

        **소득세 및 지방소득세:**
        - 소득세: 간이세액표에 따라 산정
        - 지방소득세: 소득세의 10%

        실제 급여명세서를 받으면 이 외에도 각종 추가 공제항목들이 있을 수 있으니, 정확한 실수령액은 계산기를 참고용으로만 활용하세요.
      `,
      date: "2024-01-01",
      category: "급여"
    }
  ];

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-gradient">계산기 활용 가이드</h1>
        <button 
          onClick={onBack}
          className="btn btn-outline-secondary"
        >
          ← 돌아가기
        </button>
      </div>
      
      <Row>
        {blogPosts.map(post => (
          <Col md={6} lg={4} key={post.id} className="mb-4">
            <Card className="h-100 shadow-soft">
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <Badge bg="primary">{post.category}</Badge>
                  <small className="text-muted">{post.date}</small>
                </div>
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{post.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {post.summary}
                </Card.Text>
                <div className="mt-auto">
                  <details>
                    <summary className="btn btn-outline-primary btn-sm">
                      자세히 읽기
                    </summary>
                    <div className="mt-3" style={{ whiteSpace: 'pre-line' }}>
                      {post.content}
                    </div>
                  </details>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-5">
        <Card.Header as="h3">계산기 사이트 이용 팁</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h5>📊 정확한 계산을 위해</h5>
              <ul>
                <li>최신 세율과 공제율을 반영했지만, 개인별 상황에 따라 차이가 있을 수 있습니다</li>
                <li>투자 수익률은 과거 데이터를 기반으로 한 예상치이며, 실제와 다를 수 있습니다</li>
                <li>부동산 중개보수는 지역별로 상이할 수 있으니 거래 전 확인하세요</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5>💡 활용 방법</h5>
              <ul>
                <li>여러 시나리오를 비교해보세요</li>
                <li>정기적으로 계산하여 목표를 점검하세요</li>
                <li>전문가 상담 전 기초 자료로 활용하세요</li>
                <li>가족, 친구와 함께 계획을 세워보세요</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPage;