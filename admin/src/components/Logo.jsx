import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { useMantineColorScheme } from "@mantine/core";
import darkLogo from '../assets/darkLogo.png';
import lightLogo from '../assets/lightLogo.png';

const Logo = ({ type }) => {

    const { colorScheme } = useMantineColorScheme();

    const logoImage = colorScheme === "light" ? lightLogo : darkLogo;
    const theme = colorScheme === "light";


    return (
        <div className=''>
            <Link
                to='/'
                className={`text-2xl font-medium dark:text-white ${type && "text-white  text-4xl"
                    }`}
            >
                <span
                    className={` text-4xl ml-4 flex md:flex-row w-full justify-between items-center ${type && " text-5xl font-bold"}`}
                >
                    {/* <img src={lightLogo} className="hidden dark:block" alt="logo" />
                    <img src={darkLogo} className="dark:hidden" alt="logo" /> */}
                    <img src={logoImage} alt="logo" />

                    <p className={clsx("font-bebas-neue invisible md:visible", theme ? "text-black" : "text-white")}>The&nbsp;
                        <span
                            className={`text-4xl  font-bebas-neue text-rose-500 ${type && " text-5xl font-bold"}`}
                        >
                            Untold Phrase
                        </span>
                    </p>
                </span>
            </Link>
        </div >
    );
};

export default Logo;