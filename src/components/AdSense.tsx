import React, { useEffect, useRef } from 'react';

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
    try {
      // AdSense 광고 로드 - 약간의 지연 후 실행
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        }
      }, 100);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // 개발 환경에서 플레이스홀더 표시
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  if (isDevelopment && isLocalhost) {
    return (
      <div className={`adsense-container ${className}`} style={{...style, border: '2px dashed #ccc', borderRadius: '8px', padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa'}}>
        <div style={{ color: '#6c757d', fontSize: '14px' }}>
          <strong>📢 AdSense 광고 위치</strong>
          <br />
          <small>광고 슬롯: {slot}</small>
          <br />
          <small>형식: {format}</small>
          <br />
          <small style={{ color: '#28a745' }}>✓ 개발용 플레이스홀더 (실제 배포시 광고 표시)</small>
        </div>
      </div>
    );
  }

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