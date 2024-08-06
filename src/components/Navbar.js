import React, { useRef } from 'react';
import logo from '../docs/logo.png';
import hamburger from '../docs/hamburger.png';

const Navbar = () => {
  const toggleRef = useRef(null);

  const handleOpenModal = () => {
   toggleRef.current.style.display = 'block';

  };

  const hanldeCloseModal = () => {
    toggleRef.current.style.display = 'none';
  };
  
  return (
    <div className='navbar px-10 sm:px-15 md:px-20 py-7'>
        <div className='flex justify-between text-white'>
            <div className='flex text-companyname'>
              <img src={logo} alt='logo img' className='max-h-[30px]'/>
              <div className=' ms-2 min-w-fit'>AT DIGITAL</div>
            </div>
            <div className='hidden md:block flex space-x-7 text-base navbar-optionbar'>
              <span className=''>SERVICES</span>
              <span>ABOUT US</span>
              <span>CONTACT US</span>
              <span>CAREERS</span>
            </div>
            <div className='block md:hidden'>
              <img src={hamburger} alt='hamburger' onClick={handleOpenModal} />
            </div>
        </div>
        <div id="myModal" className="modal" ref={toggleRef}>
          <div className="modal-content">
              <span className="close" onClick={hanldeCloseModal}>&times;</span>
              <div className='flex'>
              <div className='flex flex-col text-start ps-5 gap-5 navbar-optionbar'>
                <span>HOME</span>
                <span className=''>SERVICES</span>
                <span>ABOUT US</span>
                <span>CONTACT US</span>
                <span>CAREERS</span>
              </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar