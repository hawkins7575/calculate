import React from 'react';
import { Button } from 'react-bootstrap';

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
  hashtags?: string[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SocialShare: React.FC<SocialShareProps> = ({
  title = '가계산 - 실생활 필수 계산기 모음',
  description = '복리, 부동산, BMI, 급여 등 다양한 계산기를 무료로 이용하세요',
  url = window.location.href,
  hashtags = ['가계산', '계산기', '복리계산', '부동산'],
  className = '',
  size = 'sm'
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.map(tag => encodeURIComponent(tag)).join(',');

  const shareLinks = {
    kakao: () => {
      // 카카오톡 공유하기
      if (typeof window !== 'undefined' && (window as any).Kakao) {
        (window as any).Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: title,
            description: description,
            imageUrl: `${window.location.origin}/logo192.png`,
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
          buttons: [
            {
              title: '계산기 사용하기',
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
          ],
        });
      } else {
        // 카카오톡이 없으면 URL 복사
        copyToClipboard();
      }
    },
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtagString}`,
    naver: `https://share.naver.com/web/shareView?url=${encodedUrl}&title=${encodedTitle}`,
    band: `https://www.band.us/plugin/share?body=${encodedTitle}%0A${encodedDescription}%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch (err) {
      // 클립보드 API가 지원되지 않는 경우
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  const openShareWindow = (url: string) => {
    window.open(
      url,
      'share',
      'width=600,height=400,scrollbars=yes,resizable=yes'
    );
  };

  const buttonSize = size === 'lg' ? 'btn' : size === 'md' ? 'btn-sm' : 'btn-sm';
  const iconSize = size === 'lg' ? '20px' : size === 'md' ? '16px' : '14px';

  return (
    <div className={`d-flex gap-2 align-items-center ${className}`}>
      <small className="text-muted me-1" style={{ fontSize: '0.75rem' }}>공유하기:</small>
      
      {/* 카카오톡 */}
      <Button
        variant="outline-warning"
        size={buttonSize as any}
        className="d-flex align-items-center justify-content-center"
        onClick={shareLinks.kakao}
        style={{ 
          width: size === 'lg' ? '40px' : '32px', 
          height: size === 'lg' ? '40px' : '32px',
          padding: '0',
          backgroundColor: '#FEE500',
          borderColor: '#FEE500',
          color: '#3C1E1E'
        }}
        title="카카오톡으로 공유"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3Z"/>
        </svg>
      </Button>

      {/* 페이스북 */}
      <Button
        variant="outline-primary"
        size={buttonSize as any}
        className="d-flex align-items-center justify-content-center"
        onClick={() => openShareWindow(shareLinks.facebook)}
        style={{ 
          width: size === 'lg' ? '40px' : '32px', 
          height: size === 'lg' ? '40px' : '32px',
          padding: '0',
          backgroundColor: '#1877F2',
          borderColor: '#1877F2',
          color: 'white'
        }}
        title="페이스북으로 공유"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </Button>

      {/* 트위터 */}
      <Button
        variant="outline-info"
        size={buttonSize as any}
        className="d-flex align-items-center justify-content-center"
        onClick={() => openShareWindow(shareLinks.twitter)}
        style={{ 
          width: size === 'lg' ? '40px' : '32px', 
          height: size === 'lg' ? '40px' : '32px',
          padding: '0',
          backgroundColor: '#1DA1F2',
          borderColor: '#1DA1F2',
          color: 'white'
        }}
        title="트위터로 공유"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </Button>

      {/* 네이버 */}
      <Button
        variant="outline-success"
        size={buttonSize as any}
        className="d-flex align-items-center justify-content-center"
        onClick={() => openShareWindow(shareLinks.naver)}
        style={{ 
          width: size === 'lg' ? '40px' : '32px', 
          height: size === 'lg' ? '40px' : '32px',
          padding: '0',
          backgroundColor: '#03C75A',
          borderColor: '#03C75A',
          color: 'white'
        }}
        title="네이버로 공유"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
        </svg>
      </Button>

      {/* 밴드 */}
      <Button
        variant="outline-secondary"
        size={buttonSize as any}
        className="d-flex align-items-center justify-content-center"
        onClick={() => openShareWindow(shareLinks.band)}
        style={{ 
          width: size === 'lg' ? '40px' : '32px', 
          height: size === 'lg' ? '40px' : '32px',
          padding: '0',
          backgroundColor: '#00C73C',
          borderColor: '#00C73C',
          color: 'white'
        }}
        title="밴드로 공유"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.4 0C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0H2.4zm8.64 6.48c2.76 0 4.92 1.56 4.92 4.08 0 1.56-.96 2.88-2.4 3.48l2.04 3.36h-2.28l-1.68-2.88h-1.44v2.88H8.16V6.48h3.48zM12 13.2c1.32 0 2.4-1.08 2.4-2.4s-1.08-2.4-2.4-2.4-2.4 1.08-2.4 2.4 1.08 2.4 2.4 2.4z"/>
        </svg>
      </Button>

      {/* URL 복사 */}
      <Button
        variant="outline-dark"
        size={buttonSize as any}
        className="d-flex align-items-center justify-content-center"
        onClick={copyToClipboard}
        style={{ 
          width: size === 'lg' ? '40px' : '32px', 
          height: size === 'lg' ? '40px' : '32px',
          padding: '0',
          backgroundColor: '#6c757d',
          borderColor: '#6c757d',
          color: 'white'
        }}
        title="링크 복사"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </svg>
      </Button>
    </div>
  );
};

export default SocialShare;