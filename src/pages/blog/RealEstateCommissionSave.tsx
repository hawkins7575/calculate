import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const RealEstateCommissionSave = () => {
  useEffect(() => {
    // 페이지 제목 및 메타 태그 설정
    document.title = '부동산 중개보수 50만원 절약하는 7가지 방법 | 가계산 블로그';
    
    // 메타 설명
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '부동산 거래 시 중개보수 50만원 절약하는 실전 협상 전략 7가지. 법정 상한요율, 협상 포인트, 실제 절약 사례까지 전문가가 공개합니다.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '부동산 거래 시 중개보수 50만원 절약하는 실전 협상 전략 7가지. 법정 상한요율, 협상 포인트, 실제 절약 사례까지 전문가가 공개합니다.';
      document.head.appendChild(newMetaDescription);
    }

    // 키워드 메타 태그
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '부동산 중개보수, 중개수수료 절약, 부동산 거래 비용, 중개보수 계산, 부동산 협상, 중개보수 할인, 부동산 중개업소');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = '부동산 중개보수, 중개수수료 절약, 부동산 거래 비용, 중개보수 계산, 부동산 협상, 중개보수 할인, 부동산 중개업소';
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

    addOpenGraphTag('og:title', '부동산 중개보수 50만원 절약하는 7가지 방법');
    addOpenGraphTag('og:description', '부동산 거래 시 중개보수 50만원 절약하는 실전 협상 전략. 법정 상한요율과 협상 포인트를 알려드립니다.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/real-estate-commission-save`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    // 구조화된 데이터 (JSON-LD) 추가
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "부동산 중개보수 50만원 절약하는 7가지 방법",
      "description": "부동산 거래 시 중개보수 50만원 절약하는 실전 협상 전략 7가지. 법정 상한요율, 협상 포인트, 실제 절약 사례까지 전문가가 공개합니다.",
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
      "datePublished": "2024-01-12",
      "dateModified": "2024-01-12",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${window.location.origin}/blog/real-estate-commission-save`
      },
      "keywords": ["부동산 중개보수", "중개수수료 절약", "부동산 거래 비용", "중개보수 계산", "부동산 협상", "중개보수 할인"],
      "articleSection": "부동산 가이드",
      "wordCount": 3000,
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
              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              color: 'white',
              fontSize: '0.8rem'
            }}
          >
            부동산
          </span>
          <small className="text-muted">7분 읽기 • 2024년 1월 12일</small>
        </div>
        
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700',
          color: '#2c3e50',
          lineHeight: '1.3',
          marginBottom: '1rem'
        }}>
          부동산 중개보수 50만원 절약하는 7가지 방법
        </h1>
        
        <p className="lead text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          부동산 거래 시 중개보수를 합법적으로 절약할 수 있는 실전 노하우와 협상 전략을 공개합니다.
        </p>
      </div>

      {/* 블로그 본문 */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333' }}>
          
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            💰 중개보수, 생각보다 큰 돈입니다
          </h2>
          
          <p>
            부동산 거래에서 중개보수는 의외로 큰 비중을 차지합니다. 
            예를 들어, 5억원 아파트 매매 시 법정 상한 요율로 계산하면 <strong>200만원</strong>의 중개보수를 지불해야 합니다.
          </p>
          
          <p>
            하지만 법정 상한요율은 말 그대로 '상한'이기 때문에, 
            협상과 몇 가지 전략을 통해 상당한 금액을 절약할 수 있습니다.
          </p>

          <div className="bg-light p-4 rounded mb-4">
            <h4 style={{ color: '#28a745' }}>🏠 실제 절약 사례</h4>
            <p className="mb-2"><strong>거래 조건:</strong> 아파트 매매 5억원</p>
            <ul>
              <li><strong>법정 상한요율:</strong> 200만원 (0.4%)</li>
              <li><strong>협상 후:</strong> 150만원 (0.3%)</li>
              <li><strong>절약액:</strong> <span className="text-success fw-bold">50만원</span></li>
            </ul>
            <p className="mb-0">
              <Link to="/real-estate" className="btn btn-success btn-sm">
                🧮 중개보수 계산기로 확인하기
              </Link>
            </p>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🎯 7가지 중개보수 절약 전략
          </h2>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #007bff'
            }}>
              1️⃣ 복수 중개업소 비교 견적
            </h3>
            <p>
              가장 기본적이지만 효과적인 방법입니다. 같은 물건이라도 중개업소마다 수수료율이 다를 수 있습니다.
            </p>
            <ul>
              <li><strong>최소 3곳 이상</strong> 중개업소 방문</li>
              <li>각 업소의 <strong>서비스 내용</strong>과 <strong>수수료율</strong> 비교</li>
              <li>단순히 저렴한 곳보다는 <strong>서비스 대비 합리적인 곳</strong> 선택</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #28a745'
            }}>
              2️⃣ 거래 규모에 따른 할인율 협상
            </h3>
            <p>
              거래 금액이 클수록 중개업소의 수수료 수입이 많아지므로, 할인 여지가 커집니다.
            </p>
            
            <Table striped bordered hover size="sm" className="mt-3">
              <thead>
                <tr>
                  <th>거래 금액</th>
                  <th>법정 요율</th>
                  <th>협상 가능 요율</th>
                  <th>절약 효과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3억원</td>
                  <td>0.4% (120만원)</td>
                  <td>0.25% (75만원)</td>
                  <td className="text-success">45만원 절약</td>
                </tr>
                <tr>
                  <td>5억원</td>
                  <td>0.4% (200만원)</td>
                  <td>0.3% (150만원)</td>
                  <td className="text-success">50만원 절약</td>
                </tr>
                <tr>
                  <td>10억원</td>
                  <td>0.5% (500만원)</td>
                  <td>0.35% (350만원)</td>
                  <td className="text-success">150만원 절약</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #ffc107'
            }}>
              3️⃣ 매수·매도 동시 의뢰 할인
            </h3>
            <p>
              집을 팔고 동시에 새 집을 사는 경우, 한 중개업소에서 두 거래를 모두 처리하면 할인을 받을 수 있습니다.
            </p>
            <ul>
              <li><strong>일반적인 할인율:</strong> 각 거래당 10-20% 추가 할인</li>
              <li><strong>조건:</strong> 두 거래가 동시에 성사되어야 함</li>
              <li><strong>주의사항:</strong> 한 업소에 의존하므로 서비스 품질 확인 필요</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #dc3545'
            }}>
              4️⃣ 직거래 후 최종 단계만 의뢰
            </h3>
            <p>
              물건을 직접 찾고 가격 협상도 본인이 진행한 후, 계약서 작성과 잔금 처리만 중개업소에 의뢰하는 방법입니다.
            </p>
            <div className="alert alert-warning">
              <strong>⚠️ 주의사항:</strong>
              <ul className="mb-0">
                <li>부동산 전문 지식이 부족하면 위험할 수 있습니다</li>
                <li>계약서 작성, 등기 이전 등 복잡한 절차는 전문가 도움 필요</li>
                <li>중개업소와 사전에 수수료율을 명확히 합의해야 합니다</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #6610f2'
            }}>
              5️⃣ 현금 거래 시 추가 할인
            </h3>
            <p>
              대출 없이 현금으로 거래하는 경우, 중개업소 입장에서는 거래 성사 가능성이 높아지므로 추가 할인이 가능합니다.
            </p>
            <ul>
              <li><strong>현금 거래의 장점:</strong> 대출 심사 과정 생략, 빠른 거래 완료</li>
              <li><strong>할인 여지:</strong> 일반 거래 대비 5-10% 추가 할인 가능</li>
              <li><strong>협상 포인트:</strong> "현금 거래이므로 확실한 거래"임을 어필</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #fd7e14'
            }}>
              6️⃣ 온라인 플랫폼 활용
            </h3>
            <p>
              최근에는 온라인 부동산 플랫폼에서 기존 중개업소보다 낮은 수수료를 제시하는 경우가 많습니다.
            </p>
            <ul>
              <li><strong>온라인 플랫폼 장점:</strong> 임대료 등 고정비 절약으로 수수료 인하 가능</li>
              <li><strong>주의사항:</strong> 대면 상담의 한계, 서비스 품질 확인 필요</li>
              <li><strong>추천 대상:</strong> 부동산 거래 경험이 있는 분</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #20c997'
            }}>
              7️⃣ 성수기 vs 비수기 타이밍
            </h3>
            <p>
              부동산 거래에도 성수기와 비수기가 있습니다. 비수기에는 중개업소에서 더 적극적인 할인을 제공할 수 있습니다.
            </p>
            <ul>
              <li><strong>성수기:</strong> 3-5월, 9-11월 (이사철)</li>
              <li><strong>비수기:</strong> 12-2월, 6-8월</li>
              <li><strong>비수기 장점:</strong> 협상 여지 증가, 중개업소의 적극적 할인</li>
            </ul>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            📋 중개보수 협상 시 체크리스트
          </h2>

          <div className="bg-info bg-opacity-10 p-4 rounded">
            <h4 style={{ color: '#0dcaf0' }}>✅ 협상 전 준비사항</h4>
            <ul>
              <li>여러 중개업소의 수수료율 조사</li>
              <li>해당 지역 시세 및 거래 현황 파악</li>
              <li>본인의 거래 조건 정리 (현금/대출, 급매/일반매매 등)</li>
              <li>중개업소별 제공 서비스 내용 비교</li>
            </ul>

            <h4 style={{ color: '#0dcaf0', marginTop: '1.5rem' }}>💬 협상 시 말하면 좋은 것들</h4>
            <ul>
              <li>"다른 업소에서 ○○% 제시했는데..."</li>
              <li>"현금 거래라서 확실합니다"</li>
              <li>"매도도 함께 의뢰할 계획입니다"</li>
              <li>"거래금액이 크니까 조금 더 할인 안 될까요?"</li>
            </ul>

            <h4 style={{ color: '#0dcaf0', marginTop: '1.5rem' }}>❌ 협상 시 주의사항</h4>
            <ul className="mb-0">
              <li>무조건 최저가만 고집하지 말고 서비스 품질도 고려</li>
              <li>구두 약속이 아닌 서면으로 수수료율 확정</li>
              <li>중개보수 외 추가 비용(광고비 등) 유무 확인</li>
              <li>계약 성사 후에는 추가 할인 요구 어려움</li>
            </ul>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            💡 실전 협상 시뮬레이션
          </h2>

          <blockquote className="blockquote border-start border-success border-4 ps-3 py-2">
            <p className="mb-1">
              <strong>상황:</strong> 4억원 아파트 매수
            </p>
            <p className="mb-1">
              <strong>A업소:</strong> "법정 요율대로 0.4%, 160만원입니다."
            </p>
            <p className="mb-1">
              <strong>협상:</strong> "B업소에서는 0.3%라고 하던데, 현금 거래고 확실한 거래라서 조정 가능할까요?"
            </p>
            <p className="mb-2">
              <strong>결과:</strong> 0.3% (120만원) → <span className="text-success fw-bold">40만원 절약</span>
            </p>
            <footer className="blockquote-footer">
              실제 고객 협상 사례 (개인정보 보호를 위해 일부 수정)
            </footer>
          </blockquote>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🔗 관련 도구 및 정보
          </h2>

          <div className="row">
            <div className="col-md-6 mb-3">
              <Link to="/real-estate" className="text-decoration-none">
                <div className="card border border-success">
                  <div className="card-body text-center">
                    <div className="display-6 mb-2">🏠</div>
                    <h6 className="card-title">중개보수 계산기</h6>
                    <p className="card-text small text-muted">
                      거래 조건별 중개보수 계산
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-3">
              <Link to="/loan" className="text-decoration-none">
                <div className="card border border-primary">
                  <div className="card-body text-center">
                    <div className="display-6 mb-2">🏦</div>
                    <h6 className="card-title">대출이자 계산기</h6>
                    <p className="card-text small text-muted">
                      부동산 대출 이자 계산
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-4 pt-4 border-top">
            <p className="text-muted small">
              ⚠️ <strong>중요 안내:</strong> 중개보수는 법정 상한요율 내에서 협상 가능하며, 
              과도한 할인 요구는 서비스 품질 저하를 가져올 수 있습니다. 
              합리적인 선에서 협상하시기 바랍니다.
            </p>
          </div>

        </Card.Body>
      </Card>

      {/* 소셜 공유 */}
      <Row className="mt-5">
        <Col className="text-center">
          <SocialShare 
            title="부동산 중개보수 50만원 절약하는 7가지 방법"
            description="부동산 거래 시 중개보수를 합법적으로 절약할 수 있는 실전 노하우와 협상 전략"
            hashtags={['부동산중개보수', '부동산절약', '중개수수료', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RealEstateCommissionSave;