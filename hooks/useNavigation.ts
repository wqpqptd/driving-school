import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useNavigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openMobile, setIsOpenMobile] = useState(false);
  const [activePage, setActivePage] = useState('');

  const handleNavigation = (target: string, href: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      window.location.href = href + '?section=' + target;
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuMobile = () => {
    setIsOpenMobile(!openMobile);
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const lastSegment = url.split('/').pop();

      switch (lastSegment) {
        case 'galeria':
          setActivePage('galeria');
          break;
        case 'about':
          setActivePage('about');
          break;
        case 'contact':
          setActivePage('contact');
          break;
        case 'typeB':
        case 'typeA':
          setActivePage('Nasze kursy');
          break;
        case 'impression':
          setActivePage('section=impression');
          break;
        default:
          setActivePage('');
          break;
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return {
    isOpen,
    setIsOpen,
    openMobile,
    activePage,
    handleNavigation,
    toggleMenu,
    toggleMenuMobile,
  };
};
