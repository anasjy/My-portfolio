import React from 'react'

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Node from '../assests/node.png';
import FireBase from '../assests/firebase.png';
import AWS from '../assests/aws.png';
import GitHub from '../assests/github.png';
import Tailwind from '../assests/tailwind.png';
import Mongo from '../assests/mongo.png';
import Bootstrap from '../assests/bootsrap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-700'>Skills</p>
                <p className='py-4'>// these are the technologies i've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML_icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={CSS} alt='HTML_icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={JavaScript} alt='HTML_icon'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={ReactImg} alt='HTML_icon'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Node} alt='HTML_icon'/>
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={FireBase} alt='HTML_icon'/>
                    <p className='my-4'>FireBase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={AWS} alt='HTML_icon'/>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitHub} alt='HTML_icon'/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Tailwind} alt='HTML_icon'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Mongo} alt='HTML_icon'/>
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Bootstrap} alt='HTML_icon'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills