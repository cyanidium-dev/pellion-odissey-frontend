'use client';

import Link from 'next/link'; 
import Image from 'next/image'; 
import { useState } from 'react';
import styles from './Navbar.module.scss'; 
import {Socials} from './ui/Social';

import {FC} from "react"
 
const navData = [ 
  { 
    title: 'Главная', 
    href: '/', 
  }, 
  { 
    title: 'Туры', 
    href: '/tours#tours', 
  }, 
  { 
    title: 'Индивидуальные путешествия', 
    href: '/tours#customTrip', 
  }, 
  { 
    title: 'Контакты', 
    href: '/tours#contacts', 
  },
]; 
 
const socialIcons = [ 
  { 
    icon: 'WhatsApp', 
    href: '#', 
  }, 
  { 
    icon: 'Telegram', 
    href: '#', 
  }, 
  { 
    icon: 'Instagram', 
    href: '#', 
  }, 
  { 
    icon: 'Facebook', 
    href: '#', 
  }, 
]; 
 
export const Header: FC<{className?: string}> = ({className = ""}) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return ( 
    <header className={`${styles.header} ${className}`}> 
      <div className={styles.container}> 
        <div className={styles.logo}> 
          <Link href="/"> 
            <Image  
              src="/images/footer/footerLogo.svg" 
              alt="pellion odyssey" 
              height={50} 
              width={100}
              priority 
            /> 
          </Link> 
        </div> 
         
        <nav className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ''}`}> 
          <ul className={styles.navList}> 
            {navData.length > 0 && navData.map((item, index) => { 
              return ( 
                <li key={index} className={styles.navItem}> 
                  <Link href={item.href} className={styles.navLink} onClick={closeMenu}> 
                    {item.title} 
                  </Link> 
                </li> 
              ); 
            })} 
          </ul> 
        </nav> 
         
        <div className={`${styles.socialAndContact} ${isMenuOpen ? styles.socialAndContactOpen : ''}`}> 
          <div className={styles.socialIcons}> 
            {socialIcons.length > 0 && socialIcons.map((item, index) => { 
              return ( 
                <Link key={index} href={item.href} aria-label={item.icon}> 
                  <Socials icon={item.icon}></Socials> 
                </Link> 
              ); 
            })} 
          </div> 
          <div className={styles.phoneNumber}> 
            <a href="tel:+79299994637">+1 (929) 999-46-37</a> 
          </div> 
        </div>

        {/* Burger Menu Button */}
        <button 
          className={`${styles.burgerButton} ${isMenuOpen ? styles.burgerButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        {/* Overlay */}
        {isMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}
      </div> 
    </header> 
  ); 
};