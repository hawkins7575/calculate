import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const InvestmentStrategyGuide = () => {
  useEffect(() => {
    document.title = '주식 vs 펀드 vs ETF: 초보자를 위한 완벽 투자 가이드 | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '주식, 펀드, ETF의 특징을 비교하고 초보자를 위한 단계별 투자 전략을 제시합니다. 포트폴리오 구성부터 리스크 관리까지 완벽 정리.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '주식, 펀드, ETF의 특징을 비교하고 초보자를 위한 단계별 투자 전략을 제시합니다. 포트폴리오 구성부터 리스크 관리까지 완벽 정리.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '주식투자, 펀드투자, ETF, 투자전략, 포트폴리오, 초보자투자, 투자상품비교');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '주식투자, 펀드투자, ETF, 투자전략, 포트폴리오, 초보자투자, 투자상품비교';
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

    addOpenGraphTag('og:title', '주식 vs 펀드 vs ETF: 초보자를 위한 완벽 투자 가이드');
    addOpenGraphTag('og:description', '주식, 펀드, ETF의 특징을 비교하고 초보자를 위한 단계별 투자 전략을 제시합니다.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/investment-strategy-guide`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "주식 vs 펀드 vs ETF: 초보자를 위한 완벽 투자 가이드",
      "description": "주식, 펀드, ETF의 특징을 비교하고 초보자를 위한 단계별 투자 전략을 제시합니다.",
      "url": `${window.location.origin}/blog/investment-strategy-guide`,
      "datePublished": "2024-01-30",
      "dateModified": "2024-01-30",
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
        "@id": `${window.location.origin}/blog/investment-strategy-guide`
      },
      "keywords": ["주식투자", "펀드", "ETF", "투자전략", "포트폴리오"],
      "wordCount": 3400,
      "inLanguage": "ko-KR",
      "articleSection": "투자 전략"
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
                투자 전략 가이드
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
                📊 주식 vs 펀드 vs ETF: 초보자를 위한 완벽 투자 가이드
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-success">투자 전략</span>
                <span>📅 2024년 1월 30일</span>
                <span>⏱️ 9분 읽기</span>
                <span>👁️ 투자상품 비교</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 투자를 시작하고 싶지만 어떤 상품을 선택할지 모르는 분
                <br />• 주식, 펀드, ETF의 차이점이 궁금한 분
                <br />• 포트폴리오 구성 방법을 알고 싶은 분
                <br />• 리스크를 관리하면서 안전하게 투자하고 싶은 분
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 투자상품 한눈에 비교
                </h2>
                
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>구분</th>
                      <th>개별주식</th>
                      <th>펀드</th>
                      <th>ETF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>최소투자금액</strong></td>
                      <td>주가에 따라</td>
                      <td className="text-success">1만원</td>
                      <td>주가에 따라</td>
                    </tr>
                    <tr>
                      <td><strong>분산효과</strong></td>
                      <td className="text-danger">낮음</td>
                      <td className="text-success">높음</td>
                      <td className="text-success">높음</td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>수수료</strong></td>
                      <td>0.015~0.25%</td>
                      <td>1.0~2.5%</td>
                      <td>0.1~0.8%</td>
                    </tr>
                    <tr>
                      <td><strong>전문가 관리</strong></td>
                      <td>없음</td>
                      <td className="text-success">있음</td>
                      <td>있음 (패시브)</td>
                    </tr>
                    <tr>
                      <td><strong>거래 시간</strong></td>
                      <td>장중 실시간</td>
                      <td>하루 1회</td>
                      <td className="text-primary">장중 실시간</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-success">
                  <strong>💰 초보자 추천:</strong> 펀드로 시작해서 ETF로 발전, 경험 쌓은 후 개별주식 도전하는 것이 안전합니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📈 투자상품별 상세 분석
                </h2>

                <div className="investment-products">
                  <Card className="mb-4 border-primary">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">🏢 개별주식</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-success">✅ 장점</h6>
                          <ul>
                            <li><strong>높은 수익 가능성:</strong> 성장주 발굴시 큰 수익</li>
                            <li><strong>낮은 거래비용:</strong> 수수료 0.015%</li>
                            <li><strong>실시간 거래:</strong> 원하는 시점에 매매</li>
                            <li><strong>배당금 직접 수령:</strong> 추가 수익원</li>
                          </ul>

                          <h6 className="text-danger mt-3">❌ 단점</h6>
                          <ul>
                            <li>높은 리스크 (개별 기업 위험)</li>
                            <li>전문적 분석 능력 필요</li>
                            <li>감정적 거래 위험</li>
                            <li>시간 투자 필요</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="recommendation bg-light p-3 rounded">
                            <h6 className="text-primary">📋 추천 대상</h6>
                            <ul className="small">
                              <li>• 투자 경험이 풍부한 분</li>
                              <li>• 시간을 충분히 투자할 수 있는 분</li>
                              <li>• 기업 분석을 즐기는 분</li>
                              <li>• 높은 리스크를 감수할 수 있는 분</li>
                            </ul>

                            <div className="mt-3 p-2 bg-warning text-dark rounded">
                              <strong>시작 전략:</strong><br/>
                              • 코스피 200 우량주 위주<br/>
                              • 분할 매수로 위험 분산<br/>
                              • 총 투자금의 30% 이하로 제한
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-success">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">🎯 펀드 (뮤추얼 펀드)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="fund-analysis">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-success">✅ 장점</h6>
                            <ul>
                              <li><strong>전문가 운용:</strong> 펀드매니저의 전문성</li>
                              <li><strong>분산투자:</strong> 여러 종목에 자동 분산</li>
                              <li><strong>소액 투자:</strong> 월 1만원부터 가능</li>
                              <li><strong>편리성:</strong> 자동투자 서비스</li>
                            </ul>

                            <h6 className="text-danger mt-3">❌ 단점</h6>
                            <ul>
                              <li>높은 수수료 (연 1-2.5%)</li>
                              <li>펀드매니저 의존성</li>
                              <li>하루 1회만 거래</li>
                              <li>세금 비효율성</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <Table size="sm" className="mb-3">
                              <thead>
                                <tr>
                                  <th>펀드 유형</th>
                                  <th>위험도</th>
                                  <th>기대수익률</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>채권형</td>
                                  <td className="text-success">낮음</td>
                                  <td>3-5%</td>
                                </tr>
                                <tr>
                                  <td>혼합형</td>
                                  <td className="text-warning">중간</td>
                                  <td>5-8%</td>
                                </tr>
                                <tr>
                                  <td>주식형</td>
                                  <td className="text-danger">높음</td>
                                  <td>8-12%</td>
                                </tr>
                              </tbody>
                            </Table>

                            <div className="bg-success text-white p-2 rounded">
                              <strong>초보자 최적:</strong> 적립식 투자로 시작하여 시장의 등락을 평균화
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-info">
                    <Card.Header className="bg-info text-white">
                      <h5 className="mb-0">📊 ETF (상장지수펀드)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="etf-analysis">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-success">✅ 장점</h6>
                            <ul>
                              <li><strong>낮은 수수료:</strong> 연 0.1-0.8%</li>
                              <li><strong>투명성:</strong> 보유종목 공개</li>
                              <li><strong>실시간 거래:</strong> 주식처럼 거래</li>
                              <li><strong>분산투자:</strong> 지수 추종</li>
                            </ul>

                            <h6 className="text-warning mt-3">⚠️ 고려사항</h6>
                            <ul>
                              <li>지수를 넘는 수익 어려움</li>
                              <li>추적오차 가능성</li>
                              <li>상품별 차이 큼</li>
                              <li>최소 투자금액 존재</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="popular-etfs bg-light p-3 rounded">
                              <h6 className="text-info">🔥 인기 ETF</h6>
                              <ul className="small">
                                <li><strong>KODEX 200:</strong> 코스피 200 추종</li>
                                <li><strong>TIGER 미국S&P500:</strong> 미국 대표지수</li>
                                <li><strong>KODEX 코스닥150:</strong> 코스닥 대표주</li>
                                <li><strong>ACE 한국배당:</strong> 고배당 종목</li>
                              </ul>

                              <div className="mt-3 p-2 bg-info text-white rounded">
                                <strong>추천 조합:</strong><br/>
                                • 국내 60% (KODEX 200)<br/>
                                • 해외 40% (S&P500)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 연령별 포트폴리오 전략
                </h2>

                <div className="age-portfolios">
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">👨‍🎓 20-30대: 공격적 성장형</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>포트폴리오 구성</h6>
                          <ul>
                            <li><strong>주식형 ETF:</strong> 70%</li>
                            <li><strong>해외 ETF:</strong> 20%</li>
                            <li><strong>채권형:</strong> 10%</li>
                          </ul>

                          <h6 className="mt-3">투자 전략</h6>
                          <ul>
                            <li>적립식 투자 중심</li>
                            <li>월 소득의 20-30% 투자</li>
                            <li>장기 보유 (10년 이상)</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="calculation bg-light p-3 rounded">
                            <h6>📊 예상 수익률</h6>
                            <p>연평균 8-10% 목표</p>
                            
                            <strong>시뮬레이션:</strong><br/>
                            • 월 50만원 × 20년<br/>
                            • 연 8% 수익률 가정<br/>
                            • 최종 금액: <span className="text-success">약 2억 9천만원</span>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-warning text-dark">
                      <h5 className="mb-0">👨‍💼 40대: 균형 성장형</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="balanced-strategy">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>포트폴리오 구성</h6>
                            <ul>
                              <li><strong>주식형:</strong> 50%</li>
                              <li><strong>혼합형 펀드:</strong> 30%</li>
                              <li><strong>채권형:</strong> 20%</li>
                            </ul>

                            <h6 className="mt-3">리스크 관리</h6>
                            <ul>
                              <li>분기별 리밸런싱</li>
                              <li>변동성 모니터링</li>
                              <li>목표 수익률 달성시 이익실현</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="risk-management bg-light p-3 rounded">
                              <h6>⚖️ 균형 전략</h6>
                              <ul className="small">
                                <li>• 안정성과 성장성 균형</li>
                                <li>• 자녀 교육비 고려</li>
                                <li>• 부동산 투자 병행</li>
                                <li>• 연금저축 적극 활용</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">👴 50대+: 안정 보수형</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="conservative-strategy">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>포트폴리오 구성</h6>
                            <ul>
                              <li><strong>채권형:</strong> 50%</li>
                              <li><strong>배당주 ETF:</strong> 30%</li>
                              <li><strong>혼합형:</strong> 20%</li>
                            </ul>

                            <h6 className="mt-3">안전 중심 전략</h6>
                            <ul>
                              <li>원금 보존 우선</li>
                              <li>배당 수익 중심</li>
                              <li>단기 변동성 최소화</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="safety-focus bg-light p-3 rounded">
                              <h6>🛡️ 안전 장치</h6>
                              <ul className="small">
                                <li>• 예금자보호 상품 병행</li>
                                <li>• 인출 계획 수립</li>
                                <li>• 의료비 준비금 별도</li>
                                <li>• 상속 계획 고려</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🛡️ 투자 리스크 관리법
                </h2>

                <div className="risk-management-strategies">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="text-center">
                          <h5 className="text-primary">📊 분산투자</h5>
                          <ul className="list-unstyled small mt-3">
                            <li><strong>지역별:</strong> 국내/해외</li>
                            <li><strong>섹터별:</strong> IT/금융/헬스케어</li>
                            <li><strong>상품별:</strong> 주식/채권/리츠</li>
                            <li><strong>시간별:</strong> 적립식 투자</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-md-4 mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="text-center">
                          <h5 className="text-success">⏰ 달러 코스트 애버리징</h5>
                          <ul className="list-unstyled small mt-3">
                            <li><strong>정액 투자:</strong> 매월 일정 금액</li>
                            <li><strong>가격 평균화:</strong> 변동성 완화</li>
                            <li><strong>감정 배제:</strong> 기계적 투자</li>
                            <li><strong>장기 효과:</strong> 복리 극대화</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-md-4 mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="text-center">
                          <h5 className="text-warning">📈 리밸런싱</h5>
                          <ul className="list-unstyled small mt-3">
                            <li><strong>주기:</strong> 3-6개월마다</li>
                            <li><strong>기준:</strong> 목표 비율 ±5%</li>
                            <li><strong>방법:</strong> 수익 구간 매도</li>
                            <li><strong>효과:</strong> 고점 매도/저점 매수</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <Card className="mt-4 border-danger">
                    <Card.Header className="bg-danger text-white">
                      <h5 className="mb-0">🚨 투자 시 절대 피해야 할 것들</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-danger">❌ 투자 금기사항</h6>
                          <ul>
                            <li><strong>생활비 투자:</strong> 당장 필요한 돈 투자 금지</li>
                            <li><strong>빚내서 투자:</strong> 레버리지 투자 위험</li>
                            <li><strong>단타 매매:</strong> 수수료만 나가는 구조</li>
                            <li><strong>묻지마 투자:</strong> 분석 없는 투자</li>
                            <li><strong>몰빵 투자:</strong> 한 종목에 집중</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6 className="text-success">✅ 올바른 투자 마인드</h6>
                          <ul>
                            <li><strong>여유자금 투자:</strong> 5년 이상 묶어둘 돈</li>
                            <li><strong>장기 관점:</strong> 단기 변동성 무시</li>
                            <li><strong>꾸준한 학습:</strong> 투자 지식 습득</li>
                            <li><strong>감정 통제:</strong> 욕심과 두려움 배제</li>
                            <li><strong>원칙 준수:</strong> 투자 규칙 일관성</li>
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💡 초보자 투자 로드맵
                </h2>

                <div className="investment-roadmap">
                  <div className="roadmap-step mb-4 p-4 border-start border-primary border-5">
                    <h5 className="text-primary">1단계: 기초 다지기 (1-3개월)</h5>
                    <ul>
                      <li>투자 관련 기본 서적 3권 이상 읽기</li>
                      <li>증권계좌 개설 및 MTS 사용법 익히기</li>
                      <li>가상투자로 모의거래 연습</li>
                      <li>투자 목표와 위험 성향 파악</li>
                    </ul>
                  </div>

                  <div className="roadmap-step mb-4 p-4 border-start border-success border-5">
                    <h5 className="text-success">2단계: 소액 시작 (3-6개월)</h5>
                    <ul>
                      <li>월 10-30만원 적립식 펀드 시작</li>
                      <li>국내 대표 ETF 1-2개 매수</li>
                      <li>투자 일기 작성 습관화</li>
                      <li>시장 동향 모니터링</li>
                    </ul>
                  </div>

                  <div className="roadmap-step mb-4 p-4 border-start border-warning border-5">
                    <h5 className="text-warning">3단계: 포트폴리오 구성 (6-12개월)</h5>
                    <ul>
                      <li>국내외 분산투자 시작</li>
                      <li>섹터별 ETF 추가 투자</li>
                      <li>리밸런싱 경험 쌓기</li>
                      <li>개별 주식 1-2개 시험 투자</li>
                    </ul>
                  </div>

                  <div className="roadmap-step p-4 border-start border-info border-5">
                    <h5 className="text-info">4단계: 고도화 (1년 후)</h5>
                    <ul>
                      <li>본격적인 개별 주식 투자</li>
                      <li>대안 투자 (리츠, 원자재 등)</li>
                      <li>세금 최적화 전략 구사</li>
                      <li>전문적 분석 도구 활용</li>
                    </ul>
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
                      <strong>Q1. 투자를 시작하려면 얼마가 필요한가요?</strong>
                    </Card.Header>
                    <Card.Body>
                      펀드는 월 1만원부터, ETF는 종목에 따라 3-50만원 정도면 시작할 수 있습니다. 
                      중요한 것은 금액보다 꾸준함입니다. 월 10만원으로도 충분히 시작할 수 있어요.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q2. 주식이 떨어지면 언제 팔아야 하나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      미리 정한 손절 기준(-20%)에 도달하거나, 투자 근거가 사라졌을 때 매도하세요. 
                      감정적 판단보다는 원칙에 따른 매도가 중요합니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q3. 해외 투자는 어떻게 시작하나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      국내에서 거래되는 해외 ETF부터 시작하는 것을 추천합니다. 
                      TIGER 미국S&P500 같은 상품으로 쉽게 해외 투자를 경험할 수 있어요.
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q4. 투자 공부는 어떻게 해야 하나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      기본서부터 차근차근 읽고, 경제 뉴스를 꾸준히 보며, 투자 커뮤니티에서 
                      정보를 교류하세요. 무엇보다 실제 투자 경험이 가장 좋은 공부입니다.
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-success">
                  <h5 className="alert-heading">💎 투자 성공의 핵심</h5>
                  <p className="mb-2"><strong>시작하는 것이 가장 중요합니다!</strong></p>
                  <p className="mb-0">
                    완벽한 타이밍을 기다리기보다는 소액으로라도 지금 시작하세요. 
                    시간이 복리의 마법을 만들어낸다는 것을 잊지 마세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="주식 vs 펀드 vs ETF: 초보자를 위한 완벽 투자 가이드"
                  description="주식, 펀드, ETF의 특징을 비교하고 초보자를 위한 단계별 투자 전략을 제시합니다"
                  hashtags={['주식투자', '펀드', 'ETF', '투자전략', '초보투자']}
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

export default InvestmentStrategyGuide;