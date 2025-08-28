import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

const BlogPage = ({ onBack }: { onBack: () => void }) => {
  const blogPosts = [
    {
      id: 1,
      title: "가계산 9가지 계산기 완전 활용법",
      summary: "복리부터 상속세까지, 인생의 모든 재정 계획을 한 번에! 가계산의 9가지 계산기로 똑똑한 금융 관리를 시작해보세요.",
      content: `
        가계산에서 제공하는 9가지 계산기 활용법을 알아보세요:

        **💰 투자 & 저축 계산기:**
        • 복리 계산기: 장기 투자 수익률 시뮬레이션
        • 적금 계산기: 목적별 저축 계획 수립
        • 대출 계산기: 이자 부담 최적화 전략

        **🏠 부동산 & 세금 계산기:**
        • 부동산 중개보수: 거래비용 미리 확인
        • 상속세 계산기: 절세 전략 수립

        **👥 생활 밀착 계산기:**
        • 실급여 계산기: 세후 수령액 정확히 파악
        • BMI 계산기: 건강한 체중 관리
        • 보육비 계산기: 육아비용 미리 준비
        • 퇴직금 계산기: 근로자 권익 보호

        각 계산기마다 상세한 가이드와 팁을 제공하니 활용해보세요!
      `,
      date: "2025-01-15",
      category: "서비스소개"
    },
    {
      id: 2,
      title: "2025년 투자 전략: 복리와 72의 법칙 활용법",
      summary: "72의 법칙으로 투자금이 2배가 되는 시점을 계산하고, 복리의 힘을 극대화하는 방법을 알아보세요.",
      content: `
        **72의 법칙이란?**
        투자금이 2배가 되는 기간 = 72 ÷ 연수익률

        **실전 예시:**
        • 연 6% 수익률 → 약 12년 후 2배
        • 연 8% 수익률 → 약 9년 후 2배
        • 연 10% 수익률 → 약 7.2년 후 2배

        **복리 투자 성공 전략:**
        1. **일찍 시작**: 20대와 30대의 10년 차이는 엄청난 결과 차이
        2. **꾸준한 투자**: 매월 일정액 적립식 투자
        3. **재투자**: 배당금과 이자를 모두 재투자
        4. **장기 관점**: 최소 10년 이상 장기 투자 권장

        가계산의 복리 계산기로 여러 시나리오를 비교해보세요!
      `,
      date: "2025-01-10",
      category: "투자"
    },
    {
      id: 3,
      title: "실급여 계산의 모든 것: 4대보험과 세금 완전정리",
      summary: "2025년 최신 세율 기준으로 실급여를 정확히 계산하고, 비과세 항목 활용으로 실수령액을 늘리는 방법을 알아보세요.",
      content: `
        **2025년 4대보험료율:**
        • 국민연금: 4.5% (상한액 월 270,000원)
        • 건강보험: 3.545% 
        • 장기요양보험: 건강보험료의 12.95%
        • 고용보험: 0.8%

        **절세 꿀팁 - 비과세 항목 최대 활용:**
        • 식대: 월 20만원까지 비과세
        • 교통비: 월 20만원까지 비과세
        • 야간근무수당: 일정 금액 비과세
        • 출산/보육수당: 전액 비과세

        **연말정산 준비사항:**
        • 신용카드 사용금액 관리
        • 의료비, 교육비 영수증 보관
        • 연금저축, IRP 납입 계획

        가계산 실급여 계산기로 다양한 시나리오를 시뮬레이션해보세요!
      `,
      date: "2025-01-05",
      category: "급여"
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