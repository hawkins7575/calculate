#!/usr/bin/env python3
"""
가계산 계산기 파비콘 생성기
PIL(Pillow)을 사용하여 다양한 크기의 파비콘을 생성합니다.
"""

from PIL import Image, ImageDraw
import os

def create_calculator_icon(size):
    """계산기 모양의 아이콘을 생성합니다."""
    # 새 이미지 생성 (투명 배경)
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # 스케일 팩터 계산
    scale = size / 16
    
    # 색상 정의 (가계산 브랜드 컬러)
    primary_color = (129, 164, 205, 255)  # #81a4cd
    dark_color = (44, 62, 80, 255)        # #2c3e50 (화면)
    light_color = (179, 201, 225, 255)    # #b3c9e1 (버튼)
    red_color = (231, 76, 60, 255)        # #e74c3c (= 버튼)
    green_color = (0, 255, 0, 255)        # 화면 텍스트
    shadow_color = (0, 0, 0, 25)          # 반투명 그림자
    
    # 계산기 본체 (둥근 모서리)
    margin = 2 * scale
    body_rect = [margin, margin * 0.5, size - margin, size - margin * 0.5]
    draw.rounded_rectangle(body_rect, radius=2 * scale, fill=primary_color)
    
    # 화면 영역
    screen_rect = [3 * scale, 2.5 * scale, 13 * scale, 5.5 * scale]
    draw.rounded_rectangle(screen_rect, radius=1 * scale, fill=dark_color)
    
    # 버튼 그리드 (3x4)
    button_size = 1.8 * scale
    button_spacing = 2.5 * scale
    start_x = 3.5 * scale
    start_y = 7 * scale
    
    for row in range(4):
        for col in range(3):
            x = start_x + col * button_spacing
            y = start_y + row * 1.8 * scale
            
            button_rect = [x, y, x + button_size, y + button_size * 0.7]
            draw.rounded_rectangle(button_rect, radius=0.3 * scale, fill=light_color)
    
    # = 버튼 (특별한 색상)
    equal_x = start_x + 2 * button_spacing
    equal_y = start_y + 3 * 1.8 * scale
    equal_rect = [equal_x, equal_y, equal_x + button_size, equal_y + button_size * 0.7]
    draw.rounded_rectangle(equal_rect, radius=0.3 * scale, fill=red_color)
    
    return img

def generate_favicon_ico(images_dict):
    """여러 크기의 이미지를 하나의 .ico 파일로 결합"""
    # 가장 큰 이미지를 기준으로 ico 생성
    largest_img = images_dict[max(images_dict.keys())]
    sizes = [(size, size) for size in sorted(images_dict.keys(), reverse=True)]
    
    # ico 파일 생성
    largest_img.save(
        'public/favicon.ico',
        format='ICO',
        sizes=sizes,
        append_images=[images_dict[size] for size in sorted(images_dict.keys(), reverse=True)[1:]]
    )

def main():
    """메인 함수: 모든 파비콘 생성"""
    print("🧮 가계산 파비콘 생성 시작...")
    
    # 필요한 크기들
    sizes = [16, 32, 192, 512]
    images = {}
    
    # 각 크기별 이미지 생성
    for size in sizes:
        print(f"📏 {size}x{size} 아이콘 생성 중...")
        img = create_calculator_icon(size)
        images[size] = img
        
        # PNG 파일로 저장
        if size == 16:
            img.save('public/favicon-16x16.png', format='PNG')
        elif size == 32:
            img.save('public/favicon-32x32.png', format='PNG')
        elif size == 192:
            img.save('public/logo192.png', format='PNG')
        elif size == 512:
            img.save('public/logo512.png', format='PNG')
    
    # ICO 파일 생성
    print("🔗 favicon.ico 생성 중...")
    generate_favicon_ico({16: images[16], 32: images[32]})
    
    print("✅ 모든 파비콘이 성공적으로 생성되었습니다!")
    print("\n📁 생성된 파일들:")
    print("  - public/favicon.ico (16x16, 32x32)")
    print("  - public/favicon-16x16.png")
    print("  - public/favicon-32x32.png") 
    print("  - public/logo192.png")
    print("  - public/logo512.png")
    
    # Apple Touch Icon도 생성 (선택적)
    print("\n🍎 Apple Touch Icon 생성 중...")
    apple_icon = create_calculator_icon(180)
    apple_icon.save('public/apple-touch-icon.png', format='PNG')
    print("  - public/apple-touch-icon.png (180x180)")

if __name__ == "__main__":
    # PIL 설치 확인
    try:
        main()
    except ImportError:
        print("❌ PIL(Pillow) 라이브러리가 필요합니다.")
        print("다음 명령어로 설치하세요:")
        print("pip install Pillow")
        exit(1)
    except Exception as e:
        print(f"❌ 오류 발생: {e}")
        exit(1)