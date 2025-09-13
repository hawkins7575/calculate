import React from 'react';

// Auto Ads 전용 컴포넌트 (수동 광고 단위 제거)
// Auto Ads는 Google에서 자동으로 최적 위치에 광고 배치

interface AdSenseProps {
  style?: React.CSSProperties;
  className?: string;
}

const AdSense: React.FC<AdSenseProps> = ({
  style = {},
  className = ''
}) => {
  // 개발 환경에서 플레이스홀더 표시
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
          backgroundColor: '#f8fff8',
          margin: '10px 0',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ color: '#28a745', fontSize: '14px', fontWeight: '500' }}>
          🤖 <strong>Auto Ads 영역</strong>
          <br />
          <small style={{ color: '#6c757d', marginTop: '5px', display: 'inline-block' }}>
            실제 배포시 Google이 자동으로 최적 위치에 광고를 배치합니다
          </small>
        </div>
      </div>
    );
  }

  // Auto Ads는 HTML head의 스크립트만으로 작동하므로
  // 수동 광고 영역은 제거하고 spacer만 남김
  return (
    <div
      className={`adsense-auto-spacer ${className}`}
      style={{
        ...style,
        minHeight: '20px', // 약간의 여백만 제공
        margin: '10px 0'
      }}
    />
  );
};

export default AdSense;