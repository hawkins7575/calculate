import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../components/SocialShare';

const BlogPage = () => {
  useEffect(() => {
    // 페이지 제목 및 메타 태그 설정
    document.title = '가계산 블로그 - 계산기 활용 가이드와 재정 관리 팁';
    
    // 메타 설명
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '복리 투자, 부동산 중개보수, BMI 관리, 실급여 계산 등 계산기 활용 가이드와 실생활 재정 관리 노하우를 전문가가 직접 설명합니다.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '복리 투자, 부동산 중개보수, BMI 관리, 실급여 계산 등 계산기 활용 가이드와 실생활 재정 관리 노하우를 전문가가 직접 설명합니다.';
      document.head.appendChild(newMetaDescription);
    }

    // 키워드 메타 태그
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '가계산 블로그, 계산기 활용, 재정 관리, 복리 투자, 부동산 중개보수, BMI 계산기, 급여 계산, 퇴직금 계산, 대출 이자');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '가계산 블로그, 계산기 활용, 재정 관리, 복리 투자, 부동산 중개보수, BMI 계산기, 급여 계산, 퇴직금 계산, 대출 이자';
      document.head.appendChild(newMetaKeywords);
    }

    // Open Graph 태그
    const addOpenGraphTag = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    addOpenGraphTag('og:title', '가계산 블로그 - 계산기 활용 가이드와 재정 관리 팁');
    addOpenGraphTag('og:description', '전문가가 직접 작성한 실용적인 금융 정보와 계산기 활용법을 확인하세요.');
    addOpenGraphTag('og:type', 'website');
    addOpenGraphTag('og:url', `${window.location.origin}/blog`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    // 구조화된 데이터 (JSON-LD) - Blog 스키마
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "가계산 블로그",
      "description": "복리 투자, 부동산 중개보수, BMI 관리, 실급여 계산 등 계산기 활용 가이드와 실생활 재정 관리 노하우",
      "url": `${window.location.origin}/blog`,
      "publisher": {
        "@type": "Organization",
        "name": "가계산",
        "url": window.location.origin,
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo192.png`
        }
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "20대를 위한 복리 투자 시작 가이드",
          "url": `${window.location.origin}/blog/compound-interest-guide`,
          "datePublished": "2024-01-15",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "부동산 중개보수 50만원 절약하는 7가지 방법",
          "url": `${window.location.origin}/blog/real-estate-commission-save`,
          "datePublished": "2024-01-12",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "BMI 25 vs 23: 아시아인에게 정말 중요한 차이",
          "url": `${window.location.origin}/blog/bmi-asian-standard`,
          "datePublished": "2024-01-10",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "연봉 3000만원, 실제로 받는 금액은 얼마?",
          "url": `${window.location.origin}/blog/salary-calculation-guide`,
          "datePublished": "2024-01-08",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까?",
          "url": `${window.location.origin}/blog/retirement-planning`,
          "datePublished": "2024-01-05",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "대출 조기상환 vs 투자: 수익률 비교 분석",
          "url": `${window.location.origin}/blog/loan-early-payment`,
          "datePublished": "2024-01-03",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능",
          "url": `${window.location.origin}/blog/inheritance-tax-guide`,
          "datePublished": "2024-01-20",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은?",
          "url": `${window.location.origin}/blog/savings-strategy-guide`,
          "datePublished": "2024-01-25",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이?",
          "url": `${window.location.origin}/blog/childcare-guide`,
          "datePublished": "2024-01-28",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "초보자를 위한 투자 전략 가이드: 주식 vs 펀드 vs ETF",
          "url": `${window.location.origin}/blog/investment-strategy-guide`,
          "datePublished": "2024-01-30",
          "author": {
            "@type": "Organization",
            "name": "가계산"
          }
        }
      ],
      "inLanguage": "ko-KR"
    };

    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  const blogPosts = [
    {
      id: 'compound-interest-guide',
      title: '20대를 위한 복리 투자 시작 가이드',
      description: '월 10만원으로 시작하는 복리 투자, 20대가 알아야 할 투자의 기본 원리와 실전 전략을 자세히 알아보세요.',
      category: '복리 투자',
      readTime: '5분',
      publishDate: '2024년 1월 15일',
      image: '📈'
    },
    {
      id: 'real-estate-commission-save',
      title: '부동산 중개보수 50만원 절약하는 7가지 방법',
      description: '부동산 거래 시 중개보수를 합법적으로 절약할 수 있는 실전 노하우와 협상 전략을 공개합니다.',
      category: '부동산',
      readTime: '7분',
      publishDate: '2024년 1월 12일',
      image: '🏠'
    },
    {
      id: 'bmi-asian-standard',
      title: 'BMI 25 vs 23: 아시아인에게 정말 중요한 차이',
      description: '서구 기준과 다른 아시아인 BMI 기준, 건강한 체중 관리를 위해 꼭 알아야 할 정보를 제공합니다.',
      category: '건강 관리',
      readTime: '4분',
      publishDate: '2024년 1월 10일',
      image: '⚖️'
    },
    {
      id: 'salary-calculation-guide',
      title: '연봉 3000만원, 실제로 받는 금액은 얼마?',
      description: '4대보험과 소득세 공제 후 실제 수령액 계산법과 절세 방법까지 상세하게 설명드립니다.',
      category: '급여 관리',
      readTime: '6분',
      publishDate: '2024년 1월 8일',
      image: '💰'
    },
    {
      id: 'retirement-planning',
      title: '퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까?',
      description: 'DC형과 DB형 퇴직연금의 차이점과 개인별 최적의 선택 기준을 알아보세요.',
      category: '퇴직 준비',
      readTime: '8분',
      publishDate: '2024년 1월 5일',
      image: '🏦'
    },
    {
      id: 'loan-early-payment',
      title: '대출 조기상환 vs 투자: 수익률 비교 분석',
      description: '대출금리와 투자수익률을 고려한 합리적 선택 기준과 계산 방법을 제시합니다.',
      category: '대출 관리',
      readTime: '5분',
      publishDate: '2024년 1월 3일',
      image: '🏧'
    },
    {
      id: 'inheritance-tax-guide',
      title: '상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능',
      description: '상속세와 증여세 절세 전략을 실제 사례로 설명합니다. 배우자 공제, 가업승계 공제, 생전증여 등 합법적 절세 방법을 알아보세요.',
      category: '세무 정보',
      readTime: '10분',
      publishDate: '2024년 1월 20일',
      image: '💎'
    },
    {
      id: 'savings-strategy-guide',
      title: '적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은?',
      description: '적금과 예금, 투자의 수익률을 비교하고 목적별 최적의 저축 전략을 제시합니다. 청약통장, 연금저축, ISA 등 활용법까지 완벽 정리.',
      category: '저축 전략',
      readTime: '7분',
      publishDate: '2024년 1월 25일',
      image: '💰'
    },
    {
      id: 'childcare-guide',
      title: '어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이?',
      description: '어린이집과 유치원 비용을 상세히 비교하고 보육료 지원금, 양육수당까지 완벽 정리. 연령별 최적 선택과 숨은 비용까지 알려드립니다.',
      category: '육아 정보',
      readTime: '8분',
      publishDate: '2024년 1월 28일',
      image: '👶'
    },
    {
      id: 'investment-strategy-guide',
      title: '초보자를 위한 투자 전략 가이드: 주식 vs 펀드 vs ETF',
      description: '투자 초보자를 위한 완벽 가이드. 주식, 펀드, ETF의 차이점과 연령별 포트폴리오 구성 전략까지 상세 설명합니다.',
      category: '투자 전략',
      readTime: '9분',
      publishDate: '2024년 1월 30일',
      image: '📊'
    }
  ];

  return (
    <Container className="mt-5 mb-5" style={{ maxWidth: '1000px' }}>
      <div className="text-center mb-5">
        <h1 className="mb-4" style={{ 
          fontSize: '2.2rem', 
          fontWeight: '300', 
          color: '#2c3e50',
          letterSpacing: '-0.02em'
        }}>
          가계산 블로그
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#5a6c7d', 
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          계산기 활용 가이드와 실생활 재정 관리 노하우
          <br />
          <span style={{ color: '#7f8c8d' }}>전문가가 직접 작성한 실용적인 금융 정보</span>
        </p>
      </div>

      <Row className="g-4">
        {blogPosts.map((post, index) => (
          <Col lg={6} key={index}>
            <Card 
              className="h-100 border-0" 
              style={{ 
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    style={{ 
                      fontSize: '2rem',
                      marginRight: '12px'
                    }}
                  >
                    {post.image}
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span 
                        className="badge"
                        style={{ 
                          background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
                          color: 'white',
                          fontSize: '0.7rem'
                        }}
                      >
                        {post.category}
                      </span>
                      <small className="text-muted">{post.readTime} 읽기</small>
                    </div>
                    <small className="text-muted">{post.publishDate}</small>
                  </div>
                </div>

                <Card.Title 
                  className="mb-3" 
                  style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    color: '#2c3e50',
                    lineHeight: '1.4'
                  }}
                >
                  {post.title}
                </Card.Title>

                <Card.Text 
                  className="mb-4" 
                  style={{ 
                    fontSize: '0.9rem', 
                    lineHeight: '1.5',
                    color: '#6c757d'
                  }}
                >
                  {post.description}
                </Card.Text>

                <Link 
                  to={`/blog/${post.id}`} 
                  className="btn"
                  style={{ 
                    fontSize: '0.9rem', 
                    padding: '8px 20px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
                    border: 'none',
                    color: 'white',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #55a3ff 0%, #0770c1 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)';
                  }}
                >
                  글 읽기
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <SocialShare 
            title="가계산 블로그 - 계산기 활용 가이드와 재정 관리 팁"
            description="전문가가 직접 작성한 실용적인 금융 정보와 계산기 활용법을 확인하세요"
            hashtags={['가계산블로그', '재정관리', '계산기활용', '금융정보']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;