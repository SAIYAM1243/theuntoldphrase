import { useState } from "react";
import { Card, Pagination, PopularPosts, PopularWriters } from "../components";
import { popular, posts } from "../utils/dummyData";
import { usePopularPosts, usePosts } from "../hooks/post-hook";
import { Link } from "react-router-dom";
import Logo from "./lightLogo.png";
import Swastika from "../assets/swastika.jpg";
import sk from "../assets/sk.png";
import DIVYESH from "../assets/DIVYESH.jpg"
import ADITY from "../assets/ADITY.jpg"
import SAKSHI from "../assets/SAKSHI.jpg"
import PALAK from "../assets/PALAK.jpeg"
import HARSHITA from "../assets/HARSHITA.jpeg"
import SRILEKHA from "../assets/SRILEKHA.jpg"
import NEHA from "../assets/NEHA.jpg"
import TANYA from "../assets/TANYA.jpg"
import DIVYA from "../assets/DIVYA.jpg"
import SUHANA from "../assets/SUHANA.jpg"
import VATSAL from "../assets/VATSAL.jpg"
import MEENAL from "../assets/MEENAL.jpg"
import NAVJOT from "../assets/NAVJOT.jpg"
import JAHNAVI from "../assets/JAHNAVI.jpg"
import skDark from "../assets/skDark.png"

const Team = () => {
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
                <div className='w-full md:w-3/4  flex flex-col'>
                    <div className='py-8 flex  justify-center'>
                        <span className="text-[40px] underline items-center font-bold text-black dark:text-white">
                            MEET OUR TEAM!
                        </span>
                    </div>
                    {/* <div className="py-8 flex justify-center">
                        <span className="text-[56px] font-medium font-serif text-[#F43F5E]">
                            TUP FAM
                        </span>
                    </div> */}

                    {/* THE UNTOLD PHRASE */}
                    {/* <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={Logo}
                            alt='Writer'
                            className='w-32 h-32 rounded-full border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='text-black text-4xl 2xl:text-6xl font-bold'>
                                THE UNTOLD PHRASE
                            </h2>
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] dark:text-white py-3 mb-5">
                            “The Untold Phrase” is a platform for budding writers to showcase their original work and get exposure. We appreciate real talents in every possible way.

                            Here people can find wonderful writings be it micro tales, poetries or stories.

                            We are a family of more than 149K followers on Instagram and constantly building up a platform to reach more people out there. The Untold Phrase is an idea to appreciate all the writers around the world.<br />
                            You can follow us here&nbsp;<Link to="https://wwww.instagram.com/theuntoldphrase/" target="_blank" className="text-[#F43F5E]">@theuntoldphrase</Link>.
                        </p>
                    </div>
                    <div className="lg:ml-8 mt-6 flex lg:justify-start justify-center">
                        <span className="text-[40px] border-b-2 border-dashed border-black dark:border-white dark:text-white font-medium ">
                            DEVELOPER
                        </span>
                    </div>
                    {/* DEVELOPER :- SAIYAM KUMAR */}
                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={sk}
                            alt='Writer'
                            className='w-32 h-32 dark:hidden rounded-full border-3 border-slate-400 object-cover'
                        />
                        <img
                            src={skDark}
                            alt='Writer'
                            className='w-32 h-32 hidden dark:block rounded-full border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='text-black dark:text-white text-3xl lg:text-4xl 2xl:text-6xl lg:ml-4 font-bold'>
                                SAIYAM KUMAR
                            </h2>
                            <h3 className="text-black justify-center flex  dark:text-white lg:ml-5 lg:text-2xl  2xl:text-4xl font-medium font-mono">
                                | DEVELOPER | &nbsp; <Link to="https://www.instagram.com/mr.__.arora/" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@mr.__.arora</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] dark:text-white py-3 mb-10 ">
                            This is Saiyam Kumar from Haryana, a dynamic coding enthusiast, recently graduated from Class 12 with a passion for web development. As a freelancer, he channels his creativity into crafting bespoke websites tailored for influencers, showcasing their unique brands and personalities. With a keen eye for detail and a knack for problem-solving, Saiyam brings innovation and flair to every project he undertakes. His dedication to his craft and commitment to excellence set him apart in the competitive world of web design. With a bright future ahead, Saiyam is poised to make significant waves in the ever-evolving realm of digital technology.<br />
                            You can contact him for personalised websites at&nbsp;<Link to="https://wwww.instagram.com/mr.__.arora/" target="_blank" className="text-[#F43F5E]">@mr.__.arora</Link>.
                        </p>
                    </div>


                    <div className="text-black py-8 lg:ml-8 border-t-4 border-double border-[#F43F5E] dark:text-white text-[18px] font-bold">
                        <div className=" mt-6 flex lg:justify-start justify-center">
                            <span className="text-[40px] dark:border-white  border-b-2 border-dashed border-black font-medium">
                                Select Writer
                            </span>
                        </div> <br />
                        The Untold Phrase appreciates every writer and selects some of them to be their select writer.
                        16 select writers are currently penning their beautiful words for TUP.<br /><br />
                    </div>
                    <div className="text-black lg:ml-8 dark:text-white italic font-medium text-[18px]">
                        Have a look at them below:
                    </div>

                    {/* WRITERS */}
                    <div className='w-full text-black md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={Swastika}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                SWASTIKA JHA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/thatintrovertwriter/" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@thatintrovertwriter</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Swastika Jha from Patna, Bihar, who completed her Bachelor’s in Biotechnology from Banasthali Vidyapith, Jaipur, Rajasthan. She is not a writer by profession but by passion and interest. She has been into writing from the past few years and has also worked with publication houses as a compiler, co-author and been  an Anthology Head / PR Manager at Split Poetry India.
                            <br /><br />
                            She is someone who believes in living in the present and writes what she feels by heart. Being an introvert her escape is her words and books. She started her journey as a writer and now she has been a compiler, co-author and wishes someday to be an author. Apart from writing she is into public speaking i.e. debates, open mics etc. You can find her write ups at&nbsp;
                            <Link to="https://www.instagram.com/thatintrovertwriter" target="_blank" className="text-[#F43F5E]">@thatintrovertwriter</Link>.

                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={DIVYESH}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                DIVYESH PRAJAPATI
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Divyesh Prajapati, an anonymous scribbler who anecdotes unsaid feelings, especially at 12:00 am. I come from Ahmedabad, Gujarat. Graduated from HL College Of Commerce in B.com and I’m a job person now. I started writing when I faced my first failure, where there was no one’s around and I chose words over a person. Apart from becoming parents proud, my basic goal is to connect more people through my words with the hope that this phase will go soon.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={ADITY}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                ADITY SINHA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |<Link to="https://www.instagram.com/_the_unfinished_poetry" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@_the_unfinished_poetry</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Adity Sinha, a scribbler trapped in the body of an IT Engineer. I am a software developer by profession and I come from Bangalore, Karnataka. I’m an old school who seeks refuge in poems and soulful music. The most important goal in my life is to always see my mother happy and smiling. Other than this, I aim to develop empathy and kindness towards others with time and achieve stability. I started writing when I was in grade 8. The first thing I wrote was a script for drama. And since then, writing has been my favorite escape. I’m an extrovert turned introvert who scribbles most of the time.
                            <Link to="https://www.instagram.com/_the_unfinished_poetry" target="_blank" className="text-[#F43F5E]"> @_the_unfinished_poetry</Link> is my second home.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={SAKSHI}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                SAKSHI SHUKLA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            I’m Sakshi Shukla, from Prayagraj (UP), stucked in studies for getting a govt job. I had never thought of writing but suddenly I don’t know how I discovered that I too can write and now I’m really enjoying and learning every day. I love to be around animals, especially dogs and want to do something for stray dogs to provide them a better life. Other than that, I’m a person who loves peaceful places and people who are kind to others. Spreading kindness, positivity, and love towards humans as well as animals is my ultimate goal.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={PALAK}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                PALAK JATWANI
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/_apoeticjourney__" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500"> @_apoeticjourney__</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Palak Jatwani, a student of medical microbiology. My hometown is Bareilly, UP. And these days I put up in Dehradun for my studies. I’ve been writing since 2019. I call myself ‘A poet by mistake’. And they call me ‘The master of relatables’. My debut book ‘Her Graceful Melancholy’, was released in January 2021. Writing is my escape. I usually love writing poetry. I am an introvert and an old school fond of retros, and mountains. I am escaping reality and inking my dreams.
                            <Link to="https://www.instagram.com/_apoeticjourney__y" target="_blank" className="text-[#F43F5E]"> @_apoeticjourney__</Link>here is where my heart and soul are.                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={HARSHITA}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                HARSHITA PUROHIT
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/wordsbyharshita" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@wordsbyharshita</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            All shades of an overthinker, just trying to learn every language of emotions, who is a bit clumsy and perplexed soul. She loves evenings and love stories. Writing is her biggest escape whenever she feels low and enthu. She is Harshita purohit, currently doing bachelor’s in science. She loves to observe and feel people and try to jot down everyone’s heart’s secret stories since August 2020. Learning, trying, and growing is her only thing to work on.

                            You can check a bit of her observings write-ups at <Link to="https://www.instagram.com/wordsbyharshita" target="_blank" className="text-[#F43F5E]">@wordsbyharshita</Link>, where she writes and you relate.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={SRILEKHA}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                SRILEKHA MITRA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/mitra_srilekha" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@mitra_srilekha</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            Am Srilekha Mitra. Currently an undergraduate English honors student at Calcutta University.
                            My ambition is to comfort people through my words and work.
                            My writing journey commenced on 16th June 2020 to seek refuge from the topsy turvy world.I don’t have any writing account 🙂 but I do have a personal account <Link to="https://www.instagram.com/mitra_srilekha" target="_blank" className="text-[#F43F5E]">@mitra_srilekha</Link>.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={NEHA}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                NEHA DHALARIA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Neha Dhalaria, a lawyer by profession. My aim is to reach to all those people who crave the much-needed support in their lives and become their strength.
                            An introvert can only convey her emotions by putting them on paper.
                            I have been writing since I was in school, but could not continue it in college.
                            I started writing again in May 2020.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={TANYA}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                TANYA VATSA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/unheard_writer" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@unheard_writer</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            A selenophile, emotionally illogical poetess weaving out her emotions in her words, who is crazy about medicines and passionately bleed ink on the piece of paper. She is Tanya Vatsa, currently pursuing a bachelor’s in dental surgery. She aims to bring smiles to the face of people, finding the best version of herself.

                            Writing since 2020 January, you can find her soul twin at <Link to="https://www.instagram.com/unheard_writer" target="_blank" className="text-[#F43F5E]">@unheard_writer</Link>.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={DIVYA}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                DIVYA PYARANI
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            Divya Pyarani is a 20-year-old Commerce student from Solapur, Maharashtra. She believes It is Love that matters at last’. She discovered her love for writing 1 year ago. To her, writing is an escape that she never regrets. She aims to find peace above everything else.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={SUHANA}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                SUHANA PATWA
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/suhana_writes" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@suhana_writes</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            Hello world, you’re supposed to call me Suhana Patwa. I’m 20 and still have a soul of teenagers & part and parcel of being an Ambivert who received her bachelor’s degree in biotechnology from BANASTHALI UNIVERSITY, Jaipur, Rajasthan.

                            ‌PURE AND BRIGHT RAY OF THE SUN, that’s what her name means. She is someone who puts her poetry first rather than mortals. All she wants is to sit in front of a rainy window pane, with her notebook and drown herself in the ocean of good literature. She is a versatile human being always available to help whether the problem is professional or personal. She loves to daydream, wonder about thoughts beyond our daily lives.
                            <br /> You can catch her rhymes on <Link to="https://www.instagram.com/suhana_writes" target="_blank" className="text-[#F43F5E]">@suhana_writes</Link>.<br />Winding this with loads of Love and wishes.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row  dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={VATSAL}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                VATSAL VISHWAM
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            I am Vatsal Vishwam, a 16-year-old writer from Ranchi. I have been a part of several anthologies and a national e-magazine. I have also been an author of fanfiction. I try my best to spread smiles through the power of words. As a writer since the age of 9, I love expressing my thoughts through poems and short stories. An introvert and a bibliophile, who tries his best to spread positivity.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={MEENAL}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                MEENAL RAJPOOT
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER |
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            I’m Meenal Rajpoot, 20. A writer and a poet from Faridabad, Haryana. A Published Co-Author for various anthologies. A student by action, but a writer by passion. I find writing as an escape from the chaos and pour my heart out through words. Because words comfort more than anything else in this world. I believe once you are in love with words there’s no way out you can come out of this love and the best part is you can’t get betrayed either I love more writing than reading and try to pen down my emotions from the core her heart. Hoping everyone can relate to it                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={NAVJOT}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                NAVJOT SINGH
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/rationalhearts_" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@rationalhearts_</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Navjot Singh, a commerce student from Punjab, going to appear in boards this year. The lockdown made me scribble my mind on paper and firstly I wrote a poem that started this magnificent journey. My current goal is just to be happy and successful. Seeing my family joyous calms my souI. People perceive me as altruistic. Love collecting and reading books. One of the most significant thing for me is doing my best in everything. Expressing myself by writing as no one really cares about the emotions. You can go through my stupendous journey
                            &nbsp;<Link to="https://www.instagram.com/rationalhearts_" target="_blank" className="text-[#F43F5E]">@rationalhearts_</Link> on Instagram.
                        </p>
                    </div>

                    <div className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                        <img
                            src={JAHNAVI}
                            alt='Writer'
                            className='w-32 h-32 rounded-lg border-3 border-slate-400 object-cover'
                        />
                        <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8  items-center justify-center'>
                            <h2 className='dark:text-white text-3xl lg:text-4xl 2xl:text-6xl font-bold'>
                                JAHNAVI MORGE
                            </h2>
                            <h3 className="dark:text-white lg:text-2xl 2xl:text-4xl font-medium font-mono">
                                | WRITER | <Link to="https://www.instagram.com/jahnavi_morge_" target="_blank" className="text-[#F43F5E] font-sans hover:text-teal-500">@jahnavi_morge_</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[18px] w-[700px] mb-10 dark:text-white">
                            This is Jahnavi Morge, hailing from Neral, Mumbai. I cleared my boards this year and now pursuing a CA course. Dancing has been my favorite space, for the last 8 to 9 years. I like to express most of my emotions through my moves. I started this never-ending journey of penning last year and soon became my favorite escape as it made me evolve as a person. One of the most important goals in my life is to learn different things every day and be the best version of myself. If you wish to see how my happy space looks like, check out
                            &nbsp;<Link to="https://www.instagram.com/jahnavi_morge_" target="_blank" className="text-[#F43F5E]">@rationalhearts_</Link> on Instagram.
                        </p>
                    </div>


                    {/* <div className="p-5 text-[25px] border-t-4 mb-10 border-b-4 border-double dark:text-white border-[#F43F5E] w-fit font-mono font-medium">
                        Meet our team <Link to="" className="text-[#F43F5E] font-bold font-serif">here.</Link>
                    </div> */}

                </div>
                <br />

                {/* RIGHT */}
                <div className='w-full md:w-1/4 mt-12 mb-12 flex flex-col gap-y-12'>
                    {/* POPULAR POSTS */}
                    <PopularPosts posts={popular?.posts} />

                    {/* POPULAR WRITERS */}
                    <PopularWriters data={popular?.writers} />
                </div>
            </div>
        </div >
    );
};

export default Team;


