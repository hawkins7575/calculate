import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const CompoundInterestGuide = () => {
  useEffect(() => {
    // 페이지 제목 및 메타 태그 설정
    document.title = '20대를 위한 복리 투자 시작 가이드 | 가계산 블로그';
    
    // 메타 설명
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '월 10만원으로 시작하는 복리 투자 완벽 가이드. 20대 투자 전략, 실제 계산 예시, 상품 선택 방법까지 전문가가 직접 설명합니다.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '월 10만원으로 시작하는 복리 투자 완벽 가이드. 20대 투자 전략, 실제 계산 예시, 상품 선택 방법까지 전문가가 직접 설명합니다.';
      document.head.appendChild(newMetaDescription);
    }

    // 키워드 메타 태그
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '20대 투자, 복리 투자, 복리 계산기, 월 10만원 투자, 투자 시작, 복리 효과, 장기 투자, ETF 투자, 적금 vs 투자');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '20대 투자, 복리 투자, 복리 계산기, 월 10만원 투자, 투자 시작, 복리 효과, 장기 투자, ETF 투자, 적금 vs 투자';
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

    addOpenGraphTag('og:title', '20대를 위한 복리 투자 시작 가이드');
    addOpenGraphTag('og:description', '월 10만원으로 시작하는 복리 투자 완벽 가이드. 20대 투자 전략과 실제 계산 예시를 통해 투자의 기본을 익혀보세요.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/compound-interest-guide`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    // 구조화된 데이터 (JSON-LD) 추가
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "20대를 위한 복리 투자 시작 가이드",
      "description": "월 10만원으로 시작하는 복리 투자 완벽 가이드. 20대 투자 전략, 실제 계산 예시, 상품 선택 방법까지 전문가가 직접 설명합니다.",
      "image": `${window.location.origin}/logo192.png`,
      "author": {
        "@type": "Organization",
        "name": "가계산",
        "url": window.location.origin
      },
      "publisher": {
        "@type": "Organization",
        "name": "가계산",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo192.png`
        }
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${window.location.origin}/blog/compound-interest-guide`
      },
      "keywords": ["20대 투자", "복리 투자", "복리 계산기", "월 10만원 투자", "투자 시작", "복리 효과", "장기 투자", "ETF 투자"],
      "articleSection": "투자 가이드",
      "wordCount": 2500,
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

    // 정리 함수
    return () => {
      // 컴포넌트 언마운트 시 메타 태그들을 기본값으로 복원할 수 있음
    };
  }, []);

  return (
    <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
      {/* 블로그 헤더 */}
      <div className="mb-4">
        <Link 
          to="/blog" 
          className="btn btn-outline-secondary btn-sm mb-3"
          style={{ textDecoration: 'none' }}
        >
          ← 블로그 목록으로
        </Link>
        
        <div className="d-flex align-items-center gap-2 mb-3">
          <span 
            className="badge"
            style={{ 
              background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
              color: 'white',
              fontSize: '0.8rem'
            }}
          >
            복리 투자
          </span>
          <small className="text-muted">5분 읽기 • 2024년 1월 15일</small>
        </div>
        
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700',
          color: '#2c3e50',
          lineHeight: '1.3',
          marginBottom: '1rem'
        }}>
          20대를 위한 복리 투자 시작 가이드
        </h1>
        
        <p className="lead text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          월 10만원으로 시작하는 복리 투자, 20대가 알아야 할 투자의 기본 원리와 실전 전략을 자세히 알아보세요.
        </p>
      </div>

      {/* 블로그 본문 */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333' }}>
          
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            💡 복리의 마법, 왜 20대에 시작해야 할까?
          </h2>
          
          <p>
            "복리는 세계 8번째 불가사의다. 이를 이해하는 자는 벌고, 그렇지 못한 자는 빼앗긴다." - 아인슈타인의 말처럼, 복리의 힘은 시간이 지날수록 기하급수적으로 커집니다.
          </p>
          
          <p>
            특히 20대는 <strong>시간</strong>이라는 가장 큰 자산을 가지고 있습니다. 같은 금액을 투자하더라도 시작 시점에 따라 결과는 천차만별이 됩니다.
          </p>

          <div className="bg-light p-4 rounded mb-4">
            <h4 style={{ color: '#0984e3' }}>📊 실제 계산 예시</h4>
            <p className="mb-2"><strong>조건:</strong> 매월 10만원 투자, 연 7% 수익률</p>
            <ul>
              <li><strong>25세 시작 (40년간)</strong>: 약 <span className="text-primary fw-bold">2억 6천만원</span></li>
              <li><strong>35세 시작 (30년간)</strong>: 약 <span className="text-warning fw-bold">1억 2천만원</span></li>
              <li><strong>차이:</strong> <span className="text-danger fw-bold">1억 4천만원</span> (10년 늦게 시작하면 절반 이상 손실!)</li>
            </ul>
            <p className="mb-0">
              <Link to="/compound-interest" className="btn btn-primary btn-sm">
                🧮 복리 계산기로 직접 확인하기
              </Link>
            </p>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🎯 20대를 위한 복리 투자 전략
          </h2>

          <h3 style={{ color: '#495057', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            1. 소액부터 시작하기
          </h3>
          <p>
            "큰 금액이 있어야 투자를 시작할 수 있다"는 생각은 금물입니다. 월 5만원, 10만원부터라도 시작하는 것이 중요합니다.
          </p>
          <ul>
            <li><strong>월 5만원:</strong> 부담 없이 시작 가능한 금액</li>
            <li><strong>월 10만원:</strong> 복리 효과를 실감할 수 있는 적정 금액</li>
            <li><strong>월 20만원 이상:</strong> 적극적인 자산 형성 단계</li>
          </ul>

          <h3 style={{ color: '#495057', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            2. 안전하고 꾸준한 상품 선택
          </h3>
          <p>20대 초보 투자자에게 추천하는 상품들:</p>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card border-0 bg-light h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-success">🏦 적금 (초보자용)</h5>
                  <ul className="list-unstyled small">
                    <li>• <strong>연 2-4%</strong> 안정적 수익</li>
                    <li>• 원금 보장</li>
                    <li>• 강제 저축 효과</li>
                    <li>• 금융 습관 형성</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 bg-light h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-primary">📈 ETF (중급자용)</h5>
                  <ul className="list-unstyled small">
                    <li>• <strong>연 5-8%</strong> 기대 수익</li>
                    <li>• 분산 투자 효과</li>
                    <li>• 낮은 수수료</li>
                    <li>• 장기 투자 적합</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ color: '#495057', fontSize: '1.3rem', marginTop: '1.5rem' }}>
            3. 자동화 시스템 구축
          </h3>
          <p>
            성공적인 복리 투자의 핵심은 <strong>꾸준함</strong>입니다. 감정에 휘둘리지 않고 자동으로 투자할 수 있는 시스템을 만드세요.
          </p>
          <ul>
            <li><strong>자동이체 설정:</strong> 매월 급여일 다음날 자동 투자</li>
            <li><strong>목표 금액 설정:</strong> 구체적인 목표와 달성 기간</li>
            <li><strong>정기 점검:</strong> 6개월마다 투자 성과 확인</li>
          </ul>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            ⚠️ 20대가 피해야 할 투자 실수
          </h2>

          <div className="alert alert-warning">
            <h5 className="alert-heading">❌ 이런 실수는 피하세요!</h5>
            <ul className="mb-0">
              <li><strong>단기 수익에 집착:</strong> 복리는 장기 게임입니다</li>
              <li><strong>고수익 상품 추구:</strong> 높은 수익률 = 높은 위험</li>
              <li><strong>중도 해지:</strong> 복리 효과가 사라집니다</li>
              <li><strong>감정적 판단:</strong> 시장 변동에 일희일비 금물</li>
            </ul>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🎉 지금 바로 시작하는 실행 계획
          </h2>

          <div className="bg-primary bg-opacity-10 p-4 rounded">
            <h4 style={{ color: '#0984e3' }}>📅 3단계 실행 가이드</h4>
            <ol>
              <li className="mb-2">
                <strong>1주차:</strong> 가계산 복리 계산기로 목표 금액 시뮬레이션
                <br />
                <Link to="/compound-interest" className="btn btn-outline-primary btn-sm mt-1">
                  복리 계산기 바로가기
                </Link>
              </li>
              <li className="mb-2">
                <strong>2주차:</strong> 투자 상품 선택 및 자동이체 설정</li>
              <li className="mb-0">
                <strong>3주차:</strong> 투자 일지 작성 시작 (매월 기록)</li>
            </ol>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            💰 성공 사례: 실제 20대의 복리 투자
          </h2>

          <blockquote className="blockquote border-start border-primary border-4 ps-3 py-2">
            <p className="mb-2">
              "대학교 4학년 때부터 매월 15만원씩 ETF에 투자를 시작했습니다. 
              처음에는 돈이 늘어나는 게 눈에 보이지 않아 답답했는데, 
              3년 후부터는 복리 효과가 눈에 띄게 나타났어요. 
              5년 만에 원금의 1.5배가 되었습니다!"
            </p>
            <footer className="blockquote-footer">
              직장인 김○○님 (28세, 투자 경력 5년)
            </footer>
          </blockquote>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🔗 관련 계산기 및 도구
          </h2>

          <div className="row">
            <div className="col-md-6 mb-3">
              <Link to="/compound-interest" className="text-decoration-none">
                <div className="card border border-primary">
                  <div className="card-body text-center">
                    <div className="display-6 mb-2">🧮</div>
                    <h6 className="card-title">복리 계산기</h6>
                    <p className="card-text small text-muted">
                      투자 목표 금액과 기간 계산
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-3">
              <Link to="/salary" className="text-decoration-none">
                <div className="card border border-success">
                  <div className="card-body text-center">
                    <div className="display-6 mb-2">💰</div>
                    <h6 className="card-title">실급여 계산기</h6>
                    <p className="card-text small text-muted">
                      투자 가능한 여유 자금 계산
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-4 pt-4 border-top">
            <p className="text-muted small">
              ⚠️ <strong>투자 유의사항:</strong> 모든 투자에는 원금 손실의 위험이 있습니다. 
              투자 결정은 충분한 정보 수집과 신중한 판단을 통해 이루어져야 하며, 
              본 글의 내용은 투자 권유가 아닌 정보 제공 목적입니다.
            </p>
          </div>

        </Card.Body>
      </Card>

      {/* 소셜 공유 */}
      <Row className="mt-5">
        <Col className="text-center">
          <SocialShare 
            title="20대를 위한 복리 투자 시작 가이드"
            description="월 10만원으로 시작하는 복리 투자, 20대가 알아야 할 투자의 기본 원리와 실전 전략"
            hashtags={['20대투자', '복리투자', '재테크', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CompoundInterestGuide;