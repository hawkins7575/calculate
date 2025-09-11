import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CalculatorIcon from '../icons/CalculatorIcon';
import HomeIcon from '../icons/HomeIcon';
import BmiIcon from '../icons/BmiIcon';
import SalaryIcon from '../icons/SalaryIcon';
import SocialShare from '../components/SocialShare';
import { HeaderAd, InFeedAd } from '../components/AdSenseUnits';

const HomePage = () => {
  useEffect(() => {
    document.title = '가계산 - 복리, 부동산, BMI, 급여 계산기 모음 | 무료 온라인 계산기';
  }, []);


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
    },
    {
      title: '퇴직금 계산기',
      description: '근로기준법에 따른 퇴직금을 정확하게 계산해보세요',
      icon: <CalculatorIcon className="nav-icon" alt="퇴직금 계산기 아이콘" />,
      link: '/retirement',
      keywords: '퇴직금, 근속, 평균임금'
    },
    {
      title: '대출이자 계산기',
      description: '대출 조건에 따른 월 상환액과 총 이자를 계산해보세요',
      icon: <CalculatorIcon className="nav-icon" alt="대출이자 계산기 아이콘" />,
      link: '/loan',
      keywords: '대출, 이자, 상환액'
    },
    {
      title: '상속세 증여세 계산기',
      description: '상속세와 증여세를 미리 계산하여 절세 계획을 세워보세요',
      icon: <CalculatorIcon className="nav-icon" alt="상속세 증여세 계산기 아이콘" />,
      link: '/inheritance-tax',
      keywords: '상속세, 증여세, 세금'
    },
    {
      title: '육아비용 계산기',
      description: '자녀의 나이와 교육 환경에 따른 월별/연간 육아비용을 계산해보세요',
      icon: <CalculatorIcon className="nav-icon" alt="육아비용 계산기 아이콘" />,
      link: '/childcare',
      keywords: '육아비용, 교육비, 자녀'
    },
    {
      title: '적금 예금 계산기',
      description: '적금과 예금의 만기 수익을 계산하여 최적의 저축 계획을 세워보세요',
      icon: <CalculatorIcon className="nav-icon" alt="적금 예금 계산기 아이콘" />,
      link: '/savings',
      keywords: '적금, 예금, 저축'
    }
  ];

  return (
    <>
      
      <Container className="mt-5 mb-5" style={{ flex: '1', maxWidth: '900px' }}>
        <div className="text-center mb-5">
          <h1 className="mb-4" style={{ 
            fontSize: '2.5rem', 
            fontWeight: '300', 
            color: '#2c3e50',
            letterSpacing: '-0.02em'
          }}>
            가계산
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#5a6c7d', 
            lineHeight: '1.6', 
            marginBottom: '0',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            실생활에 필요한 계산기를 한 곳에서
            <br />
            <span style={{ color: '#7f8c8d' }}>간편하고 정확하게</span>
          </p>
        </div>

        {/* 헤더 광고 */}
        <HeaderAd />

        <Row className="justify-content-center g-4">
          {calculators.map((calc, index) => (
            <Col lg={4} md={6} key={index}>
              <Card 
                className="h-100 border-0" 
                style={{ 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      style={{ 
                        background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
                        borderRadius: '12px',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px'
                      }}
                    >
                      <div style={{ transform: 'scale(0.8)', color: 'white' }}>
                        {calc.icon}
                      </div>
                    </div>
                    <Card.Title 
                      className="mb-0" 
                      style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: '600',
                        color: '#2c3e50'
                      }}
                    >
                      {calc.title}
                    </Card.Title>
                  </div>
                  <Card.Text 
                    className="flex-grow-1 mb-4" 
                    style={{ 
                      fontSize: '0.9rem', 
                      lineHeight: '1.5',
                      color: '#6c757d'
                    }}
                  >
                    {calc.description}
                  </Card.Text>
                  <Link 
                    to={calc.link} 
                    className="btn"
                    style={{ 
                      fontSize: '0.9rem', 
                      padding: '10px 20px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'block',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #55a3ff 0%, #0770c1 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)';
                    }}
                  >
                    계산하기
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5 pt-4">
          <div 
            className="d-inline-block px-4 py-2 rounded-pill mb-3" 
            style={{ 
              background: 'rgba(116, 185, 255, 0.1)',
              border: '1px solid rgba(116, 185, 255, 0.2)'
            }}
          >
            <small 
              className="text-muted" 
              style={{ 
                fontSize: '0.85rem',
                color: '#74b9ff !important',
                fontWeight: '500'
              }}
            >
              💝 무료 제공 · 🚀 회원가입 불필요 · 📱 모바일 최적화
            </small>
          </div>
          
          <div className="mt-3">
            <SocialShare 
              title="가계산 - 실생활 필수 계산기 모음"
              description="복리, 부동산, BMI, 급여 등 다양한 계산기를 무료로 이용하세요"
              hashtags={['가계산', '계산기', '복리계산', '부동산', '급여계산']}
              className="justify-content-center"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;