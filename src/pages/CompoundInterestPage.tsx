import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CompoundInterestCalculator from '../CompoundInterestCalculator';
import { Helmet } from 'react-helmet';

const CompoundInterestPage = () => {
  useEffect(() => {
    document.title = '복리 계산기 - 투자 수익률 계산 및 복리 효과 분석 | 가계산';
  }, []);

  return (
    <>
      <Helmet>
        <title>복리 계산기 - 투자 수익률 계산 및 복리 효과 분석 | 가계산</title>
        <meta 
          name="description" 
          content="복리 계산기로 투자 수익률을 정확히 계산하세요. 연도별 복리 효과 분석과 투자 전략 가이드를 제공합니다. 무료 온라인 도구로 투자 계획을 세워보세요." 
        />
        <meta 
          name="keywords" 
          content="복리 계산기, 투자 수익률 계산, 복리 효과, 투자 계산기, 이자 계산기, 복리 투자, 재테크 계산기" 
        />
        <link rel="canonical" href="https://gaesan.shop/compound-interest" />
        <meta property="og:title" content="복리 계산기 - 투자 수익률 계산 및 복리 효과 분석" />
        <meta property="og:description" content="복리 계산기로 투자 수익률을 정확히 계산하고 연도별 복리 효과를 분석하세요." />
        <meta property="og:url" content="https://gaesan.shop/compound-interest" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Calculator",
            "name": "복리 계산기",
            "description": "투자 원금에 대한 복리 수익률을 계산하는 온라인 계산기",
            "url": "https://gaesan.shop/compound-interest",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "KRW"
            }
          })}
        </script>
      </Helmet>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <CompoundInterestCalculator />
      </Container>
    </>
  );
};

export default CompoundInterestPage;