import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { TfiWrite } from "react-icons/tfi";
import { RiUserFollowLine } from "react-icons/ri";
import "../pages/style.css";
import { MdOutlineReviews } from "react-icons/md";


const CountUpAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="container2 dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] flex flex-col relative">
            <div className="icon text-3xl font-black dark:text-white">{iconComponent}</div>
            <span className="num">{count}+</span>
            <span className="text dark:text-slate-300 text-slate-700">{text}</span>
        </div>
    );
};

const CountFollowerAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="container2 dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19] flex flex-col relative">
            <div className="icon text-3xl font-black dark:text-white">{iconComponent}</div>
            <span className="num">{count}K+</span>
            <span className="text dark:text-slate-300 text-slate-700">{text}</span>
        </div>
    );
};

function StatCounter() {
    return (
        <div className='w-full flex flex-row gap-4 mt-5 items-center justify-center mb-0 wrapper2'>
            <CountUpAnimation
                iconComponent={<TfiWrite />}
                initialValue={0}
                targetValue={15}
                text="Select Writer"
            />
            <CountFollowerAnimation
                iconComponent={<RiUserFollowLine />}
                initialValue={0}
                targetValue={`130`}
                text="Instagram Followers"
            />
            <CountUpAnimation
                iconComponent={<MdOutlineReviews />}
                initialValue={0}
                targetValue={5}
                text="Book reviews"
            />
        </div>
    )
}

export default StatCounter