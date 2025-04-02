import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();

  const handleMouseEnter = (title: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setHoveredMenu(title);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  const menuItems = [
    {
      title: '회사소개',
      path: '/company',
      submenu: [
        { title: '기업개요', path: '/company/overview' },
        { title: '연혁', path: '/company/history' },
        { title: 'CEO인사말', path: '/company/ceo' },
        { title: '비전/미션', path: '/company/vision' },
        { title: '찾아오시는 길', path: '/company/location' }
      ]
    },
    {
      title: '솔루션',
      path: '/solutions',
      submenu: [
        { title: '프레스 모니터링', path: '/solutions#press' },
        { title: 'AI 안전 솔루션', path: '/solutions#ai-safety' },
        { title: '스마트팜', path: '/solutions#smart-farm' },
        { title: '컨설팅', path: '/solutions#consulting' }
      ]
    },
    {
      title: '문의',
      path: '/contact',
      submenu: [
        { title: '온라인문의', path: '/contact' }
      ]
    },
    {
      title: '채용',
      path: '/recruit',
      submenu: [
        { title: '채용', path: '/recruit' }
      ]
    }
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    // 항상 첫 번째 서브메뉴로 이동
    navigate(item.submenu[0].path);
    setHoveredMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center py-4">
              <img src={logo} alt="ZES Engineering" className="h-16" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    onClick={() => handleMenuClick(item)}
                    className={`px-6 py-9 text-base font-bold transition-all duration-300 relative
                      ${hoveredMenu === item.title 
                        ? 'text-blue-600' 
                        : 'text-gray-800 hover:text-blue-600'
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1
                      after:bg-blue-600 after:transition-transform after:duration-300
                      ${hoveredMenu === item.title ? 'after:scale-x-100' : 'after:scale-x-0'}
                    `}
                  >
                    {item.title}
                  </button>
                  
                  <div 
                    className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50
                      transition-all duration-300 transform
                      ${hoveredMenu === item.title 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                      }
                    `}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium relative"
                          onMouseEnter={() => handleMouseEnter(item.title)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => setHoveredMenu(null)}
                        >
                          <span className="relative z-10">{subItem.title}</span>
                          <div className="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Home Button */}
            <Link
              to="/"
              className="hidden lg:block px-6 py-9 text-base font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              HOME
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </div>

      {/* Submenu Background Overlay */}
      {hoveredMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 transition-opacity duration-300"
          style={{ top: '96px' }}
          onMouseEnter={() => handleMouseEnter(hoveredMenu)}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </header>
  );
};

export default Navbar; 