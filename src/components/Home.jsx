import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import htmlIcon from "../assets/experience/html.png";
import cssIcon from "../assets/experience/css.png";
import jsIcon from "../assets/experience/javascript.png";
import homeImage from "../assets/homeimage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-slate-100 to-slate-200 dark:from-black dark:via-black dark:to-gray-800"
    >
      <div 
        className="w-full min-h-screen bg-no-repeat bg-right-bottom bg-contain bg-fixed"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="max-w-screen h-screen flex flex-col items-center justify-center xl:ml-20">
          <div className="w-full flex flex-col gap-4 px-4">
            <h1 className="400 font-logo text-black dark:text-white uppercase font-bold text-5xl md:text-7xl">
              front-end
            </h1>
            <h1 className="400 font-logo text-black dark:text-white uppercase font-bold text-5xl md:text-7xl">
              <Typewriter
                words={["developer", "artisan", "rockstar"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={130}
                deleteSpeed={100}
                delaySpeed={1600}
              />
            </h1>
            <div className="w-md md:w-4/5 lg:w-3/5">
              <p className="text-gray-800 dark:text-gray-400 sm:text-lg mb-4">
              I&apos;m a junior web developer skilled in HTML, CSS, JavaScript and other cool tech. Passionate about user-friendly design, clean code and teamwork.
              </p>
              <div>
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

  
        </div>
        
      </div>
    </div>
  );
};

export default Home;
