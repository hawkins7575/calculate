import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const ChildcareGuide = () => {
  useEffect(() => {
    document.title = '어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이? | 가계산 블로그';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '어린이집과 유치원 비용을 상세히 비교하고 보육료 지원금, 양육수당까지 완벽 정리. 연령별 최적 선택과 숨은 비용까지 알려드립니다.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '어린이집과 유치원 비용을 상세히 비교하고 보육료 지원금, 양육수당까지 완벽 정리. 연령별 최적 선택과 숨은 비용까지 알려드립니다.';
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '보육비, 어린이집 비용, 유치원 비용, 보육료 지원, 양육수당, 보육비 계산, 육아비용');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '보육비, 어린이집 비용, 유치원 비용, 보육료 지원, 양육수당, 보육비 계산, 육아비용';
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

    addOpenGraphTag('og:title', '어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이?');
    addOpenGraphTag('og:description', '어린이집과 유치원 비용을 상세히 비교하고 보육료 지원금, 양육수당까지 완벽 정리');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/childcare-guide`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이?",
      "description": "어린이집과 유치원 비용을 상세히 비교하고 보육료 지원금, 양육수당까지 완벽 정리",
      "url": `${window.location.origin}/blog/childcare-guide`,
      "datePublished": "2024-01-28",
      "dateModified": "2024-01-28",
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
        "@id": `${window.location.origin}/blog/childcare-guide`
      },
      "keywords": ["보육비", "어린이집", "유치원", "보육료 지원", "양육수당"],
      "wordCount": 3200,
      "inLanguage": "ko-KR",
      "articleSection": "육아 정보"
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
                보육비 가이드
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
                👶 어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이?
              </h1>
              
              <div className="d-flex align-items-center gap-3 mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <span className="badge bg-info">육아 정보</span>
                <span>📅 2024년 1월 28일</span>
                <span>⏱️ 8분 읽기</span>
                <span>👁️ 보육비 비교</span>
              </div>

              <div className="alert alert-info">
                <strong>💡 이런 분들께 추천:</strong>
                <br />• 어린이집과 유치원 중 선택을 고민하는 부모
                <br />• 보육비 지원금과 양육수당이 궁금한 분
                <br />• 연령별 최적의 보육 선택을 원하는 분
                <br />• 숨은 보육 비용까지 알고 싶은 분
              </div>
            </header>

            <main>
              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎯 핵심 요약: 어린이집 vs 유치원
                </h2>
                
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>구분</th>
                      <th>어린이집</th>
                      <th>유치원</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>이용 연령</strong></td>
                      <td>0세~5세</td>
                      <td className="text-primary">3세~5세</td>
                    </tr>
                    <tr>
                      <td><strong>운영 시간</strong></td>
                      <td className="text-success">07:30~19:30</td>
                      <td>09:00~14:00</td>
                    </tr>
                    <tr className="table-warning">
                      <td><strong>월 평균 비용</strong></td>
                      <td>30~80만원</td>
                      <td>50~150만원</td>
                    </tr>
                    <tr>
                      <td><strong>정부 지원</strong></td>
                      <td className="text-success">보육료 지원</td>
                      <td>누리과정 지원</td>
                    </tr>
                    <tr>
                      <td><strong>교육과정</strong></td>
                      <td>보육 중심</td>
                      <td className="text-primary">교육 중심</td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alert alert-success">
                  <strong>💰 핵심 결론:</strong> 3세 미만은 어린이집, 3세 이상은 교육 목적에 따라 선택하되 경제적 부담을 고려해야 합니다.
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 연령별 상세 비용 분석
                </h2>

                <div className="age-analysis">
                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">👶 영아반 (0~2세)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-success">국공립 어린이집</h6>
                          <ul className="mb-3">
                            <li><strong>0세:</strong> 월 48만원 → 지원 후 <span className="text-success">0원</span></li>
                            <li><strong>1세:</strong> 월 42만원 → 지원 후 <span className="text-success">0원</span></li>
                            <li><strong>2세:</strong> 월 35만원 → 지원 후 <span className="text-success">0원</span></li>
                          </ul>
                          
                          <h6 className="text-warning">민간 어린이집</h6>
                          <ul>
                            <li><strong>0세:</strong> 월 60~100만원 → 지원 후 12~52만원</li>
                            <li><strong>1세:</strong> 월 50~80만원 → 지원 후 8~38만원</li>
                            <li><strong>2세:</strong> 월 45~70만원 → 지원 후 10~35만원</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded">
                            <h6 className="text-info">💰 추가 비용</h6>
                            <ul className="small">
                              <li>• 급간식비: 월 5~10만원</li>
                              <li>• 특별활동비: 월 3~8만원</li>
                              <li>• 차량비: 월 3~5만원</li>
                              <li>• 준비물: 월 2~5만원</li>
                            </ul>
                            
                            <div className="mt-3 p-2 bg-warning text-dark rounded">
                              <strong>실제 부담:</strong> 월 15~65만원
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-0 shadow-sm">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">🎓 유아반 (3~5세)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="comparison-table">
                        <Table size="sm" responsive>
                          <thead>
                            <tr>
                              <th>구분</th>
                              <th>국공립 어린이집</th>
                              <th>국공립 유치원</th>
                              <th>사립 유치원</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>기본 보육료</strong></td>
                              <td className="text-success">0원 (전액지원)</td>
                              <td className="text-success">0원 (전액지원)</td>
                              <td>월 20~50만원</td>
                            </tr>
                            <tr>
                              <td><strong>특별활동</strong></td>
                              <td>월 3~7만원</td>
                              <td>월 5~10만원</td>
                              <td>월 10~30만원</td>
                            </tr>
                            <tr>
                              <td><strong>급식비</strong></td>
                              <td>월 5~8만원</td>
                              <td>월 6~10만원</td>
                              <td>월 8~15만원</td>
                            </tr>
                            <tr className="table-warning">
                              <td><strong>총 비용</strong></td>
                              <td><strong>월 8~15만원</strong></td>
                              <td><strong>월 11~20만원</strong></td>
                              <td><strong>월 38~95만원</strong></td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  💰 정부 지원금 완벽 가이드
                </h2>

                <div className="support-guide">
                  <Card className="mb-4 border-success">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0">🏛️ 보육료 지원 (어린이집)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>지원 대상</h6>
                          <ul>
                            <li>어린이집 이용 아동 (0~5세)</li>
                            <li>소득 무관 전계층</li>
                            <li>맞벌이 우선 지원</li>
                          </ul>
                          
                          <h6 className="mt-3">지원 금액 (2024년 기준)</h6>
                          <ul>
                            <li><strong>0세:</strong> 월 48만4천원</li>
                            <li><strong>1세:</strong> 월 42만5천원</li>
                            <li><strong>2세:</strong> 월 35만2천원</li>
                            <li><strong>3~5세:</strong> 월 28만원</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6>신청 방법</h6>
                          <ol>
                            <li>복지로(www.bokjiro.go.kr) 접속</li>
                            <li>'보육료 지원' 검색</li>
                            <li>온라인 신청서 작성</li>
                            <li>서류 제출 (소득증명 등)</li>
                            <li>승인 후 바로 지원</li>
                          </ol>
                          
                          <div className="alert alert-info mt-3">
                            <strong>🎯 팁:</strong> 어린이집 입소 전 미리 신청하면 대기기간 없이 지원받을 수 있습니다.
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mb-4 border-primary">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">🎨 누리과정 지원 (유치원)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="nuri-support">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>지원 대상</h6>
                            <ul>
                              <li>유치원 이용 아동 (3~5세)</li>
                              <li>어린이집 유아반도 포함</li>
                              <li>소득 무관 전계층</li>
                            </ul>
                            
                            <h6 className="mt-3">지원 내용</h6>
                            <ul>
                              <li><strong>교육비:</strong> 월 최대 28만원</li>
                              <li><strong>방과후:</strong> 월 최대 7만원</li>
                              <li><strong>급식비:</strong> 유치원별 차등</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="calculation bg-light p-3 rounded">
                              <h6>💡 사립유치원 실 부담액</h6>
                              <p>원비 80만원 - 지원금 28만원 = <strong>52만원</strong></p>
                              <p>+ 급식비 10만원 + 특활비 15만원</p>
                              <div className="text-primary"><strong>총 부담: 월 77만원</strong></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="border-warning">
                    <Card.Header className="bg-warning text-dark">
                      <h5 className="mb-0">👨‍👩‍👧 양육수당 (가정양육)</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="childcare-allowance">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>지원 대상</h6>
                            <ul>
                              <li>어린이집, 유치원 미이용 아동</li>
                              <li>0~5세 (취학 전)</li>
                              <li>소득 무관</li>
                            </ul>
                            
                            <h6 className="mt-3">지원 금액</h6>
                            <ul>
                              <li><strong>0~11개월:</strong> 월 20만원</li>
                              <li><strong>12~23개월:</strong> 월 15만원</li>
                              <li><strong>24~35개월:</strong> 월 10만원</li>
                              <li><strong>36개월~취학 전:</strong> 월 10만원</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="comparison bg-light p-3 rounded">
                              <h6>🤔 양육수당 vs 어린이집</h6>
                              <p><strong>양육수당 선택 시:</strong></p>
                              <ul className="small">
                                <li>✅ 월 10~20만원 수령</li>
                                <li>✅ 직접 양육의 만족감</li>
                                <li>❌ 사회화 기회 부족</li>
                                <li>❌ 경력단절 위험</li>
                              </ul>
                              
                              <p className="mt-2"><strong>어린이집 선택 시:</strong></p>
                              <ul className="small">
                                <li>✅ 전문적 보육서비스</li>
                                <li>✅ 사회성 발달</li>
                                <li>❌ 추가 비용 발생</li>
                                <li>❌ 감염병 노출</li>
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
                  🏦 보육비 절약 전략
                </h2>

                <div className="saving-strategies">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="text-center">
                          <h5 className="text-success">🎯 국공립 선택</h5>
                          <ul className="list-unstyled small mt-3">
                            <li><strong>절약액:</strong> 월 30~70만원</li>
                            <li>• 대기가 길더라도 신청</li>
                            <li>• 여러 곳에 동시 신청</li>
                            <li>• 이사 시점 고려</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-md-4 mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="text-center">
                          <h5 className="text-primary">⏰ 시간제보육 활용</h5>
                          <ul className="list-unstyled small mt-3">
                            <li><strong>시간당:</strong> 4,000원</li>
                            <li>• 월 최대 80시간</li>
                            <li>• 일시적 돌봄에 유용</li>
                            <li>• 양육수당과 병행 가능</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="col-md-4 mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="text-center">
                          <h5 className="text-warning">💳 육아종합지원센터</h5>
                          <ul className="list-unstyled small mt-3">
                            <li><strong>무료 프로그램:</strong> 다수</li>
                            <li>• 부모교육</li>
                            <li>• 체험활동</li>
                            <li>• 상담서비스</li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <Card className="mt-4 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-info">💡 숨은 비용 체크리스트</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>⚠️ 추가 비용 항목</h6>
                          <ul>
                            <li><strong>입학준비금:</strong> 5~20만원</li>
                            <li><strong>교재교구비:</strong> 월 2~5만원</li>
                            <li><strong>현장학습비:</strong> 월 1~3만원</li>
                            <li><strong>생일파티비:</strong> 월 1~2만원</li>
                            <li><strong>졸업앨범비:</strong> 5~15만원</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h6>💰 절약 방법</h6>
                          <ul>
                            <li>• 특별활동 선택적 참여</li>
                            <li>• 중고 교재교구 활용</li>
                            <li>• 원복 물려받기</li>
                            <li>• 차량비 대신 직접 등하원</li>
                            <li>• 여러 기관 비용 비교</li>
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📈 연령별 최적 선택 가이드
                </h2>

                <div className="optimal-choice-guide">
                  <Table striped bordered hover responsive>
                    <thead className="table-info">
                      <tr>
                        <th>연령</th>
                        <th>맞벌이 부모</th>
                        <th>외벌이 부모</th>
                        <th>경제적 고려사항</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>0~2세</strong></td>
                        <td className="text-success">어린이집 필수</td>
                        <td className="text-warning">양육수당 고려</td>
                        <td>국공립 대기 신청 필수</td>
                      </tr>
                      <tr>
                        <td><strong>3세</strong></td>
                        <td>어린이집 (긴 보육시간)</td>
                        <td>유치원 또는 어린이집</td>
                        <td>사립유치원은 부담 큰 편</td>
                      </tr>
                      <tr>
                        <td><strong>4~5세</strong></td>
                        <td>교육 목적시 유치원</td>
                        <td className="text-primary">유치원 추천</td>
                        <td>초등 준비를 위한 투자</td>
                      </tr>
                    </tbody>
                  </Table>

                  <div className="decision-tree mt-4">
                    <Card className="border-primary">
                      <Card.Header className="bg-primary text-white">
                        <h5 className="mb-0">🤔 선택 시 고려사항</h5>
                      </Card.Header>
                      <Card.Body>
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="text-success">✅ 어린이집 선택 시</h6>
                            <ul>
                              <li>긴 보육시간이 필요한 경우</li>
                              <li>0~2세 연령</li>
                              <li>비용 부담을 줄이고 싶은 경우</li>
                              <li>국공립 입소 가능한 경우</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <h6 className="text-primary">✅ 유치원 선택 시</h6>
                            <ul>
                              <li>교육 프로그램을 중시하는 경우</li>
                              <li>3세 이상 연령</li>
                              <li>초등학교 준비가 목적인 경우</li>
                              <li>경제적 여유가 있는 경우</li>
                            </ul>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
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
                      <strong>Q1. 어린이집과 유치원을 동시에 다닐 수 있나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      아니요. 정부 지원금은 한 곳에서만 받을 수 있습니다. 단, 오전에는 유치원, 오후에는 어린이집 방과후 과정 이용은 가능합니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q2. 중간에 어린이집에서 유치원으로 옮기면 어떻게 되나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      지원금은 실제 이용 기관으로 자동 변경됩니다. 다만, 입학금이나 준비물 등의 추가 비용이 발생할 수 있으니 미리 계획하는 것이 좋습니다.
                    </Card.Body>
                  </Card>

                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q3. 맞벌이가 아니어도 어린이집을 이용할 수 있나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      네, 가능합니다. 다만 맞벌이 가정이 우선순위가 높아 대기가 길 수 있습니다. 구직활동이나 학업 등의 사유가 있으면 우선순위가 올라갑니다.
                    </Card.Body>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <strong>Q4. 보육료 지원금은 언제까지 받을 수 있나요?</strong>
                    </Card.Header>
                    <Card.Body>
                      초등학교 입학 전까지 받을 수 있습니다. 만 6세가 되는 해 2월까지이며, 3월부터는 초등학생이 되어 지원이 중단됩니다.
                    </Card.Body>
                  </Card>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-primary">
                  <h5 className="alert-heading">🧮 보육비 미리 계산해보세요!</h5>
                  <p className="mb-0">
                    가계산의 <Link to="/childcare" className="alert-link"><strong>보육비 계산기</strong></Link>에서 
                    연령과 기관 유형에 따른 예상 보육비를 계산해보세요.
                  </p>
                </div>
              </section>

              <footer className="text-center pt-4 border-top">
                <p className="text-muted small mb-3">
                  이 정보가 도움이 되셨다면 공유해주세요!
                </p>
                <SocialShare 
                  title="어린이집 vs 유치원 비용 완벽 비교: 월 100만원 차이?"
                  description="어린이집과 유치원 비용을 상세히 비교하고 보육료 지원금, 양육수당까지 완벽 정리"
                  hashtags={['보육비', '어린이집', '유치원', '육아비용', '보육료지원']}
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

export default ChildcareGuide;