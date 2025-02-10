"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiUser } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { VscTwitter } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="  font-Montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-white ">
      <div className=" hidden lg:flex flex-row items-center w-full bg-[#23856D]  px-10  h-[58px]">
        <div className="w-1/3 flex flex-row items-center gap-[10px]">
          <div className=" flex flex-row items-center gap-[5px]">
            <BsTelephone color="#ffffff" size={16} />
            <h6 className="font">(225) 555-0118</h6>
          </div>
          <div className=" flex flex-row items-center gap-[5px]">
            <CiMail color="#ffffff" size={16} />
            <h6>michelle.rivera@example.com</h6>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="w-1/3 flex flex-row items-center gap-[10px] justify-end">
          <h6>Follow Us :</h6>
          <FaInstagram color="#ffffff" size={16} />
          <RiYoutubeFill color="#ffffff" size={16} />
          <SiFacebook color="#ffffff" size={16} />
          <VscTwitter color="#ffffff" size={16} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col bg-white pt-[36px] items-center md:px-10 px-4">
        <div className="md:w-[15%] w-full">
          <h3 className="text-[24px] hidden lg:block leading-[32px] tracking-[0.1px] text-[#252B42]">
            Bandage
          </h3>
          <div className="flex flex-row justify-between pb-8 md:pb-0">
            <h3 className="text-[24px] flex lg:hidden leading-[32px] tracking-[0.1px] text-[#252B42]">
              Bandage
            </h3>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl  absolute right-8  cursor-pointer lg:hidden text-black items-center justify-center flex"
            >
              {open ? (
                <AiOutlineClose className="text-black" />
              ) : (
                <AiOutlineMenu className="text-black" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`lg:w-[85%] w-full flex lg:flex-row flex-col justify-between lg:opacity-100 bg-white absolute lg:static lg:z-auto z-[100] transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-900px]"
          }`}
        >
          <div className="text-[#737373] flex lg:flex-row flex-col items-center lg:gap-[15px] gap-[30px] lg:text-[14px] text-[30px] lg:leading-[24px] leading-[45px] tracking-[0.2px]">
            {" "}
            <p onClick={() => setOpen(false)}>Home</p>
            <p
              className="flex flex-row items-center gap-[10px]"
              onClick={() => setOpen(false)}
            >
              Shop <FaAngleDown color="#000000" size={10} />
            </p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Pages</p>
          </div>
          <div>
            <div className="flex lg:flex-row flex-col items-center gap-[5px]">
              <div className="flex mt-4 md:mt-0 flex-row gap-[5px] items-center lg:text-[14px] text-[30px] lg:leading-[24px] leading-[45px] tracking-[0.2px]">
                <CiUser className="h-[12px] w-[12px] lg:w-[27px] lg:h-[28px] text-[#23A6F0]" />
                <p className="text-[#23A6F0] ">Login / Register</p>
              </div>
              <span className=" p-[15px]">
                <IoIosSearch className="h-[12px] w-[12px] lg:w-[27px] lg:h-[28px] text-[#23A6F0]" />
              </span>
              <span className=" p-[15px] flex flex-row items-center gap-[5px] cursor-pointer">
                <HiOutlineShoppingCart className="h-[12px] w-[12px] md:w-[27px] md:h-[28px] text-[#23A6F0]" />

                <small className="font-[400] text-[12px] leading-[16px] text-[#23A6F0]">
                  1
                </small>
              </span>
              <span className=" p-[15px] flex flex-row items-center gap-[5px] cursor-pointer">
                <FaRegHeart className="h-[12px] w-[12px] md:w-[27px] md:h-[28px] text-[#23A6F0]" />

                <small className="font-[400]  text-[#23A6F0]">1</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
