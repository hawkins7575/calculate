import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const RetirementPlanningGuide = () => {
  useEffect(() => {
    document.title = '퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까? | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DC형과 DB형 퇴직연금의 차이점과 개인별 최적의 선택 기준을 알아보세요. 퇴직금 계산법과 퇴직연금 운용 전략까지 완벽 가이드.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'DC형과 DB형 퇴직연금의 차이점과 개인별 최적의 선택 기준을 알아보세요. 퇴직금 계산법과 퇴직연금 운용 전략까지 완벽 가이드.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '퇴직금, 퇴직연금, DC형, DB형, 퇴직금 계산, 퇴직연금 운용, 퇴직 준비, 퇴직금 vs 퇴직연금');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '퇴직금, 퇴직연금, DC형, DB형, 퇴직금 계산, 퇴직연금 운용, 퇴직 준비, 퇴직금 vs 퇴직연금';
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

    addOpenGraphTag('og:title', '퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까?');
    addOpenGraphTag('og:description', 'DC형과 DB형 퇴직연금의 차이점과 개인별 최적의 선택 기준을 알아보세요.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/retirement-planning`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까?",
      "description": "DC형과 DB형 퇴직연금의 차이점과 개인별 최적의 선택 기준을 알아보세요.",
      "url": `${window.location.origin}/blog/retirement-planning`,
      "datePublished": "2024-01-05",
      "dateModified": "2024-01-05",
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
        "@id": `${window.location.origin}/blog/retirement-planning`
      },
      "keywords": ["퇴직금", "퇴직연금", "DC형", "DB형", "퇴직 준비"],
      "wordCount": 3200,
      "inLanguage": "ko-KR",
      "articleSection": "퇴직 준비"
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
                퇴직 준비 가이드
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
                🏦 퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까?
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-success">퇴직 준비</span>
                <span>📅 2024년 1월 5일</span>
                <span>⏱️ 8분 읽기</span>
                <span>👁️ DC형 vs DB형</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 퇴직금과 퇴직연금 중 선택을 고민하는 직장인
                <br />• DC형과 DB형 퇴직연금의 차이가 궁금한 분
                <br />• 퇴직연금 운용 방법을 알고 싶은 분
                <br />• 퇴직 후 노후 자금 계획을 세우려는 분
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 핵심 비교: 퇴직금 vs 퇴직연금
                </h2>
                
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>구분</th>
                      <th>퇴직금</th>
                      <th>DB형 퇴직연금</th>
                      <th>DC형 퇴직연금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>운용 주체</strong></td>
                      <td>회사</td>
                      <td>회사</td>
                      <td><span className="text-primary">개인</span></td>
                    </tr>
                    <tr>
                      <td><strong>수익률</strong></td>
                      <td>연 1~3%</td>
                      <td>연 2~4%</td>
                      <td><span className="text-success">연 -2~10%</span></td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>리스크</strong></td>
                      <td>낮음</td>
                      <td>낮음</td>
                      <td>중간~높음</td>
                    </tr>
                    <tr>
                      <td><strong>중간인출</strong></td>
                      <td>불가능</td>
                      <td>제한적</td>
                      <td><span className="text-primary">가능</span></td>
                    </tr>
                    <tr>
                      <td><strong>세제 혜택</strong></td>
                      <td>퇴직소득세</td>
                      <td>퇴직소득세</td>
                      <td><span className="text-success">연금소득세</span></td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-success">
                  <strong>💰 결론:</strong> 장기 투자에 자신이 있고 적극적 운용을 원한다면 DC형, 안정성을 중시한다면 DB형이 유리합니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 퇴직연금 유형별 상세 분석
                </h2>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Header className="bg-primary text-white">
                        <h5 className="mb-0">🏛️ DB형 (확정급여)</h5>
                      </Card.Header>
                      <Card.Body>
                        <h6 className="text-primary">장점</h6>
                        <ul className="mb-3">
                          <li>안정적인 수익 보장</li>
                          <li>회사가 운용 책임</li>
                          <li>최저수익률 보장</li>
                          <li>운용에 신경 쓸 필요 없음</li>
                        </ul>
                        
                        <h6 className="text-danger">단점</h6>
                        <ul className="mb-3">
                          <li>낮은 수익률 (연 2-4%)</li>
                          <li>개인 선택권 제한</li>
                          <li>인플레이션 대응 한계</li>
                        </ul>
                        
                        <div className="bg-light p-2 rounded">
                          <strong>추천 대상:</strong><br/>
                          • 안정성 중시하는 분<br/>
                          • 투자 경험이 부족한 분<br/>
                          • 50세 이상 직장인
                        </div>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Header className="bg-success text-white">
                        <h5 className="mb-0">📈 DC형 (확정기여)</h5>
                      </Card.Header>
                      <Card.Body>
                        <h6 className="text-success">장점</h6>
                        <ul className="mb-3">
                          <li>높은 수익률 가능성</li>
                          <li>개인 맞춤 운용</li>
                          <li>중간인출 가능</li>
                          <li>연금소득세 혜택</li>
                        </ul>
                        
                        <h6 className="text-danger">단점</h6>
                        <ul className="mb-3">
                          <li>운용 손실 위험</li>
                          <li>개인 책임</li>
                          <li>지속적 관리 필요</li>
                        </ul>
                        
                        <div className="bg-light p-2 rounded">
                          <strong>추천 대상:</strong><br/>
                          • 투자 경험이 있는 분<br/>
                          • 적극적 자산 증식 원하는 분<br/>
                          • 20-40대 직장인
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🧮 퇴직금 계산 방법
                </h2>

                <Card className="border-0 bg-light mb-4">
                  <Card.Body>
                    <h5 className="text-center mb-4">퇴직금 = 평균임금 × 근속연수 × 30일</h5>
                    
                    <div className="calculation-example p-4 bg-white rounded">
                      <h6 className="text-primary">📝 계산 예시</h6>
                      <div className="mb-3">
                        <strong>조건:</strong> 월급 300만원, 근속 5년, 퇴직 전 3개월 평균임금 300만원
                      </div>
                      
                      <div className="step mb-2">
                        <strong>1단계:</strong> 평균임금 계산<br/>
                        → 최근 3개월 평균: 300만원
                      </div>
                      
                      <div className="step mb-2">
                        <strong>2단계:</strong> 30일분 계산<br/>
                        → 300만원 ÷ 30일 × 30일 = 300만원
                      </div>
                      
                      <div className="step mb-2">
                        <strong>3단계:</strong> 근속연수 곱하기<br/>
                        → 300만원 × 5년 = <span className="text-success"><strong>1,500만원</strong></span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <div className="alert alert-warning">
                  <strong>⚠️ 주의사항:</strong>
                  <ul className="mb-0">
                    <li>• 근속연수가 1년 미만인 경우: 월할계산</li>
                    <li>• 평균임금에는 상여금, 수당도 포함</li>
                    <li>• 계속근로기간 1년에 대해 30일분 이상</li>
                  </ul>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💼 상황별 최적 선택 가이드
                </h2>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <Card className="h-100 border-0 bg-light">
                      <Card.Body className="text-center">
                        <h5 className="text-primary">👶 20-30대</h5>
                        <div className="recommendation bg-primary text-white p-2 rounded mb-2">
                          <strong>DC형 추천</strong>
                        </div>
                        <ul className="list-unstyled small">
                          <li>• 긴 투자 기간</li>
                          <li>• 위험 감수 능력</li>
                          <li>• 높은 수익률 추구</li>
                          <li>• 학습 능력</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-4 mb-3">
                    <Card className="h-100 border-0 bg-light">
                      <Card.Body className="text-center">
                        <h5 className="text-warning">💼 40대</h5>
                        <div className="recommendation bg-warning text-dark p-2 rounded mb-2">
                          <strong>개인 성향별</strong>
                        </div>
                        <ul className="list-unstyled small">
                          <li>• 투자 경험 있으면 DC형</li>
                          <li>• 안정 선호시 DB형</li>
                          <li>• 자녀 교육비 고려</li>
                          <li>• 중간인출 필요성</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-4 mb-3">
                    <Card className="h-100 border-0 bg-light">
                      <Card.Body className="text-center">
                        <h5 className="text-success">👴 50대+</h5>
                        <div className="recommendation bg-success text-white p-2 rounded mb-2">
                          <strong>DB형 추천</strong>
                        </div>
                        <ul className="list-unstyled small">
                          <li>• 짧은 투자 기간</li>
                          <li>• 원본 보장 중요</li>
                          <li>• 안정적 노후 준비</li>
                          <li>• 위험 회피</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 DC형 퇴직연금 운용 전략
                </h2>

                <div className="strategy-cards">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-primary">📈 연령별 자산 배분</h5>
                      <Table size="sm" className="mt-3">
                        <thead>
                          <tr>
                            <th>연령대</th>
                            <th>주식형</th>
                            <th>채권형</th>
                            <th>원리금보장</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>20-30대</td>
                            <td className="text-success"><strong>60-80%</strong></td>
                            <td>20-30%</td>
                            <td>0-10%</td>
                          </tr>
                          <tr>
                            <td>40대</td>
                            <td className="text-warning"><strong>40-60%</strong></td>
                            <td>30-40%</td>
                            <td>10-20%</td>
                          </tr>
                          <tr>
                            <td>50대+</td>
                            <td>20-40%</td>
                            <td className="text-primary"><strong>40-60%</strong></td>
                            <td>20-40%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-success">💡 운용 원칙</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>✅ DO</h6>
                          <ul className="text-success">
                            <li>장기 투자 관점</li>
                            <li>분산 투자</li>
                            <li>정기적 리밸런싱</li>
                            <li>적립식 투자</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6>❌ DON'T</h6>
                          <ul className="text-danger">
                            <li>단기 수익률에 일희일비</li>
                            <li>빈번한 상품 변경</li>
                            <li>감정적 투자 판단</li>
                            <li>모든 자금을 한 곳에</li>
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💰 세제 혜택 비교
                </h2>

                <Table striped bordered hover responsive>
                  <thead className="table-info">
                    <tr>
                      <th>구분</th>
                      <th>퇴직금</th>
                      <th>퇴직연금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>소득 구분</strong></td>
                      <td>퇴직소득</td>
                      <td>연금소득</td>
                    </tr>
                    <tr>
                      <td><strong>세율</strong></td>
                      <td>3.3~49.5%</td>
                      <td className="text-success"><strong>3.3~46.2%</strong></td>
                    </tr>
                    <tr>
                      <td><strong>공제</strong></td>
                      <td>퇴직소득공제</td>
                      <td className="text-success"><strong>연금소득공제</strong></td>
                    </tr>
                    <tr>
                      <td><strong>세액공제</strong></td>
                      <td>없음</td>
                      <td className="text-success"><strong>연간 400만원</strong></td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-success">
                  <strong>💰 절세 효과:</strong> 퇴직연금을 연금으로 수령 시 퇴직금 대비 평균 200-500만원 절세 가능
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  ❓ 자주 묻는 질문 (FAQ)
                </h2>

                <div className="accordion">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q1. 퇴직연금을 중간에 인출할 수 있나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      DC형의 경우 주택구입, 의료비, 천재지변 등 특정 사유에 해당하면 중간인출이 가능합니다. 
                      단, 세금과 중도인출 수수료가 발생할 수 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q2. 회사를 옮길 때 퇴직연금은 어떻게 되나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      개인형 퇴직연금(IRP)으로 이관됩니다. 새 직장의 퇴직연금과 통합하거나 
                      개별적으로 운용할 수 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q3. 퇴직연금도 상속이 가능한가요?</strong>
                    </Card.Header>
                    <Card.Body>
                      네, 가능합니다. 퇴직연금은 상속재산에서 제외되어 상속세 부담이 적고, 
                      유족연금 형태로 수령할 수도 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q4. 퇴직연금 운용 상품은 언제든 변경할 수 있나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      DC형의 경우 분기별 1회 또는 연 4회까지 무료로 변경 가능합니다. 
                      단, 금융회사별로 조건이 다를 수 있으니 확인이 필요합니다.
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-primary">
                  <h5 className="alert-heading">🧮 퇴직금 미리 계산해보세요!</h5>
                  <p className="mb-0">
                    가계산의 <Link to="/retirement" className="alert-link"><strong>퇴직금 계산기</strong></Link>에서 
                    본인의 근무 조건을 입력하여 예상 퇴직금을 계산해보세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="퇴직금 vs 퇴직연금: 어떤 것이 더 유리할까?"
                  description="DC형과 DB형 퇴직연금의 차이점과 개인별 최적의 선택 기준을 알아보세요"
                  hashtags={['퇴직연금', '퇴직금', 'DC형', 'DB형', '노후준비']}
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

export default RetirementPlanningGuide;