import React, { useEffect, useRef } from 'react';

// 혼용 방식: Auto Ads + 수동 광고 컴포넌트
// Auto Ads는 HTML head에서 자동 작동
// 수동 광고는 특정 위치에 직접 배치

interface AdSenseProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
  adType?: 'manual' | 'auto'; // 광고 타입 지정
}

const AdSense: React.FC<AdSenseProps> = ({ 
  slot = '7865432109',
  format = 'auto',
  responsive = true,
  style = {},
  className = '',
  adType = 'manual' // 기본값을 수동 광고로 설정
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Auto Ads 타입이거나 개발 환경에서는 초기화 건너뛰기
    if (adType === 'auto' || process.env.NODE_ENV === 'development') {
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
  }, [adType]);

  // 개발 환경에서 플레이스홀더 표시
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  if (isDevelopment && isLocalhost) {
    const isManual = adType === 'manual';
    return (
      <div 
        className={`adsense-placeholder ${className}`} 
        style={{
          ...style, 
          border: `2px dashed ${isManual ? '#007bff' : '#28a745'}`, 
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
        <div style={{ color: isManual ? '#007bff' : '#28a745', fontSize: '14px', fontWeight: '500' }}>
          {isManual ? '📢' : '🚀'} <strong>{isManual ? '수동 광고 영역' : 'Auto Ads 영역'}</strong>
          <br />
          {isManual && (
            <>
              <small style={{ color: '#6c757d' }}>슬롯: {slot}</small><br />
              <small style={{ color: '#6c757d' }}>형식: {format}</small><br />
            </>
          )}
          <small style={{ color: '#6c757d', marginTop: '5px', display: 'inline-block' }}>
            실제 배포시 이 위치에 광고가 표시됩니다
          </small>
        </div>
      </div>
    );
  }

  // 프로덕션 환경
  if (adType === 'auto') {
    // Auto Ads용 빈 공간
    return <div className={`auto-ads-space ${className}`} style={style} />;
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