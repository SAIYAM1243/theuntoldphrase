import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useStore from "../store";
import Button from "./Button";
import { CATEGORIES } from "../utils/dummyData";
import Logo from "./Logo";
import ThemeSwitch from "./Switch";
import logoLight from "./lightLogo.png";
import darkLogo from "./darkLogo.png";
import { Dropdown } from "flowbite-react";

function getInitials(fullName) {
  const names = fullName.split(" ");

  const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());

  const initialsStr = initials.join("");

  return initialsStr;
}

const MobileMenu = ({ user, signOut, type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex '>
      <button
        onClick={toggleMenu}
        className='lg:hidden p-2 text-gray-600 hover:text-gray-800'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-fit bg-white dark:bg-[#020b19] z-50 flex flex-col py-10 items-center justify-center shadow-xl gap-8'>
          <Link
            to='/'
            className={`text-2xl font-medium dark:text-white ${type && "text-white  text-4xl"
              }`}
          >
            <span
              className={` lg:text-4xl text-3xl font-bebas-neue flex flex-col w-full justify-between items-center ${type && " text-5xl font-bold"}`}
            >
              <img src={logoLight} className="dark:hidden" alt="logo" />
              <img src={darkLogo} className="hidden dark:block" alt="logo" />

              <p className="text-black dark:text-white ">The&nbsp;
                <span
                  className={`lg:text-4xl text-rose-500 ${type && " text-5xl font-bold"}`}
                >
                  Untold Phrase
                </span>
              </p>
            </span>
          </Link>
          <ul className='flex gap-3 text-base text-black dark:text-white'>
            <Link to='/'>Home</Link>
            <Link to='/submission'>Submission</Link>
            <Dropdown label="Categories" className="z-10" inline>
              <Dropdown.Item>
                <div className='flex flex-col gap-6'>
                  {CATEGORIES.map((cat) => (
                    <Link
                      to={`/category?cat=${cat?.label}`}
                      key={cat.label}
                      className="flex flex-row gap-2"
                    >
                      {cat?.icon}
                      <span>{cat.label}</span>
                    </Link>
                  ))}
                </div>
              </Dropdown.Item>
            </Dropdown>
            <Dropdown label="About" className="z-10" inline>
              <Dropdown.Item>
                <Link to="/about">
                  About us
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/team">
                  Meet our Team
                </Link>
              </Dropdown.Item>
            </Dropdown>
            {/* <Link to='/writer'>About</Link> */}
          </ul>
          <div className="flex justify-between flex-row">
            <ThemeSwitch />
            <div className='flex gap-2 items-center mt-0 justify-center mb-0 ml-20'>
              {user?.token ? (
                <div className='w-full flex  flex-col items-center justify-center '>
                  <div className='flex gap-1 items-center mb-5'>
                    {user?.user.image ? (
                      <img
                        src={user?.user.image}
                        alt='Profile'
                        className='w-8 h-8 rounded-full'
                      />
                    ) : (
                      <span className='text-white w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center'>
                        {getInitials(user?.user.name)}
                      </span>
                    )}
                    <span className='font-medium text-black dark:text-gray-500'>
                      {user?.user.name}
                    </span>
                  </div>

                  <button
                    className='bg-black dark:bg-rose-600 text-white justify-center dark:text-white px-8 py-1.5 rounded-full text-center outline-none'
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to='/signin'>
                  <Button
                    label='Sign in'
                    styles='flex items-center justify-center bg-black dark:bg-rose-600 text-white dark:text-white text-white px-4 py-1.5 rounded-full'
                  />
                </Link>
              )}
            </div>
          </div>
          <span
            className='cursor-pointer text-xl font-semibold dark:text-white'
            onClick={toggleMenu}
          >
            <AiOutlineClose />
          </span>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ type }) => {
  const { user, signOut } = useStore();
  const [showProfile, setShowProfile] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("userInfo");
    signOut();
  };
  return (
    <nav className='flex flex-col md:flex-row w-full py-5  items-center justify-between gap-4 md:gap-0'>

      {/* <div className='flex gap-2 text-[20px] md:hidden lg:flex'>
        <Link to='https://www.youtube.com/@theuntoldphrase8660' target="_blank" className='text-red-600' rel="noopener noreferrer">
          <FaYoutube />
        </Link>
        <Link to='/' className='text-blue-600'>
          <FaFacebook />
        </Link>
        <Link to='/' className='text-rose-600'>
          <FaInstagram />
        </Link>
      </div> */}

      <div className="flex justify-between">
        <Link
          to='/'
          className={`text-2xl font-medium mr-8 dark:text-white ${type && "text-white  text-4xl"
            }`}
        >
          <span
            className={` lg:text-4xl text-3xl font-bebas-neue lg:ml-4 flex flex-row w-full justify-between items-center ${type && " text-5xl font-bold"}`}
          >
            <img src={logoLight} className="dark:hidden" alt="logo" />
            <img src={darkLogo} className="hidden dark:block" alt="logo" />

            <p className="text-black dark:text-white ">The&nbsp;
              <span
                className={`lg:text-4xl text-rose-500 ${type && " text-5xl font-bold"}`}
              >
                Untold Phrase
              </span>
            </p>
          </span>
        </Link>
        <div className='block md:hidden ml-8'>
          <MobileMenu user={user} signOut={handleSignOut} />
        </div>
      </div>

      <div className='hidden md:flex gap-6 items-center'>
        <ul className='flex gap-6 text-base text-black dark:text-white'>
          <Link to='/'>Home</Link>
          <Link to='/submission'>Submission</Link>
          <Dropdown label="Categories" className="z-10" inline>
            <Dropdown.Item>
              <div className='flex flex-col gap-6'>
                {CATEGORIES.map((cat) => (
                  <Link
                    to={`/category?cat=${cat?.label}`}
                    key={cat.label}
                    className="flex flex-row gap-2"
                  >
                    {cat?.icon}
                    <span>{cat.label}</span>
                  </Link>
                ))}
              </div>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label="About" className="z-10" inline>
            <Dropdown.Item>
              <Link to="/about">
                About us
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/team">
                Meet our Team
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {/* <Link to='/writer'>About</Link> */}
        </ul>

        {/* theme switch */}

        <ThemeSwitch />

        <div className='flex gap-2 items-center cursor-pointer'>
          {user?.token ? (
            <div
              className='relative'
              onClick={() => setShowProfile((prev) => !prev)}
            >
              <div className='flex gap-1 items-center cursor-pointer'>
                {user?.user.image ? (
                  <img
                    src={user?.user.image}
                    alt='Profile'
                    className='w-8 h-8 rounded-full'
                  />
                ) : (
                  <span className='text-white w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center'>
                    {getInitials(user?.user.name)}
                  </span>
                )}
                <span className='font-medium text-black dark:text-gray-500'>
                  {user?.user?.name?.split(" ")[0]}
                </span>
              </div>

              {showProfile && (
                <div className='absolute bg-white dark:bg-[#2f2d30] py-6 px-6 flex flex-col shadow-2xl z-50 right-0 gap-3 rounded'>
                  <span className='dark:text-white'>Profile</span>
                  <span
                    className='border-t border-slate-300 text-rose-700'
                    onClick={handleSignOut}
                  >
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <Link to='/signin'>
              <Button
                label='Sign in'
                styles='flex items-center justify-center bg-black dark:bg-rose-600 text-white dark:text-white px-4 py-1.5 rounded-full'
              />
            </Link>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;