import Image from "next/image";

const Trendingproducts = () => {
  return (
    <>
      <div className="w-full h-[500px] mt-24">
        <h1 className="font-josefin max-w:text-[32px] font-[700] text-[42px] text-[#1A0B5B] text-center">
          Featured Products
        </h1>

        <div className="w-full pt-6 flex justify-center gap-x-8 gap-y-20 lg:gap-3 flex-wrap lg:flex-nowrap xl:gap-6 px-1 xl:px-0">
          <div className="h-[350px] w-[340px]  min3:w-[270px] shadow-lg">
            <div className="flex justify-center items-center bg-[white]  w-[100%] h-[75%]">
              <div className="overflow-hidden bg-[#F6F7FB] w-[240px] lx:w-[250px] flex justify-center items-center h-[90%]">
                <Image
                  src="/images/trandingchair1.svg"
                  alt="item2"
                  width={171}
                  height={172}
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="group h-[25%] p-1 w-full bg-white   cursor-pointer flex flex-col  items-center gap-1 shadow-xl ">
              <h1 className="font-poppins text-[#1A0B5B] font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="flex items-center justify-center gap-3 pb-4 w-full">
                <h3 className=" text-[#1A0B5B] text-[15px] font-josefin font-[700]">
                  $26.00
                </h3>
                <h3 className=" text-[#1518754D] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
 
          </div>

          
          {/* box2 */}

          <div className="h-[350px] w-[340px]  min3:w-[270px] shadow-lg">
            <div className="flex justify-center items-center bg-[white]  w-[100%] h-[75%]">
              <div className="overflow-hidden bg-[#F6F7FB] w-[240px] lx:w-[250px] flex justify-center items-center h-[90%]">
                <Image
                  src="/images/trendingchair2.svg"
                  alt="item2"
                  width={171}
                  height={172}
                   className="object-cover w-[171px] h-[171px]"
                ></Image>
              </div>
            </div>

            <div className="group h-[25%] p-1 w-full bg-white   cursor-pointer flex flex-col  items-center gap-1 shadow-xl ">
              <h1 className="font-poppins text-[#1A0B5B] font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="flex items-center justify-center gap-3 pb-4 w-full">
                <h3 className=" text-[#1A0B5B] text-[15px] font-josefin font-[700]">
                  $26.00
                </h3>
                <h3 className=" text-[#1518754D] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
 
          </div>

{/* box3
           */}

<div className="h-[350px] w-[340px]  min3:w-[270px] shadow-lg">
            <div className="flex justify-center items-center bg-[white]  w-[100%] h-[75%]">
              <div className=" overflow-hidden bg-[#F6F7FB] w-[240px] lx:w-[250px]  flex justify-center items-center h-[90%]">
                <Image
                  src="/images/trendingchair3.svg"
                  alt="item2"
                  width={171}
                  height={172}
                  className="object-cover w-[171px] h-[171px]"

                ></Image>
              </div>
            </div>

            <div className="group h-[25%] p-1 w-full bg-white   cursor-pointer flex flex-col  items-center gap-1 shadow-xl ">
              <h1 className="font-poppins text-[#1A0B5B] font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="flex items-center justify-center gap-3 pb-4 w-full">
                <h3 className=" text-[#1A0B5B] text-[15px] font-josefin font-[700]">
                  $26.00
                </h3>
                <h3 className=" text-[#1518754D] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
 
          </div>


          {/* box4 */}

          <div className="h-[350px] w-[340px]  min3:w-[270px] shadow-lg">
            <div className="flex justify-center items-center bg-[white]  w-[100%] h-[75%]">
              <div className="overflow-hidden bg-[#F6F7FB] w-[240px] lx:w-[250px]  flex justify-center items-center h-[90%]">
                <Image
                  src="/images/trendingchair4.svg"
                  alt="item2"
                  width={171}
                  height={172}
                  className="object-cover w-[171px] h-[171px]"

                ></Image>
              </div>
            </div>

            <div className="group h-[25%] p-1 w-full bg-white   cursor-pointer flex flex-col  items-center gap-1 shadow-xl ">
              <h1 className="font-poppins text-[#1A0B5B] font-lato text-[18px] font-[700]">
                Cantilever chair
              </h1>

              <div className="flex items-center justify-center gap-3 pb-4 w-full">
                <h3 className=" text-[#1A0B5B] text-[15px] font-josefin font-[700]">
                  $26.00
                </h3>
                <h3 className=" text-[#1518754D] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
                  $42.00
                </h3>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendingproducts;
