import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import RealEstateCommissionCalculator from '../RealEstateCommissionCalculator';

const RealEstatePage = () => {
  useEffect(() => {
    document.title = '부동산 중개보수 계산기 - 법정 상한요율 기준 수수료 계산 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <RealEstateCommissionCalculator />
      </Container>
    </>
  );
};

export default RealEstatePage;