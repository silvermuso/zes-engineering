import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] = useState<string | null>(null);

  const isCurrentPath = (path: string) => {
    const currentPath = location.pathname;
    return currentPath.startsWith(path);
  };

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu: string) => {
    if (currentSubmenu === menu) {
      setCurrentSubmenu(null);
    } else {
      setCurrentSubmenu(menu);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    setCurrentSubmenu(null);
  }, [location]);

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
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center py-4">
              <img src={logo} alt="ZES Engineering" className="h-12" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    onClick={() => handleMenuClick(item)}
                    className={`px-4 py-7 text-[17px] tracking-tight font-semibold transition-all duration-300 relative
                      ${hoveredMenu === item.title || isCurrentPath(item.path)
                        ? 'text-blue-700' 
                        : 'text-gray-900 hover:text-blue-700'
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px]
                      after:bg-blue-700 after:transition-transform after:duration-300
                      ${hoveredMenu === item.title || isCurrentPath(item.path) ? 'after:scale-x-100' : 'after:scale-x-0'}
                    `}
                  >
                    {item.title}
                  </button>
                  
                  <div 
                    className={`absolute top-full left-0 w-64 bg-white shadow-lg overflow-hidden z-50
                      transition-all duration-300 transform border-t-2 border-blue-700
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
                          className={`block px-6 py-3 text-[15px] tracking-tight transition-all duration-200
                            ${isCurrentPath(subItem.path)
                              ? 'text-blue-700 bg-gray-50'
                              : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                            }`}
                          onMouseEnter={() => handleMouseEnter(item.title)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => setHoveredMenu(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-[15px] tracking-tight text-gray-600 hover:text-blue-700 font-semibold">KOR</button>
              <button className="text-gray-600 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-blue-700">
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => toggleSubmenu(item.title)}
                className="w-full flex justify-between items-center px-3 py-2 text-[15px] font-semibold text-gray-700 hover:text-blue-700"
              >
                {item.title}
                <svg
                  className={`h-5 w-5 transform ${
                    currentSubmenu === item.title ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`${
                  currentSubmenu === item.title ? 'block' : 'hidden'
                } pl-4`}
              >
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className="block px-3 py-2 text-[14px] text-gray-700 hover:text-blue-700"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-3">
              <button className="text-[14px] font-semibold text-gray-700">
                KOR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Submenu Background Overlay */}
      {hoveredMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 transition-opacity duration-300"
          style={{ top: '80px' }}
          onMouseEnter={() => handleMouseEnter(hoveredMenu)}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </header>
  );
};

export default Navbar; 