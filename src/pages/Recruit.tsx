import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import recruitSubBg from '../assets/images/recruit-sub-bg.jpg';

const Recruit = () => {
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
      {/* 채용 헤더 */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${recruitSubBg})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">채용</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">채용</h2>
          
          {/* 채용 공고 섹션 */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">채용 공고</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">AI 개발자</h4>
                <p className="text-gray-600 mb-4">인공지능 안전솔루션 개발</p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">신입/경력</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">정규직</span>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">백엔드 개발자</h4>
                <p className="text-gray-600 mb-4">서버 및 API 개발</p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">경력 3년 이상</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">정규직</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* 채용 절차 섹션 */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">채용 절차</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">서류전형</h5>
                <p className="text-sm text-gray-600">이력서, 자기소개서</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">1차 면접</h5>
                <p className="text-sm text-gray-600">실무진 면접</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">2차 면접</h5>
                <p className="text-sm text-gray-600">임원 면접</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h5 className="font-semibold mb-2">최종합격</h5>
                <p className="text-sm text-gray-600">입사</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recruit; 