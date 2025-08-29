import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BmiCalculator from '../BmiCalculator';

const BmiPage = () => {
  useEffect(() => {
    // 페이지별 메타 데이터 설정
    document.title = 'BMI 계산기 - 체질량지수 계산 및 건강상태 진단 | 가계산';
    
    // 기존 메타 태그 제거 후 새로 추가
    const removeMetaTags = () => {
      const existingMeta = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]');
      existingMeta.forEach(tag => tag.remove());
    };
    
    const addMetaTags = () => {
      // Description
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = 'BMI 계산기로 체질량지수를 계산하고 비만도를 측정하세요. 키와 몸무게만 입력하면 BMI 지수와 건강 상태를 확인할 수 있습니다. 아시아인 기준 포함 정확한 BMI 계산.';
      document.head.appendChild(metaDescription);
      
      // Keywords
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = 'BMI 계산기, 체질량지수 계산, 비만도 측정, BMI 지수, 표준체중 계산, 건강 체중, 체중 관리, 다이어트 계산기';
      document.head.appendChild(metaKeywords);
      
      // Canonical URL
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://gaesan.shop/bmi';
      document.head.appendChild(canonical);
      
      // Open Graph
      const ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', 'BMI 계산기 - 체질량지수 및 비만도 측정 | 가계산');
      document.head.appendChild(ogTitle);
      
      const ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', 'BMI 계산기로 체질량지수를 계산하고 건강 상태를 확인하세요. 키와 몸무게로 간단히 BMI 지수 측정.');
      document.head.appendChild(ogDescription);
      
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', 'https://gaesan.shop/bmi');
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
        <BmiCalculator />
      </Container>
    </>
  );
};

export default BmiPage;