import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Monitor, Brain, Sprout, Users } from 'lucide-react';
import industrialBg from '../assets/images/industrial-bg.jpg';
import companyBg from '../assets/images/company-bg.jpg';
import solutionsBg from '../assets/images/solutions-bg.jpg';
import company1 from '../assets/images/company-1.jpg';
import company2 from '../assets/images/company-2.jpg';
import portfolio1 from '../assets/images/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio-2.jpg';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const sections = [
    {
      id: 'hero',
      bgImage: industrialBg,
      slogans: [
        "AI와 함께하는 안전한 산업 환경",
        "스마트 기술로 지키는 작업자의 하루",
        "제스엔지니어링이 함께합니다"
      ]
    },
    {
      id: 'about',
      bgImage: companyBg,
      title: '회사 소개',
    },
    {
      id: 'solutions',
      bgImage: solutionsBg,
      title: '주요 사업 영역',
    },
    {
      id: 'portfolio',
      bgImage: solutionsBg,
      title: '포트폴리오',
    },
    {
      id: 'contact',
      bgImage: solutionsBg,
      title: '문의하기',
    }
  ];

  const solutions = [
    {
      icon: <Monitor className="w-12 h-12 mb-4 text-blue-500" />,
      title: '프레스 모니터링',
      subtitle: 'PMS 전기안전 시스템',
      description: '실시간 전류 분석, 이상 감지, 작업자 안전 확보'
    },
    {
      icon: <Brain className="w-12 h-12 mb-4 text-blue-500" />,
      title: 'AI 안전 솔루션',
      subtitle: '스마트 감시/예측',
      description: 'CCTV+AI로 위험행동 분석, 사고 예방'
    },
    {
      icon: <Sprout className="w-12 h-12 mb-4 text-blue-500" />,
      title: '스마트팜',
      subtitle: '지능형 환경제어',
      description: '원격제어, 자동화, 스마트농업 지원'
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-blue-500" />,
      title: '컨설팅',
      subtitle: '국가사업 자문',
      description: '스마트공장, 안전사업, 기술전략 지원'
    }
  ];

  const portfolioItems = [
    {
      image: portfolio1,
      title: 'OO기업 – 안전솔루션 시스템 구축',
      description: '작업자 안전 확보'
    },
    {
      image: portfolio2,
      title: 'OO농장 – 스마트팜 통합솔루션 시스템 구축',
      description: '작물 생산성 200% 향상'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current;
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full transition-all duration-1000 ease-in-out z-0"
        style={{
          backgroundImage: `url(${sections[currentSection < 2 ? currentSection : 2].bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          ref={sectionRefs[0]}
          className="min-h-screen flex items-center justify-center text-white relative"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6">
              {sections[0]?.slogans?.map((slogan, index) => (
                <h2
                  key={index}
                  className="text-3xl md:text-5xl font-bold"
                  style={{
                    opacity: currentSection === 0 ? 1 : 0,
                    transform: currentSection === 0 ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`
                  }}
                >
                  {slogan}
                </h2>
              ))}
              <div className="mt-12 space-x-4">
                <Link 
                  to="/company" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
                >
                  회사 소개
                </Link>
                <Link 
                  to="/solutions" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
                >
                  솔루션 알아보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={sectionRefs[1]}
          className="min-h-screen flex items-center justify-center text-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">About ZES ENGINEERING</h2>
                <p className="text-lg mb-8">
                  제스엔지니어링은 AI 기반 산업안전 시스템과 스마트 환경제어 기술을 개발하는 전문 기업입니다.
                  현장의 안전성과 효율성을 최우선으로, 실시간 모니터링과 자동제어 기술을 통해 새로운 기준을 제시합니다.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">연혁</h3>
                  <div className="space-y-2">
                    <div className="flex gap-4">
                      <span className="text-blue-400">2023</span>
                      <span>스마트팜 솔루션 출시</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-blue-400">2022</span>
                      <span>AI 안전 솔루션 개발</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-blue-400">2021</span>
                      <span>회사 설립</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={company1} alt="회사 내부" className="rounded-lg" />
                <img src={company2} alt="사업자 등록증" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section
          ref={sectionRefs[2]}
          className="min-h-screen flex items-center justify-center text-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">주요 사업 영역</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-colors"
                >
                  {solution.icon}
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <h4 className="text-blue-400 mb-4">{solution.subtitle}</h4>
                  <p className="text-gray-300">{solution.description}</p>
                  <Link 
                    to={`/solutions#${solution.title === '프레스 모니터링' ? 'press' : 
                          solution.title === 'AI 안전 솔루션' ? 'ai-safety' :
                          solution.title === '스마트팜' ? 'smart-farm' : 'consulting'}`} 
                    className="mt-4 text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>            
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={sectionRefs[4]}
          className="min-h-screen flex items-center justify-center text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">귀사의 현장도 더 안전하고 똑똑하게</h2>
            <p className="text-xl mb-8">도입을 고민하고 계신가요? 지금 상담하세요.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
              >
                온라인 문의
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4">
          {sections.slice(0, 5).map((section, index) => (
            <button
              key={section.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${currentSection === index ? 'bg-white scale-150' : 'bg-white/50 hover:bg-white/75'}`}
              onClick={() => {
                sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 