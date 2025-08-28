import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CompoundInterestCalculator from '../CompoundInterestCalculator';

const CompoundInterestPage = () => {
  useEffect(() => {
    document.title = '복리 계산기 - 투자 수익률 계산 및 복리 효과 분석 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <CompoundInterestCalculator />
      </Container>
    </>
  );
};

export default CompoundInterestPage;