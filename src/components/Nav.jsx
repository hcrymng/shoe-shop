import React, { useState } from 'react'
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
   <header className="padding-x py-8 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container"> 
      <a href="/">
        <img
        src={headerLogo}
        alt='logo'
        width={185}
        height={29}
        />
        
      </a>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
{navLinks.map((item) => (
  <li key={item.lable}>
    <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.lable}</a>
  </li>
))}
      </ul>
      <div className="hidden max-lg:block"> 
        <img src={toggle ? close : hamburger} alt='hamburger' width={25} height={25}
        //can't use !toggle   jfjf
           jfjf
           
        onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
   </header>
  )
}

export default Nav
