import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const SavingsStrategyGuide = () => {
  useEffect(() => {
    document.title = '적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은? | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '적금과 예금, 투자의 수익률을 비교하고 목적별 최적의 저축 전략을 제시합니다. 청약통장, 연금저축, ISA 등 다양한 금융상품 활용법까지 완벽 정리.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '적금과 예금, 투자의 수익률을 비교하고 목적별 최적의 저축 전략을 제시합니다. 청약통장, 연금저축, ISA 등 다양한 금융상품 활용법까지 완벽 정리.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '적금, 예금, 적금 추천, 적금 금리, 저축 방법, 청약통장, 연금저축, ISA, 적금 계산기');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '적금, 예금, 적금 추천, 적금 금리, 저축 방법, 청약통장, 연금저축, ISA, 적금 계산기';
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

    addOpenGraphTag('og:title', '적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은?');
    addOpenGraphTag('og:description', '적금과 예금, 투자의 수익률을 비교하고 목적별 최적의 저축 전략을 제시합니다.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/savings-strategy-guide`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은?",
      "description": "적금과 예금, 투자의 수익률을 비교하고 목적별 최적의 저축 전략을 제시합니다.",
      "url": `${window.location.origin}/blog/savings-strategy-guide`,
      "datePublished": "2024-01-25",
      "dateModified": "2024-01-25",
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
        "@id": `${window.location.origin}/blog/savings-strategy-guide`
      },
      "keywords": ["적금", "예금", "저축", "금융상품", "투자전략"],
      "wordCount": 3100,
      "inLanguage": "ko-KR",
      "articleSection": "저축 전략"
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
                저축 전략 가이드
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
                💰 적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은?
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-secondary">저축 전략</span>
                <span>📅 2024년 1월 25일</span>
                <span>⏱️ 7분 읽기</span>
                <span>👁️ 금융상품 비교</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 목돈 마련을 위한 최적의 방법을 찾는 분
                <br />• 적금과 투자 중 선택을 고민하는 분
                <br />• 다양한 금융상품의 특징이 궁금한 분
                <br />• 목적별 저축 전략을 세우려는 분
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 핵심 비교: 적금 vs 예금 vs 투자
                </h2>
                
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>구분</th>
                      <th>적금</th>
                      <th>예금</th>
                      <th>투자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>수익률</strong></td>
                      <td>연 3-4%</td>
                      <td>연 2-3%</td>
                      <td className="text-success">연 -10~15%</td>
                    </tr>
                    <tr>
                      <td><strong>원금보장</strong></td>
                      <td className="text-success">보장</td>
                      <td className="text-success">보장</td>
                      <td className="text-danger">불보장</td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>유동성</strong></td>
                      <td>낮음</td>
                      <td className="text-success">높음</td>
                      <td>중간</td>
                    </tr>
                    <tr>
                      <td><strong>세금</strong></td>
                      <td>이자소득세 15.4%</td>
                      <td>이자소득세 15.4%</td>
                      <td>배당소득세 15.4%</td>
                    </tr>
                    <tr>
                      <td><strong>최소 금액</strong></td>
                      <td>월 1만원~</td>
                      <td>1원~</td>
                      <td>월 1만원~</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-success">
                  <strong>💰 결론:</strong> 단기 목표는 적금, 장기 목표는 투자, 비상금은 예금이 최적입니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 목적별 최적 저축 전략
                </h2>

                <div className="purpose-strategies">
                  <Card className="mb-4 border-success">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">🏠 주택 구매 자금 (목표 기간: 3-7년)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-primary">우선순위 상품</h6>
                          <ol>
                            <li><strong>청약통장:</strong> 가점 + 이자수익</li>
                            <li><strong>주택청약종합저축:</strong> 연 1.5-2.0%</li>
                            <li><strong>적금:</strong> 안정적 목돈 마련</li>
                            <li><strong>ISA 계좌:</strong> 세제 혜택</li>
                          </ol>
                        </div>
                        <div className="col-md-6">
                          <div className="calculation bg-light p-3 rounded">
                            <strong>📝 계산 예시</strong><br/>
                            목표: 5천만원, 기간: 5년<br/>
                            청약통장: 월 50만원 × 60개월<br/>
                            → 예상 적립금: 3,100만원<br/>
                            → 부족분: 1,900만원 (적금/투자)
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-primary">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">👶 결혼 자금 (목표 기간: 2-3년)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="strategy-info">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-success">추천 전략</h6>
                            <ul>
                              <li>적금 70% + 단기투자 30%</li>
                              <li>높은 금리 적금 우선</li>
                              <li>CMA, MMF 활용</li>
                              <li>목표일 6개월 전부터 안전자산</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="example bg-light p-3 rounded">
                              <strong>월 100만원 저축시</strong><br/>
                              • 적금: 월 70만원<br/>
                              • 펀드: 월 30만원<br/>
                              • 3년 후 예상 금액: 3,700만원<br/>
                              <small className="text-muted">(적금 3%, 펀드 5% 가정)</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-warning">
                    <Card.Header className="bg-warning text-dark">
                      <h5 className="mb-0">🎓 자녀 교육비 (목표 기간: 10-20년)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="education-strategy">
                        <h6 className="text-primary">단계별 전략</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="stage bg-light p-3 rounded mb-3">
                              <strong>유아기 (0-7세)</strong><br/>
                              <small>투자 비중: 80%</small>
                              <ul className="small mt-2">
                                <li>어린이 펀드</li>
                                <li>교육보험</li>
                                <li>주식형 펀드</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="stage bg-light p-3 rounded mb-3">
                              <strong>학령기 (8-15세)</strong><br/>
                              <small>투자 비중: 50%</small>
                              <ul className="small mt-2">
                                <li>혼합형 펀드</li>
                                <li>교육적금</li>
                                <li>적립식 투자</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="stage bg-light p-3 rounded mb-3">
                              <strong>고등학교 (16-18세)</strong><br/>
                              <small>투자 비중: 20%</small>
                              <ul className="small mt-2">
                                <li>정기예금</li>
                                <li>채권형 펀드</li>
                                <li>CMA</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-info">
                    <Card.Header className="bg-info text-white">
                      <h5 className="mb-0">🏖️ 노후 자금 (목표 기간: 20-40년)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="retirement-strategy">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-primary">연령별 포트폴리오</h6>
                            <Table size="sm">
                              <thead>
                                <tr>
                                  <th>연령대</th>
                                  <th>투자</th>
                                  <th>안전자산</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>20-30대</td>
                                  <td className="text-success">80%</td>
                                  <td>20%</td>
                                </tr>
                                <tr>
                                  <td>40대</td>
                                  <td className="text-warning">60%</td>
                                  <td>40%</td>
                                </tr>
                                <tr>
                                  <td>50대 이상</td>
                                  <td>40%</td>
                                  <td className="text-primary">60%</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-success">활용 상품</h6>
                            <ul>
                              <li><strong>연금저축:</strong> 세액공제 12-15%</li>
                              <li><strong>IRP:</strong> 추가 세액공제</li>
                              <li><strong>퇴직연금:</strong> DC형 적극 운용</li>
                              <li><strong>개인연금:</strong> 장기 복리 효과</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🏦 금융기관별 적금 금리 비교 (2024년 기준)
                </h2>

                <Table striped bordered hover responsive className="mb-4">
                  <thead className="table-dark">
                    <tr>
                      <th>구분</th>
                      <th>일반 적금</th>
                      <th>우대 금리</th>
                      <th>특화 상품</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>시중은행</strong></td>
                      <td>3.0-3.5%</td>
                      <td>+0.3-0.5%p</td>
                      <td>청년, 군인 전용</td>
                    </tr>
                    <tr className="table-success">
                      <td><strong>지방은행</strong></td>
                      <td>3.2-3.8%</td>
                      <td>+0.5-0.8%p</td>
                      <td>지역민 우대</td>
                    </tr>
                    <tr>
                      <td><strong>인터넷은행</strong></td>
                      <td className="text-success">3.5-4.0%</td>
                      <td>+0.2-0.4%p</td>
                      <td>모바일 특화</td>
                    </tr>
                    <tr>
                      <td><strong>저축은행</strong></td>
                      <td className="text-primary">4.0-5.0%</td>
                      <td>+0.5-1.0%p</td>
                      <td>고금리 경쟁</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="rate-tips">
                  <h6 className="text-warning">💡 우대 금리 받는 방법</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li><strong>급여 이체:</strong> +0.2-0.3%p</li>
                        <li><strong>카드 실적:</strong> +0.1-0.2%p</li>
                        <li><strong>자동이체:</strong> +0.1%p</li>
                        <li><strong>인터넷뱅킹:</strong> +0.1%p</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li><strong>청년 우대:</strong> +0.5-1.0%p</li>
                        <li><strong>군인 우대:</strong> +0.5-0.8%p</li>
                        <li><strong>신규 고객:</strong> +0.3-0.5%p</li>
                        <li><strong>장기 거래:</strong> +0.2-0.3%p</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 세제 혜택 활용 전략
                </h2>

                <div className="tax-benefit-products">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-primary">📊 ISA (Individual Savings Account)</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <strong>혜택:</strong>
                          <ul>
                            <li>연간 비과세 한도: 200만원</li>
                            <li>초과 수익의 9.9% 분리과세</li>
                            <li>만기 후 연금계좌 이체시 추가 공제</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <strong>활용 방법:</strong>
                          <ul>
                            <li>예적금 + 펀드 혼합 운용</li>
                            <li>3년 의무 가입 후 추가 연장</li>
                            <li>중위소득 120% 이하 추가 혜택</li>
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-success">🎯 연금저축</h5>
                      <div className="benefit-info">
                        <strong>세액공제:</strong> 연간 납입액의 12-15% (최대 400만원 한도)<br/>
                        <strong>수령시:</strong> 연금소득으로 3.3-5.5% 세율 (일시금 시 16.5%)<br/>
                        <strong>전략:</strong> 만 55세까지는 적립, 이후 10년간 연금 수령
                      </div>

                      <div className="calculation bg-light p-3 rounded mt-3">
                        <strong>📈 절세 효과</strong><br/>
                        연 400만원 납입 × 세액공제 13.2% = 연 52.8만원 절세<br/>
                        20년 납입시 총 절세액: <span className="text-success"><strong>1,056만원</strong></span>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-warning">🏠 주택청약종합저축</h5>
                      <div className="housing-benefits">
                        <div className="row">
                          <div className="col-md-6">
                            <strong>소득공제:</strong>
                            <ul>
                              <li>연간 납입액 240만원 한도</li>
                              <li>소득공제율: 6.6-49.5%</li>
                              <li>총급여 5천만원 이하 우대</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <strong>청약 혜택:</strong>
                            <ul>
                              <li>민영주택 청약 가능</li>
                              <li>납입 횟수 = 청약 가점</li>
                              <li>당첨시 납입액 활용</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💡 적금 가입 전 체크리스트
                </h2>

                <div className="checklist-cards">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Card className="h-100 border-success">
                        <Card.Header className="bg-success text-white">
                          <h6 className="mb-0">✅ 확인 사항</h6>
                        </Card.Header>
                        <Card.Body>
                          <ul className="checklist">
                            <li>□ 목표 금액과 기간 설정</li>
                            <li>□ 월 저축 가능 금액 계산</li>
                            <li>□ 우대 금리 조건 확인</li>
                            <li>□ 중도 해지 수수료 확인</li>
                            <li>□ 예금자보호 여부 확인</li>
                            <li>□ 세제 혜택 상품 검토</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-md-6 mb-3">
                      <Card className="h-100 border-warning">
                        <Card.Header className="bg-warning text-dark">
                          <h6 className="mb-0">⚠️ 주의 사항</h6>
                        </Card.Header>
                        <Card.Body>
                          <ul className="warning-list">
                            <li>□ 과도한 적금 가입 지양</li>
                            <li>□ 비상금 우선 확보</li>
                            <li>□ 인플레이션 고려</li>
                            <li>□ 유동성 필요시기 고려</li>
                            <li>□ 다른 투자 기회 검토</li>
                            <li>□ 금리 변동 위험성 인지</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  ❓ 자주 묻는 질문 (FAQ)
                </h2>

                <div className="accordion">
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q1. 적금과 투자를 병행하는 것이 좋을까요?</strong>
                    </Card.Header>
                    <Card.Body>
                      목표 기간이 5년 이상이라면 적금 50-70%, 투자 30-50% 비율로 병행하는 것을 추천합니다. 
                      안정성과 수익성의 균형을 맞출 수 있습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q2. 변동금리 적금은 위험한가요?</strong>
                    </Card.Header>
                    <Card.Body>
                      변동금리는 시장 금리에 따라 수익률이 달라집니다. 금리 상승 국면에서는 유리하지만, 
                      하락 국면에서는 불리할 수 있으니 금리 전망을 고려해야 합니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q3. 적금을 중도 해지하면 손해가 큰가요?</strong>
                    </Card.Header>
                    <Card.Body>
                      중도 해지시 약정 금리가 아닌 중도해지 금리(보통 0.1-1%)가 적용되어 큰 손해가 발생합니다. 
                      가급적 완주할 수 있는 금액으로 가입하세요.
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q4. 인터넷은행 적금이 정말 안전한가요?</strong>
                    </Card.Header>
                    <Card.Body>
                      인터넷은행도 예금자보호법에 따라 1인당 5천만원까지 보장됩니다. 
                      다만, 시스템 장애나 해킹 위험을 고려하여 분산 저축하는 것이 좋습니다.
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-primary">
                  <h5 className="alert-heading">🧮 적금 수익률 미리 계산해보세요!</h5>
                  <p className="mb-0">
                    가계산의 <Link to="/savings" className="alert-link"><strong>적금 계산기</strong></Link>에서 
                    다양한 적금 상품의 만기 수령액과 실질 수익률을 비교해보세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="적금 vs 예금 vs 투자: 돈 모으는 최고의 방법은?"
                  description="적금과 예금, 투자의 수익률을 비교하고 목적별 최적의 저축 전략을 제시합니다"
                  hashtags={['적금', '저축', '투자', '금융상품', '목돈마련']}
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

export default SavingsStrategyGuide;