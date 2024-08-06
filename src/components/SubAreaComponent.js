import React from 'react';
import image2 from '../docs/2.png';
import image3 from '../docs/3.png';

const SubAreaComponent = (props) => {
  const textHead1 = "Web & Mobile App Development";
  const textHead2 = "Digital Strategy Consulting";
  const text1 = "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.";
  const text2 = "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.";

  return (
    <div className='space-y-10 my-10 ms-auto me-auto'>
      <div className='flex flex-col mx-5 lg:mx-20 md:flex-row subarea place-content-center justify-center'>
        <div className='image-sub'>
          <img src={image2} alt="main img" className=''/>
        </div>
        <div className='text text-left space-y-4 place-content-center pt-8'>
          <div className='head'>{textHead1}</div>
          <div className='paragraph'>{text1}</div>
          <button className='button text-white'>LEARN MORE</button>
        </div>
      </div>
      <div className='flex subarea flex-col md:flex-row mx-5 lg:mx-20 flex-col-reverse'>
        <div className='text text-left space-y-4 place-content-center pt-8'>
          <div className='head'>{textHead2}</div>
          <div className='paragraph'>{text2}</div>
          <button className='button text-white'>LEARN MORE</button>
        </div>
        <div className='image-sub'>
          <img src={image3} alt="main img" className=''/>
        </div>
      </div>
    </div>
  )
}

export default SubAreaComponent