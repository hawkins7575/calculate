import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SalaryCalculator from '../SalaryCalculator';

const SalaryPage = () => {
  useEffect(() => {
    // 페이지별 메타 데이터 설정
    document.title = '실급여 계산기 - 4대보험 공제 후 실수령액 계산 | 가계산';
    
    // 기존 메타 태그 제거 후 새로 추가
    const removeMetaTags = () => {
      const existingMeta = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]');
      existingMeta.forEach(tag => tag.remove());
    };
    
    const addMetaTags = () => {
      // Description
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = '실급여 계산기로 4대보험 공제 후 실제 수령액을 정확히 계산하세요. 국민연금, 건강보험, 고용보험, 산재보험 및 소득세 공제를 포함한 정확한 실급여 계산.';
      document.head.appendChild(metaDescription);
      
      // Keywords
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = '실급여 계산기, 4대보험 공제, 실수령액 계산, 급여 계산기, 소득세 계산, 국민연금 공제, 건강보험료, 고용보험, 산재보험';
      document.head.appendChild(metaKeywords);
      
      // Canonical URL
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://gaesan.shop/salary';
      document.head.appendChild(canonical);
      
      // Open Graph
      const ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      ogTitle.content = '실급여 계산기 - 4대보험 공제 후 실수령액 | 가계산';
      document.head.appendChild(ogTitle);
      
      const ogDescription = document.createElement('meta');
      ogDescription.property = 'og:description';
      ogDescription.content = '실급여 계산기로 세금과 4대보험 공제 후 실제 수령하는 금액을 정확히 계산하세요.';
      document.head.appendChild(ogDescription);
      
      const ogUrl = document.createElement('meta');
      ogUrl.property = 'og:url';
      ogUrl.content = 'https://gaesan.shop/salary';
      document.head.appendChild(ogUrl);
    };
    
    removeMetaTags();
    addMetaTags();
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      removeMetaTags();
    };
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <SalaryCalculator />
      </Container>
    </>
  );
};

export default SalaryPage;