import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const InheritanceTaxGuide = () => {
  useEffect(() => {
    document.title = '상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능 | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '상속세와 증여세 절세 전략을 실제 사례로 설명합니다. 배우자 공제, 가업승계 공제, 생전증여 등 합법적 절세 방법을 알아보세요.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '상속세와 증여세 절세 전략을 실제 사례로 설명합니다. 배우자 공제, 가업승계 공제, 생전증여 등 합법적 절세 방법을 알아보세요.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '상속세, 증여세, 상속세 절세, 증여세 절세, 상속세 계산, 배우자 공제, 가업승계, 생전증여');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '상속세, 증여세, 상속세 절세, 증여세 절세, 상속세 계산, 배우자 공제, 가업승계, 생전증여';
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

    addOpenGraphTag('og:title', '상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능');
    addOpenGraphTag('og:description', '상속세와 증여세 절세 전략을 실제 사례로 설명합니다.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/inheritance-tax-guide`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능",
      "description": "상속세와 증여세 절세 전략을 실제 사례로 설명합니다.",
      "url": `${window.location.origin}/blog/inheritance-tax-guide`,
      "datePublished": "2024-01-20",
      "dateModified": "2024-01-20",
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
        "@id": `${window.location.origin}/blog/inheritance-tax-guide`
      },
      "keywords": ["상속세", "증여세", "상속세 절세", "배우자 공제", "가업승계"],
      "wordCount": 3500,
      "inLanguage": "ko-KR",
      "articleSection": "세무 정보"
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
                상속세 가이드
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
                💎 상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-info">세무 정보</span>
                <span>📅 2024년 1월 20일</span>
                <span>⏱️ 10분 읽기</span>
                <span>👁️ 절세 전략</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 부모님의 자산 상속을 준비하는 분
                <br />• 자녀에게 증여를 계획하는 분
                <br />• 상속세와 증여세 절세 방법이 궁금한 분
                <br />• 가업승계를 준비하는 사업자
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 핵심 요약: 상속세 vs 증여세
                </h2>
                
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>구분</th>
                      <th>상속세</th>
                      <th>증여세</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>기본공제</strong></td>
                      <td className="text-success">5억원</td>
                      <td>1천만원</td>
                    </tr>
                    <tr>
                      <td><strong>배우자 공제</strong></td>
                      <td className="text-success">최대 30억원</td>
                      <td>6억원 (10년간)</td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>세율</strong></td>
                      <td>10~50%</td>
                      <td>10~50%</td>
                    </tr>
                    <tr>
                      <td><strong>신고기한</strong></td>
                      <td>상속개시일부터 6개월</td>
                      <td>증여일부터 3개월</td>
                    </tr>
                    <tr>
                      <td><strong>납부방법</strong></td>
                      <td>연부연납, 물납 가능</td>
                      <td>연부연납 가능</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-success">
                  <strong>💰 핵심 전략:</strong> 생전증여를 통해 상속재산을 미리 이전하면 더 많은 공제 혜택을 받을 수 있습니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 상속세 계산 구조
                </h2>

                <Card className="border-0 bg-light mb-4">
                  <Card.Body>
                    <h5 className="text-center mb-4">상속세 = (상속재산 - 공제액) × 세율 - 세액공제</h5>
                    
                    <div className="calculation-flow">
                      <div className="step mb-3 p-3 bg-white rounded">
                        <strong>1단계: 상속재산 평가</strong>
                        <ul className="mt-2 mb-0">
                          <li>부동산: 공시지가 × 0.8~1.2</li>
                          <li>주식: 평가기준일 시가</li>
                          <li>예금: 사망일 잔액</li>
                          <li>부채: 실제 부채액 차감</li>
                        </ul>
                      </div>

                      <div className="step mb-3 p-3 bg-white rounded">
                        <strong>2단계: 공제액 계산</strong>
                        <ul className="mt-2 mb-0">
                          <li>기본공제: 5억원</li>
                          <li>배우자 공제: 5억원 ~ 30억원</li>
                          <li>자녀공제: 1인당 5천만원</li>
                          <li>미성년자 공제: 1천만원 × (19-나이)</li>
                          <li>연로자 공제: 65세 이상 5천만원</li>
                          <li>장애인 공제: 1천만원 × (기대여명-나이)</li>
                        </ul>
                      </div>

                      <div className="step p-3 bg-primary text-white rounded">
                        <strong>3단계: 세율 적용</strong>
                        <div className="mt-2">
                          과세표준에 따라 10% ~ 50% 누진세율 적용
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💡 실제 절세 사례 분석
                </h2>

                <div className="case-studies">
                  <Card className="mb-4 border-success">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">📈 사례 1: 10억 자산, 세금 0원 달성</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="case-info mb-3">
                        <strong>가정:</strong> 부(父) 자산 10억원, 모(母) 생존, 자녀 2명
                      </div>
                      
                      <div className="strategy mb-3">
                        <strong>전략:</strong>
                        <ol>
                          <li><strong>배우자 상속:</strong> 5억원 → 배우자공제로 세금 0원</li>
                          <li><strong>자녀 상속:</strong> 5억원 → 기본공제 5억원으로 세금 0원</li>
                        </ol>
                      </div>

                      <div className="calculation bg-light p-3 rounded">
                        <strong>계산:</strong><br/>
                        • 배우자 상속분: 5억원 - 배우자공제 5억원 = 0원<br/>
                        • 자녀 상속분: 5억원 - 기본공제 5억원 = 0원<br/>
                        <span className="text-success"><strong>총 상속세: 0원</strong></span>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-primary">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">🏠 사례 2: 30억 자산, 증여 + 상속 전략</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="case-info mb-3">
                        <strong>가정:</strong> 부모 자산 30억원, 자녀 2명, 10년 계획
                      </div>
                      
                      <div className="strategy mb-3">
                        <strong>전략:</strong>
                        <ol>
                          <li><strong>생전증여:</strong> 10년간 연 2억원씩 증여 (배우자 6억+자녀 각 7억)</li>
                          <li><strong>상속:</strong> 나머지 10억원 상속시 공제 활용</li>
                        </ol>
                      </div>

                      <Table size="sm" className="mb-3">
                        <thead>
                          <tr>
                            <th>연도</th>
                            <th>증여액</th>
                            <th>증여세</th>
                            <th>비고</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1~10년</td>
                            <td>연 2억원</td>
                            <td>연 800만원</td>
                            <td>10년간 총 8천만원</td>
                          </tr>
                          <tr className="table-success">
                            <td>상속시</td>
                            <td>10억원</td>
                            <td>0원</td>
                            <td>각종 공제 적용</td>
                          </tr>
                        </tbody>
                      </Table>

                      <div className="result bg-success text-white p-3 rounded">
                        <strong>결과:</strong> 총 세부담 8천만원 (일반 상속시 6억원 대비 85% 절세)
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 절세 전략별 상세 가이드
                </h2>

                <div className="tax-strategies">
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-info text-white">
                      <h5 className="mb-0">1️⃣ 생전증여 전략</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-primary">연간 증여한도 (세금 0원)</h6>
                          <ul>
                            <li><strong>배우자:</strong> 6억원</li>
                            <li><strong>직계존비속:</strong> 5천만원</li>
                            <li><strong>기타 친족:</strong> 1천만원</li>
                            <li><strong>타인:</strong> 500만원</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6 className="text-success">장점</h6>
                          <ul>
                            <li>미래 자산 증가분 절세</li>
                            <li>매년 공제한도 활용</li>
                            <li>상속재산 사전 감소</li>
                            <li>가족 간 자산 분산</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="tip bg-light p-3 rounded mt-3">
                        <strong>💡 Tip:</strong> 부동산보다는 현금이나 주식으로 증여하면 평가 논란을 피할 수 있습니다.
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">2️⃣ 가업승계 공제</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="requirements mb-3">
                        <h6 className="text-primary">적용 요건</h6>
                        <ul>
                          <li>중소기업 또는 중견기업</li>
                          <li>10년 이상 계속 경영</li>
                          <li>상속인이 7년 이상 경영 참여</li>
                          <li>고용 유지 의무 (5년간)</li>
                        </ul>
                      </div>

                      <Table size="sm" responsive>
                        <thead>
                          <tr>
                            <th>기업 규모</th>
                            <th>공제한도</th>
                            <th>세부담</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>중소기업</td>
                            <td className="text-success">200억원</td>
                            <td>최대 95% 감면</td>
                          </tr>
                          <tr>
                            <td>중견기업</td>
                            <td className="text-warning">100억원</td>
                            <td>최대 90% 감면</td>
                          </tr>
                        </tbody>
                      </Table>

                      <div className="warning bg-warning p-3 rounded">
                        <strong>⚠️ 주의:</strong> 사후관리 의무를 위반하면 감면받은 세액을 추징당할 수 있습니다.
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-warning text-dark">
                      <h5 className="mb-0">3️⃣ 부동산 절세 전략</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="real-estate-strategies">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-primary">평가 절세</h6>
                            <ul>
                              <li>공시지가 기준 평가</li>
                              <li>소규모 택지 20% 감액</li>
                              <li>농지 20~30% 감액</li>
                              <li>임대주택 30% 감액</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-success">활용 방법</h6>
                            <ul>
                              <li>증여 후 개발로 시세 상승</li>
                              <li>부동산 대신 건축 중 증여</li>
                              <li>법인화를 통한 주식 증여</li>
                              <li>임대사업자 등록 활용</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-danger text-white">
                      <h5 className="mb-0">4️⃣ 보험 활용 전략</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="insurance-benefits">
                        <h6 className="text-primary">생명보험 활용</h6>
                        <ul className="mb-3">
                          <li><strong>상속세 납부용:</strong> 보험금으로 세금 납부</li>
                          <li><strong>평가 절세:</strong> 보험료 &lt; 해약환급금</li>
                          <li><strong>유동성 확보:</strong> 현금 부족 해결</li>
                          <li><strong>상속재산 제외:</strong> 수익자 지정시</li>
                        </ul>

                        <div className="example bg-light p-3 rounded">
                          <strong>📝 예시:</strong><br/>
                          70세, 5억원 자산 → 연 1000만원 보험료 5년 납부<br/>
                          → 사망시 보험금 3억원 수령 → 상속재산 2억원만 과세
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📅 상속세 신고 및 납부 절차
                </h2>

                <div className="procedure-timeline">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <div className="timeline-item">
                        <h5 className="text-primary">📋 1단계: 신고 준비 (상속개시 후 1-3개월)</h5>
                        <ul>
                          <li>상속재산 목록 작성</li>
                          <li>부채 및 공과금 정리</li>
                          <li>상속인 확정 및 분할협의</li>
                          <li>필요 서류 수집</li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <div className="timeline-item">
                        <h5 className="text-success">💰 2단계: 신고 및 납부 (6개월 이내)</h5>
                        <ul>
                          <li>상속세 신고서 작성</li>
                          <li>관할 세무서 제출</li>
                          <li>상속세 납부 (일시납부 원칙)</li>
                          <li>부동산 소유권 이전 등기</li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <div className="timeline-item">
                        <h5 className="text-warning">🔍 3단계: 사후 관리</h5>
                        <ul>
                          <li>세무조사 대응 준비</li>
                          <li>연부연납/물납 관리</li>
                          <li>가업승계 사후관리 의무 이행</li>
                          <li>추가 증여 계획 수립</li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  ❓ 자주 묻는 질문 (FAQ)
                </h2>

                <div className="accordion">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q1. 상속포기를 하면 상속세 부담이 없나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      상속포기를 하면 상속세 납부 의무는 없지만, 다른 상속인의 상속세 부담이 증가할 수 있습니다. 
                      가족 전체의 세부담을 고려하여 결정해야 합니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q2. 해외 자산도 상속세를 납부해야 하나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      국내 거주자의 경우 국내외 모든 자산이 상속세 과세대상입니다. 
                      다만, 해외에서 납부한 세액은 국내 상속세에서 공제받을 수 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q3. 증여세를 납부한 후 10년 내 상속이 발생하면?</strong>
                    </Card.Header>
                    <Card.Body>
                      증여받은 재산은 상속재산에 합산되어 상속세가 계산됩니다. 
                      다만, 기납부한 증여세는 상속세에서 공제됩니다.
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q4. 상속세를 낼 현금이 부족하면 어떻게 하나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      연부연납(5년 분할납부) 또는 물납(부동산 등으로 납부)을 신청할 수 있습니다. 
                      단, 일정한 요건을 충족해야 하며 이자가 발생합니다.
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-primary">
                  <h5 className="alert-heading">🧮 상속세 미리 계산해보세요!</h5>
                  <p className="mb-0">
                    가계산의 <Link to="/inheritance-tax" className="alert-link"><strong>상속세 계산기</strong></Link>에서 
                    본인의 자산 규모와 가족 상황에 따른 예상 상속세를 계산해보세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="상속세 절세 완벽 가이드: 10억 자산도 세금 0원 가능"
                  description="상속세와 증여세 절세 전략을 실제 사례로 설명합니다"
                  hashtags={['상속세', '증여세', '절세', '상속세계산', '세무정보']}
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

export default InheritanceTaxGuide;