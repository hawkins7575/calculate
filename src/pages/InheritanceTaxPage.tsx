import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import InheritanceTaxCalculator from '../InheritanceTaxCalculator';

const InheritanceTaxPage = () => {
  useEffect(() => {
    document.title = '상속세 증여세 계산기 - 세금 절약 계획 수립 | 가계산';
  }, []);

  return (
    <>
      
      <Container className="mt-4 mb-4" style={{ flex: '1', maxWidth: '1200px' }}>
        <InheritanceTaxCalculator />
      </Container>
    </>
  );
};

export default InheritanceTaxPage;