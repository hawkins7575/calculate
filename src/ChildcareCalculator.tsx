import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import SocialShare from './components/SocialShare';
import AdSense from './components/AdSense';

interface ChildcareCost {
  category: string;
  monthly: number;
  yearly: number;
  description: string;
}

interface ChildcareResult {
  monthlyTotal: number;
  yearlyTotal: number;
  totalUntil20: number;
  costs: ChildcareCost[];
  ageBreakdown: Array<{
    ageRange: string;
    monthlyAvg: number;
    yearlyAvg: number;
  }>;
}

const ChildcareCalculator = () => {
  const [childAge, setChildAge] = useState<string>('');
  const [nurseryType, setNurseryType] = useState<string>('public');
  const [educationType, setEducationType] = useState<string>('public');
  const [extraActivities, setExtraActivities] = useState<string>('basic');
  const [region, setRegion] = useState<string>('seoul');
  const [result, setResult] = useState<ChildcareResult | null>(null);

  const calculateChildcareCost = () => {
    const age = parseInt(childAge);
    
    if (age < 0 || age > 20 || isNaN(age)) {
      alert('올바른 나이를 입력해주세요. (0-20세)');
      return;
    }

    const costs: ChildcareCost[] = [];
    let monthlyTotal = 0;

    // 지역별 가중치
    const regionMultiplier = {
      'seoul': 1.3,
      'metropolitan': 1.1,
      'other': 1.0
    };
    const multiplier = regionMultiplier[region as keyof typeof regionMultiplier];

    // 연령대별 기본 비용 계산
    if (age <= 2) {
      // 어린이집/유치원 비용
      const nurseryCost = nurseryType === 'public' ? 200000 : 800000;
      costs.push({
        category: `어린이집 (${nurseryType === 'public' ? '국공립' : '사립'})`,
        monthly: nurseryCost * multiplier,
        yearly: nurseryCost * multiplier * 12,
        description: '보육료 및 급식비'
      });
      monthlyTotal += nurseryCost * multiplier;

      // 기저귀/분유 등
      costs.push({
        category: '기저귀/분유/이유식',
        monthly: 250000 * multiplier,
        yearly: 250000 * multiplier * 12,
        description: '필수 양육용품'
      });
      monthlyTotal += 250000 * multiplier;

    } else if (age <= 7) {
      // 유치원 비용
      const kindergartenCost = educationType === 'public' ? 150000 : 600000;
      costs.push({
        category: `유치원 (${educationType === 'public' ? '공립' : '사립'})`,
        monthly: kindergartenCost * multiplier,
        yearly: kindergartenCost * multiplier * 12,
        description: '교육비 및 급식비'
      });
      monthlyTotal += kindergartenCost * multiplier;

    } else if (age <= 12) {
      // 초등학교 비용
      costs.push({
        category: '초등학교 교육비',
        monthly: 100000 * multiplier,
        yearly: 100000 * multiplier * 12,
        description: '교재비, 준비물, 체험학습비'
      });
      monthlyTotal += 100000 * multiplier;

    } else if (age <= 15) {
      // 중학교 비용
      costs.push({
        category: '중학교 교육비',
        monthly: 200000 * multiplier,
        yearly: 200000 * multiplier * 12,
        description: '교복, 교재비, 학용품'
      });
      monthlyTotal += 200000 * multiplier;

    } else if (age <= 18) {
      // 고등학교 비용
      const highschoolCost = educationType === 'public' ? 300000 : 800000;
      costs.push({
        category: `고등학교 (${educationType === 'public' ? '일반고' : '특목고/자사고'})`,
        monthly: highschoolCost * multiplier,
        yearly: highschoolCost * multiplier * 12,
        description: '등록금, 교재비, 보충수업비'
      });
      monthlyTotal += highschoolCost * multiplier;

    } else {
      // 대학교 비용
      const universityCost = educationType === 'public' ? 400000 : 1000000;
      costs.push({
        category: `대학교 (${educationType === 'public' ? '국립대' : '사립대'})`,
        monthly: universityCost * multiplier,
        yearly: universityCost * multiplier * 12,
        description: '등록금, 교재비, 생활비'
      });
      monthlyTotal += universityCost * multiplier;
    }

    // 사교육/특별활동 비용
    const activityCosts = {
      'basic': 200000,
      'average': 500000,
      'intensive': 1000000
    };
    const activityCost = activityCosts[extraActivities as keyof typeof activityCosts] * multiplier;

    if (age >= 5 && age <= 18) {
      costs.push({
        category: `사교육/특별활동 (${extraActivities === 'basic' ? '기본' : extraActivities === 'average' ? '일반' : '집중'})`,
        monthly: activityCost,
        yearly: activityCost * 12,
        description: '학원비, 과외비, 특별활동비'
      });
      monthlyTotal += activityCost;
    }

    // 기본 생활비 (모든 연령)
    const livingCost = 300000 * multiplier;
    costs.push({
      category: '기본 생활비',
      monthly: livingCost,
      yearly: livingCost * 12,
      description: '의식주, 의료비, 용돈 등'
    });
    monthlyTotal += livingCost;

    // 20세까지 총 비용 계산 (연령대별 평균)
    const ageBreakdown = [
      { ageRange: '0-2세 (영아기)', monthlyAvg: 800000 * multiplier, yearlyAvg: 800000 * multiplier * 12 },
      { ageRange: '3-7세 (유아기)', monthlyAvg: 700000 * multiplier, yearlyAvg: 700000 * multiplier * 12 },
      { ageRange: '8-12세 (초등)', monthlyAvg: 600000 * multiplier, yearlyAvg: 600000 * multiplier * 12 },
      { ageRange: '13-15세 (중등)', monthlyAvg: 800000 * multiplier, yearlyAvg: 800000 * multiplier * 12 },
      { ageRange: '16-18세 (고등)', monthlyAvg: 1000000 * multiplier, yearlyAvg: 1000000 * multiplier * 12 },
      { ageRange: '19-20세 (대학)', monthlyAvg: 1200000 * multiplier, yearlyAvg: 1200000 * multiplier * 12 }
    ];

    const totalUntil20 = (
      ageBreakdown[0].yearlyAvg * 3 +
      ageBreakdown[1].yearlyAvg * 5 +
      ageBreakdown[2].yearlyAvg * 5 +
      ageBreakdown[3].yearlyAvg * 3 +
      ageBreakdown[4].yearlyAvg * 3 +
      ageBreakdown[5].yearlyAvg * 2
    );

    const calculationResult: ChildcareResult = {
      monthlyTotal,
      yearlyTotal: monthlyTotal * 12,
      totalUntil20,
      costs,
      ageBreakdown
    };

    setResult(calculationResult);
  };

  const resetForm = () => {
    setChildAge('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="text-center mb-4">
        <h2 className="mb-3">육아비용 계산기</h2>
        <p className="text-muted">
          자녀의 나이와 교육 환경에 따른 월별/연간 육아비용을 계산해보세요
        </p>
      </div>

      {/* 헤더 광고 */}
      <div className="text-center mb-4">
        <AdSense 
          adType="manual"
          slot="7865432109"
          format="auto"
          responsive={true}
          style={{ 
            minHeight: '90px',
            maxHeight: '120px'
          }}
          className="header-ad"
        />
      </div>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">📋 육아 정보 입력</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>자녀 나이</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="예: 5"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    자녀의 현재 나이를 입력하세요 (0-20세)
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>거주 지역</Form.Label>
                  <Form.Select 
                    value={region} 
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="seoul">서울특별시</option>
                    <option value="metropolitan">광역시</option>
                    <option value="other">기타 지역</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    거주 지역에 따라 비용이 달라집니다
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>보육/교육 기관</Form.Label>
                  <Form.Select 
                    value={nurseryType} 
                    onChange={(e) => {
                      setNurseryType(e.target.value);
                      setEducationType(e.target.value);
                    }}
                  >
                    <option value="public">국공립/공립</option>
                    <option value="private">민간/사립</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    어린이집, 유치원, 학교 유형을 선택하세요
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>사교육/특별활동 수준</Form.Label>
                  <Form.Select 
                    value={extraActivities} 
                    onChange={(e) => setExtraActivities(e.target.value)}
                  >
                    <option value="basic">기본 (최소한의 활동)</option>
                    <option value="average">일반 (평균적인 수준)</option>
                    <option value="intensive">집중 (다양한 사교육)</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    사교육 및 특별활동 수준을 선택하세요
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={calculateChildcareCost}>
                    육아비용 계산하기
                  </Button>
                  <Button variant="outline-secondary" onClick={resetForm}>
                    다시 계산
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <div className="sticky-top" style={{ top: '20px' }}>
            <AdSense
              adType="manual"
              slot="7865432109"
              format="auto"
              responsive={true}
              style={{ 
                minHeight: '250px',
                marginBottom: '20px'
              }}
              className="sidebar-ad"
            />
          </div>
        </Col>
      </Row>

      {result && (
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Header>
                <h5 className="mb-0">💰 현재 나이 기준 비용</h5>
              </Card.Header>
              <Card.Body>
                <Row className="text-center">
                  <Col md={4}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">월 육아비용</h6>
                      <h4 className="text-primary mb-0">
                        {result.monthlyTotal.toLocaleString()}원
                      </h4>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">년 육아비용</h6>
                      <h5 className="mb-0">
                        {result.yearlyTotal.toLocaleString()}원
                      </h5>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="mb-3">
                      <h6 className="text-muted mb-1">20세까지 총비용</h6>
                      <h5 className="text-warning mb-0">
                        {result.totalUntil20.toLocaleString()}원
                      </h5>
                    </div>
                  </Col>
                </Row>

                <h6 className="mt-3 mb-2">세부 비용 내역</h6>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>월비용</th>
                      <th>연비용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.costs.map((cost, index) => (
                      <tr key={index}>
                        <td>{cost.category}</td>
                        <td>{cost.monthly.toLocaleString()}원</td>
                        <td>{cost.yearly.toLocaleString()}원</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Header>
                <h6 className="mb-0">📊 연령별 평균 육아비용</h6>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>연령대</th>
                      <th>월평균</th>
                      <th>년평균</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.ageBreakdown.map((breakdown, index) => (
                      <tr key={index}>
                        <td>{breakdown.ageRange}</td>
                        <td>{breakdown.monthlyAvg.toLocaleString()}원</td>
                        <td>{breakdown.yearlyAvg.toLocaleString()}원</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* 결과 후 광고 */}
      {result && (
        <div className="my-4 text-center">
          <AdSense
            adType="manual"
            slot="7865432109"
            format="auto"
            responsive={true}
            style={{ 
              minHeight: '200px'
            }}
            className="infeed-ad"
          />
        </div>
      )}

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <p className="mb-0 small"><strong>📚 육아비용 절약 팁</strong></p>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <strong>• 국공립 기관:</strong> 사립 대비 50-70% 비용 절약
                </li>
                <li className="mb-2">
                  <strong>• 지원제도:</strong> 아동수당, 보육료 지원 등 활용
                </li>
                <li className="mb-2">
                  <strong>• 사교육 최적화:</strong> 꼭 필요한 교육만 선별
                </li>
                <li className="mb-0">
                  <strong>• 미리 준비:</strong> 자녀펀드 등 장기 적립 계획
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <SocialShare 
            title="육아비용 계산기 - 자녀양육비와 교육비 계산"
            description="자녀의 나이와 교육 환경에 따른 월별/연간 육아비용을 계산하고 절약 방법을 알아보세요"
            hashtags={['육아비용계산기', '자녀교육비', '양육비', '가계산']}
            className="justify-content-center"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ChildcareCalculator;