import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompoundInterestPage from './pages/CompoundInterestPage';
import RealEstatePage from './pages/RealEstatePage';
import BmiPage from './pages/BmiPage';
import SalaryPage from './pages/SalaryPage';
import BlogPageRoute from './pages/BlogPage';
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TermsOfService from './TermsOfService';
import SitemapPage from './SitemapPage';
import CalculatorIcon from './icons/CalculatorIcon';
import HomeIcon from './icons/HomeIcon';
import BmiIcon from './icons/BmiIcon';
import SalaryIcon from './icons/SalaryIcon';
import './App.css';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="app-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">가계산</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/compound-interest">
              <CalculatorIcon className='nav-icon' /> 복리 계산기
            </Nav.Link>
            <Nav.Link as={Link} to="/real-estate">
              <HomeIcon className='nav-icon' /> 부동산 중개보수
            </Nav.Link>
            <Nav.Link as={Link} to="/bmi">
              <BmiIcon className='nav-icon' /> BMI 계산기
            </Nav.Link>
            <Nav.Link as={Link} to="/salary">
              <SalaryIcon className='nav-icon' /> 실급여 계산기
            </Nav.Link>
            <Nav.Link as={Link} to="/guide" style={{ fontSize: '0.875rem' }}>
              📚 가이드
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <Nav className="justify-content-center">
        <Nav.Link as={Link} to="/privacy">
          개인정보처리방침
        </Nav.Link>
        <Nav.Link as={Link} to="/terms">
          이용약관
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          사이트 소개
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          문의하기
        </Nav.Link>
        <Nav.Link as={Link} to="/sitemap">
          사이트맵
        </Nav.Link>
      </Nav>
    </footer>
  );
};

function App() {

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppNavbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compound-interest" element={<CompoundInterestPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/bmi" element={<BmiPage />} />
          <Route path="/salary" element={<SalaryPage />} />
          <Route path="/guide" element={<BlogPageRoute />} />
          <Route path="/privacy" element={<PrivacyPolicy onBack={() => window.history.back()} />} />
          <Route path="/terms" element={<TermsOfService onBack={() => window.history.back()} />} />
          <Route path="/about" element={<AboutUs onBack={() => window.history.back()} />} />
          <Route path="/contact" element={<ContactUs onBack={() => window.history.back()} />} />
          <Route path="/sitemap" element={<SitemapPage onBack={() => window.history.back()} />} />
        </Routes>

        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
