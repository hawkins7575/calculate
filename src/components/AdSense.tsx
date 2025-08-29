import React from 'react';
import { Card } from 'react-bootstrap';

interface AdSenseProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

const AdSense: React.FC<AdSenseProps> = ({ 
  slot = 'demo-slot',
  format = 'auto',
  responsive = true,
  style = {}
}) => {
  // 실제 AdSense 구현 시 사용할 코드 (현재는 플레이스홀더)
  const adSenseCode = `
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-1493954029378412"
         data-ad-slot="${slot}"
         data-ad-format="${format}"
         ${responsive ? 'data-full-width-responsive="true"' : ''}></ins>
  `;

  return (
    <div className="sticky-top" style={{ top: '20px', ...style }}>
      <Card className="border-0 bg-light">
        <Card.Body className="text-center">
          <div style={{ minHeight: '250px' }} className="d-flex align-items-center justify-content-center">
            <div>
              <h6 className="text-muted mb-3">광고 영역</h6>
              <div className="bg-white border rounded p-4" style={{ minHeight: '200px' }}>
                {/* 실제 운영 시에는 아래 주석을 해제하고 플레이스홀더는 제거 */}
                {/* <div dangerouslySetInnerHTML={{ __html: adSenseCode }} /> */}
                
                {/* 개발/테스트용 플레이스홀더 */}
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <div className="text-muted mb-2">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-muted small mb-1 text-center">
                    <strong>Google AdSense</strong>
                  </p>
                  <p className="text-muted small mb-0 text-center">
                    광고가 여기에<br/>표시됩니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdSense;