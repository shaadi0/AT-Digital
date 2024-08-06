import React from 'react';
import image from '../docs/1.jpg';

const ImageContent = () => {
  return (
    <div className='md:flex flex-col gap-10 mb-40 md:mb-0'>
      <div className='image'>
        <img src={image} alt="main img" className='img' style={{maxHeight: '90vh', width: '100%'}}/>
      </div>
      <div className='text-white image-div text-left max-w-[100%] md:max-w-[580px] md:left-[80px] lg:top-[290px] md:top-[150px]'>
        <div>We Crush Your Competitors, Goals And Sales Records - Without The B.S.</div>
        <button className='button'>GET FREE CONSULTATION</button>
      </div>
    </div>
  )
}

export default ImageContent;
