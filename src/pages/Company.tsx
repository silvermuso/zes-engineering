import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import companySubBg from '../assets/images/company-sub-bg.jpg';
import company1 from '../assets/images/company-1.jpg';
import company2 from '../assets/images/company-2.jpg';
import company3 from '../assets/images/company-3.jpg';

declare global {
  interface Window {
    kakao: any;
  }
}

// 카카오맵 API 키 설정
const KAKAO_APP_KEY = "68beb7c07242da965e142563a8ec2b3c";

const Company = () => {
  const location = useLocation();

  useEffect(() => {
    // 페이지 진입 시 스크롤을 상단으로 이동
    window.scrollTo(0, 0);

    // URL에 해시가 있는 경우 해당 섹션으로 부드럽게 스크롤
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-16">
      {/* 회사소개 헤더 */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${companySubBg})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">회사소개</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* 기업개요 섹션 */}
        <div className="mb-32" id="overview">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">기업개요</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={company1} alt="기업 전경" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">ZES Engineering</h3>
              <p className="text-gray-600">ZES Engineering은 에너지 AI 플랫폼 산업의 리더로서, 기술에 가치를 더해 고객과 함께 내일의 꿈을 실현하고 스마트한 세상을 만들어갑니다.</p>
              <p className="text-gray-600">OT기술과 IT기술을 융합하여 스마트한 산업현장의 미래를 열어가고 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 연혁 섹션 */}
        <div className="mb-32" id="history">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">연혁</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-blue-600">2023</h4>
                  <p className="text-gray-600">회사 설립</p>
                  <p className="text-gray-600">광주 AI 창업캠프 입주</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600">2024</h4>
                  <p className="text-gray-600">와이어스파크 입주</p>
                  <p className="text-gray-600">프레스 안전 솔루션 개발</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={company2} alt="연혁" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>

        {/* CEO 인사말 섹션 */}
        <div className="mb-32" id="ceo">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">CEO 인사말</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={company3} alt="CEO" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">안녕하세요</h3>
              <p className="text-gray-600">ZES Engineering 대표이사입니다.</p>
              <p className="text-gray-600">저희는 지속적인 연구개발을 통해 고객의 새로운 가치를 창출하고, 더 나은 미래를 만들어가고 있습니다.</p>
              <p className="text-gray-600">앞으로도 끊임없는 혁신과 도전으로 스마트한 산업 현장을 만들어가는데 최선을 다하겠습니다.</p>
            </div>
          </div>
        </div>

        {/* 비전/미션 섹션 */}
        <div className="mb-32" id="vision">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">비전/미션</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
                <p className="text-gray-600">스마트한 산업현장을 선도하는 글로벌 리더</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
                <p className="text-gray-600">기술 혁신을 통한 안전하고 효율적인 산업환경 구축</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="/images/solutions-bg.jpg" alt="비전/미션" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>

        {/* 찾아오시는 길 */}
        <div id="location">
          <h2 className="text-3xl font-bold text-center mb-16">찾아오시는 길</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-2">LOCATION</h4>
                <p className="text-gray-600">광주광역시 북구 첨단과기로208번길 43-22, A동 1505~1507호 (오룡동, 와이어스파크)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">TEL</h4>
                <p className="text-gray-600">062-123-4567</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">FAX</h4>
                <p className="text-gray-600">062-123-4568</p>
              </div>
            </div>
            <div id="map" className="w-full h-[400px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 카카오맵 초기화 컴포넌트
const KakaoMap = () => {
  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      const container = document.getElementById('map');
      if (!container) return;

      const options = {
        center: new window.kakao.maps.LatLng(35.222607, 126.851627),
        level: 3
      };

      try {
        const map = new window.kakao.maps.Map(container, options);
        
        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(35.222607, 126.851627);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
      } catch (error) {
        console.error('카카오맵 로드 중 에러 발생:', error);
      }
    };

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`;
    script.async = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      window.kakao.maps.load(() => {
        loadKakaoMap();
      });
    };

    script.onerror = (error) => {
      console.error('카카오맵 스크립트 로드 중 에러 발생:', error);
    };

    if (!document.querySelector('script[src*="dapi.kakao.com"]')) {
      document.head.appendChild(script);
    } else {
      loadKakaoMap();
    }

    return () => {
      const mapScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (mapScript && mapScript.parentNode === document.head) {
        document.head.removeChild(mapScript);
      }
    };
  }, []);

  return null;
};

export default Company; 