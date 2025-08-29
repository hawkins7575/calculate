import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CompoundInterestCalculator from '../CompoundInterestCalculator';

const CompoundInterestPage = () => {
  useEffect(() => {
    // 페이지별 메타 데이터 설정
    document.title = '복리 계산기 - 투자 수익률 계산 및 복리 효과 분석 | 가계산';
    
    // 기존 메타 태그 제거 후 새로 추가
    const removeMetaTags = () => {
      const existingMeta = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]');
      existingMeta.forEach(tag => tag.remove());
    };
    
    const addMetaTags = () => {
      // Description
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = '복리 계산기로 투자 수익률과 복리 효과를 정확히 계산해보세요. 원금, 이자율, 투자기간을 입력하면 복리 투자의 놀라운 효과를 확인할 수 있습니다. 무료 온라인 복리 계산기 서비스.';
      document.head.appendChild(metaDescription);
      
      // Keywords
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = '복리 계산기, 투자 수익률 계산, 복리 효과, 투자 계산기, 이자 계산, 복리 투자, 재테크 계산기, 온라인 계산기';
      document.head.appendChild(metaKeywords);
      
      // Canonical URL
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://gaesan.shop/compound-interest';
      document.head.appendChild(canonical);
      
      // Open Graph
      const ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', '복리 계산기 - 투자 수익률 및 복리 효과 분석 | 가계산');
      document.head.appendChild(ogTitle);
      
      const ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', '무료 온라인 복리 계산기로 투자 수익률과 복리 효과를 정확히 계산하세요. 간단한 입력만으로 복리 투자의 놀라운 성장을 확인할 수 있습니다.');
      document.head.appendChild(ogDescription);
      
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', 'https://gaesan.shop/compound-interest');
      document.head.appendChild(ogUrl);
      
      // Twitter Card
      const twitterTitle = document.createElement('meta');
      twitterTitle.name = 'twitter:title';
      twitterTitle.content = '복리 계산기 - 투자 수익률 계산 | 가계산';
      document.head.appendChild(twitterTitle);
      
      const twitterDescription = document.createElement('meta');
      twitterDescription.name = 'twitter:description';
      twitterDescription.content = '무료 온라인 복리 계산기로 투자 수익률과 복리 효과를 정확히 계산하세요.';
      document.head.appendChild(twitterDescription);
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
        <CompoundInterestCalculator />
      </Container>
    </>
  );
};

export default CompoundInterestPage;