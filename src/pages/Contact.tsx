import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface IInquiryCategories {
  [key: string]: string[];
  기술지원: string[];
  제안사항: string[];
  기타: string[];
}

const Contact = () => {
  const location = useLocation();
  const [inquiryType, setInquiryType] = useState<string>('기술지원');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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

  const inquiryCategories: IInquiryCategories = {
    '기술지원': ['설치', '수리', '부품교체', '점검'],
    '제안사항': ['제품제안', '서비스제안', '기타제안'],
    '기타': ['기타문의']
  };

  return (
    <div className="pt-16">
      {/* 문의하기 헤더 */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/contact-sub-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">문의하기</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">온라인 문의</h2>
          <p className="text-sm text-gray-500 mb-8">
            * 고객의 정보는 제3자에게 제공되지 않으며, 철저하게 보호됩니다.<br />
            * 필수항목은 반드시 입력해 주시기 바랍니다. 미입력시 문의 접수가 되지 않을 수 있습니다.
          </p>

          <div className="bg-white shadow-sm border rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    기업체명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="기업체명을 입력해주세요."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    고객 성함 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="성함을 입력해주세요."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    휴대폰 번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="'-' 없이 숫자만 입력해주세요."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="이메일을 입력해주세요."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4">
                  {Object.keys(inquiryCategories).map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        checked={inquiryType === type}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  문의 항목 <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {inquiryCategories[inquiryType].map((item) => (
                    <label key={item} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="items"
                        value={item}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="문의하실 내용을 입력해주세요."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  [필수] 개인정보보호정책에 따라, 개인정보 수집 이용에 동의합니다.
                </label>
                <button 
                  type="button" 
                  className="text-sm text-blue-600 underline"
                  onClick={() => setIsPrivacyOpen(true)}
                >
                  자세히
                </button>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 개인정보처리방침 팝업 */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsPrivacyOpen(false)}></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">개인정보처리방침</h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                    onClick={() => setIsPrivacyOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-6 py-6">
                  <section className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">1. 수집하는 개인정보 항목</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>회사는 제품/상담 처리 위해 다음의 개인정보를 수집하고 있습니다.</p>
                      <div className="pl-4">
                        <p className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>수집항목 : 이름, 연락처, 이메일 주소</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>개인정보 수집방법 : 홈페이지</span>
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">2. 개인정보의 수집 및 이용목적</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>회사는 수집한 개인정보를 제품/상담 내용의 실질과제 확인 및 처리 결과 안내를 위해 활용합니다.</p>
                    </div>
                  </section>

                  <section className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">3. 개인정보의 보유 및 이용기간</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>수집한 개인정보는 이용 목적이 달성된 후에는 지체 없이 파기합니다.</p>
                    </div>
                  </section>

                  <section className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">4. 개인정보를 제공받는자</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="pl-4">
                        <p className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>제품 조사를 위하여 필요한 경우 해당 회사</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>형사 고소 고발이 필요한 경우 수사기관 (본인이 원하지 않는 경우에는 수사기관에 개인정보를 제공하지 않음)</span>
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">5. 개인정보를 제공받는 자의 개인정보 이용목적</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="pl-4">
                        <p className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>사실관계 확인 및 조사, 포상 징계 등 후속조치 등</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>형사 고소장 또는 고발장 기재 (본인이 원하지 않는 경우에는 수사기관에 개인정보를 제공하지 않음)</span>
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">6. 제공하는 개인정보의 항목</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>성명, 연락처, 이메일 주소</p>
                    </div>
                  </section>

                  <section className="pb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">7. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>수집한 개인정보는 이용 목적이 달성된 후에는 지체 없이 파기합니다.</p>
                    </div>
                  </section>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="w-32 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      onClick={() => setIsPrivacyOpen(false)}
                    >
                      확인
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact; 