import React from 'react'

const Faq = () => {
  return (
    <div className='bg-[#F8F6FB] min-h-[990px] pb-[126px] w-full'>
      <div className='max-w-[1200px] mx-auto pt-88'>
        <span className='px-3 py-1 bg-[#E0D8F3] rounded-full font-Inter font-500 text-12 text-[#6941C6]'>FAQ</span>
        <h1 className='font-Inter text-[#1C232D] font-700 text-48 pt-16'>Frequently Asked Questions</h1>
        <p className='font-Inter font-500 text-[#556987] text-20 leading-[28px] pt-16'>Marketh is the only saas business platform that lets you run your business on one platform, <br /> seamlessly across all digital channels.</p>
        <div className='mt-64 flex gap-10 flex-wrap justify-between'>

          <div className='flex flex-col'>
            <div className='h-[48px] w-[48px] bg-[#6941C6] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.29 14.6601C11.1053 14.8463 11.0011 15.0977 11 15.3601C11.0003 15.4941 11.0275 15.6268 11.08 15.7501C11.1703 15.962 11.3309 16.1362 11.5348 16.2434C11.7387 16.3505 11.9733 16.384 12.1991 16.3381C12.4248 16.2923 12.6278 16.1699 12.7737 15.9917C12.9196 15.8135 12.9996 15.5904 13 15.3601C12.9989 15.0977 12.8947 14.8463 12.71 14.6601C12.617 14.5663 12.5064 14.492 12.3846 14.4412C12.2627 14.3904 12.132 14.3643 12 14.3643C11.868 14.3643 11.7373 14.3904 11.6154 14.4412C11.4936 14.492 11.383 14.5663 11.29 14.6601ZM19.63 3.66007C19.5138 3.5661 19.3781 3.49935 19.2327 3.46474C19.0873 3.43013 18.9361 3.42853 18.79 3.46007C17.7214 3.68402 16.6183 3.68687 15.5486 3.46846C14.4789 3.25004 13.4652 2.81499 12.57 2.19007C12.4026 2.07395 12.2037 2.01172 12 2.01172C11.7963 2.01172 11.5974 2.07395 11.43 2.19007C10.534 2.81327 9.51998 3.24655 8.45029 3.46324C7.38061 3.67993 6.2779 3.67545 5.21001 3.45007C5.06394 3.41853 4.91267 3.42013 4.76731 3.45474C4.62194 3.48935 4.48618 3.5561 4.37001 3.65007C4.25399 3.74419 4.16053 3.86311 4.0965 3.99809C4.03247 4.13307 3.9995 4.28068 4.00001 4.43007V11.8801C3.99912 13.3138 4.34078 14.727 4.99654 16.002C5.6523 17.277 6.60319 18.3769 7.77001 19.2101L11.42 21.8101C11.5894 21.9307 11.7921 21.9955 12 21.9955C12.2079 21.9955 12.4106 21.9307 12.58 21.8101L16.23 19.2101C17.3968 18.3769 18.3477 17.277 19.0035 16.002C19.6592 14.727 20.0009 13.3138 20 11.8801V4.43007C20.0005 4.28068 19.9675 4.13307 19.9035 3.99809C19.8395 3.86311 19.746 3.74419 19.63 3.65007V3.66007ZM18 11.8801C18.0008 12.9948 17.7353 14.0937 17.2257 15.0851C16.716 16.0765 15.977 16.9319 15.07 17.5801L12 19.7701L8.93001 17.5801C8.02304 16.9319 7.28399 16.0765 6.77435 15.0851C6.26472 14.0937 5.99924 12.9948 6.00001 11.8801V5.58007C8.09643 5.75951 10.196 5.2731 12 4.19007C13.804 5.2731 15.9036 5.75951 18 5.58007V11.8801ZM12 7.36007C11.4731 7.35974 10.9553 7.49819 10.4989 7.76152C10.0425 8.02484 9.66347 8.40373 9.40001 8.86007C9.28045 9.08861 9.25383 9.35451 9.32569 9.60222C9.39755 9.84993 9.56234 10.0603 9.78565 10.1894C10.0089 10.3184 10.2735 10.3562 10.524 10.2949C10.7745 10.2335 10.9916 10.0777 11.13 9.86007C11.2177 9.7082 11.3438 9.58206 11.4956 9.4943C11.6474 9.40654 11.8197 9.36026 11.995 9.36008C12.1704 9.35991 12.3427 9.40586 12.4947 9.49331C12.6467 9.58077 12.7731 9.70667 12.8611 9.85836C12.949 10.0101 12.9956 10.1822 12.996 10.3576C12.9965 10.533 12.9508 10.7054 12.8635 10.8575C12.7763 11.0096 12.6506 11.1362 12.499 11.2244C12.3475 11.3126 12.1754 11.3594 12 11.3601C11.7348 11.3601 11.4804 11.4654 11.2929 11.653C11.1054 11.8405 11 12.0949 11 12.3601C11 12.6253 11.1054 12.8796 11.2929 13.0672C11.4804 13.2547 11.7348 13.3601 12 13.3601C12.7957 13.3601 13.5587 13.044 14.1213 12.4814C14.6839 11.9188 15 11.1557 15 10.3601C15 9.56442 14.6839 8.80136 14.1213 8.23875C13.5587 7.67615 12.7957 7.36007 12 7.36007V7.36007Z" fill="#F7F8F9"/>
              </svg>
            </div>
            <h1 className='pt-24 font-Inter font-700 text-20 text-[#2A3342]'>What are the benefits of <br /> email marketing</h1>
            <p className='font-Inter font-500 text-16 leading-[22px] pt-24 text-[#556987]'>For USA domestic orders we offer FedEx and <br /> USPS shipping. Contact us via email to learn <br /> more.</p>
          </div>
          <div className='flex flex-col'>
            <div className='h-[48px] w-[48px] bg-[#6941C6] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.29 14.6601C11.1053 14.8463 11.0011 15.0977 11 15.3601C11.0003 15.4941 11.0275 15.6268 11.08 15.7501C11.1703 15.962 11.3309 16.1362 11.5348 16.2434C11.7387 16.3505 11.9733 16.384 12.1991 16.3381C12.4248 16.2923 12.6278 16.1699 12.7737 15.9917C12.9196 15.8135 12.9996 15.5904 13 15.3601C12.9989 15.0977 12.8947 14.8463 12.71 14.6601C12.617 14.5663 12.5064 14.492 12.3846 14.4412C12.2627 14.3904 12.132 14.3643 12 14.3643C11.868 14.3643 11.7373 14.3904 11.6154 14.4412C11.4936 14.492 11.383 14.5663 11.29 14.6601ZM19.63 3.66007C19.5138 3.5661 19.3781 3.49935 19.2327 3.46474C19.0873 3.43013 18.9361 3.42853 18.79 3.46007C17.7214 3.68402 16.6183 3.68687 15.5486 3.46846C14.4789 3.25004 13.4652 2.81499 12.57 2.19007C12.4026 2.07395 12.2037 2.01172 12 2.01172C11.7963 2.01172 11.5974 2.07395 11.43 2.19007C10.534 2.81327 9.51998 3.24655 8.45029 3.46324C7.38061 3.67993 6.2779 3.67545 5.21001 3.45007C5.06394 3.41853 4.91267 3.42013 4.76731 3.45474C4.62194 3.48935 4.48618 3.5561 4.37001 3.65007C4.25399 3.74419 4.16053 3.86311 4.0965 3.99809C4.03247 4.13307 3.9995 4.28068 4.00001 4.43007V11.8801C3.99912 13.3138 4.34078 14.727 4.99654 16.002C5.6523 17.277 6.60319 18.3769 7.77001 19.2101L11.42 21.8101C11.5894 21.9307 11.7921 21.9955 12 21.9955C12.2079 21.9955 12.4106 21.9307 12.58 21.8101L16.23 19.2101C17.3968 18.3769 18.3477 17.277 19.0035 16.002C19.6592 14.727 20.0009 13.3138 20 11.8801V4.43007C20.0005 4.28068 19.9675 4.13307 19.9035 3.99809C19.8395 3.86311 19.746 3.74419 19.63 3.65007V3.66007ZM18 11.8801C18.0008 12.9948 17.7353 14.0937 17.2257 15.0851C16.716 16.0765 15.977 16.9319 15.07 17.5801L12 19.7701L8.93001 17.5801C8.02304 16.9319 7.28399 16.0765 6.77435 15.0851C6.26472 14.0937 5.99924 12.9948 6.00001 11.8801V5.58007C8.09643 5.75951 10.196 5.2731 12 4.19007C13.804 5.2731 15.9036 5.75951 18 5.58007V11.8801ZM12 7.36007C11.4731 7.35974 10.9553 7.49819 10.4989 7.76152C10.0425 8.02484 9.66347 8.40373 9.40001 8.86007C9.28045 9.08861 9.25383 9.35451 9.32569 9.60222C9.39755 9.84993 9.56234 10.0603 9.78565 10.1894C10.0089 10.3184 10.2735 10.3562 10.524 10.2949C10.7745 10.2335 10.9916 10.0777 11.13 9.86007C11.2177 9.7082 11.3438 9.58206 11.4956 9.4943C11.6474 9.40654 11.8197 9.36026 11.995 9.36008C12.1704 9.35991 12.3427 9.40586 12.4947 9.49331C12.6467 9.58077 12.7731 9.70667 12.8611 9.85836C12.949 10.0101 12.9956 10.1822 12.996 10.3576C12.9965 10.533 12.9508 10.7054 12.8635 10.8575C12.7763 11.0096 12.6506 11.1362 12.499 11.2244C12.3475 11.3126 12.1754 11.3594 12 11.3601C11.7348 11.3601 11.4804 11.4654 11.2929 11.653C11.1054 11.8405 11 12.0949 11 12.3601C11 12.6253 11.1054 12.8796 11.2929 13.0672C11.4804 13.2547 11.7348 13.3601 12 13.3601C12.7957 13.3601 13.5587 13.044 14.1213 12.4814C14.6839 11.9188 15 11.1557 15 10.3601C15 9.56442 14.6839 8.80136 14.1213 8.23875C13.5587 7.67615 12.7957 7.36007 12 7.36007V7.36007Z" fill="#F7F8F9"/>
              </svg>
            </div>
            <h1 className='pt-24 font-Inter font-700 text-20 text-[#2A3342]'>What payment methods <br /> do you accept?</h1>
            <p className='font-Inter font-500 text-16 leading-[22px] pt-24 text-[#556987]'>Any method of payments acceptable by you. <br /> For example: We accept MasterCard, Visa.</p>
          </div>
          <div className='flex flex-col'>
            <div className='h-[48px] w-[48px] bg-[#6941C6] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.29 14.6601C11.1053 14.8463 11.0011 15.0977 11 15.3601C11.0003 15.4941 11.0275 15.6268 11.08 15.7501C11.1703 15.962 11.3309 16.1362 11.5348 16.2434C11.7387 16.3505 11.9733 16.384 12.1991 16.3381C12.4248 16.2923 12.6278 16.1699 12.7737 15.9917C12.9196 15.8135 12.9996 15.5904 13 15.3601C12.9989 15.0977 12.8947 14.8463 12.71 14.6601C12.617 14.5663 12.5064 14.492 12.3846 14.4412C12.2627 14.3904 12.132 14.3643 12 14.3643C11.868 14.3643 11.7373 14.3904 11.6154 14.4412C11.4936 14.492 11.383 14.5663 11.29 14.6601ZM19.63 3.66007C19.5138 3.5661 19.3781 3.49935 19.2327 3.46474C19.0873 3.43013 18.9361 3.42853 18.79 3.46007C17.7214 3.68402 16.6183 3.68687 15.5486 3.46846C14.4789 3.25004 13.4652 2.81499 12.57 2.19007C12.4026 2.07395 12.2037 2.01172 12 2.01172C11.7963 2.01172 11.5974 2.07395 11.43 2.19007C10.534 2.81327 9.51998 3.24655 8.45029 3.46324C7.38061 3.67993 6.2779 3.67545 5.21001 3.45007C5.06394 3.41853 4.91267 3.42013 4.76731 3.45474C4.62194 3.48935 4.48618 3.5561 4.37001 3.65007C4.25399 3.74419 4.16053 3.86311 4.0965 3.99809C4.03247 4.13307 3.9995 4.28068 4.00001 4.43007V11.8801C3.99912 13.3138 4.34078 14.727 4.99654 16.002C5.6523 17.277 6.60319 18.3769 7.77001 19.2101L11.42 21.8101C11.5894 21.9307 11.7921 21.9955 12 21.9955C12.2079 21.9955 12.4106 21.9307 12.58 21.8101L16.23 19.2101C17.3968 18.3769 18.3477 17.277 19.0035 16.002C19.6592 14.727 20.0009 13.3138 20 11.8801V4.43007C20.0005 4.28068 19.9675 4.13307 19.9035 3.99809C19.8395 3.86311 19.746 3.74419 19.63 3.65007V3.66007ZM18 11.8801C18.0008 12.9948 17.7353 14.0937 17.2257 15.0851C16.716 16.0765 15.977 16.9319 15.07 17.5801L12 19.7701L8.93001 17.5801C8.02304 16.9319 7.28399 16.0765 6.77435 15.0851C6.26472 14.0937 5.99924 12.9948 6.00001 11.8801V5.58007C8.09643 5.75951 10.196 5.2731 12 4.19007C13.804 5.2731 15.9036 5.75951 18 5.58007V11.8801ZM12 7.36007C11.4731 7.35974 10.9553 7.49819 10.4989 7.76152C10.0425 8.02484 9.66347 8.40373 9.40001 8.86007C9.28045 9.08861 9.25383 9.35451 9.32569 9.60222C9.39755 9.84993 9.56234 10.0603 9.78565 10.1894C10.0089 10.3184 10.2735 10.3562 10.524 10.2949C10.7745 10.2335 10.9916 10.0777 11.13 9.86007C11.2177 9.7082 11.3438 9.58206 11.4956 9.4943C11.6474 9.40654 11.8197 9.36026 11.995 9.36008C12.1704 9.35991 12.3427 9.40586 12.4947 9.49331C12.6467 9.58077 12.7731 9.70667 12.8611 9.85836C12.949 10.0101 12.9956 10.1822 12.996 10.3576C12.9965 10.533 12.9508 10.7054 12.8635 10.8575C12.7763 11.0096 12.6506 11.1362 12.499 11.2244C12.3475 11.3126 12.1754 11.3594 12 11.3601C11.7348 11.3601 11.4804 11.4654 11.2929 11.653C11.1054 11.8405 11 12.0949 11 12.3601C11 12.6253 11.1054 12.8796 11.2929 13.0672C11.4804 13.2547 11.7348 13.3601 12 13.3601C12.7957 13.3601 13.5587 13.044 14.1213 12.4814C14.6839 11.9188 15 11.1557 15 10.3601C15 9.56442 14.6839 8.80136 14.1213 8.23875C13.5587 7.67615 12.7957 7.36007 12 7.36007V7.36007Z" fill="#F7F8F9"/>
              </svg>
            </div>
            <h1 className='pt-24 font-Inter font-700 text-20 text-[#2A3342]'>What are the benefits of <br /> email marketing</h1>
            <p className='font-Inter font-500 text-16 leading-[22px] pt-24 text-[#556987]'>Orders are usually shipped within 1-2 business <br /> days after placing the order.</p>
          </div>
          <div className='flex flex-col'>
            <div className='h-[48px] w-[48px] bg-[#6941C6] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.29 14.6601C11.1053 14.8463 11.0011 15.0977 11 15.3601C11.0003 15.4941 11.0275 15.6268 11.08 15.7501C11.1703 15.962 11.3309 16.1362 11.5348 16.2434C11.7387 16.3505 11.9733 16.384 12.1991 16.3381C12.4248 16.2923 12.6278 16.1699 12.7737 15.9917C12.9196 15.8135 12.9996 15.5904 13 15.3601C12.9989 15.0977 12.8947 14.8463 12.71 14.6601C12.617 14.5663 12.5064 14.492 12.3846 14.4412C12.2627 14.3904 12.132 14.3643 12 14.3643C11.868 14.3643 11.7373 14.3904 11.6154 14.4412C11.4936 14.492 11.383 14.5663 11.29 14.6601ZM19.63 3.66007C19.5138 3.5661 19.3781 3.49935 19.2327 3.46474C19.0873 3.43013 18.9361 3.42853 18.79 3.46007C17.7214 3.68402 16.6183 3.68687 15.5486 3.46846C14.4789 3.25004 13.4652 2.81499 12.57 2.19007C12.4026 2.07395 12.2037 2.01172 12 2.01172C11.7963 2.01172 11.5974 2.07395 11.43 2.19007C10.534 2.81327 9.51998 3.24655 8.45029 3.46324C7.38061 3.67993 6.2779 3.67545 5.21001 3.45007C5.06394 3.41853 4.91267 3.42013 4.76731 3.45474C4.62194 3.48935 4.48618 3.5561 4.37001 3.65007C4.25399 3.74419 4.16053 3.86311 4.0965 3.99809C4.03247 4.13307 3.9995 4.28068 4.00001 4.43007V11.8801C3.99912 13.3138 4.34078 14.727 4.99654 16.002C5.6523 17.277 6.60319 18.3769 7.77001 19.2101L11.42 21.8101C11.5894 21.9307 11.7921 21.9955 12 21.9955C12.2079 21.9955 12.4106 21.9307 12.58 21.8101L16.23 19.2101C17.3968 18.3769 18.3477 17.277 19.0035 16.002C19.6592 14.727 20.0009 13.3138 20 11.8801V4.43007C20.0005 4.28068 19.9675 4.13307 19.9035 3.99809C19.8395 3.86311 19.746 3.74419 19.63 3.65007V3.66007ZM18 11.8801C18.0008 12.9948 17.7353 14.0937 17.2257 15.0851C16.716 16.0765 15.977 16.9319 15.07 17.5801L12 19.7701L8.93001 17.5801C8.02304 16.9319 7.28399 16.0765 6.77435 15.0851C6.26472 14.0937 5.99924 12.9948 6.00001 11.8801V5.58007C8.09643 5.75951 10.196 5.2731 12 4.19007C13.804 5.2731 15.9036 5.75951 18 5.58007V11.8801ZM12 7.36007C11.4731 7.35974 10.9553 7.49819 10.4989 7.76152C10.0425 8.02484 9.66347 8.40373 9.40001 8.86007C9.28045 9.08861 9.25383 9.35451 9.32569 9.60222C9.39755 9.84993 9.56234 10.0603 9.78565 10.1894C10.0089 10.3184 10.2735 10.3562 10.524 10.2949C10.7745 10.2335 10.9916 10.0777 11.13 9.86007C11.2177 9.7082 11.3438 9.58206 11.4956 9.4943C11.6474 9.40654 11.8197 9.36026 11.995 9.36008C12.1704 9.35991 12.3427 9.40586 12.4947 9.49331C12.6467 9.58077 12.7731 9.70667 12.8611 9.85836C12.949 10.0101 12.9956 10.1822 12.996 10.3576C12.9965 10.533 12.9508 10.7054 12.8635 10.8575C12.7763 11.0096 12.6506 11.1362 12.499 11.2244C12.3475 11.3126 12.1754 11.3594 12 11.3601C11.7348 11.3601 11.4804 11.4654 11.2929 11.653C11.1054 11.8405 11 12.0949 11 12.3601C11 12.6253 11.1054 12.8796 11.2929 13.0672C11.4804 13.2547 11.7348 13.3601 12 13.3601C12.7957 13.3601 13.5587 13.044 14.1213 12.4814C14.6839 11.9188 15 11.1557 15 10.3601C15 9.56442 14.6839 8.80136 14.1213 8.23875C13.5587 7.67615 12.7957 7.36007 12 7.36007V7.36007Z" fill="#F7F8F9"/>
              </svg>
            </div>
            <h1 className='pt-24 font-Inter font-700 text-20 text-[#2A3342]'>What are the benefits of <br /> email marketing</h1>
            <p className='font-Inter font-500 text-16 leading-[22px] pt-24 text-[#556987]'>For USA domestic orders we offer FedEx and <br /> USPS shipping. Contact us via email to learn <br /> more.</p>
          </div>
          <div className='flex flex-col'>
            <div className='h-[48px] w-[48px] bg-[#6941C6] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.29 14.6601C11.1053 14.8463 11.0011 15.0977 11 15.3601C11.0003 15.4941 11.0275 15.6268 11.08 15.7501C11.1703 15.962 11.3309 16.1362 11.5348 16.2434C11.7387 16.3505 11.9733 16.384 12.1991 16.3381C12.4248 16.2923 12.6278 16.1699 12.7737 15.9917C12.9196 15.8135 12.9996 15.5904 13 15.3601C12.9989 15.0977 12.8947 14.8463 12.71 14.6601C12.617 14.5663 12.5064 14.492 12.3846 14.4412C12.2627 14.3904 12.132 14.3643 12 14.3643C11.868 14.3643 11.7373 14.3904 11.6154 14.4412C11.4936 14.492 11.383 14.5663 11.29 14.6601ZM19.63 3.66007C19.5138 3.5661 19.3781 3.49935 19.2327 3.46474C19.0873 3.43013 18.9361 3.42853 18.79 3.46007C17.7214 3.68402 16.6183 3.68687 15.5486 3.46846C14.4789 3.25004 13.4652 2.81499 12.57 2.19007C12.4026 2.07395 12.2037 2.01172 12 2.01172C11.7963 2.01172 11.5974 2.07395 11.43 2.19007C10.534 2.81327 9.51998 3.24655 8.45029 3.46324C7.38061 3.67993 6.2779 3.67545 5.21001 3.45007C5.06394 3.41853 4.91267 3.42013 4.76731 3.45474C4.62194 3.48935 4.48618 3.5561 4.37001 3.65007C4.25399 3.74419 4.16053 3.86311 4.0965 3.99809C4.03247 4.13307 3.9995 4.28068 4.00001 4.43007V11.8801C3.99912 13.3138 4.34078 14.727 4.99654 16.002C5.6523 17.277 6.60319 18.3769 7.77001 19.2101L11.42 21.8101C11.5894 21.9307 11.7921 21.9955 12 21.9955C12.2079 21.9955 12.4106 21.9307 12.58 21.8101L16.23 19.2101C17.3968 18.3769 18.3477 17.277 19.0035 16.002C19.6592 14.727 20.0009 13.3138 20 11.8801V4.43007C20.0005 4.28068 19.9675 4.13307 19.9035 3.99809C19.8395 3.86311 19.746 3.74419 19.63 3.65007V3.66007ZM18 11.8801C18.0008 12.9948 17.7353 14.0937 17.2257 15.0851C16.716 16.0765 15.977 16.9319 15.07 17.5801L12 19.7701L8.93001 17.5801C8.02304 16.9319 7.28399 16.0765 6.77435 15.0851C6.26472 14.0937 5.99924 12.9948 6.00001 11.8801V5.58007C8.09643 5.75951 10.196 5.2731 12 4.19007C13.804 5.2731 15.9036 5.75951 18 5.58007V11.8801ZM12 7.36007C11.4731 7.35974 10.9553 7.49819 10.4989 7.76152C10.0425 8.02484 9.66347 8.40373 9.40001 8.86007C9.28045 9.08861 9.25383 9.35451 9.32569 9.60222C9.39755 9.84993 9.56234 10.0603 9.78565 10.1894C10.0089 10.3184 10.2735 10.3562 10.524 10.2949C10.7745 10.2335 10.9916 10.0777 11.13 9.86007C11.2177 9.7082 11.3438 9.58206 11.4956 9.4943C11.6474 9.40654 11.8197 9.36026 11.995 9.36008C12.1704 9.35991 12.3427 9.40586 12.4947 9.49331C12.6467 9.58077 12.7731 9.70667 12.8611 9.85836C12.949 10.0101 12.9956 10.1822 12.996 10.3576C12.9965 10.533 12.9508 10.7054 12.8635 10.8575C12.7763 11.0096 12.6506 11.1362 12.499 11.2244C12.3475 11.3126 12.1754 11.3594 12 11.3601C11.7348 11.3601 11.4804 11.4654 11.2929 11.653C11.1054 11.8405 11 12.0949 11 12.3601C11 12.6253 11.1054 12.8796 11.2929 13.0672C11.4804 13.2547 11.7348 13.3601 12 13.3601C12.7957 13.3601 13.5587 13.044 14.1213 12.4814C14.6839 11.9188 15 11.1557 15 10.3601C15 9.56442 14.6839 8.80136 14.1213 8.23875C13.5587 7.67615 12.7957 7.36007 12 7.36007V7.36007Z" fill="#F7F8F9"/>
              </svg>
            </div>
            <h1 className='pt-24 font-Inter font-700 text-20 text-[#2A3342]'>What are the benefits of <br /> email marketing</h1>
            <p className='font-Inter font-500 text-16 leading-[22px] pt-24 text-[#556987]'>Any method of payments acceptable by you. <br /> For example: We accept MasterCard, Visa.</p>
          </div>
          <div className='flex flex-col'>
            <div className='h-[48px] w-[48px] bg-[#6941C6] rounded-full flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.29 14.6601C11.1053 14.8463 11.0011 15.0977 11 15.3601C11.0003 15.4941 11.0275 15.6268 11.08 15.7501C11.1703 15.962 11.3309 16.1362 11.5348 16.2434C11.7387 16.3505 11.9733 16.384 12.1991 16.3381C12.4248 16.2923 12.6278 16.1699 12.7737 15.9917C12.9196 15.8135 12.9996 15.5904 13 15.3601C12.9989 15.0977 12.8947 14.8463 12.71 14.6601C12.617 14.5663 12.5064 14.492 12.3846 14.4412C12.2627 14.3904 12.132 14.3643 12 14.3643C11.868 14.3643 11.7373 14.3904 11.6154 14.4412C11.4936 14.492 11.383 14.5663 11.29 14.6601ZM19.63 3.66007C19.5138 3.5661 19.3781 3.49935 19.2327 3.46474C19.0873 3.43013 18.9361 3.42853 18.79 3.46007C17.7214 3.68402 16.6183 3.68687 15.5486 3.46846C14.4789 3.25004 13.4652 2.81499 12.57 2.19007C12.4026 2.07395 12.2037 2.01172 12 2.01172C11.7963 2.01172 11.5974 2.07395 11.43 2.19007C10.534 2.81327 9.51998 3.24655 8.45029 3.46324C7.38061 3.67993 6.2779 3.67545 5.21001 3.45007C5.06394 3.41853 4.91267 3.42013 4.76731 3.45474C4.62194 3.48935 4.48618 3.5561 4.37001 3.65007C4.25399 3.74419 4.16053 3.86311 4.0965 3.99809C4.03247 4.13307 3.9995 4.28068 4.00001 4.43007V11.8801C3.99912 13.3138 4.34078 14.727 4.99654 16.002C5.6523 17.277 6.60319 18.3769 7.77001 19.2101L11.42 21.8101C11.5894 21.9307 11.7921 21.9955 12 21.9955C12.2079 21.9955 12.4106 21.9307 12.58 21.8101L16.23 19.2101C17.3968 18.3769 18.3477 17.277 19.0035 16.002C19.6592 14.727 20.0009 13.3138 20 11.8801V4.43007C20.0005 4.28068 19.9675 4.13307 19.9035 3.99809C19.8395 3.86311 19.746 3.74419 19.63 3.65007V3.66007ZM18 11.8801C18.0008 12.9948 17.7353 14.0937 17.2257 15.0851C16.716 16.0765 15.977 16.9319 15.07 17.5801L12 19.7701L8.93001 17.5801C8.02304 16.9319 7.28399 16.0765 6.77435 15.0851C6.26472 14.0937 5.99924 12.9948 6.00001 11.8801V5.58007C8.09643 5.75951 10.196 5.2731 12 4.19007C13.804 5.2731 15.9036 5.75951 18 5.58007V11.8801ZM12 7.36007C11.4731 7.35974 10.9553 7.49819 10.4989 7.76152C10.0425 8.02484 9.66347 8.40373 9.40001 8.86007C9.28045 9.08861 9.25383 9.35451 9.32569 9.60222C9.39755 9.84993 9.56234 10.0603 9.78565 10.1894C10.0089 10.3184 10.2735 10.3562 10.524 10.2949C10.7745 10.2335 10.9916 10.0777 11.13 9.86007C11.2177 9.7082 11.3438 9.58206 11.4956 9.4943C11.6474 9.40654 11.8197 9.36026 11.995 9.36008C12.1704 9.35991 12.3427 9.40586 12.4947 9.49331C12.6467 9.58077 12.7731 9.70667 12.8611 9.85836C12.949 10.0101 12.9956 10.1822 12.996 10.3576C12.9965 10.533 12.9508 10.7054 12.8635 10.8575C12.7763 11.0096 12.6506 11.1362 12.499 11.2244C12.3475 11.3126 12.1754 11.3594 12 11.3601C11.7348 11.3601 11.4804 11.4654 11.2929 11.653C11.1054 11.8405 11 12.0949 11 12.3601C11 12.6253 11.1054 12.8796 11.2929 13.0672C11.4804 13.2547 11.7348 13.3601 12 13.3601C12.7957 13.3601 13.5587 13.044 14.1213 12.4814C14.6839 11.9188 15 11.1557 15 10.3601C15 9.56442 14.6839 8.80136 14.1213 8.23875C13.5587 7.67615 12.7957 7.36007 12 7.36007V7.36007Z" fill="#F7F8F9"/>
              </svg>
            </div>
            <h1 className='pt-24 font-Inter font-700 text-20 text-[#2A3342]'>What are the benefits of <br /> email marketing</h1>
            <p className='font-Inter font-500 text-16 leading-[22px] pt-24 text-[#556987]'>Orders are usually shipped within 1-2 business <br /> days after placing the order.</p>
          </div>
        </div>
        <div className='bg-[#141923] h-[306px] w-full mt-88 flex flex-col items-center rounded-md'>
          <h1 className='font-Inter font-700 text-48 text-[#FFFFFF] pt-64'>Have any additional questions?</h1>
          <button className=' w-[166px] h-[56px] bg-[#6941C6] rounded-md font-Inter font-500 text-18 text-[#F0FDF4] mt-62'>Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default Faq