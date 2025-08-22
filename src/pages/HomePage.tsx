import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CalculatorIcon from '../icons/CalculatorIcon';
import HomeIcon from '../icons/HomeIcon';
import BmiIcon from '../icons/BmiIcon';
import SalaryIcon from '../icons/SalaryIcon';
import FAQ from '../components/FAQ';

const HomePage = () => {
  useEffect(() => {
    document.title = '가계산 - 복리, 부동산, BMI, 급여 계산기 모음 | 무료 온라인 계산기';
  }, []);

  const faqItems = [
    {
      question: "가계산의 모든 계산기는 무료인가요?",
      answer: "네, 가계산의 모든 계산기는 완전 무료로 제공됩니다. 회원가입이나 결제 없이 누구나 자유롭게 이용할 수 있습니다."
    },
    {
      question: "계산 결과가 정확한가요?",
      answer: "가계산은 공식적인 법령과 최신 세율, 보험료율을 적용하여 정확한 계산 결과를 제공합니다.\n복리 계산기는 수학적 복리 공식을, 부동산 중개보수는 공인중개사법 상한요율을, BMI는 WHO 기준을, 실급여는 국세청 기준을 적용합니다."
    },
    {
      question: "모바일에서도 사용할 수 있나요?",
      answer: "네, 가계산은 모바일, 태블릿, 데스크톱 등 모든 기기에서 최적화되어 작동합니다.\n반응형 디자인으로 어떤 화면 크기에서도 편리하게 이용하실 수 있습니다."
    },
    {
      question: "개인정보가 수집되나요?",
      answer: "가계산은 개인정보를 일체 수집하지 않습니다.\n모든 계산은 브라우저에서 실시간으로 처리되며, 입력한 데이터는 서버에 저장되지 않습니다."
    },
    {
      question: "계산 결과를 저장하거나 인쇄할 수 있나요?",
      answer: "각 계산기에서 제공하는 결과 화면을 브라우저의 인쇄 기능을 통해 PDF로 저장하거나 프린터로 출력할 수 있습니다.\n스크린샷을 찍어 저장하는 방법도 가능합니다."
    },
    {
      question: "새로운 기능 요청이나 문의사항이 있다면?",
      answer: "문의사항이나 새로운 기능 제안은 하단의 '문의하기' 페이지를 통해 연락 주시거나,\n깃허브 리포지토리에 이슈로 등록해 주시면 검토 후 반영하겠습니다."
    }
  ];

  const calculators = [
    {
      title: '복리 계산기',
      description: '투자 수익률과 복리 효과를 계산하여 장기 투자 계획을 세워보세요',
      icon: <CalculatorIcon className="nav-icon" alt="복리 계산기 아이콘" />,
      link: '/compound-interest',
      keywords: '복리, 투자, 수익률'
    },
    {
      title: '부동산 중개보수 계산기',
      description: '법정 상한요율 기준 중개보수를 계산하고 절약 방법을 알아보세요',
      icon: <HomeIcon className="nav-icon" alt="부동산 중개보수 계산기 아이콘" />,
      link: '/real-estate',
      keywords: '부동산, 중개보수, 수수료'
    },
    {
      title: 'BMI 계산기',
      description: '체질량지수를 계산하고 건강한 체중관리 방법을 확인하세요',
      icon: <BmiIcon className="nav-icon" alt="BMI 계산기 아이콘" />,
      link: '/bmi',
      keywords: 'BMI, 체질량지수, 건강'
    },
    {
      title: '실급여 계산기',
      description: '4대보험과 세금 공제 후 실제 수령액을 계산하고 절세 방법을 알아보세요',
      icon: <SalaryIcon className="nav-icon" alt="실급여 계산기 아이콘" />,
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

        <nav className="mb-4" aria-label="관련 계산기 바로가기">
          <Row className="text-center">
            <Col md={3}>
              <Link to="/compound-calculator" className="text-decoration-none">
                <small className="text-primary">복리 계산기 상세가이드 →</small>
              </Link>
            </Col>
            <Col md={3}>
              <Link to="/real-estate-calculator" className="text-decoration-none">
                <small className="text-primary">부동산 수수료 가이드 →</small>
              </Link>
            </Col>
            <Col md={3}>
              <Link to="/bmi-calculator" className="text-decoration-none">
                <small className="text-primary">BMI 건강 가이드 →</small>
              </Link>
            </Col>
            <Col md={3}>
              <Link to="/salary-calculator" className="text-decoration-none">
                <small className="text-primary">급여 절세 가이드 →</small>
              </Link>
            </Col>
          </Row>
        </nav>

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
              <Card.Header as="h2">🚀 가계산의 특징</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h3>✅ 정확한 계산</h3>
                    <p>최신 법령과 정확한 공식을 적용하여 신뢰할 수 있는 계산 결과를 제공합니다.</p>
                    
                    <h3>📱 모바일 최적화</h3>
                    <p>언제 어디서나 편리하게 사용할 수 있도록 모바일에 최적화된 디자인을 제공합니다.</p>
                  </Col>
                  <Col md={6}>
                    <h3>📚 상세한 가이드</h3>
                    <p>단순 계산을 넘어 실용적인 팁과 절약 방법까지 함께 제공합니다.</p>
                    
                    <h3>💯 무료 서비스</h3>
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
              <Card.Header as="h2">🔍 인기 검색 키워드</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <h4>복리 관련</h4>
                    <ul className="list-unstyled small">
                      <li>복리 계산기</li>
                      <li>투자 수익률 계산</li>
                      <li>복리 효과</li>
                      <li>재테크 계산기</li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h4>부동산 관련</h4>
                    <ul className="list-unstyled small">
                      <li>중개보수 계산기</li>
                      <li>부동산 수수료</li>
                      <li>중개보수 요율</li>
                      <li>부동산 거래 비용</li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h4>건강 관련</h4>
                    <ul className="list-unstyled small">
                      <li>BMI 계산기</li>
                      <li>체질량지수</li>
                      <li>비만도 계산</li>
                      <li>건강 체중</li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <h4>급여 관련</h4>
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

        <Row className="mt-4">
          <Col>
            <FAQ items={faqItems} title="🤔 자주 묻는 질문" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;