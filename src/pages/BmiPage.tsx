import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BmiCalculator from '../BmiCalculator';

const BmiPage = () => {
  useEffect(() => {
    document.title = 'BMI 계산기 - 체질량지수 계산 및 건강상태 진단 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <BmiCalculator />
      </Container>
    </>
  );
};

export default BmiPage;