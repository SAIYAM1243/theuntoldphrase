import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Divider from "./Divider";

const Footer = ({ type }) => {
  return (
    <>
      {/* <div className="flex flex-col w-full py-8 items-center justify-between text-[14px] text-gray-700 dark:text-gray-500 dark:bg-transparent bg-black px-4 md:px-10 2xl:px-28">

        <p className="text-white  dark:text-gray-500 items-center justify-center">
                Copyright © 2024 <b>The Untold Phrase</b>.  <br />
            </p>

        <p className="flex flex-col text-white dark:text-gray-500 ">
          <div className='flex gap-2 text-[20px] items-center flex-row md:hidden lg:flex'>
            <Link to='https://www.instagram.com/mr.__.arora/' className='text-rose-600'>
              <FaInstagram />
            </Link>
            <Link to='https://www.linkedin.com/in/saiyamkumararora' className='text-blue-500'>
              <FaLinkedin />
            </Link>
          </div> <br />
        </p>
      </div> */}

      <div className='flex md:flex-row flex-col w-full pt-6 md:pt-4 pb-5 md:pb-2 items-center justify-between text-[14px] text-gray-700 dark:white dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] bg-black px-4 md:px-10 2xl:px-28'>
        <div>
          <Link
            to='/'
            className={`text-2xl font-semibold dark:text-white ${type && "text-white  text-4xl"
              }`}
          >


            <span
              className={` text-3xl ml-4 flex flex-col md:flex-row w-full justify-between items-center ${type && " text-5xl font-bold"}`}
            >
              <img src={logo} alt="logo" />
              <p className="text-white invisible md:visible ">The
                <span
                  className={`text-3xl text-rose-500 ${type && " text-5xl font-bold"}`}
                >
                  Untold Phrase
                </span>
              </p>
            </span>


          </Link>
        </div>
        <p className="text-slate-300 flex  ">

          Copyright © 2024 &nbsp;<Link to="/" className="text-[#f43f5e]">The Untold Phrase</Link> &nbsp;  <br />

        </p>
        {/* <ul className='flex flex-row gap-5 text-base items-center text-white dark:text-white'>
          <Link to='/'>Home</Link>
          <Link to='/category'>Categories</Link>
          <Link to='/writer'>About</Link>
        </ul> */}
      </div>
      <div className='flex items-center bg-black dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]'>
        <div className='flex-1 border-t ml-5 md:ml-40 border-gray-300 dark:border-gray-500'></div>
        <div className='mx-4 text-gray-400 text-sm'>DEVELOPER DETAILS</div>
        <div className='flex-1 border-t mr-5 md:mr-40 border-gray-300 dark:border-gray-500'></div>
      </div>
      <div className="flex flex-col w-full items-center pt-4 mb-0 justify-between text-[12px] md:text-[14px] text-white dark:text-gray-100 dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] bg-black px-4 md:px-10 2xl:px-28">
        <p className="flex items-center mb-4">
          Made with 🤍 by &nbsp;<b><p className="bold text-[#f43f5e]">Saiyam Kumar</p></b> &nbsp; | &nbsp; <Link to="https://www.instagram.com/mr.__.arora/" target="_blank">Instagram</Link> &nbsp; | &nbsp; <Link to='https://www.linkedin.com/in/saiyamkumararora' target="_blank">Linkedin</Link>
        </p>
      </div>

      {/* <Segment basic textAlign='center'>
        <Divider horizontal>OR</Divider>
      </Segment> */}



    </>
  );
};

export default Footer;



