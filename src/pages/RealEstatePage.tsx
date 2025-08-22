import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import RealEstateCommissionCalculator from '../RealEstateCommissionCalculator';
import { Helmet } from 'react-helmet';

const RealEstatePage = () => {
  useEffect(() => {
    document.title = '부동산 중개보수 계산기 - 법정 상한요율 기준 수수료 계산 | 가계산';
  }, []);

  return (
    <>
      <Helmet>
        <title>부동산 중개보수 계산기 - 법정 상한요율 기준 수수료 계산 | 가계산</title>
        <meta 
          name="description" 
          content="부동산 중개보수 계산기로 법정 상한요율 기준 수수료를 정확히 계산하세요. 중개보수 절약 방법과 부동산 거래 팁까지 제공합니다." 
        />
        <meta 
          name="keywords" 
          content="부동산 중개보수 계산기, 중개수수료 계산기, 부동산 수수료, 중개보수 요율, 부동산 거래, 중개보수 절약" 
        />
        <link rel="canonical" href="https://gaesan.shop/real-estate" />
        <meta property="og:title" content="부동산 중개보수 계산기 - 법정 상한요율 기준 수수료 계산" />
        <meta property="og:description" content="부동산 중개보수를 법정 상한요율 기준으로 정확히 계산하고 절약 방법을 알아보세요." />
        <meta property="og:url" content="https://gaesan.shop/real-estate" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Calculator",
            "name": "부동산 중개보수 계산기",
            "description": "부동산 거래 시 중개보수를 법정 상한요율 기준으로 계산하는 온라인 도구",
            "url": "https://gaesan.shop/real-estate",
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
        <RealEstateCommissionCalculator />
      </Container>
    </>
  );
};

export default RealEstatePage;