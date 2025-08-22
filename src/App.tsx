import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import CompoundInterestCalculator from './CompoundInterestCalculator';
import RealEstateCommissionCalculator from './RealEstateCommissionCalculator';
import BmiCalculator from './BmiCalculator';
import SalaryCalculator from './SalaryCalculator';
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TermsOfService from './TermsOfService';
import BlogPage from './BlogPage';
import SitemapPage from './SitemapPage';
import CalculatorIcon from './icons/CalculatorIcon';
import HomeIcon from './icons/HomeIcon';
import BmiIcon from './icons/BmiIcon';
import SalaryIcon from './icons/SalaryIcon';
import './App.css';

function App() {
  const [view, setView] = useState('compound'); // compound, real-estate, bmi, salary, blog, privacy, about, contact, terms

  useEffect(() => {
    switch(view) {
      case 'compound':
        document.title = '복리 계산기 - 다용도 계산기';
        break;
      case 'real-estate':
        document.title = '부동산 중개보수 계산기 - 다용도 계산기';
        break;
      case 'bmi':
        document.title = 'BMI 계산기 - 다용도 계산기';
        break;
      case 'salary':
        document.title = '실급여 계산기 - 다용도 계산기';
        break;
      case 'blog':
        document.title = '계산기 활용 가이드 - 다용도 계산기';
        break;
      case 'privacy':
        document.title = '개인정보처리방침 - 다용도 계산기';
        break;
      case 'about':
        document.title = '사이트 소개 - 다용도 계산기';
        break;
      case 'contact':
        document.title = '문의하기 - 다용도 계산기';
        break;
      case 'terms':
        document.title = '이용약관 - 다용도 계산기';
        break;
      default:
        document.title = '다용도 계산기';
    }
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'compound':
        return <CompoundInterestCalculator />;
      case 'real-estate':
        return <RealEstateCommissionCalculator />;
      case 'bmi':
        return <BmiCalculator />;
      case 'salary':
        return <SalaryCalculator />;
      case 'blog':
        return <BlogPage onBack={() => setView('compound')} />;
      case 'sitemap':
        return <SitemapPage onBack={() => setView('compound')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setView('compound')} />;
      case 'about':
        return <AboutUs onBack={() => setView('compound')} />;
      case 'contact':
        return <ContactUs onBack={() => setView('compound')} />;
      case 'terms':
        return <TermsOfService onBack={() => setView('compound')} />;
      default:
        return <CompoundInterestCalculator />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar expand="lg" className="app-navbar" sticky="top">
        <Container>
          <Navbar.Brand href="#" onClick={() => setView('compound')}>다용도 계산기</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link active={view === 'compound'} onClick={() => setView('compound')}>
                <CalculatorIcon className='nav-icon' /> 복리 계산기
              </Nav.Link>
              <Nav.Link active={view === 'real-estate'} onClick={() => setView('real-estate')}>
                <HomeIcon className='nav-icon' /> 부동산 중개보수
              </Nav.Link>
              <Nav.Link active={view === 'bmi'} onClick={() => setView('bmi')}>
                <BmiIcon className='nav-icon' /> BMI 계산기
              </Nav.Link>
              <Nav.Link active={view === 'salary'} onClick={() => setView('salary')}>
                <SalaryIcon className='nav-icon' /> 실급여 계산기
              </Nav.Link>
              <Nav.Link active={view === 'blog'} onClick={() => setView('blog')} style={{ fontSize: '0.875rem' }}>
                📚 가이드
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        {renderContent()}
      </Container>

      <footer className="app-footer">
        <Nav className="justify-content-center">
          <Nav.Link href="#!" onClick={(e) => { e.preventDefault(); setView('privacy'); }}>
            개인정보처리방침
          </Nav.Link>
          <Nav.Link href="#!" onClick={(e) => { e.preventDefault(); setView('terms'); }}>
            이용약관
          </Nav.Link>
          <Nav.Link href="#!" onClick={(e) => { e.preventDefault(); setView('about'); }}>
            사이트 소개
          </Nav.Link>
          <Nav.Link href="#!" onClick={(e) => { e.preventDefault(); setView('contact'); }}>
            문의하기
          </Nav.Link>
          <Nav.Link href="#!" onClick={(e) => { e.preventDefault(); setView('sitemap'); }}>
            사이트맵
          </Nav.Link>
        </Nav>
      </footer>
    </div>
  );
}

export default App;
