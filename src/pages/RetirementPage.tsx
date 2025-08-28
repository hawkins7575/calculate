import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import RetirementCalculator from '../RetirementCalculator';

const RetirementPage = () => {
  useEffect(() => {
    document.title = '퇴직금 계산기 - 근로기준법 기준 퇴직금 계산 | 가계산';
  }, []);

  return (
    <>
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <RetirementCalculator />
      </Container>
    </>
  );
};

export default RetirementPage;