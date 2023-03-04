import React from 'react'
import dott_blue from '../Asstes/dott.png'
import dott_red from '../Asstes/dott2.png'
import art_image from '../Asstes/11.png'
import circle from '../Asstes/circle.png'

const Launch = () => {
  return (
    <div className='bg-[#141923] w-screen h-[893px]'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex space-x-10'>
          <div className='pt-298'>
            <h1 className='font-700 font-Inter text-36 text-[#FAFAFA] leading-[40px] '>Be the first to know when <br /> we launch</h1>
            <p className='font-500 text-20 font-Inter text-[#556987] leading-[25px] pt-23'>Stay in the loop with everything you need <br /> to know.</p>
            <form action="" className='flex gap-3 mt-32'>
              <div>
                <input type="text" id='email' placeholder='Enter your email' className='w-[200px] py-2 font-Inter font-400  pl-3  placeholder:text-[#667085] outline-none bg-white rounded-md' />
              </div>
              <div>
                <input type="submit" value='Subscribe' className='bg-[#6941C6] py-2 px-3 rounded-md font-Inter text-16 font-500 text-[#FFFFFF]' />
              </div>
            </form>
            <p className=' font-Inter font-500 text-12 pt-17 text-[#556987]'>We care about your data in our <span className='text-[#6941C6]'>privacy policy</span></p>
          </div>
          <div className=''>
            <img src={dott_blue} alt="" className=' absolute right-0 mt-88' />
            <img src={dott_red} alt="" className=' absolute right-0 mt-[640px]' />
            <div>
              <img src={circle} alt="" className='absolute mt-[301px] right-90 ' />
              <img src={art_image} alt="" className=' absolute right-0 mt-[180px]  ' />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Launch;