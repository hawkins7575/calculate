import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/SocialShare';

const BmiAsianStandard = () => {
  useEffect(() => {
    // 페이지 제목 및 메타 태그 설정
    document.title = 'BMI 25 vs 23: 아시아인에게 정말 중요한 차이 | 가계산 블로그';
    
    // 메타 설명
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '아시아인 BMI 기준 완벽 가이드. BMI 25와 23의 건강 차이, 서구 기준과의 차이점, 체중 관리 방법까지 의학적 근거로 설명합니다.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = '아시아인 BMI 기준 완벽 가이드. BMI 25와 23의 건강 차이, 서구 기준과의 차이점, 체중 관리 방법까지 의학적 근거로 설명합니다.';
      document.head.appendChild(newMetaDescription);
    }

    // 키워드 메타 태그
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'BMI 계산기, 아시아인 BMI, BMI 25, BMI 23, 체질량지수, 건강 체중, 비만 기준, 다이어트, 체중 관리, WHO 기준');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'BMI 계산기, 아시아인 BMI, BMI 25, BMI 23, 체질량지수, 건강 체중, 비만 기준, 다이어트, 체중 관리, WHO 기준';
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

    addOpenGraphTag('og:title', 'BMI 25 vs 23: 아시아인에게 정말 중요한 차이');
    addOpenGraphTag('og:description', '아시아인 BMI 기준과 서구 기준의 차이점. BMI 25와 23이 건강에 미치는 영향과 올바른 체중 관리 방법을 알아보세요.');
    addOpenGraphTag('og:type', 'article');
    addOpenGraphTag('og:url', `${window.location.origin}/blog/bmi-asian-standard`);
    addOpenGraphTag('og:site_name', '가계산');
    addOpenGraphTag('og:locale', 'ko_KR');

    // 구조화된 데이터 (JSON-LD) 추가
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "BMI 25 vs 23: 아시아인에게 정말 중요한 차이",
      "description": "아시아인 BMI 기준 완벽 가이드. BMI 25와 23의 건강 차이, 서구 기준과의 차이점, 체중 관리 방법까지 의학적 근거로 설명합니다.",
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
      "datePublished": "2024-01-10",
      "dateModified": "2024-01-10",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${window.location.origin}/blog/bmi-asian-standard`
      },
      "keywords": ["BMI 계산기", "아시아인 BMI", "BMI 25", "BMI 23", "체질량지수", "건강 체중", "비만 기준", "다이어트", "체중 관리"],
      "articleSection": "건강 가이드",
      "wordCount": 2800,
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
              background: 'linear-gradient(135deg, #e83e8c 0%, #fd7e14 100%)',
              color: 'white',
              fontSize: '0.8rem'
            }}
          >
            건강 관리
          </span>
          <small className="text-muted">4분 읽기 • 2024년 1월 10일</small>
        </div>
        
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700',
          color: '#2c3e50',
          lineHeight: '1.3',
          marginBottom: '1rem'
        }}>
          BMI 25 vs 23: 아시아인에게 정말 중요한 차이
        </h1>
        
        <p className="lead text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          서구 기준과 다른 아시아인 BMI 기준, 건강한 체중 관리를 위해 꼭 알아야 할 정보를 제공합니다.
        </p>
      </div>

      {/* 블로그 본문 */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#333' }}>
          
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🌏 왜 아시아인에게는 다른 기준이 필요할까?
          </h2>
          
          <p>
            같은 BMI라도 인종에 따라 체지방률과 건강 위험도가 다르다는 것이 
            여러 의학 연구를 통해 밝혀졌습니다. 
            특히 아시아인은 서구인에 비해 <strong>같은 BMI에서도 체지방률이 높고, 
            복부비만이 더 쉽게 발생</strong>하는 특징이 있습니다.
          </p>
          
          <p>
            이는 유전적 요인과 체질적 특성 때문으로, 
            WHO에서도 아시아-태평양 지역을 위한 별도의 BMI 기준을 제시하고 있습니다.
          </p>

          <div className="bg-light p-4 rounded mb-4">
            <h4 style={{ color: '#e83e8c' }}>📊 BMI 기준 비교</h4>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>분류</th>
                  <th>서구 기준</th>
                  <th>아시아-태평양 기준</th>
                  <th>차이</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>정상</td>
                  <td>18.5-24.9</td>
                  <td className="text-success">18.5-22.9</td>
                  <td className="text-primary">-2.0</td>
                </tr>
                <tr>
                  <td>과체중</td>
                  <td>25.0-29.9</td>
                  <td className="text-warning">23.0-24.9</td>
                  <td className="text-primary">-2.0</td>
                </tr>
                <tr>
                  <td>비만</td>
                  <td>30.0 이상</td>
                  <td className="text-danger">25.0 이상</td>
                  <td className="text-primary">-5.0</td>
                </tr>
              </tbody>
            </Table>
            <p className="mb-0">
              <Link to="/bmi" className="btn btn-primary btn-sm">
                🧮 BMI 계산기로 내 수치 확인하기
              </Link>
            </p>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            ⚖️ BMI 23 vs 25, 실제로 어떤 차이일까?
          </h2>

          <p>
            170cm 성인 남성을 기준으로 BMI 23과 25의 실제 차이를 살펴보겠습니다.
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card border-success h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-success">✅ BMI 23 (정상 상한)</h5>
                  <ul className="list-unstyled">
                    <li><strong>체중:</strong> 66.5kg</li>
                    <li><strong>건강 상태:</strong> 이상적</li>
                    <li><strong>질병 위험:</strong> 낮음</li>
                    <li><strong>관리 방법:</strong> 현상 유지</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-warning h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-warning">⚠️ BMI 25 (아시아 기준 비만)</h5>
                  <ul className="list-unstyled">
                    <li><strong>체중:</strong> 72.3kg</li>
                    <li><strong>건강 상태:</strong> 주의 필요</li>
                    <li><strong>질병 위험:</strong> 증가</li>
                    <li><strong>관리 방법:</strong> 체중 감량</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-info">
            <h5 className="alert-heading">🔍 단 5.8kg의 차이가 만드는 변화</h5>
            <ul className="mb-0">
              <li><strong>당뇨병 위험:</strong> 2배 증가</li>
              <li><strong>심혈관질환 위험:</strong> 1.5배 증가</li>
              <li><strong>고혈압 발생률:</strong> 1.8배 증가</li>
              <li><strong>수면무호흡증:</strong> 발생 가능성 증가</li>
            </ul>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🎯 아시아인 BMI별 건강 관리 가이드
          </h2>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#d4edda',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #28a745'
            }}>
              BMI 18.5-22.9 (정상 범위)
            </h3>
            <p><strong>🎉 축하합니다! 이상적인 체중입니다.</strong></p>
            <ul>
              <li><strong>유지 전략:</strong> 현재 식습관과 운동 패턴 유지</li>
              <li><strong>권장 운동:</strong> 주 3-4회, 30분 이상 유산소 + 근력 운동</li>
              <li><strong>식단:</strong> 균형 잡힌 영양소 섭취</li>
              <li><strong>정기 검진:</strong> 연 1회 건강검진으로 현상 유지 확인</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#fff3cd',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #ffc107'
            }}>
              BMI 23.0-24.9 (과체중)
            </h3>
            <p><strong>⚠️ 주의가 필요한 단계입니다.</strong></p>
            <ul>
              <li><strong>목표:</strong> BMI 22 이하로 체중 감량</li>
              <li><strong>감량 속도:</strong> 주당 0.5kg 이하로 천천히</li>
              <li><strong>운동:</strong> 유산소 운동 비중 증가 (주 4-5회)</li>
              <li><strong>식단 조절:</strong> 일일 칼로리 10-15% 감소</li>
              <li><strong>모니터링:</strong> 주간 체중 측정 및 기록</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 style={{ 
              color: '#495057', 
              fontSize: '1.3rem', 
              marginTop: '1.5rem',
              backgroundColor: '#f8d7da',
              padding: '0.5rem 1rem',
              borderLeft: '4px solid #dc3545'
            }}>
              BMI 25.0 이상 (비만)
            </h3>
            <p><strong>🚨 적극적인 체중 관리가 필요합니다.</strong></p>
            <ul>
              <li><strong>1차 목표:</strong> 현 체중의 5-10% 감량 (3-6개월 내)</li>
              <li><strong>최종 목표:</strong> BMI 22 이하 달성</li>
              <li><strong>전문가 상담:</strong> 의사, 영양사와 체중 감량 계획 수립</li>
              <li><strong>운동:</strong> 저강도부터 시작, 점진적 증가</li>
              <li><strong>식단:</strong> 칼로리 제한과 영양균형 동시 고려</li>
            </ul>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            💡 아시아인 특화 체중 관리 팁
          </h2>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border-0 bg-light h-100">
                <div className="card-body p-3">
                  <h6 className="card-title text-primary">🍚 식단 관리</h6>
                  <ul className="list-unstyled small mb-0">
                    <li>• <strong>탄수화물 조절:</strong> 백미 → 잡곡밥</li>
                    <li>• <strong>나트륨 줄이기:</strong> 한식의 높은 염분 주의</li>
                    <li>• <strong>식사 속도:</strong> 천천히 꼭꼭 씹어서</li>
                    <li>• <strong>간식 관리:</strong> 과자 대신 견과류</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card border-0 bg-light h-100">
                <div className="card-body p-3">
                  <h6 className="card-title text-success">🏃‍♂️ 운동 전략</h6>
                  <ul className="list-unstyled small mb-0">
                    <li>• <strong>유산소:</strong> 빠른 걷기, 계단 오르기</li>
                    <li>• <strong>근력:</strong> 스쿼트, 플랭크 등 기본 동작</li>
                    <li>• <strong>일상 활동:</strong> 대중교통, 도보 활용</li>
                    <li>• <strong>꾸준함:</strong> 고강도보다 지속 가능성</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            📈 BMI와 함께 확인해야 할 다른 지표들
          </h2>

          <p>
            BMI는 유용한 지표이지만, 근육량이나 체지방 분포를 완전히 반영하지는 못합니다. 
            다음 지표들을 함께 확인하면 더 정확한 건강 상태를 파악할 수 있습니다.
          </p>

          <Table striped bordered hover size="sm" className="mb-4">
            <thead>
              <tr>
                <th>지표</th>
                <th>측정 방법</th>
                <th>정상 범위</th>
                <th>의미</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>허리둘레</td>
                <td>배꼽 위 측정</td>
                <td>남성 90cm, 여성 85cm 미만</td>
                <td>복부비만 판단</td>
              </tr>
              <tr>
                <td>체지방률</td>
                <td>체성분 분석</td>
                <td>남성 15-20%, 여성 20-25%</td>
                <td>체지방 정도</td>
              </tr>
              <tr>
                <td>근육량</td>
                <td>체성분 분석</td>
                <td>개인차 존재</td>
                <td>기초대사량 관련</td>
              </tr>
              <tr>
                <td>혈압</td>
                <td>혈압계 측정</td>
                <td>120/80mmHg 미만</td>
                <td>심혈관 건강</td>
              </tr>
            </tbody>
          </Table>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🏥 전문가 상담이 필요한 경우
          </h2>

          <div className="alert alert-warning">
            <h5 className="alert-heading">⚠️ 이런 경우 의사와 상담하세요</h5>
            <ul>
              <li><strong>BMI 27 이상:</strong> 고도비만으로 전문적 관리 필요</li>
              <li><strong>급격한 체중 변화:</strong> 1개월에 체중의 5% 이상 변화</li>
              <li><strong>관련 질환 보유:</strong> 당뇨, 고혈압, 심장질환 등</li>
              <li><strong>반복적인 다이어트 실패:</strong> 요요 현상 반복</li>
              <li><strong>식이장애 의심:</strong> 과식, 거식 등 비정상적 식습관</li>
            </ul>
          </div>

          <blockquote className="blockquote border-start border-info border-4 ps-3 py-2">
            <p className="mb-2">
              "BMI 24였을 때는 '아직 괜찮다'고 생각했는데, 
              건강검진에서 당뇨 전단계 판정을 받았어요. 
              아시아인 기준으로는 이미 비만이었던 거죠. 
              지금은 BMI 22를 목표로 체중 관리 중입니다."
            </p>
            <footer className="blockquote-footer">
              직장인 박○○님 (35세)
            </footer>
          </blockquote>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🎯 목표 체중 설정과 관리 계획
          </h2>

          <div className="bg-primary bg-opacity-10 p-4 rounded">
            <h4 style={{ color: '#0984e3' }}>📅 4단계 체중 관리 계획</h4>
            <ol>
              <li className="mb-2">
                <strong>1단계: 현재 상태 파악</strong>
                <br />BMI 계산, 체성분 분석, 건강검진 결과 확인
                <br />
                <Link to="/bmi" className="btn btn-outline-primary btn-sm mt-1">
                  BMI 계산기로 현재 상태 확인
                </Link>
              </li>
              <li className="mb-2">
                <strong>2단계: 목표 설정</strong>
                <br />아시아인 기준 정상 범위(BMI 18.5-22.9) 내 목표 체중 설정
              </li>
              <li className="mb-2">
                <strong>3단계: 실행 계획 수립</strong>
                <br />식단 조절 + 운동 계획 + 생활습관 개선
              </li>
              <li className="mb-0">
                <strong>4단계: 모니터링 및 조정</strong>
                <br />주간 체중 측정, 월간 체성분 분석, 분기별 건강검진
              </li>
            </ol>
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
            🔗 관련 도구 및 정보
          </h2>

          <div className="row">
            <div className="col-md-6 mb-3">
              <Link to="/bmi" className="text-decoration-none">
                <div className="card border border-info">
                  <div className="card-body text-center">
                    <div className="display-6 mb-2">⚖️</div>
                    <h6 className="card-title">BMI 계산기</h6>
                    <p className="card-text small text-muted">
                      아시아인 기준 BMI 계산 및 판정
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
                      건강관리 비용 계획 수립
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-4 pt-4 border-top">
            <p className="text-muted small">
              ⚠️ <strong>건강 관리 주의사항:</strong> 본 글의 내용은 일반적인 건강 정보 제공 목적이며, 
              개인의 건강 상태에 따라 적용 방법이 달라질 수 있습니다. 
              체중 관리나 건강 관련 결정을 내리기 전에는 반드시 의료진과 상담하시기 바랍니다.
            </p>
          </div>

        </Card.Body>
      </Card>

      {/* 소셜 공유 */}
      <Row className="mt-5">
        <Col className="text-center">
          <SocialShare 
            title="BMI 25 vs 23: 아시아인에게 정말 중요한 차이"
            description="서구 기준과 다른 아시아인 BMI 기준, 건강한 체중 관리를 위해 꼭 알아야 할 정보"
            hashtags={['BMI', '아시아인기준', '건강관리', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BmiAsianStandard;