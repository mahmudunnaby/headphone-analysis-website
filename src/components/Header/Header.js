import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <div className='sticky top-0 bg-slate-50 px-12 py-8 flex justify-center gap-6'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/review'>REVIEW</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blog'>BLOG</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
                <CustomLink to='/*'></CustomLink>



            </div>

        </div>
    );
};

export default Header;