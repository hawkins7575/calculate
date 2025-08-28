import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const LoanEarlyPaymentGuide = () => {
  useEffect(() => {
    document.title = '대출 조기상환 vs 투자: 수익률 비교 분석 | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '대출금리와 투자수익률을 고려한 합리적 선택 기준과 계산 방법을 제시합니다. 대출 조기상환과 투자의 손익분기점을 분석해보세요.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '대출금리와 투자수익률을 고려한 합리적 선택 기준과 계산 방법을 제시합니다. 대출 조기상환과 투자의 손익분기점을 분석해보세요.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '대출 조기상환, 대출 vs 투자, 주택담보대출, 대출금리, 투자수익률, 조기상환 계산, 대출 상환 전략');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '대출 조기상환, 대출 vs 투자, 주택담보대출, 대출금리, 투자수익률, 조기상환 계산, 대출 상환 전략';
      document.head.appendChild(newMetaKeywords);
    }

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

    addOpenGraphTag('og:title', '대출 조기상환 vs 투자: 수익률 비교 분석');
    addOpenGraphTag('og:description', '대출금리와 투자수익률을 고려한 합리적 선택 기준과 계산 방법을 제시합니다.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/loan-early-payment`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "대출 조기상환 vs 투자: 수익률 비교 분석",
      "description": "대출금리와 투자수익률을 고려한 합리적 선택 기준과 계산 방법을 제시합니다.",
      "url": `${window.location.origin}/blog/loan-early-payment`,
      "datePublished": "2024-01-03",
      "dateModified": "2024-01-03",
      "author": {
        "@type": "Organization",
        "name": "가계산"
      },
      "publisher": {
        "@type": "Organization",
        "name": "가계산",
        "url": window.location.origin,
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo192.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${window.location.origin}/blog/loan-early-payment`
      },
      "keywords": ["대출 조기상환", "대출 vs 투자", "주택담보대출", "투자수익률"],
      "wordCount": 2900,
      "inLanguage": "ko-KR",
      "articleSection": "대출 관리"
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

  return (
    <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
      <Row className="justify-content-center">
        <Col>
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb" style={{ background: 'none', padding: 0 }}>
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: '#6c757d', textDecoration: 'none' }}>홈</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog" style={{ color: '#6c757d', textDecoration: 'none' }}>블로그</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: '#495057' }}>
                대출 관리 가이드
              </li>
            </ol>
          </nav>

          <article>
            <header className="mb-5">
              <h1 style={{ 
                fontSize: '2.2rem', 
                fontWeight: '700', 
                color: '#2c3e50', 
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>
                🏧 대출 조기상환 vs 투자: 수익률 비교 분석
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-warning text-dark">대출 관리</span>
                <span>📅 2024년 1월 3일</span>
                <span>⏱️ 5분 읽기</span>
                <span>👁️ 손익분기점 분석</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 여유자금으로 대출을 갚을지 투자할지 고민하는 분
                <br />• 주택담보대출 조기상환을 고려 중인 분
                <br />• 대출금리와 투자수익률의 관계가 궁금한 분
                <br />• 합리적인 재정 관리 전략을 세우려는 분
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 핵심 결론: 언제 상환하고 언제 투자할까?
                </h2>
                
                <div className="decision-matrix mb-4">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Card className="h-100 border-success">
                        <Card.Header className="bg-success text-white">
                          <h5 className="mb-0">💰 조기상환 추천</h5>
                        </Card.Header>
                        <Card.Body>
                          <ul className="mb-3">
                            <li><strong>대출금리 4% 이상</strong></li>
                            <li>투자 경험이 부족한 경우</li>
                            <li>안정성을 중시하는 성향</li>
                            <li>50대 이후 연령층</li>
                            <li>변동금리 대출 보유</li>
                          </ul>
                          <div className="bg-light p-2 rounded">
                            <small><strong>확실한 수익:</strong> 대출금리만큼의 수익률 보장</small>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-md-6 mb-3">
                      <Card className="h-100 border-primary">
                        <Card.Header className="bg-primary text-white">
                          <h5 className="mb-0">📈 투자 추천</h5>
                        </Card.Header>
                        <Card.Body>
                          <ul className="mb-3">
                            <li><strong>대출금리 3% 이하</strong></li>
                            <li>투자 경험이 풍부한 경우</li>
                            <li>장기 투자 계획 보유</li>
                            <li>20-40대 연령층</li>
                            <li>고정금리 대출 보유</li>
                          </ul>
                          <div className="bg-light p-2 rounded">
                            <small><strong>높은 수익 가능:</strong> 대출금리보다 높은 수익률 기대</small>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning">
                  <strong>⚖️ 손익분기점:</strong> 투자수익률이 대출금리보다 약 1-2%p 높을 때 투자가 유리합니다. (세금과 리스크 고려)
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 시나리오별 수익률 비교
                </h2>

                <Table striped bordered hover responsive className="mb-4">
                  <thead className="table-dark">
                    <tr>
                      <th>대출금리</th>
                      <th>조기상환 효과</th>
                      <th>필요 투자수익률</th>
                      <th>추천 전략</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-success">
                      <td><strong>5% 이상</strong></td>
                      <td>연 5% 확정수익</td>
                      <td>7% 이상</td>
                      <td><span className="text-success">조기상환</span></td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>3-5%</strong></td>
                      <td>연 3-5% 확정수익</td>
                      <td>5-7%</td>
                      <td><span className="text-warning">개인 판단</span></td>
                    </tr>
                    <tr className="table-primary">
                      <td><strong>3% 이하</strong></td>
                      <td>연 3% 이하</td>
                      <td>4-5% 이상</td>
                      <td><span className="text-primary">투자 고려</span></td>
                    </tr>
                  </tbody>
                </Table>

                <Card className="border-0 bg-light">
                  <Card.Body>
                    <h5 className="text-center mb-3">💰 실제 계산 예시 (1,000만원 여유자금)</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <h6 className="text-success">🏧 조기상환 (금리 4%)</h6>
                        <ul className="small">
                          <li>절약 이자: 연 40만원</li>
                          <li>10년 절약액: 약 320만원</li>
                          <li>확실성: 100%</li>
                          <li>위험도: 없음</li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-3">
                        <h6 className="text-primary">📈 투자 (수익률 6%)</h6>
                        <ul className="small">
                          <li>예상 수익: 연 60만원</li>
                          <li>10년 복리수익: 약 790만원</li>
                          <li>확실성: 70-80%</li>
                          <li>위험도: 중간</li>
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🧮 정확한 계산 방법
                </h2>

                <div className="calculation-steps">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">1단계: 실질 대출금리 계산</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="formula mb-3">
                        <strong>실질금리 = 명목금리 × (1 - 세율)</strong>
                      </div>
                      <div className="example">
                        <strong>예시:</strong> 대출금리 4%, 소득세율 25%<br/>
                        → 실질금리 = 4% × (1 - 0.25) = <span className="text-primary">3%</span>
                      </div>
                      <small className="text-muted">※ 대출이자는 소득공제 혜택이 있을 수 있음</small>
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">2단계: 투자 후 세후수익률 계산</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="formula mb-3">
                        <strong>세후수익률 = 투자수익률 × (1 - 세율)</strong>
                      </div>
                      <div className="example">
                        <strong>예시:</strong> 투자수익률 6%, 자본이득세 20%<br/>
                        → 세후수익률 = 6% × (1 - 0.20) = <span className="text-success">4.8%</span>
                      </div>
                      <small className="text-muted">※ 투자 상품에 따라 세율이 다름</small>
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-warning text-dark">
                      <h5 className="mb-0">3단계: 비교 분석</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="comparison">
                        <strong>판단 기준:</strong><br/>
                        세후 투자수익률 &gt; 실질 대출금리 + 위험 프리미엄(1-2%)
                      </div>
                      <div className="example mt-3">
                        <strong>위 예시 결과:</strong><br/>
                        세후 투자수익률 4.8% &gt; 실질 대출금리 3% + 위험프리미엄 1.5% = 4.5%<br/>
                        → <span className="text-success">투자가 약간 유리</span>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-primary">
                  <h5 className="alert-heading">🧮 대출 이자 미리 계산해보세요!</h5>
                  <p className="mb-0">
                    가계산의 <Link to="/loan" className="alert-link"><strong>대출 계산기</strong></Link>에서 
                    조기상환 시뮬레이션과 이자 절약 효과를 계산해보세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="대출 조기상환 vs 투자: 수익률 비교 분석"
                  description="대출금리와 투자수익률을 고려한 합리적 선택 기준과 계산 방법"
                  hashtags={['대출조기상환', '투자', '대출관리', '재정계획']}
                  className="justify-content-center"
                />

                <div className="mt-4">
                  <Link 
                    to="/blog" 
                    className="btn btn-outline-primary btn-sm"
                    style={{ borderRadius: '20px', padding: '8px 24px' }}
                  >
                    ← 블로그 목록으로 돌아가기
                  </Link>
                </div>
              </footer>
            </main>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanEarlyPaymentGuide;