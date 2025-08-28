import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LoanCalculator from '../LoanCalculator';

const LoanPage = () => {
  useEffect(() => {
    document.title = '대출이자 계산기 - 월 상환액 및 총 이자 계산 | 가계산';
  }, []);

  return (
    <>
      <Container className="mt-4 mb-4" style={{ flex: '1' }}>
        <LoanCalculator />
      </Container>
    </>
  );
};

export default LoanPage;