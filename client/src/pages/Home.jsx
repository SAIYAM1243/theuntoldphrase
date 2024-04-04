import { Link } from "react-router-dom";
import {
  Card,
  Pagination,
  PopularPosts,
  PopularWriters
} from "../components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { CATEGORIES } from "../utils/dummyData";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';

import './style.css';

import books from '../assets/books.jpg';
import library from '../assets/library.jpg';
import { Banner } from "../components";
import work from '../assets/work.jpg';
import { usePopularPosts, usePosts } from "../hooks/post-hook";
import {CCarousel ,CCarouselItem, CImage} from '@coreui/react'

const Home = () => {
  const { posts, numOfPages, setPage } = usePosts({ writerId: "" });
  const popular = usePopularPosts()
  const randomIndex = Math.floor(Math.random() * posts.length);

  const handlePageChange = (val) => {
    setPage(val);
  };

  if (posts?.length < 1)
    return (
      <div className='w-full h-full py-8 flex items-center justify-center'>
        <span className='text-lg text-slate-500'>No Post Available</span>
      </div>
    );

  return (
    <div className='py-10 2xl:py-5'>

      <Banner post={posts[randomIndex]} />

      {/* <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage className="d-block w-100" src={books} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={books} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={books} alt="slide 3" />
        </CCarouselItem>
      </CCarousel> */}

      {/* <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper w-11/12"
      >
        <SwiperSlide style={{ backgroundImage: `url(${books})` }}>
          <p className="flex justify-center bg-white w-full backdrop-blur-sm ">THE UNTOLD PHRASE</p>
        </SwiperSlide >
        <SwiperSlide style={{ backgroundImage: `url(${library})` }}>
          <p className="flex mt-[480px] justify-center w-full backdrop-blur-sm  ">THE UNTOLD PHRASE</p>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${work})` }}>
          <p className="flex mt-[480px] justify-center w-full backdrop-blur-sm ">THE UNTOLD PHRASE</p>
        </SwiperSlide>

      </Swiper > */}

      <br /><br /><br /><br /><br /><br />

      <div className='px-0 lg:pl-20 2xl:px-20 '>
        {/* Categories */}
        <div className='mt-6 md:mt-0'>
          <p className='text-2xl font-semibold text-gray-600 dark:text-white'>
            Popular Categories
          </p>
          <div className='w-full flex flex-wrap py-10 gap-8'>
            {CATEGORIES.map((cat) => (
              <Link
                to={`/category?cat=${cat?.label}`}
                className={`flex items-center justify-center gap-3 ${cat.color} text-white font-semibold text-base px-4 py-2 rounded cursor-pointer`}
                key={cat.label}
              >
                {cat?.icon}
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Post */}
        <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
          {/* LEFT */}
          <div className='w-full md:w-2/3 flex flex-col gap-y-28 md:gap-y-14'>
            {posts?.map((post, index) => (
              <Card key={post?._id} post={post} index={index} />
            ))}

            <div className='w-full flex items-cemter justify-center'>
              <Pagination
                totalPages={numOfPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
            {/* POPULAR POSTS */}
            <PopularPosts posts={popular?.posts} />

            {/* POPULAR WRITERS */}
            <PopularWriters data={popular?.writers} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;