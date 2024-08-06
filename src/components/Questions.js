import React, { useState } from 'react'

const Questions = () => {
    const [questions, setQuestion] = useState([
        {
            id: 1,
            open: false,
            'title': 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
            'description': 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
        },
        {
            id: 2,
            open: false,
            title: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
        },
        {
            id: 3,
            open: false,
            title: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
        }
    ]);

    const handleClicked = (id) => {
        const newArray = questions.map(q => {
            if(q.id === id) {
                return {
                    ...q, open: !q.open
                }
            } 
            return q;
        });

        setQuestion(newArray);
    }


  return (
    <div className='flex flex-col mb-10'>
        <div className='text-center head mb-5'>Frequently asked questions</div>
        {questions.map((que, index) => 
        {
            return (
                <div key={index} className='flex justify-between mx-5 lg:mx-[140px] xl:mx-[150px] 2xl:mx-[200px] mb-5 question-area'>
                    <div className={`flex flex-col justify-between question-title text-start ps-5 ${que.open ? 'text-[#6B3CC9]' : 'text-black'}`}>
                        <div className=''>{que.title}</div>
                        <div className={`question-description ${que.open ? 'block' : 'hidden'} `}>{que.description}</div>
                    </div>
                    <div role='button' onClick={() => handleClicked(que.id)} className={`px-10 text-2xl ${que.open ? 'text-[#6B3CC9]' : 'text-black'}`}>{que.open ? '-' : '+'}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Questions