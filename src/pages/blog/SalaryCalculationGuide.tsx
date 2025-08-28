import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const SalaryCalculationGuide = () => {
  useEffect(() => {
    document.title = '연봉 3000만원, 실제로 받는 금액은 얼마? | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '4대보험과 소득세 공제 후 실제 수령액 계산법과 절세 방법을 상세하게 설명드립니다. 연봉별 실수령액과 세금 계산 방법까지 완벽 정리.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '4대보험과 소득세 공제 후 실제 수령액 계산법과 절세 방법을 상세하게 설명드립니다. 연봉별 실수령액과 세금 계산 방법까지 완벽 정리.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '실급여 계산, 연봉 실수령액, 4대보험, 소득세, 급여 계산기, 세금 계산, 실급여, 연봉 계산');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '실급여 계산, 연봉 실수령액, 4대보험, 소득세, 급여 계산기, 세금 계산, 실급여, 연봉 계산';
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

    addOpenGraphTag('og:title', '연봉 3000만원, 실제로 받는 금액은 얼마? | 가계산 블로그');
    addOpenGraphTag('og:description', '4대보험과 소득세 공제 후 실제 수령액 계산법과 절세 방법을 상세하게 설명드립니다.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/salary-calculation-guide`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "연봉 3000만원, 실제로 받는 금액은 얼마?",
      "description": "4대보험과 소득세 공제 후 실제 수령액 계산법과 절세 방법을 상세하게 설명드립니다.",
      "url": `${window.location.origin}/blog/salary-calculation-guide`,
      "datePublished": "2024-01-08",
      "dateModified": "2024-01-08",
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
        "@id": `${window.location.origin}/blog/salary-calculation-guide`
      },
      "keywords": ["실급여 계산", "연봉 실수령액", "4대보험", "소득세", "급여 계산기"],
      "wordCount": 2800,
      "inLanguage": "ko-KR",
      "articleSection": "급여 관리"
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
                급여 계산 가이드
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
                💰 연봉 3000만원, 실제로 받는 금액은 얼마?
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-primary">급여 관리</span>
                <span>📅 2024년 1월 8일</span>
                <span>⏱️ 6분 읽기</span>
                <span>👁️ 실급여 계산</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 취업 준비생이나 이직 고려 중인 직장인
                <br />• 실제 받을 급여가 궁금한 분
                <br />• 4대보험과 세금에 대해 알고 싶은 분
                <br />• 연봉 협상 전 실수령액을 미리 계산하고 싶은 분
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 핵심 요약: 연봉별 실수령액
                </h2>
                
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>연봉</th>
                      <th>세전 월급</th>
                      <th>실수령액</th>
                      <th>공제액</th>
                      <th>실수령 비율</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>2000만원</strong></td>
                      <td>167만원</td>
                      <td><strong>144만원</strong></td>
                      <td>23만원</td>
                      <td>86.2%</td>
                    </tr>
                    <tr>
                      <td><strong>2500만원</strong></td>
                      <td>208만원</td>
                      <td><strong>176만원</strong></td>
                      <td>32만원</td>
                      <td>84.6%</td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>3000만원</strong></td>
                      <td>250만원</td>
                      <td><strong>206만원</strong></td>
                      <td>44만원</td>
                      <td>82.4%</td>
                    </tr>
                    <tr>
                      <td><strong>3500만원</strong></td>
                      <td>292만원</td>
                      <td><strong>236만원</strong></td>
                      <td>56만원</td>
                      <td>80.8%</td>
                    </tr>
                    <tr>
                      <td><strong>4000만원</strong></td>
                      <td>333만원</td>
                      <td><strong>265만원</strong></td>
                      <td>68만원</td>
                      <td>79.5%</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-warning">
                  <strong>⚠️ 주의사항:</strong> 위 금액은 일반적인 계산이며, 개인의 상황(부양가족, 특별공제 등)에 따라 달라질 수 있습니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 급여에서 공제되는 항목들
                </h2>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body>
                        <h5 className="text-primary">🛡️ 4대보험 (약 9%)</h5>
                        <ul className="list-unstyled">
                          <li><strong>• 국민연금:</strong> 4.5% (상한 243만원)</li>
                          <li><strong>• 건강보험:</strong> 3.545%</li>
                          <li><strong>• 장기요양:</strong> 0.4091%</li>
                          <li><strong>• 고용보험:</strong> 0.9%</li>
                        </ul>
                        <small className="text-muted">
                          ※ 연봉 3000만원 기준: 월 22.5만원
                        </small>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body>
                        <h5 className="text-success">💸 소득세 (약 8-12%)</h5>
                        <ul className="list-unstyled">
                          <li><strong>• 소득세:</strong> 과세표준에 따라</li>
                          <li><strong>• 지방소득세:</strong> 소득세의 10%</li>
                          <li><strong>• 기본공제:</strong> 150만원</li>
                          <li><strong>• 근로소득공제:</strong> 연봉에 따라</li>
                        </ul>
                        <small className="text-muted">
                          ※ 연봉 3000만원 기준: 월 21.5만원
                        </small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🧮 실급여 계산 과정 (연봉 3000만원 기준)
                </h2>

                <Card className="border-0 bg-light">
                  <Card.Body>
                    <div className="calculation-steps">
                      <div className="step mb-3 p-3 bg-white rounded">
                        <strong>1단계: 월 급여 계산</strong>
                        <div className="mt-2">
                          연봉 3,000만원 ÷ 12개월 = <span className="text-primary"><strong>월 250만원</strong></span>
                        </div>
                      </div>

                      <div className="step mb-3 p-3 bg-white rounded">
                        <strong>2단계: 4대보험 공제</strong>
                        <div className="mt-2">
                          • 국민연금: 250만원 × 4.5% = 11.25만원<br/>
                          • 건강보험: 250만원 × 3.545% = 8.86만원<br/>
                          • 장기요양: 8.86만원 × 11.52% = 1.02만원<br/>
                          • 고용보험: 250만원 × 0.9% = 2.25만원<br/>
                          <strong>4대보험 합계: 23.38만원</strong>
                        </div>
                      </div>

                      <div className="step mb-3 p-3 bg-white rounded">
                        <strong>3단계: 소득세 계산</strong>
                        <div className="mt-2">
                          • 과세표준: 약 1,920만원 (각종 공제 후)<br/>
                          • 소득세: 약 18만원<br/>
                          • 지방소득세: 1.8만원<br/>
                          <strong>세금 합계: 19.8만원</strong>
                        </div>
                      </div>

                      <div className="step p-3 bg-primary text-white rounded">
                        <strong>최종 실수령액</strong>
                        <div className="mt-2" style={{ fontSize: '1.2rem' }}>
                          250만원 - 23.38만원 - 19.8만원 = <strong>206.82만원</strong>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💡 절세 방법과 실수령액 늘리기
                </h2>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <Card className="h-100 border-0 bg-light">
                      <Card.Body className="text-center">
                        <h5 className="text-primary">🏠 주택자금</h5>
                        <ul className="list-unstyled small">
                          <li>• 주택청약 240만원</li>
                          <li>• 주택담보대출 상환액</li>
                          <li>• 월세 공제 750만원</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-4 mb-3">
                    <Card className="h-100 border-0 bg-light">
                      <Card.Body className="text-center">
                        <h5 className="text-success">💰 연금저축</h5>
                        <ul className="list-unstyled small">
                          <li>• 연금저축 400만원</li>
                          <li>• IRP 700만원</li>
                          <li>• 세액공제 12-15%</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-4 mb-3">
                    <Card className="h-100 border-0 bg-light">
                      <Card.Body className="text-center">
                        <h5 className="text-warning">🎯 기타 공제</h5>
                        <ul className="list-unstyled small">
                          <li>• 신용카드 공제</li>
                          <li>• 의료비 공제</li>
                          <li>• 교육비 공제</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <div className="alert alert-success">
                  <strong>💰 절세 효과:</strong> 연금저축 400만원 가입 시 연간 48-60만원 세액공제로 월 4-5만원 추가 수령 가능
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🔄 연봉별 실수령 비교 차트
                </h2>

                <div className="salary-comparison mb-4">
                  {[
                    { salary: 2000, net: 1728, percentage: 86.4 },
                    { salary: 2500, net: 2112, percentage: 84.5 },
                    { salary: 3000, net: 2472, percentage: 82.4 },
                    { salary: 3500, net: 2832, percentage: 80.9 },
                    { salary: 4000, net: 3180, percentage: 79.5 },
                    { salary: 4500, net: 3510, percentage: 78.0 },
                    { salary: 5000, net: 3825, percentage: 76.5 }
                  ].map((item, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                      <span><strong>연봉 {item.salary}만원</strong></span>
                      <span>실수령 <strong>{item.net}만원</strong> ({item.percentage}%)</span>
                    </div>
                  ))}
                </div>

                <div className="alert alert-info">
                  <strong>📈 패턴 분석:</strong> 연봉이 높을수록 실수령 비율이 낮아집니다. 이는 누진세 구조 때문입니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  ❓ 자주 묻는 질문 (FAQ)
                </h2>

                <div className="accordion" id="salaryFAQ">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q1. 연봉 계약서와 실제 받는 금액이 다른 이유는?</strong>
                    </Card.Header>
                    <Card.Body>
                      연봉은 세전 금액으로, 여기서 4대보험과 각종 세금이 공제됩니다. 또한 회사에 따라 상여금이 포함된 경우도 있어 월급이 연봉의 1/12과 다를 수 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q2. 4대보험 가입은 의무인가요?</strong>
                    </Card.Header>
                    <Card.Body>
                      정규직의 경우 4대보험 가입이 의무입니다. 단, 주 15시간 미만 근무하는 단시간 근로자는 일부 보험에서 제외될 수 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q3. 연봉 협상 시 고려할 점은?</strong>
                    </Card.Header>
                    <Card.Body>
                      실수령액 기준으로 생각해보세요. 연봉 3000만원과 3200만원의 실수령액 차이는 월 13-15만원 정도입니다. 복리후생(식대, 교통비 등)도 함께 고려하세요.
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q4. 13월 급여나 성과급은 어떻게 계산되나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      상여금도 근로소득으로 분류되어 동일한 세율이 적용됩니다. 단, 연간 소득이 급격히 증가하면 누진세로 인해 세율이 높아질 수 있습니다.
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-primary">
                  <h5 className="alert-heading">🧮 실제 계산해보세요!</h5>
                  <p className="mb-0">
                    가계산의 <Link to="/salary" className="alert-link"><strong>실급여 계산기</strong></Link>에서 
                    본인의 연봉 조건을 입력하여 정확한 실수령액을 계산해보세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="연봉 3000만원, 실제로 받는 금액은 얼마?"
                  description="4대보험과 소득세 공제 후 실제 수령액 계산법과 절세 방법을 상세하게 설명"
                  hashtags={['급여계산', '실수령액', '4대보험', '소득세']}
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

export default SalaryCalculationGuide;