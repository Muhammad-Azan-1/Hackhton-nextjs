"use client";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronDown , faUser ,faHeart , faSearch , faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [Menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((menu: boolean) => !menu);
  }

  return (
    <>
    <div className="w-full h-[44px] font-josefin text-[#F1F1F1] font-[600] bg-[#7E33E0] flex justify-between px-2 md:px-6 lg:px-0 lg:justify-around items-center">
        <div className="flex justify-start min-w:justify-between  sm:w-[280px] md:w-[320px] lg:w-[350px]">
            <div className="hidden min-w:flex items-center">
            <Image
            src="/images/mailboxicon.svg"
            alt="mail box"
            width={15}
            height={44}
            className="w-[13px] md:w-[15px]"
            ></Image>
            <p className="ml-1 lg:ml-2 text-[14px] md:text-[16px]">mhhasanul@gmail.com</p>
            </div>

            <div className="hidden sm:flex items-center">
            <Image
            src="/images/phonesicon.svg"
            alt="phone icon"
            width={17}
            height={44}
             className="w-[15px] md:w-[17px]"
            ></Image>
            <p className="ml-1 lg:ml-2 text-[14px] md:text-[16px] ">(12345)67890</p>
            </div>
        </div>

        <div className=" flex justify-end lg:justify-center items-center max-w:w-full w-[290px] sm:w-[320px]  md:w-[350px] lg:w-[410px]">
            <ul className="  flex items-center w-[100%] justify-between  lg:justify-evenly">
                <li><span className="text-[14px]  md:text-[15px]">English</span><FontAwesomeIcon className="ml-1 text-[12px] md:text-[14px]" icon={faChevronDown}/></li>
                <li><span className="text-[14px] md:text-[15px]">USD</span><FontAwesomeIcon className=" ml-1  text-[12px] md:text-[14px]" icon={faChevronDown}/></li>
                <li><span className="text-[14px] md:text-[15px]">Login</span><FontAwesomeIcon className=" ml-1  text-[12px] md:text-[14px]" icon={faUser}/> </li>
                <li><span className="text-[14px] md:text-[15px]">Wishlist</span><FontAwesomeIcon className="ml-1  text-[12px] md:text-[14px]" icon={faHeart}/></li>
                <li><Image src='/images/carticon.svg' alt="user icon" className= "w-[25px] md:w-[27px]" width={27} height={13}/></li>
            </ul>
        </div>
    </div>

    {/* header main */}

    <div className=" w-full  h-[80px] flex justify-between md:justify-center items-center  px-3">
     <div className="w-[100px] md:w-[150px] lg:w-[130px] pt-1 md:pt-0 flex justify-start sm:justify-center md:justify-start">
      <Image src='/images/logo.svg' alt="logo.svg" className="w-[70px] min-w:w-[80px] sm:w-[90px] lg:w-[100px]" width={100} height={34}></Image>
     </div>

    
     <div className={`pt-20 md:pt-0 flex z-[10000] md:flex-row flex-col items-center md:justify-around lg:justify-evenly 
     bg-[#F2F0FF] md:bg-transparent h-[100vh] inset-0 md:h-auto mx-0  w-full md:w-[800px] lg:w-[700px] 
     px-0 md:px-2 lg:px-0 absolute top-[0px] md:static transform transition-transform duration-1000 ease-in-out
    ${Menu ? "top-[0px] translate-y-0 " : "translate-y-[-100%] md:translate-y-[0px] "} `}>

      <div className="inline-block mb-12 md:mb-0  md:hidden">
      <Image src='/images/logo.svg' alt="logo.svg" className="w-[100px]" width={100} height={34}></Image>

      </div>

      
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400] text-[18px] md:text-[16px] mb-10 md:mb-0 font-lato" href=''>Home  <span className="hidden md:inline-block"><FontAwesomeIcon className=" ml-1 text-[12px] transition-all duration-500 hover:text-[#FB2E86]" icon={faChevronDown}/></span> </Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href=''>Pages</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href=''>Product</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href=''>Blog</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href=''>Shop</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px]  mb-10 md:mb-0 font-lato" href=''>Contact</Link>

      <div className="inline-block absolute top-8 right-10 md:hidden">
      <FontAwesomeIcon className="text-[24px]"  onClick={toggleMenu}  icon={faTimes}/>
      </div>
     </div>

     <div className="flex justify-center md:justify-end w-[75%] md:w-[360px] lg:w-[500px]  h-[40px]">
      <input type="text"  className="border-[2px] border-r-0 border-[#E7E6EF] w-full md:w-[220px] lg:w-[320px]"  />
      <div className="flex w-[40px] lg:w-[50px] border-l-[1px] border-l-[#FB2E86] bg-[#FB2E86] justify-center items-center">
      <FontAwesomeIcon className="text-[#f3f9ff]" icon={faSearch}/>
      </div>
     </div>

     <div className="flex  justify-end sm:justify-center md:hidden w-[50px]">
     <FontAwesomeIcon className="text-[24px]" onClick={toggleMenu} icon={faBars}/>
     </div>


    </div>
    </>
  );
}

export default Header