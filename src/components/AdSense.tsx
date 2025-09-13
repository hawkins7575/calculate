import React from 'react';

// Auto Ads 전용 플레이스홀더 컴포넌트
// Google Auto Ads는 HTML head에서 자동으로 작동하므로
// 이 컴포넌트는 개발 환경에서만 플레이스홀더 역할을 합니다.

interface AdSenseProps {
  className?: string;
  style?: React.CSSProperties;
}

const AdSense: React.FC<AdSenseProps> = ({ 
  className = '',
  style = {}
}) => {
  // 개발 환경에서만 플레이스홀더 표시
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  if (isDevelopment && isLocalhost) {
    return (
      <div 
        className={`adsense-placeholder ${className}`} 
        style={{
          ...style, 
          border: '2px dashed #28a745', 
          borderRadius: '8px', 
          padding: '15px', 
          textAlign: 'center', 
          backgroundColor: '#f8f9fa',
          margin: '10px 0',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ color: '#28a745', fontSize: '14px', fontWeight: '500' }}>
          🚀 <strong>Google Auto Ads 활성화됨</strong>
          <br />
          <small style={{ color: '#6c757d', marginTop: '5px', display: 'inline-block' }}>
            실제 배포시 이 위치에 자동으로 광고가 표시됩니다
          </small>
        </div>
      </div>
    );
  }

  // 프로덕션 환경에서는 빈 div 반환 (Auto Ads가 자동으로 처리)
  return <div className={`auto-ads-space ${className}`} style={style} />;
};

export default AdSense;