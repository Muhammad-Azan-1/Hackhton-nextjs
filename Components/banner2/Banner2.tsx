import { Button } from "@/Components/ui/button";
import Image from "next/image";
const Banner2 = () => {
  return (
    <>
      <div className="h-auto w-full">
        <div className="w-full h-[450px] mt-28  bg-center bg-cover bg-[url('/images/reactanlgebanner.svg')]">
          <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
            <h1 className="text-center text-[#151875] font-josefin text-[25px] md:text-[35px] font-[700]">Get Leatest Update By Subscribe <br /> 0ur Newslater</h1>
            <Button
              variant="outline"
              size={"default"}
              className=" font-josefin"
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-[50px] px-1">
            <Image src='/images/brands.svg' alt="brand logo" className=" w-full lg:w-[900px]" width={900} height={100}></Image>
        </div>
      </div>
    </>
  );
};

export default Banner2;
