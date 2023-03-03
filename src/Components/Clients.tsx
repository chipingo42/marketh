import React from 'react'
import image from '../Asstes/Rectangle18.png'

const Clients = () => {
  return (
    <div className='bg-[#F8F6FB] min-h-[990px] pb-28 w-screen'>
      <div className='max-w-[1200px] mx-auto'>
        <h1 className='font-500 font-Inter text-36 text-[#2A3342] pt-87'>What Our clients are saying about Us</h1>
        <p className='text-[#556987] font-500 text-20 pt-24'>we might be biased, but we think our software is pretty great. <br /> Our clients think so too.</p>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-10 relative'>
            <img src={image} alt="/" className='mt-146' />
            <div className='mt-421'>
              <div className='relative left-14'>
                <span className='relative -left-10'>
                  <svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5714 21.4286C28.5714 17.7143 29.1429 14.5238 30.2857 11.8571C31.4286 9.09524 32.9048 6.85714 34.7143 5.14286C36.5238 3.33334 38.5714 2.04762 40.8571 1.28571C43.2381 0.428572 45.5714 0 47.8571 0V5C45.381 5 43.0476 5.85715 40.8571 7.57143C38.7619 9.19048 37.5238 11.4286 37.1429 14.2857C37.4286 14.1905 37.7619 14.0952 38.1429 14C38.4286 13.9048 38.7619 13.8095 39.1429 13.7143C39.619 13.6191 40.1429 13.5714 40.7143 13.5714C43.5714 13.5714 45.9524 14.6667 47.8571 16.8571C49.7619 18.9524 50.7143 21.4286 50.7143 24.2857C50.7143 27.1429 49.7143 29.6667 47.7143 31.8571C45.8095 33.9524 43.2381 35 40 35C36.381 35 33.5714 33.6667 31.5714 31C29.5714 28.2381 28.5714 25.0476 28.5714 21.4286ZM0 21.4286C0 17.7143 0.571429 14.5238 1.71429 11.8571C2.85714 9.09524 4.33333 6.85714 6.14286 5.14286C7.95238 3.33334 10 2.04762 12.2857 1.28571C14.6667 0.428572 17 0 19.2857 0V5C16.8095 5 14.4762 5.85715 12.2857 7.57143C10.1905 9.19048 8.95238 11.4286 8.57143 14.2857C8.85714 14.1905 9.19048 14.0952 9.57143 14C9.85714 13.9048 10.1905 13.8095 10.5714 13.7143C11.0476 13.6191 11.5714 13.5714 12.1429 13.5714C15 13.5714 17.381 14.6667 19.2857 16.8571C21.1905 18.9524 22.1429 21.4286 22.1429 24.2857C22.1429 27.1429 21.1429 29.6667 19.1429 31.8571C17.2381 33.9524 14.6667 35 11.4286 35C7.80952 35 5 33.6667 3 31C1 28.2381 0 25.0476 0 21.4286Z" fill="#5431A5"/>
                  </svg>
                </span>
                <h1 className='text-20 font-Inter font-500 text-[#556987]  '>SaaS is a software deployment model in which a third-party <br /> provider builds applications on cloud infrastructure and makes <br /> them available to customers via the internet. </h1>
                <span>
                  <svg className='absolute right-4 -bottom-4 ' width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.831 13.5714C21.831 17.2857 21.2676 20.4762 20.1408 23.1429C19.0141 25.9048 17.5587 28.1429 15.7747 29.8571C13.9906 31.6667 11.9718 32.9524 9.71831 33.7143C7.37089 34.5714 5.07042 35 2.8169 35L2.8169 30C5.25821 30 7.55868 29.1429 9.71831 27.4286C11.784 25.8095 13.0047 23.5714 13.3803 20.7143C13.0986 20.8095 12.77 20.9048 12.3944 21C12.1127 21.0952 11.784 21.1905 11.4084 21.2857C10.939 21.381 10.4225 21.4286 9.85916 21.4286C7.04225 21.4286 4.69483 20.3333 2.8169 18.1429C0.938963 16.0476 -1.87335e-06 13.5714 -2.12312e-06 10.7143C-2.3729e-06 7.85715 0.985917 5.33334 2.95775 3.14286C4.83568 1.04762 7.37089 3.72676e-06 10.5634 3.44766e-06C14.1315 3.13573e-06 16.9014 1.33334 18.8732 4C20.8451 6.76191 21.831 9.95238 21.831 13.5714ZM50 13.5714C50 17.2857 49.4366 20.4762 48.3099 23.1429C47.1831 25.9048 45.7277 28.1429 43.9437 29.8571C42.1596 31.6667 40.1408 32.9524 37.8873 33.7143C35.5399 34.5714 33.2394 35 30.9859 35L30.9859 30C33.4272 30 35.7277 29.1429 37.8873 27.4286C39.9531 25.8095 41.1737 23.5714 41.5493 20.7143C41.2676 20.8095 40.939 20.9048 40.5634 21C40.2817 21.0952 39.9531 21.1905 39.5775 21.2857C39.108 21.381 38.5915 21.4286 38.0282 21.4286C35.2113 21.4286 32.8639 20.3333 30.9859 18.1429C29.108 16.0476 28.169 13.5714 28.169 10.7143C28.169 7.85715 29.1549 5.33334 31.1268 3.14286C33.0047 1.04762 35.5399 1.26414e-06 38.7324 9.85045e-07C42.3005 6.73114e-07 45.0704 1.33334 47.0423 4C49.0141 6.7619 50 9.95238 50 13.5714Z" fill="#5431A5"/>
                  </svg>
                </span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='font-700 font-Inter text-24 text-[#000000] mt-91'>Savannah Nguyen</h1>
                <span>
                  <svg width="220" height="30" viewBox="0 0 220 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M219.194 23.5002L213.479 8.20261L198.182 13.9168L203.896 29.2143L219.194 23.5002ZM2.85674 19.399C5.21408 17.0596 9.41325 14.8659 15.3301 12.9359C21.1936 11.0234 28.527 9.43751 36.9386 8.18453C53.7568 5.67931 74.6937 4.53235 96.3945 4.6872C118.089 4.842 140.493 6.29747 160.234 8.97827C180.022 11.6654 196.971 15.5627 207.858 20.5281L209.518 16.8888C198.082 11.6732 180.66 7.71525 160.772 5.01465C140.839 2.30777 118.263 0.843142 96.4231 0.687298C74.5887 0.531496 53.4335 1.68333 36.3493 4.22818C27.8096 5.50024 20.2392 7.12724 14.0897 9.13311C7.99339 11.1216 3.07019 13.5518 0.0391665 16.5597L2.85674 19.399Z" fill="#5431A5"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className='flex mt-56 space-x-10 '>
            <div className='h-[50px] w-[50px] bg-[#E0D8F3] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.56994 18.82C9.37994 18.82 9.18994 18.75 9.03994 18.6L2.96994 12.53C2.67994 12.24 2.67994 11.76 2.96994 11.47L9.03994 5.4C9.32994 5.11 9.80994 5.11 10.0999 5.4C10.3899 5.69 10.3899 6.17 10.0999 6.46L4.55994 12L10.0999 17.54C10.3899 17.83 10.3899 18.31 10.0999 18.6C9.95994 18.75 9.75994 18.82 9.56994 18.82Z" fill="#292D32"/>
                <path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="#292D32"/>
              </svg>            
            </div>
            <div className='h-[50px] w-[50px] bg-[#5431A5] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z" fill="white"/>
                <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center space-x-6 mt-27'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#E0D8F3] hover:bg-[#6941C6]'></div>
          <div className='w-[20px] h-[20px] rounded-full bg-[#E0D8F3] hover:bg-[#6941C6]'></div>
          <div className='w-[20px] h-[20px] rounded-full bg-[#E0D8F3] hover:bg-[#6941C6]'></div>
          <div className='w-[20px] h-[20px] rounded-full bg-[#E0D8F3] hover:bg-[#6941C6]'></div>
        </div>
      </div>
    </div>
  )
}

export default Clients