import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { useMantineColorScheme } from "@mantine/core";
import darkLogo from '../assets/darkLogo.png';
import lightLogo from '../assets/lightLogo.png';

const Logo = ({ type }) => {

    const { colorScheme } = useMantineColorScheme();

    const logoImage = colorScheme === "light" ? lightLogo : darkLogo;


    return (
        <div className=''>
            <Link
                to='/'
                className={`text-2xl font-semibold dark:text-white ${type && "text-white  text-4xl"
                    }`}
            >
                {/* The
                <span
                    className={`text-3xl text-rose-500 ${type && " text-5xl font-bold"}`}
                >
                    Untold Phrase
                </span> */}
                <img src={logoImage} alt="logo" />

            </Link>
        </div>
    );
};

export default Logo;