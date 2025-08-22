import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  link: string;
  featured?: boolean;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "20대를 위한 복리 투자 시작 가이드",
      summary: "월 10만원으로 시작하는 복리 투자, 30년 후 놀라운 결과를 확인해보세요. 복리의 마법과 실전 투자 전략을 소개합니다.",
      category: "복리 투자",
      readTime: "5분",
      link: "/guide/compound-investment-20s",
      featured: true
    },
    {
      title: "부동산 거래 시 중개보수 절약하는 7가지 방법",
      summary: "법정 상한요율 내에서 중개보수를 절약할 수 있는 실전 협상 전략과 절약 팁을 상세히 알려드립니다.",
      category: "부동산",
      readTime: "7분",
      link: "/guide/real-estate-commission-save",
      featured: true
    },
    {
      title: "아시아인 BMI 기준과 건강 관리법",
      summary: "서구 기준과 다른 아시아인 BMI 분류 기준을 알아보고, BMI 지수별 맞춤 건강 관리 방법을 제공합니다.",
      category: "건강 관리",
      readTime: "4분",
      link: "/guide/asian-bmi-standards"
    },
    {
      title: "2024년 연말정산 절세 완벽 가이드",
      summary: "놓치기 쉬운 공제 항목부터 절세 전략까지, 연말정산으로 최대한 환급받는 방법을 알려드립니다.",
      category: "세금 절약",
      readTime: "8분",
      link: "/guide/year-end-tax-settlement-2024"
    },
    {
      title: "금리 인상기 복리 투자 전략 변화",
      summary: "높아진 금리 환경에서 복리 투자 전략을 어떻게 조정해야 할지, 전문가의 조언을 담았습니다.",
      category: "복리 투자",
      readTime: "6분",
      link: "/guide/compound-investment-high-rate"
    },
    {
      title: "직장인 부업 소득과 세금 계산법",
      summary: "부업 소득이 있는 직장인을 위한 세금 계산 방법과 신고 요령을 실제 사례와 함께 설명합니다.",
      category: "세금 절약",
      readTime: "5분",
      link: "/guide/side-income-tax-calculation"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <h2 className="text-gradient mb-3">💡 실생활 활용 가이드</h2>
            <p className="lead text-muted">
              계산기 사용법을 넘어 실제 생활에 도움되는 전문 정보를 제공합니다
            </p>
          </div>
        </Col>
      </Row>

      {/* 추천 포스트 */}
      <Row className="mb-4">
        <Col>
          <h3 className="mb-3">🔥 추천 가이드</h3>
        </Col>
      </Row>
      
      <Row className="mb-5">
        {featuredPosts.map((post, index) => (
          <Col lg={6} key={index} className="mb-4">
            <Card className="h-100 shadow-soft border-0">
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  <span className="badge bg-primary me-2">{post.category}</span>
                  <small className="text-muted">📖 {post.readTime} 읽기</small>
                </div>
                <Card.Title className="h5 mb-3">{post.title}</Card.Title>
                <Card.Text className="flex-grow-1 text-muted mb-3">
                  {post.summary}
                </Card.Text>
                <div className="mt-auto">
                  <Link 
                    to={post.link} 
                    className="btn btn-outline-primary btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('곧 출시될 예정입니다! 현재 콘텐츠를 준비 중입니다.');
                    }}
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 일반 포스트 */}
      <Row className="mb-4">
        <Col>
          <h3 className="mb-3">📚 최신 가이드</h3>
        </Col>
      </Row>

      <Row>
        {regularPosts.map((post, index) => (
          <Col lg={4} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  <span className="badge bg-secondary me-2">{post.category}</span>
                  <small className="text-muted">📖 {post.readTime}</small>
                </div>
                <Card.Title className="h6 mb-2">{post.title}</Card.Title>
                <Card.Text className="flex-grow-1 text-muted small mb-3">
                  {post.summary}
                </Card.Text>
                <div className="mt-auto">
                  <Link 
                    to={post.link} 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('곧 출시될 예정입니다! 현재 콘텐츠를 준비 중입니다.');
                    }}
                  >
                    읽어보기
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 더 많은 콘텐츠 링크 */}
      <Row className="mt-4">
        <Col className="text-center">
          <Card className="bg-light border-0">
            <Card.Body>
              <h4 className="mb-3">🎯 맞춤형 가이드가 더 필요하다면?</h4>
              <p className="text-muted mb-3">
                각 계산기별 상세한 활용 가이드와 실전 팁을 확인해보세요
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <Link to="/compound-calculator" className="btn btn-primary btn-sm">
                  복리 투자 가이드
                </Link>
                <Link to="/real-estate-calculator" className="btn btn-primary btn-sm">
                  부동산 거래 가이드
                </Link>
                <Link to="/bmi-calculator" className="btn btn-primary btn-sm">
                  건강 관리 가이드
                </Link>
                <Link to="/salary-calculator" className="btn btn-primary btn-sm">
                  절세 가이드
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 뉴스레터 구독 (미래 확장) */}
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
          <Card className="bg-gradient-primary text-white border-0">
            <Card.Body className="text-center">
              <h4 className="mb-3">📧 가계산 뉴스레터</h4>
              <p className="mb-3">
                새로운 가이드와 금융 정보를 가장 먼저 받아보세요
              </p>
              <div className="d-flex justify-content-center">
                <button 
                  className="btn btn-light"
                  onClick={() => alert('뉴스레터 서비스를 준비 중입니다!')}
                >
                  구독하기 (준비중)
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSection;