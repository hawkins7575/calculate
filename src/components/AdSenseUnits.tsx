import React from 'react';
import AdSense from './AdSense';

// 사이드바 광고 (세로형 광고)
export const SidebarAd: React.FC = () => {
  return (
    <div className="sticky-top" style={{ top: '20px' }}>
      <AdSense
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
  );
};

// 헤더 광고 (가로형 광고)
export const HeaderAd: React.FC = () => {
  return (
    <div className="text-center mb-4">
      <AdSense
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
  );
};

// 콘텐츠 내부 광고 (인피드 광고)
export const InFeedAd: React.FC = () => {
  return (
    <div className="my-4 text-center">
      <AdSense
        slot="7865432109"
        format="auto"
        responsive={true}
        style={{ 
          minHeight: '200px'
        }}
        className="infeed-ad"
      />
    </div>
  );
};

// 푸터 광고 (가로형 광고)
export const FooterAd: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <AdSense
        slot="4567890123"
        format="horizontal"
        responsive={true}
        style={{ 
          minHeight: '90px',
          maxHeight: '120px'
        }}
        className="footer-ad"
      />
    </div>
  );
};

// 모바일 전용 광고
export const MobileAd: React.FC = () => {
  return (
    <div className="d-block d-md-none text-center my-3">
      <AdSense
        slot="5678901234"
        format="auto"
        responsive={true}
        style={{ 
          minHeight: '100px'
        }}
        className="mobile-ad"
      />
    </div>
  );
};