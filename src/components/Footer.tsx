import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const menuItems = [
    {
      label: '회사소개',
      path: '/company',
      subItems: [
        { label: '기업개요', path: '/company#overview' },
        { label: '연혁', path: '/company#history' },
        { label: 'CEO 인사말', path: '/company#ceo' },
        { label: '비전/미션', path: '/company#vision' },
        { label: '찾아오시는 길', path: '/company#location' }
      ]
    },
    {
      label: '솔루션',
      path: '/solutions',
      subItems: [
        { label: '프레스 모니터링', path: '/solutions#press' },
        { label: 'AI 안전 솔루션', path: '/solutions#ai-safety' },
        { label: '스마트팜', path: '/solutions#smart-farm' },
        { label: '컨설팅', path: '/solutions#consulting' }
      ]
    },
    {
      label: '문의',
      path: '/contact',
      subItems: []
    },
    {
      label: '채용',
      path: '/recruit',
      subItems: []
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* 로고 및 회사 정보 */}
          <div>
            <Link to="/" className="block mb-4">
              <img src={logo} alt="ZES Engineering" className="h-8" />
            </Link>
            <p className="text-sm">
              최첨단 AI 기술로 산업 현장의<br />
              안전과 효율을 혁신하는 기업
            </p>
          </div>

          {/* 메뉴 바로가기 */}
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-bold text-lg">
                <Link to={item.path} className="hover:text-blue-400 transition-colors">
                  {item.label}
                </Link>
              </h3>
              {item.subItems.length > 0 && (
                <ul className="space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* 회사 정보 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              <p>광주광역시 북구 첨단과기로208번길 43-22</p>
              <p>A동 1505~1507호 (오룡동, 와이어스파크)</p>
              <p>TEL: 062-123-4567 | FAX: 062-123-4568</p>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <p>© 2024 ZES Engineering. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 