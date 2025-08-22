import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CalculatorIcon from '../icons/CalculatorIcon';
import HomeIcon from '../icons/HomeIcon';
import BmiIcon from '../icons/BmiIcon';
import SalaryIcon from '../icons/SalaryIcon';

const HomePage = () => {
  useEffect(() => {
    document.title = '가계산 - 복리, 부동산, BMI, 급여 계산기 모음 | 무료 온라인 계산기';
  }, []);

  const calculators = [
    {
      title: '복리 계산기',
      description: '투자 수익률과 복리 효과를 계산하여 장기 투자 계획을 세워보세요',
      icon: <CalculatorIcon className="nav-icon" />,
      link: '/compound-interest',
      keywords: '복리, 투자, 수익률'
    },
    {
      title: '부동산 중개보수 계산기',
      description: '법정 상한요율 기준 중개보수를 계산하고 절약 방법을 알아보세요',
      icon: <HomeIcon className="nav-icon" />,
      link: '/real-estate',
      keywords: '부동산, 중개보수, 수수료'
    },
    {
      title: 'BMI 계산기',
      description: '체질량지수를 계산하고 건강한 체중관리 방법을 확인하세요',
      icon: <BmiIcon className="nav-icon" />,
      link: '/bmi',
      keywords: 'BMI, 체질량지수, 건강'
    },
    {
      title: '실급여 계산기',
      description: '4대보험과 세금 공제 후 실제 수령액을 계산하고 절세 방법을 알아보세요',
      icon: <SalaryIcon className="nav-icon" />,
      link: '/salary',
      keywords: '급여, 실수령액, 세금'
    }
  ];

  return (
    <>
      <Helmet>
        <title>가계산 - 복리, 부동산, BMI, 급여 계산기 모음 | 무료 온라인 계산기</title>
        <meta 
          name="description" 
          content="복리 계산기, 부동산 중개보수 계산기, BMI 계산기, 실급여 계산기 등 실생활에 필요한 다양한 계산기를 무료로 제공합니다. 정확한 계산과 상세한 가이드로 합리적인 의사결정을 도와드립니다." 
        />
        <meta 
          name="keywords" 
          content="계산기 모음, 복리 계산기, 부동산 중개보수 계산기, BMI 계산기, 실급여 계산기, 온라인 계산기, 무료 계산기, 가계산" 
        />
        <link rel="canonical" href="https://gaesan.shop" />
        <meta property="og:title" content="가계산 - 복리, 부동산, BMI, 급여 계산기 모음" />
        <meta property="og:description" content="실생활에 필요한 다양한 계산기를 무료로 제공합니다. 복리 효과 계산부터 부동산 중개보수, BMI 지수, 실급여까지 한번에!" />
        <meta property="og:url" content="https://gaesan.shop" />
      </Helmet>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <div className="text-center mb-5">
          <h1 className="text-gradient mb-4">가계산 - 실생활 계산기 모음</h1>
          <p className="lead text-muted">
            복리 투자부터 부동산 거래, 건강관리, 급여 계산까지<br/>
            정확한 계산과 실용적인 가이드를 한번에 만나보세요
          </p>
        </div>

        <Row>
          {calculators.map((calc, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <Card className="h-100 shadow-soft">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    {calc.icon}
                    <Card.Title className="h5 mb-0 ms-2">{calc.title}</Card.Title>
                  </div>
                  <Card.Text className="flex-grow-1 text-muted">
                    {calc.description}
                  </Card.Text>
                  <div className="mt-auto">
                    <div className="mb-2">
                      <small className="text-primary">🏷️ {calc.keywords}</small>
                    </div>
                    <Link to={calc.link} className="btn btn-primary w-100">
                      계산하기
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Header as="h3">🚀 가계산의 특징</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>✅ 정확한 계산</h5>
                    <p>최신 법령과 정확한 공식을 적용하여 신뢰할 수 있는 계산 결과를 제공합니다.</p>
                    
                    <h5>📱 모바일 최적화</h5>
                    <p>언제 어디서나 편리하게 사용할 수 있도록 모바일에 최적화된 디자인을 제공합니다.</p>
                  </Col>
                  <Col md={6}>
                    <h5>📚 상세한 가이드</h5>
                    <p>단순 계산을 넘어 실용적인 팁과 절약 방법까지 함께 제공합니다.</p>
                    
                    <h5>💯 무료 서비스</h5>
                    <p>모든 계산기와 가이드를 완전 무료로 제공하며, 회원가입도 필요 없습니다.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Header as="h3">🔍 인기 검색 키워드</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <h6>복리 관련</h6>
                    <ul className="list-unstyled small">
                      <li>복리 계산기</li>
                      <li>투자 수익률 계산</li>
                      <li>복리 효과</li>
                      <li>재테크 계산기</li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h6>부동산 관련</h6>
                    <ul className="list-unstyled small">
                      <li>중개보수 계산기</li>
                      <li>부동산 수수료</li>
                      <li>중개보수 요율</li>
                      <li>부동산 거래 비용</li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h6>건강 관련</h6>
                    <ul className="list-unstyled small">
                      <li>BMI 계산기</li>
                      <li>체질량지수</li>
                      <li>비만도 계산</li>
                      <li>건강 체중</li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h6>급여 관련</h6>
                    <ul className="list-unstyled small">
                      <li>실급여 계산기</li>
                      <li>4대보험 공제</li>
                      <li>세금 계산</li>
                      <li>실수령액</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;