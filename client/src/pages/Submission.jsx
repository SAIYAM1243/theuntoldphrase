import { useState } from "react";
import { Card, Pagination, PopularPosts, PopularWriters } from "../components";
import { popular, posts } from "../utils/dummyData";
import { usePopularPosts, usePosts } from "../hooks/post-hook";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { SiGoogleforms } from "react-icons/si";


const Submission = () => {
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
        <div className='px-0 2xl:px-20'>
            <div className='py-5'>
                <h2 className='text-4xl 2xl:text-5xl font-semibold text-slate-800 dark:text-white'>
                    {/* {query} */}
                </h2>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
                {/* LEFT */}
                <div className='w-full flex md:w-2/3 flex-col'>
                    <div className='py-8 flex justify-center'>
                        <span className="lg:text-[40px] underline items-center text-[30px] font-bold text-black dark:text-white">
                            SUBMIT YOUR WRITING
                        </span>
                    </div>
                    {/* <div className="py-8 flex justify-center">
                        <span className="text-[56px] font-medium font-serif text-[#F43F5E]">
                            THE UNTOLD PHRASE
                        </span>
                    </div> */}
                    <div className="flex justify-center">
                        <p className="text-[18px] font-semibold text-justify items-center justify-center dark:text-white">
                            You can submit your writings below
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-cemter justify-center mb-5'>
                        <button className="btn third mt-10 hover:text-black text-sm">
                            <Link className="flex flex-row" target="_blank" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWPGcXtHNrqPmdRvrChdRsNJgTjWwzSzzzwksplWBPqXbJkbCfTcLnCLWgGcKLJvNhJvg"><HiOutlineMail />&nbsp; Email</Link>
                        </button>
                        <button className="btn third mt-10 hover:text-black text-sm">
                            <Link className="flex flex-row"><SiGoogleforms />&nbsp;Google Forms</Link>
                        </button>
                    </div>
                </div>
                <br />

                {/* RIGHT */}
                <div className='w-full md:w-1/4 mb-10 flex flex-col gap-y-12'>
                    <PopularPosts posts={popular?.posts} />

                    <PopularWriters data={popular?.writers} />
                </div>
            </div>
        </div >
    );
};

export default Submission;


