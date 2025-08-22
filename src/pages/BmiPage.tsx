import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BmiCalculator from '../BmiCalculator';
import { Helmet } from 'react-helmet';

const BmiPage = () => {
  useEffect(() => {
    document.title = 'BMI 계산기 - 체질량지수 계산 및 건강상태 진단 | 가계산';
  }, []);

  return (
    <>
      <Helmet>
        <title>BMI 계산기 - 체질량지수 계산 및 건강상태 진단 | 가계산</title>
        <meta 
          name="description" 
          content="BMI 계산기로 체질량지수를 계산하고 건강상태를 진단하세요. 아시아인 기준 BMI 분류와 건강관리 가이드를 제공합니다." 
        />
        <meta 
          name="keywords" 
          content="BMI 계산기, 체질량지수 계산기, BMI 지수, 비만도 계산, 체중 계산기, 건강 체중, 다이어트 계산기" 
        />
        <link rel="canonical" href="https://gaesan.shop/bmi" />
        <meta property="og:title" content="BMI 계산기 - 체질량지수 계산 및 건강상태 진단" />
        <meta property="og:description" content="BMI 계산기로 체질량지수를 계산하고 아시아인 기준으로 건강상태를 확인하세요." />
        <meta property="og:url" content="https://gaesan.shop/bmi" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Calculator",
            "name": "BMI 계산기",
            "description": "신장과 체중을 이용해 체질량지수(BMI)를 계산하는 건강 진단 도구",
            "url": "https://gaesan.shop/bmi",
            "applicationCategory": "HealthApplication",
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
        <BmiCalculator />
      </Container>
    </>
  );
};

export default BmiPage;