import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import solutionsSubBg from '../assets/images/solutions-sub-bg.jpg';

const Solutions = () => {
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
    <div className="pt-24">
      {/* 솔루션 헤더 */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${solutionsSubBg})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">스마트팩토리</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* 솔루션 소개 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">스마트팩토리를 위한 Total Solution</h2>
          <p className="text-lg text-gray-600">최적화된 스마트팩토리 솔루션으로 고객의 성공을 지원합니다.</p>
        </div>

        {/* 솔루션 스펙 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">하드웨어 스펙</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">CPU</span>
                <span className="font-medium">Intel i5-13600K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">RAM</span>
                <span className="font-medium">32GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GPU</span>
                <span className="font-medium">RTX 4060</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Storage</span>
                <span className="font-medium">1TB NVMe SSD</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">소프트웨어 스펙</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">OS</span>
                <span className="font-medium">Windows 10/11 Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Framework</span>
                <span className="font-medium">PyTorch 2.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Database</span>
                <span className="font-medium">PostgreSQL 15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Web Server</span>
                <span className="font-medium">Nginx 1.24</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">네트워크 스펙</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Protocol</span>
                <span className="font-medium">TCP/IP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Security</span>
                <span className="font-medium">SSL/TLS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bandwidth</span>
                <span className="font-medium">1Gbps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Backup</span>
                <span className="font-medium">실시간</span>
              </div>
            </div>
          </div>
        </div>

        {/* 서비스 특징 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">서비스 특징</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">안정성</h4>
              <p className="text-gray-600">24/7 무중단 운영 지원<br/>실시간 모니터링 및 백업</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">효율성</h4>
              <p className="text-gray-600">AI 기반 최적화<br/>자동화된 프로세스</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">보안성</h4>
              <p className="text-gray-600">엔드투엔드 암호화<br/>다중 보안 시스템</p>
            </div>
          </div>
        </div>

        {/* 적용 분야 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">적용 분야</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <img src="/images/icons/press.svg" alt="프레스" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">프레스</span>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <img src="/images/icons/robot.svg" alt="로봇" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">로봇</span>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <img src="/images/icons/conveyor.svg" alt="컨베이어" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">컨베이어</span>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <img src="/images/icons/sensor.svg" alt="센서" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">센서</span>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <img src="/images/icons/plc.svg" alt="PLC" className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">PLC</span>
            </div>
          </div>
        </div>

        {/* 주요 솔루션 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">주요 솔루션</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/solutions/press-monitoring.jpg" alt="프레스 모니터링" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">프레스 모니터링</h4>
                <p className="text-gray-600 mb-4">실시간 프레스 상태 모니터링 및 이상 감지 시스템</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 실시간 데이터 수집</li>
                  <li>• AI 기반 이상 감지</li>
                  <li>• 예지 보전 시스템</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/solutions/smart-farm.jpg" alt="스마트팜" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">스마트팜</h4>
                <p className="text-gray-600 mb-4">IoT 기반 스마트팜 제어 및 모니터링 시스템</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 환경 제어 시스템</li>
                  <li>• 생육 관리 시스템</li>
                  <li>• 원격 제어 기능</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/solutions/consulting.jpg" alt="컨설팅" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">컨설팅</h4>
                <p className="text-gray-600 mb-4">맞춤형 스마트팩토리 구축 컨설팅</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 현장 분석</li>
                  <li>• 솔루션 설계</li>
                  <li>• 구축 지원</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* WHY ZES Engineering */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">WHY ZES Engineering</h3>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative h-[200px] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/images/why-zes-1.jpg")' }}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                <p className="text-lg font-medium">AI 기술을 활용한 스마트한 솔루션 제공</p>
              </div>
            </div>
            <div className="relative h-[200px] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/images/why-zes-2.jpg")' }}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                <p className="text-lg font-medium">고객의 요구사항을 정확히 파악하여 맞춤형 솔루션 제공</p>
              </div>
            </div>
            <div className="relative h-[200px] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/images/why-zes-3.jpg")' }}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                <p className="text-lg font-medium">24/7 신속한 기술 지원 및 유지보수</p>
              </div>
            </div>
          </div>
        </div>

        {/* 관련 솔루션 */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">관련 솔루션</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <img src="/images/partners/partner1.png" alt="파트너1" className="w-32 h-32 mx-auto mb-4" />
              <span className="text-sm font-medium">Solution A</span>
            </div>
            <div className="text-center">
              <img src="/images/partners/partner2.png" alt="파트너2" className="w-32 h-32 mx-auto mb-4" />
              <span className="text-sm font-medium">Solution B</span>
            </div>
            <div className="text-center">
              <img src="/images/partners/partner3.png" alt="파트너3" className="w-32 h-32 mx-auto mb-4" />
              <span className="text-sm font-medium">Solution C</span>
            </div>
            <div className="text-center">
              <img src="/images/partners/partner4.png" alt="파트너4" className="w-32 h-32 mx-auto mb-4" />
              <span className="text-sm font-medium">Solution D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions; 