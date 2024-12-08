import Image from 'next/image'

const ShoperOffer = () => {
  return (
    <>
    <div className='w-full h-auto pt-[90px]'>
    <div className="">
            <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center font-[700] ">What Shopex Offer!</h1>
        </div>

            <div className="w-full flex justify-center gap-x-[28px] min3:gap-x-[36px] gap-y-[80px] lg:gap-8 flex-wrap  lg:flex-nowrap items-center pt-8 px-4 xl:px-0">
                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md flex flex-col justify-center items-center p-2 gap-4">
                    <Image src='/images/truck.svg' alt='truk image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

                {/* box2 */}

                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md flex flex-col justify-center items-center p-2 gap-4">
                    <Image src='/images/cashback.svg' alt='support image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

                {/* box3 */}

                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md flex flex-col justify-center items-center p-2 gap-4">
                    <Image src='/images/support.svg' alt='support image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

                {/* box4 */}


                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md flex flex-col justify-center items-center p-2 gap-4">
                    <Image src='/images/phonecall.svg' alt='phone image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default ShoperOffer