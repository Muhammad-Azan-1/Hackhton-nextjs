import Image from "next/image";
const FeaturedProduct = () => {
  return (
    <>
      <div className="w-full h-auto lg:h-auto  pt-20 font-[700]  px-4 xl:px-0">
        <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center">
          Featured Products
        </h1>

        <div className="w-full h-full flex justify-center gap-x-[30px] md:gap-x-[45px] min3:gap-x-[35px] gap-y-[100px] lg:gap-[28px] flex-wrap  lg:flex-nowrap  pt-8  ">
          {/* box1 */}
          <div className="h-[370px] w-[500px] min4:w-[340px] min3:w-[270px] bg-[#F6F7FB] shadow-lg">
            <div className="relative overflow-hidden w-full h-[65%] flex justify-center items-center cursor-pointer ">
              <Image
                src="/images/Cantileverchair.svg"
                alt="item2"
                width={190}
                height={180}
               
              ></Image>
              <div className="absolute top-2 left-2 flex ">
                <Image src='images/carticon2.svg' alt="cart icon" className="mr-2" width={30} height={40}></Image>
                <Image src='images/hearticon2.svg' alt="heart Icon" className="mr-2" width={15} height={40}></Image>
                <Image src='images/searchi.svg' alt="search Icon" className="mr-2" width={15} height={40}></Image>
              </div>

            </div>

            <div className="group p-4 w-full bg-white hover:bg-[#1A0B5B] hover:text-[#ffff]  cursor-pointer flex flex-col mt-1 mb-1 items-center gap-2 shadow-lg ">
              <h1 className="font-poppins text-[#FB2E86] text-inherit font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="mt-1 mb-1 inline-block group-hover:hidden">
                <Image
                  src="/images/colorbox.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
                
              </div>

              <div className="hidden group-hover:inline-block">
                <Image
                  src="/images/lightmode.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="flex flex-col items-center w-full">
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] font-josefin">
                  Code - Y523201
                </h3>
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
          </div>

          {/* box2 */}
          <div className="h-[370px] w-[500px] min4:w-[340px] min3:w-[270px]  bg-[#F6F7FB] shadow-lg">
            <div className="relative overflow-hidden w-full h-[65%] flex justify-center items-center cursor-pointer ">
              <Image
                src="/images/Cantileverchair2.svg"
                alt="item2"
                width={190}
                height={180}
              // className="w-[170px] sm:w-[150px]"
              ></Image>
              <div className="absolute top-2 left-2 flex ">
                <Image src='images/carticon2.svg' alt="cart icon" className="mr-2" width={30} height={40}></Image>
                <Image src='images/hearticon2.svg' alt="heart Icon" className="mr-2" width={15} height={40}></Image>
                <Image src='images/searchi.svg' alt="search Icon" className="mr-2" width={15} height={40}></Image>
              </div>
            </div>

            <div className="group p-4 w-full bg-white hover:bg-[#1A0B5B] hover:text-[#ffff]  cursor-pointer flex flex-col mt-1 mb-1 items-center gap-2 shadow-lg ">
              <h1 className="font-poppins text-[#FB2E86] text-inherit font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="mt-1 mb-1 inline-block group-hover:hidden">
                <Image
                  src="/images/colorbox.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="hidden group-hover:inline-block">
                <Image
                  src="/images/lightmode.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="flex flex-col items-center w-full">
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] font-josefin">
                  Code - Y523201
                </h3>
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
          </div>

          {/* box3 */}
          <div className="h-[370px] w-[500px] min4:w-[340px] min3:w-[270px]  bg-[#F6F7FB] shadow-lg">
            <div className="relative overflow-hidden w-full h-[65%] flex justify-center items-center cursor-pointer ">
              <Image
                src="/images/Cantileverchair3.svg"
                alt="item2"
                width={190}
                height={180}
                // className="w-[170px] sm:w-[150px]"
              ></Image>
               <div className="absolute top-2 left-2 flex ">
                <Image src='images/carticon2.svg' alt="cart icon" className="mr-2" width={30} height={40}></Image>
                <Image src='images/hearticon2.svg' alt="heart Icon" className="mr-2" width={15} height={40}></Image>
                <Image src='images/searchi.svg' alt="search Icon" className="mr-2" width={15} height={40}></Image>
              </div>
            </div>

            <div className="group p-4 w-full bg-white hover:bg-[#1A0B5B] hover:text-[#ffff]  cursor-pointer flex flex-col mt-1 mb-1 items-center gap-2 shadow-lg ">
              <h1 className="font-poppins text-[#FB2E86] text-inherit font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="mt-1 mb-1 inline-block group-hover:hidden">
                <Image
                  src="/images/colorbox.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="hidden group-hover:inline-block">
                <Image
                  src="/images/lightmode.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="flex flex-col items-center w-full">
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] font-josefin">
                  Code - Y523201
                </h3>
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
          </div>

          {/* box4 */}
          <div className="h-[370px] w-[500px] min4:w-[340px] min3:w-[270px]  bg-[#F6F7FB] shadow-lg">
            <div className="relative overflow-hidden w-full h-[65%] flex justify-center items-center cursor-pointer ">
              <Image
                src="/images/Cantileverchair4.svg"
                alt="item2"
                width={190}
                height={180}
                // className="w-[170px] sm:w-[150px]"
              ></Image>
               <div className="absolute top-2 left-2 flex ">
                <Image src='images/carticon2.svg' alt="cart icon" className="mr-2" width={30} height={40}></Image>
                <Image src='images/hearticon2.svg' alt="heart Icon" className="mr-2" width={15} height={40}></Image>
                <Image src='images/searchi.svg' alt="search Icon" className="mr-2" width={15} height={40}></Image>
              </div>
            </div>

            <div className="group p-4 w-full bg-white hover:bg-[#1A0B5B] hover:text-[#ffff]  cursor-pointer flex flex-col mt-1 mb-1 items-center gap-2 shadow-lg ">
              <h1 className="font-poppins text-[#FB2E86] text-inherit font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="mt-1 mb-1 inline-block group-hover:hidden">
                <Image
                  src="/images/colorbox.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="hidden group-hover:inline-block">
                <Image
                  src="/images/lightmode.svg"
                  alt="div colors"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="flex flex-col items-center w-full">
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] font-josefin">
                  Code - Y523201
                </h3>
                <h3 className=" text-[#1A0B5B] text-inherit  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
          </div>
        </div>
      
      </div>

      <div className="w-full h-5 flex justify-center mt-16">
          <Image src='/images/scroller.svg' alt="scroller" width={100} height={40}></Image>
        </div>
    </>
  );
};

export default FeaturedProduct;
