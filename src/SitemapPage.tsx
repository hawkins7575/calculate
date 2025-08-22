import React from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';

const SitemapPage = ({ onBack }: { onBack: () => void }) => {
  const sitemapData = [
    {
      category: "계산기 도구",
      items: [
        { name: "복리 계산기", description: "투자 수익률과 복리 효과 계산" },
        { name: "부동산 중개보수 계산기", description: "부동산 거래 시 중개보수 계산" },
        { name: "BMI 계산기", description: "체질량지수 계산 및 건강상태 확인" },
        { name: "실급여 계산기", description: "4대보험 및 세금 공제 후 실수령액 계산" }
      ]
    },
    {
      category: "정보 및 가이드",
      items: [
        { name: "계산기 활용 가이드", description: "각 계산기 사용법과 활용 팁" },
        { name: "투자 기초 지식", description: "복리 투자의 원리와 장기 투자의 중요성" },
        { name: "부동산 거래 가이드", description: "부동산 중개보수 관련 법률 정보" },
        { name: "건강관리 정보", description: "BMI와 건강한 체중관리 방법" }
      ]
    },
    {
      category: "사이트 정보",
      items: [
        { name: "사이트 소개", description: "다용도 계산기 사이트에 대한 소개" },
        { name: "개인정보처리방침", description: "개인정보 수집 및 이용에 관한 정책" },
        { name: "이용약관", description: "서비스 이용에 관한 약관" },
        { name: "문의하기", description: "사이트 관련 문의 및 피드백" }
      ]
    }
  ];

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-gradient">사이트맵</h1>
        <button 
          onClick={onBack}
          className="btn btn-outline-secondary"
        >
          ← 돌아가기
        </button>
      </div>
      
      <Card className="mb-4">
        <Card.Body>
          <p className="lead">
            다용도 계산기 사이트의 모든 페이지와 기능을 한눈에 확인할 수 있습니다.
            필요한 계산기나 정보를 쉽게 찾아보세요.
          </p>
        </Card.Body>
      </Card>

      <Row>
        {sitemapData.map((section, index) => (
          <Col lg={4} md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-soft">
              <Card.Header className="bg-gradient text-primary">
                <h4 className="mb-0">{section.category}</h4>
              </Card.Header>
              <Card.Body className="p-0">
                <ListGroup variant="flush">
                  {section.items.map((item, itemIndex) => (
                    <ListGroup.Item key={itemIndex} className="border-0">
                      <div>
                        <strong className="text-primary">{item.name}</strong>
                        <div className="text-muted small mt-1">
                          {item.description}
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-4">
        <Card.Header as="h3">빠른 접근</Card.Header>
        <Card.Body>
          <Row>
            <Col md={3} className="mb-3">
              <h5>💰 투자 관련</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none">복리 계산기</a></li>
                <li><a href="#!" className="text-decoration-none">투자 가이드</a></li>
              </ul>
            </Col>
            <Col md={3} className="mb-3">
              <h5>🏠 부동산</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none">중개보수 계산기</a></li>
                <li><a href="#!" className="text-decoration-none">부동산 가이드</a></li>
              </ul>
            </Col>
            <Col md={3} className="mb-3">
              <h5>💼 급여</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none">실급여 계산기</a></li>
                <li><a href="#!" className="text-decoration-none">급여 가이드</a></li>
              </ul>
            </Col>
            <Col md={3} className="mb-3">
              <h5>💪 건강</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none">BMI 계산기</a></li>
                <li><a href="#!" className="text-decoration-none">건강 가이드</a></li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SitemapPage;