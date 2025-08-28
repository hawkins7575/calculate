import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SavingsCalculator from '../SavingsCalculator';

const SavingsPage = () => {
  useEffect(() => {
    document.title = '적금 예금 계산기 - 저축 수익 계산 및 비교 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <SavingsCalculator />
      </Container>
    </>
  );
};

export default SavingsPage;