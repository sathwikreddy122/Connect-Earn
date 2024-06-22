import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Button from '../../ui/Button';



const Header = () => {
  return (
    <header className='fixed inset-x-0 top-4 flex w-full flex-wrap px-2 md:flex-nowrap md:justify-start md:px-5'>
        <nav className={'mx-auto flex w-full max-w-6xl items-start justify-between gap-5 rounded-[28px] border-2 border-slate-200 bg-slate-50 p-2' }>
            <Logo/>
            <div style={{marginTop : "10px"}} className={'flex cursor-pointer md:items-center gap-10'}>
                <Navigation/>
            </div>
            <Button Children={"Get Started"}/>
        </nav>
    </header>
  )
}

export default Header;
