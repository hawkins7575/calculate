import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ChildcareCalculator from '../ChildcareCalculator';

const ChildcarePage = () => {
  useEffect(() => {
    document.title = '육아비용 계산기 - 자녀 양육비 예산 계획 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <ChildcareCalculator />
      </Container>
    </>
  );
};

export default ChildcarePage;