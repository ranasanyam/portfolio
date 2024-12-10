'use client';
import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  const NavLinks = () => (
    <>
      <Link 
      href="/" 
      className={`${pathname === '/' ? 'text-text-primary': 'text-gray-400 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
      onClick={() => setIsSidebarOpen(false)}
      >
        About
      </Link>
      <Link 
      href="/experience" 
      className={`${pathname === '/experience' ? 'text-text-primary': 'text-gray-400 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
      onClick={() => setIsSidebarOpen(false)}
      >
        Experience
      </Link>
      <Link 
      href="/skills" 
      className={`${pathname === '/skills' ? 'text-text-primary': 'text-gray-400 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
      onClick={() => setIsSidebarOpen(false)}
      >
        Skills
      </Link>
      <Link 
      href="/projects" 
      className={`${pathname === '/projects' ? 'text-text-primary': 'text-gray-400 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
      onClick={() => setIsSidebarOpen(false)}
      >
        Projects
      </Link>
      <Link 
      href="/contact" 
      className={`${pathname === '/contact' ? 'text-text-primary': 'text-gray-400 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
      onClick={() => setIsSidebarOpen(false)}
      >
        Contact
      </Link>
    </>
  )
  return (
    <>
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[120%]'}`}>
      <div className='bg-background-secondary backdrop-blur-sm shadow-sm'>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        <div className='flex md:justify-evenly items-center h-16 space-x-4'>
          {/* Mobile menu button */}
          <button onClick={() => setIsSidebarOpen(true)} className='xs:hidden'>
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
          {/* Desktop menu*/}
          <div className='hidden xs:flex xs:justify-evenly xs:flex-1 xs:items-center space-x-4'>
            <NavLinks />
          </div>
        </div>
        </div>
      </div>
    </nav>
    {/* Mobile sidebar */}
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className='absolute inset-0 bg-background-primary' onClick={() => setIsSidebarOpen(false)} />
        <div className={`fixed inset-y-0 left-0 w-64 bg-background-secondary shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='p-6'>
            <button onClick={() => setIsSidebarOpen(false)} className='absolute top-4 right-4 p-2 text-gray-200 hover:text-white focus:outline-none'>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className='flex flex-col space-y-4 mt-8'>
              <NavLinks />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;