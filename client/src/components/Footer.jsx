import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import Divider from "./Divider";
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import Inputbox from "./Inputbox";
import Button from "./Button";
import useStore from "../store";
import { emailSignUp } from '../utils/apiCalls'
import { saveUserInfo } from "../utils";
import { Toaster, toast } from "sonner";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import "../pages/style.css";


const Footer = ({ type }) => {


  const { user, signIn, setIsLoading } = useStore();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setIsLoading(true);
    const result = await emailSignUp({ ...data });
    setIsLoading(false);

    if (result.success === true) {
      saveUserInfo(result);
    } else {
      toast.error(result?.message);
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] bg-[#000000] py-7">
        <h1
          className="lg:text-4xl text-2xl md:mb-0 mb-6 lg:leading-normal ml-6 lg:ml-0 text-white font-semibold md:w-2/5"
        >
          <span className="text-[#F43F5E]">Feel Free</span> to contact us!
        </h1>
        <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 text-white justify-center items-center text-[16px]">
          <h1 className="flex flex-row">
            <button className="btn third text-sm">
              <Link className="flex flex-row" target="_blank" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWPGcXtHNrqPmdRvrChdRsNJgTjWwzSzzzwksplWBPqXbJkbCfTcLnCLWgGcKLJvNhJvg"><HiOutlineMail />&nbsp; theuntoldphrase@gmail.com</Link>
            </button>
          </h1><br />
          {/* <h1 className="flex flex-row">
            <button className="btn third">
              <FiPhone /> &nbsp;&nbsp;+91 XXXXXXXXXX
            </button>
          </h1> */}
        </div>
      </div>

      <div className='dark:flex items-center hidden  bg-gray-950 dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]'>
        <div className='flex-1 border-t ml-5 border-gray-300 dark:border-gray-500'></div>
        <div className='mx-1 text-gray-400 text-sm'></div>
        <div className='flex-1 border-t mr-5 border-gray-300 dark:border-gray-500'></div>
      </div>

      <div className='flex md:flex-col flex-col w-full pt-6 md:pt-4 pb-5 md:pb-2 items-center justify-center text-[14px] text-gray-700 dark:white dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] bg-[#000000] px-4 md:px-10 2xl:px-28'>
        <div className="lg:py-4">
          <Link
            to='/'
            className={`text-2xl font-medium dark:text-white ${type && "text-white  text-4xl"
              }`}
            onClick={goToTop}
          >
            <span
              className={` text-4xl font-bebas-neue flex flex-col md:flex-row w-full justify-between items-center ${type && " text-5xl font-bold"}`}
            >
              <img src={logo} />

              {/* <p className="text-white invisible dark:text-white md:visible ">The&nbsp;
                <span
                  className={`text-4xl text-rose-500 ${type && " text-5xl font-bold"}`}
                >
                  Untold Phrase
                </span>
              </p> */}
            </span>
          </Link>
        </div>

        <div className='flex gap-4 lg:text-[38px] text-[28px] items-center justify-center'>
          <Link to='https://www.youtube.com/@theuntoldphrase8660' target="_blank" className='text-red-600' rel="noopener noreferrer">
            <FaYoutube />
          </Link>
          <Link to='/' className='text-blue-600'>
            <FaFacebook />
          </Link>
          <Link to='/' className='text-rose-600'>
            <FaInstagram />
          </Link>
        </div>

        <ul className='flex lg:flex-row flex-col text-[20px] gap-5 py-6 text-base items-center text-white dark:text-white'>
          <Link to='/'>Home</Link>
          <Link to='/category'>Categories</Link>
          <Link to='/about'>About us</Link>
          {/* <Link to='/'>Policy</Link> */}
          <Link to='/team'>Meet our Team</Link>
        </ul>

      </div>

      <div className='dark:flex items-center hidden  bg-gray-950 dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]'>
        <div className='flex-1 border-t ml-5 border-gray-300 dark:border-gray-500'></div>
        <div className='mx-1 text-gray-400 text-sm'></div>
        <div className='flex-1 border-t mr-5 border-gray-300 dark:border-gray-500'></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center pt-4 mb-0 justify-between text-[9px] md:text-[14px] text-white bg-black dark:text-gray-100 dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] px-4 md:px-10 2xl:px-28">
        <p className="flex items-center mb-4">
          Made with 🤍 by &nbsp;<b><p className="bold text-[#f43f5e]">Saiyam Kumar</p></b>&nbsp; & &nbsp;<b><p className="bold text-[#f43f5e]">Shadwal Sinha</p></b> &nbsp; | &nbsp; <Link to="https://www.instagram.com/mr.__.arora/" target="_blank">Instagram</Link> &nbsp; | &nbsp; <Link to='https://www.linkedin.com/in/saiyamkumararora' target="_blank">Linkedin</Link>
        </p>
        <p className="text-slate-300 mb-4">
          Copyright © 2024 &nbsp;<Link to="/" className="text-[#f43f5e]">The Untold Phrase</Link> &nbsp;  <br />
        </p>

      </div>

      {/* <Segment basic textAlign='center'>
        <Divider horizontal>OR</Divider>
      </Segment> */}

      <Toaster richColors />

    </>
  );
};

export default Footer;



