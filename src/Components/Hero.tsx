import React from 'react'
import dashborad_image from '../Asstes/Dashboard_marketh.png'

const Hero = () => {
  return (
    <div className='bg-[#141923] min-h-[1120px]'>
      <div className='max-w-[1200px] mx-auto'>
        <span className='relative '>
          <svg className='w-full h-full' viewBox="0 0 1440 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_4_2472)">
            <circle cx="730" cy="538" r="384" fill="#6941C6" fillOpacity="0.8"/>
            </g>
            <defs>
            <filter id="filter0_f_4_2472" x="-354" y="-546" width="2168" height="2168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="350" result="effect1_foregroundBlur_4_2472"/>
            </filter>
            </defs>
          </svg>
        </span>
        <div className='absolute top-0 pt-229'>
          <div className='flex justify-between '>
            <div className='w-[580px]'>
              <h1 className='font-Inter text-60 font-600 leading-[70px] text-[#F7F8F9]'>We help you get the best business <br /> solutions ever.</h1>
              <p className='font-Inter text-20 font-500 text-[#8896AB] pt-10 leading-[30px] '>An awesome and powerful tool for your businesses, increases  business revenue with enterprise-grade links built to acquire and engage customer</p>
              <div className='flex space-x-7 items-center mt-21'>
                <button className='w-[171px] h-[60px] bg-[#6941C6] font-Inter text-16 font-500 rounded-md text-[#FFFFFF]'>Start free trial</button>
                <div className='w-[194px] h-[60px] border border-solid border-[#6941C6] rounded-md flex space-x-3 items-center justify-center '>
                  <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7598 16.3701C10.3398 16.3701 9.94984 16.27 9.59984 16.07C8.79984 15.61 8.33984 14.67 8.33984 13.48V10.52C8.33984 9.34005 8.79984 8.39005 9.59984 7.93005C10.3998 7.47005 11.4398 7.54005 12.4698 8.14005L15.0398 9.62005C16.0598 10.21 16.6498 11.08 16.6498 12C16.6498 12.92 16.0598 13.79 15.0398 14.38L12.4698 15.86C11.8898 16.2 11.2998 16.3701 10.7598 16.3701ZM10.7698 9.13005C10.6098 9.13005 10.4698 9.16005 10.3598 9.23005C10.0398 9.42005 9.84984 9.89005 9.84984 10.52V13.48C9.84984 14.11 10.0298 14.58 10.3598 14.77C10.6798 14.96 11.1798 14.88 11.7298 14.56L14.2998 13.08C14.8498 12.76 15.1598 12.37 15.1598 12C15.1598 11.63 14.8498 11.23 14.2998 10.92L11.7298 9.44005C11.3698 9.23005 11.0398 9.13005 10.7698 9.13005Z" fill="#6941C6"/>
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#6941C6"/>
                    </svg>
                  </span>
                  <span className=' text-[#6941C6] font-Inter font-500 text-16'>Watch Demo</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='pt-166 font-Inter text-40 font-600 text-[#F7F8F9]'>We believe in the power of data</h1>
            <div className='mt-102 flex items-center space-x-32'>
              <div className='flex flex-col'>
                <span className=' text-[#6941C6] font-Inter text-36 font-600'>15,000+</span>
                <span className='text-20 font-Inter font-500 text-[#8896AB]'>Projects completed</span>
              </div>
              <div className='flex flex-col'>
                <span className=' text-[#6941C6] font-Inter text-36 font-600'>$5m</span>
                <span className='text-20 font-Inter font-500 text-[#8896AB]'>ARR</span>
              </div>
              <div className='flex flex-col'>
                <span className=' text-[#6941C6] font-Inter text-36 font-600'>+30,000</span>
                <span className='text-20 font-Inter font-500 text-[#8896AB]'>Hours Saved Annually</span>
              </div>
              <div className='flex flex-col'>
                <span className=' text-[#6941C6] font-Inter text-36 font-600'>3,500</span>
                <span className='text-20 font-Inter font-500 text-[#8896AB]'>Unique Users</span>
              </div>
            </div>
          </div>
        </div>
        <img src={dashborad_image} alt="/" className='w-[600px] absolute top-0 right-0 pt-229' />
      </div>/
    </div>
  )
}

export default Hero
