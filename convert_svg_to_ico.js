const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

// Canvas 기반 파비콘 생성 함수
function createCalculatorFavicon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // 배경을 투명으로 설정
    ctx.clearRect(0, 0, size, size);
    
    const scale = size / 32; // 32px 기준으로 스케일링
    
    // 색상 정의
    const primaryColor = '#81a4cd';
    const screenColor = '#2c3e50';
    const buttonColor = '#b3c9e1'; 
    const equalsColor = '#e74c3c';
    
    // 계산기 본체
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    roundRect(ctx, 4*scale, 2*scale, 24*scale, 28*scale, 4*scale);
    ctx.fill();
    
    // 화면
    ctx.fillStyle = screenColor;
    ctx.beginPath();
    roundRect(ctx, 6*scale, 5*scale, 20*scale, 6*scale, 2*scale);
    ctx.fill();
    
    // 버튼들
    ctx.fillStyle = buttonColor;
    
    // 4행 x 4열 버튼
    const buttonPositions = [
        // 1행
        [7*scale, 14*scale], [12*scale, 14*scale], [17*scale, 14*scale], [22*scale, 14*scale],
        // 2행  
        [7*scale, 17.5*scale], [12*scale, 17.5*scale], [17*scale, 17.5*scale], [22*scale, 17.5*scale],
        // 3행
        [7*scale, 21*scale], [12*scale, 21*scale], [17*scale, 21*scale], [22*scale, 21*scale],
        // 4행 (= 버튼 제외)
        [7*scale, 24.5*scale], [12*scale, 24.5*scale], [17*scale, 24.5*scale]
    ];
    
    // 일반 버튼들 그리기
    buttonPositions.forEach(([x, y]) => {
        ctx.beginPath();
        roundRect(ctx, x, y, 3.5*scale, 2.5*scale, 0.5*scale);
        ctx.fill();
    });
    
    // = 버튼 (빨간색)
    ctx.fillStyle = equalsColor;
    ctx.beginPath();
    roundRect(ctx, 22*scale, 24.5*scale, 3.5*scale, 2.5*scale, 0.5*scale);
    ctx.fill();
    
    return canvas;
}

// 둥근 모서리 사각형 함수
function roundRect(ctx, x, y, width, height, radius) {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// 파비콘 파일들 생성
function generateFavicons() {
    console.log('🧮 가계산 파비콘 생성 시작...');
    
    // 필요한 크기들
    const sizes = [16, 32, 192, 512];
    
    sizes.forEach(size => {
        console.log(`📏 ${size}x${size} 파비콘 생성 중...`);
        
        const canvas = createCalculatorFavicon(size);
        const buffer = canvas.toBuffer('image/png');
        
        let filename;
        if (size === 16) filename = 'favicon-16x16.png';
        else if (size === 32) filename = 'favicon-32x32.png';
        else if (size === 192) filename = 'logo192.png';
        else if (size === 512) filename = 'logo512.png';
        
        fs.writeFileSync(`public/${filename}`, buffer);
        console.log(`✅ ${filename} 생성 완료`);
    });
    
    // Apple Touch Icon (180x180)
    console.log('🍎 Apple Touch Icon 생성 중...');
    const appleCanvas = createCalculatorFavicon(180);
    const appleBuffer = appleCanvas.toBuffer('image/png');
    fs.writeFileSync('public/apple-touch-icon.png', appleBuffer);
    console.log('✅ apple-touch-icon.png 생성 완료');
    
    console.log('\n🎉 모든 파비콘이 성공적으로 생성되었습니다!');
}

// Canvas 모듈 설치 확인 및 실행
try {
    generateFavicons();
} catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
        console.log('❌ canvas 모듈이 필요합니다.');
        console.log('다음 명령어로 설치하세요:');
        console.log('npm install canvas');
    } else {
        console.error('❌ 오류 발생:', error.message);
    }
}