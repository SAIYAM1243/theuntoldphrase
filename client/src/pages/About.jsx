import { useState } from "react";
import { Card, Pagination, PopularPosts, PopularWriters } from "../components";
import { popular, posts } from "../utils/dummyData";
import { usePopularPosts, usePosts } from "../hooks/post-hook";
import { Link } from "react-router-dom";

const About = () => {
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
                <div className='w-full md:w-2/3 flex flex-col'>
                    <div className='py-8 flex  justify-center'>
                        <span className="text-[40px] underline items-center font-bold text-black dark:text-white">
                            WHO WE ARE?
                        </span>
                    </div>
                    {/* <div className="py-8 flex justify-center">
                        <span className="text-[56px] font-medium font-serif text-[#F43F5E]">
                            THE UNTOLD PHRASE
                        </span>
                    </div> */}
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[600px] text-justify items-center dark:text-white">
                            “The Untold Phrase” is a platform for budding writers to showcase their original work and get exposure.
                            We appreciate real talents in every possible way.<br /><br />

                            Here people can find wonderful writings be it micro tales, poetries or stories.<br /><br />

                            We are a family of more than 149K followers on Instagram and constantly building up a platform to reach
                            more people out there. The Untold Phrase is an idea to appreciate all the writers around the world.<br /><br />
                        </p>
                    </div>
                    <div className='w-full flex items-cemter justify-center mb-5'>

                    </div>
                    <div className="p-5 text-[25px] border-t-4 mb-10 border-b-4 border-double dark:text-white border-[#F43F5E] w-fit font-mono font-medium">
                        Meet our team <Link to="/team" className="text-[#F43F5E] font-bold font-serif">here.</Link>

                    </div>
                    {/* <Link to="" className="text-[18px]">
                        Meet THE UNTOLD PHRASE experts.
                    </Link> */}
                </div>
                <br />

                {/* RIGHT */}
                <div className='w-full md:w-1/4 mb-10 flex flex-col gap-y-12'>
                    {/* POPULAR POSTS */}
                    <PopularPosts posts={popular?.posts} />

                    {/* POPULAR WRITERS */}
                    <PopularWriters data={popular?.writers} />
                </div>
            </div>
        </div >
    );
};

export default About;


