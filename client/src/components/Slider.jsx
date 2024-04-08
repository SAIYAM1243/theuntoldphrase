import React, { useState, useRef, useEffect } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import '../pages/style.css';
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import books from "../assets/books_quote.jpg"
import { FaQuoteLeft } from "react-icons/fa";


function Slider() {
  const slideRef = useRef(null);
  // const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide index

  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const handleNextClick = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0].cloneNode(true));
    slideRef.current.removeChild(items[0]);
  };

  const handlePrevClick = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.insertBefore(items[items.length - 1].cloneNode(true), items[0]);
    slideRef.current.removeChild(items[items.length - 1]);
  };

  // const slides = [
  //   'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // ];

  // const numSlides = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 15000);

    setAutoSlideInterval(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="m-0 p-0 box-border">
      <div className="container">
        <div className="slide" ref={slideRef}>
          <div className="item bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="content ">
              <div className="name">
                <FaQuoteLeft />
              </div>
              <div className="desc text-3xl font-bold">
                "THE CONTENT OF A BOOK HOLDS THE POWER OF EDUCATION AND IT IS WITH THIS POWER THAT WE CAN SHAPE OUR FUTURE AND CHANGE LIVES."
              </div>
            </div>
          </div>
          <div className="item bg-[url('https://images.unsplash.com/photo-1678985690850-8144811055ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="content ">
              <div className="name text-black">
                <FaQuoteLeft />
              </div>
              <div className="desc text-3xl font-bold text-black ">
                "A LIFE WITHOUT LOVE, NO MATTER HOW MANY OTHER THINGS WE HAVE, IS AN EMPTY, MEANINGLESS ONE."
              </div>
            </div>
          </div>
          <div className="item bg-[url('https://images.unsplash.com/photo-1478641300939-0ec5188d3802?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="content ">
              <div className="name text-white">
                <FaQuoteLeft />
              </div>
              <div className="desc text-3xl font-bold text-white ">
                "POETRY IS ONE OF THE ANCIENT ARTS, AND IT BEGINS AS DID ALL THE FINE ARTS, WITHIN THE ORIGINAL WILDERNESS OF THE EARTH."
              </div>
            </div>
          </div>
          <div className="item bg-[url('https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="content ">
              <div className="name text-white">
                <FaQuoteLeft />
              </div>
              <div className="desc text-3xl font-bold text-white ">
                "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed."
              </div>
            </div>
          </div>
          <div className="item bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="content ">
              <div className="name text-black">
                <FaQuoteLeft />
              </div>
              <div className="desc text-3xl font-bold text-black ">
                "If people aren't taught the language of sound and images, shouldn't they be considered as illiterate as if they left college with out being able to read or write?"
              </div>
            </div>
          </div>
          <div className="item bg-[url('https://images.unsplash.com/photo-1694285453486-ead6e637e524?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="content ">
              <div className="name text-white">
                <FaQuoteLeft />
              </div>
              <div className="desc text-3xl font-bold text-white ">
                "I'm like an open letter. You don't need to turn any pages to know me. You just have to read me right and hold me tight."
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev " onClick={handlePrevClick}><p className='font-black'>←</p></button>
          <button className="next" onClick={handleNextClick}><p className='font-black'>→</p></button>
        </div>
      </div >
    </div >
  );
}

export default Slider;
