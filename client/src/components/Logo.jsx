import { Link } from "react-router-dom";
import logo from "./logo.png";

const Logo = ({ type }) => {
    return (
        <div className=''>
            <Link
                to='/'  
                className={`text-2xl font-semibold dark:text-white ${type && "text-white  text-4xl"
                    }`}
            >
                The
                <span
                    className={`text-3xl text-rose-500 ${type && " text-5xl font-bold"}`}
                >
                    Untold Phrase
                </span>

            </Link>
        </div>
    );
};

export default Logo;