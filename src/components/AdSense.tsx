import React, { useEffect, useRef } from 'react';

// 수동 광고 전용 컴포넌트
// 기존 광고 영역에만 광고 표시

interface AdSenseProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSense: React.FC<AdSenseProps> = ({ 
  slot = '7865432109',
  format = 'auto',
  responsive = true,
  style = {},
  className = ''
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // 개발 환경에서는 초기화 건너뛰기
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    // 수동 광고 로드
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && (window as any).adsbygoogle && adRef.current) {
          // 이미 광고가 로드되어 있는지 확인
          const insElement = adRef.current.querySelector('ins');
          if (insElement && !insElement.hasAttribute('data-adsbygoogle-status')) {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          }
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 개발 환경에서 플레이스홀더 표시
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  if (isDevelopment && isLocalhost) {
    return (
      <div 
        className={`adsense-placeholder ${className}`} 
        style={{
          ...style, 
          border: '2px dashed #007bff', 
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
        <div style={{ color: '#007bff', fontSize: '14px', fontWeight: '500' }}>
          📢 <strong>수동 광고 영역</strong>
          <br />
          <small style={{ color: '#6c757d' }}>슬롯: {slot}</small><br />
          <small style={{ color: '#6c757d' }}>형식: {format}</small><br />
          <small style={{ color: '#6c757d', marginTop: '5px', display: 'inline-block' }}>
            실제 배포시 이 위치에 광고가 표시됩니다
          </small>
        </div>
      </div>
    );
  }

  // 수동 광고
  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1493954029378412"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSense;