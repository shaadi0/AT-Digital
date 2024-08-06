import React from 'react';
import logo from '../docs/logo.png'

const Footer = () => {
  return (
    <div className='flex flex-col text-white footer space-y-10'>
        <div className='flex flex-col md:flex-row text-start space-y-10 md:space-y-0 space-x-0 md:space-x-0'>
            <div className='md:w-1/2 space-y-3'>
                <div className='flex text-companyname'>
                <img src={logo} alt='logo img' className='max-h-[30px]'/>
                <div className=' ms-2 min-w-fit'>AT DIGITAL</div>
                </div>
                <div className='text-paragraph'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-10 space-x-0 md:w-1/2'>
                <div className='w-1/2 space-y-3'>
                    <div className='footer-subhead'>Our Technologies</div>
                    <div>ReactJS</div>
                    <div>Gatsby</div>
                    <div>NextJS</div>
                    <div>NodeJS</div>
                </div>
                <div className='w-1/2 space-y-3'>
                    <div className='footer-subhead'>Our Services</div>
                    <div>Social Media Marketing</div>
                    <div>Web & Mobile App Development</div>
                    <div>Data & Analytics</div>
                </div>
            </div>
        </div>
        <div className='flex gap-4 me-auto ms-auto border-t md:px-40 pt-5'>
            <div >Privacy Policy</div>
            <div>|</div>
            <div>Terms & Conditions</div>
        </div>

    </div>
  )
}

export default Footer