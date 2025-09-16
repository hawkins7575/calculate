import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompoundInterestPage from './pages/CompoundInterestPage';
import RealEstatePage from './pages/RealEstatePage';
import BmiPage from './pages/BmiPage';
import SalaryPage from './pages/SalaryPage';
import RetirementPage from './pages/RetirementPage';
import LoanPage from './pages/LoanPage';
import InheritanceTaxPage from './pages/InheritanceTaxPage';
import ChildcarePage from './pages/ChildcarePage';
import SavingsPage from './pages/SavingsPage';
import BlogPage from './pages/BlogPage';
import CompoundInterestGuide from './pages/blog/CompoundInterestGuide';
import RealEstateCommissionSave from './pages/blog/RealEstateCommissionSave';
import BmiAsianStandard from './pages/blog/BmiAsianStandard';
import SalaryCalculationGuide from './pages/blog/SalaryCalculationGuide';
import RetirementPlanningGuide from './pages/blog/RetirementPlanningGuide';
import LoanEarlyPaymentGuide from './pages/blog/LoanEarlyPaymentGuide';
import InheritanceTaxGuide from './pages/blog/InheritanceTaxGuide';
import SavingsStrategyGuide from './pages/blog/SavingsStrategyGuide';
import ChildcareGuide from './pages/blog/ChildcareGuide';
import InvestmentStrategyGuide from './pages/blog/InvestmentStrategyGuide';
import { CompoundInterestLanding, RealEstateLanding, BmiLanding, SalaryLanding } from './pages/LandingPages';
import CompoundCalculatorLanding from './pages/CompoundCalculatorLanding';
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
              <CalculatorIcon className='nav-icon' /> 복리계산기
            </Nav.Link>
            <Nav.Link as={Link} to="/real-estate">
              <HomeIcon className='nav-icon' /> 중개보수
            </Nav.Link>
            <Nav.Link as={Link} to="/bmi">
              <BmiIcon className='nav-icon' /> BMI
            </Nav.Link>
            <Nav.Link as={Link} to="/salary">
              <SalaryIcon className='nav-icon' /> 실급여
            </Nav.Link>
            <Nav.Link as={Link} to="/retirement">
              <CalculatorIcon className='nav-icon' /> 은퇴자금
            </Nav.Link>
            <Nav.Link as={Link} to="/loan">
              <CalculatorIcon className='nav-icon' /> 대출
            </Nav.Link>
            <Nav.Link as={Link} to="/inheritance-tax">
              <CalculatorIcon className='nav-icon' /> 상속세
            </Nav.Link>
            <Nav.Link as={Link} to="/childcare">
              <CalculatorIcon className='nav-icon' /> 보육비
            </Nav.Link>
            <Nav.Link as={Link} to="/savings">
              <CalculatorIcon className='nav-icon' /> 적금
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" style={{ fontSize: '0.875rem' }}>
              📝 블로그
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
          <Route path="/retirement" element={<RetirementPage />} />
          <Route path="/loan" element={<LoanPage />} />
          <Route path="/inheritance-tax" element={<InheritanceTaxPage />} />
          <Route path="/childcare" element={<ChildcarePage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/compound-interest-guide" element={<CompoundInterestGuide />} />
          <Route path="/blog/real-estate-commission-save" element={<RealEstateCommissionSave />} />
          <Route path="/blog/bmi-asian-standard" element={<BmiAsianStandard />} />
          <Route path="/blog/salary-calculation-guide" element={<SalaryCalculationGuide />} />
          <Route path="/blog/retirement-planning" element={<RetirementPlanningGuide />} />
          <Route path="/blog/loan-early-payment" element={<LoanEarlyPaymentGuide />} />
          <Route path="/blog/inheritance-tax-guide" element={<InheritanceTaxGuide />} />
          <Route path="/blog/savings-strategy-guide" element={<SavingsStrategyGuide />} />
          <Route path="/blog/childcare-guide" element={<ChildcareGuide />} />
          <Route path="/blog/investment-strategy-guide" element={<InvestmentStrategyGuide />} />
          <Route path="/guide" element={<BlogPage />} />
          
          {/* SEO 전용 랜딩 페이지들 */}
          <Route path="/compound-calculator" element={<CompoundCalculatorLanding />} />
          <Route path="/real-estate-calculator" element={<RealEstateLanding />} />
          <Route path="/bmi-calculator" element={<BmiLanding />} />
          <Route path="/salary-calculator" element={<SalaryLanding />} />
          
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
