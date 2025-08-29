import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import RealEstateCommissionCalculator from '../RealEstateCommissionCalculator';

const RealEstatePage = () => {
  useEffect(() => {
    // 페이지별 메타 데이터 설정
    document.title = '부동산 중개보수 계산기 - 법정 상한요율 기준 수수료 계산 | 가계산';
    
    // 기존 메타 태그 제거 후 새로 추가
    const removeMetaTags = () => {
      const existingMeta = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]');
      existingMeta.forEach(tag => tag.remove());
    };
    
    const addMetaTags = () => {
      // Description
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = '부동산 중개보수 계산기로 아파트, 주택, 상가 거래 시 중개수수료를 정확히 계산하세요. 매매, 전세, 월세별 법정 상한요율을 적용하여 실제 수수료를 미리 확인할 수 있습니다.';
      document.head.appendChild(metaDescription);
      
      // Keywords
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = '부동산 중개보수 계산기, 중개수수료 계산, 부동산 수수료, 아파트 중개보수, 주택 중개보수, 상가 중개보수, 매매 수수료, 전세 수수료, 월세 수수료';
      document.head.appendChild(metaKeywords);
      
      // Canonical URL
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://gaesan.shop/real-estate';
      document.head.appendChild(canonical);
      
      // Open Graph
      const ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', '부동산 중개보수 계산기 - 거래 수수료 계산 | 가계산');
      document.head.appendChild(ogTitle);
      
      const ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', '부동산 거래 시 중개수수료를 정확히 계산해보세요. 매매, 전세, 월세별 법정 상한요율 적용으로 실제 수수료를 미리 확인할 수 있습니다.');
      document.head.appendChild(ogDescription);
      
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', 'https://gaesan.shop/real-estate');
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
        <RealEstateCommissionCalculator />
      </Container>
    </>
  );
};

export default RealEstatePage;