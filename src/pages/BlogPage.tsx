import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BlogPage from '../BlogPage';
import { Helmet } from 'react-helmet';

const BlogPageRoute = () => {
  useEffect(() => {
    document.title = '계산기 활용 가이드 - 복리, 부동산, BMI, 급여 관련 정보 | 가계산';
  }, []);

  return (
    <>
      <Helmet>
        <title>계산기 활용 가이드 - 복리, 부동산, BMI, 급여 관련 정보 | 가계산</title>
        <meta 
          name="description" 
          content="복리 투자 가이드, 부동산 거래 팁, BMI 건강관리, 급여 절세 방법 등 실생활에 도움되는 정보를 제공합니다." 
        />
        <meta 
          name="keywords" 
          content="계산기 활용 가이드, 복리 투자 가이드, 부동산 거래 팁, BMI 건강관리, 급여 절세 방법, 재테크 가이드" 
        />
        <link rel="canonical" href="https://gaesan.shop/guide" />
        <meta property="og:title" content="계산기 활용 가이드 - 복리, 부동산, BMI, 급여 관련 정보" />
        <meta property="og:description" content="실생활에 도움되는 계산기 활용 가이드와 팁을 제공합니다." />
        <meta property="og:url" content="https://gaesan.shop/guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "계산기 활용 가이드",
            "description": "복리 투자, 부동산 거래, BMI 건강관리, 급여 절세 등에 대한 실용적인 가이드",
            "url": "https://gaesan.shop/guide",
            "mainEntity": {
              "@type": "Article",
              "headline": "계산기 활용 가이드",
              "author": {
                "@type": "Organization",
                "name": "가계산"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <BlogPage onBack={() => window.history.back()} />
      </Container>
    </>
  );
};

export default BlogPageRoute;