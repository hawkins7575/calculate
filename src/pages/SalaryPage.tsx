import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SalaryCalculator from '../SalaryCalculator';
import { Helmet } from 'react-helmet';

const SalaryPage = () => {
  useEffect(() => {
    document.title = '실급여 계산기 - 4대보험 공제 후 실수령액 계산 | 가계산';
  }, []);

  return (
    <>
      <Helmet>
        <title>실급여 계산기 - 4대보험 공제 후 실수령액 계산 | 가계산</title>
        <meta 
          name="description" 
          content="실급여 계산기로 4대보험과 세금 공제 후 실제 수령액을 계산하세요. 연말정산 절세 방법과 급여 최적화 가이드를 제공합니다." 
        />
        <meta 
          name="keywords" 
          content="실급여 계산기, 급여 계산기, 4대보험 공제, 세금 계산기, 실수령액 계산, 연말정산 계산기, 소득세 계산" 
        />
        <link rel="canonical" href="https://gaesan.shop/salary" />
        <meta property="og:title" content="실급여 계산기 - 4대보험 공제 후 실수령액 계산" />
        <meta property="og:description" content="실급여 계산기로 4대보험과 세금을 제외한 실제 수령액을 계산해보세요." />
        <meta property="og:url" content="https://gaesan.shop/salary" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Calculator",
            "name": "실급여 계산기",
            "description": "4대보험과 세금 공제 후 실제 급여 수령액을 계산하는 도구",
            "url": "https://gaesan.shop/salary",
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
        <SalaryCalculator />
      </Container>
    </>
  );
};

export default SalaryPage;