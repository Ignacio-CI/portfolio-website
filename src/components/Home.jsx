import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <div
        name="home"
        className='min-h-screen w-full bg-gradient-to-b from-slate-100 to-slate-200 dark:from-black dark:via-black dark:to-gray-800'
    >
      <div
        className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
        
      >
        <div 
          className='flex flex-col justify-center mt-40 lg:mt-60 h-full'>
            <h1 
              className='font-logo text-black dark:text-white uppercase font-bold text-4xl my-4 sm:text-7xl'
            >front-end developer</h1>
            
            <p className='text-gray-800 dark:text-gray-400 sm:text-lg max-w-md'>I&apos;m a junior developer with a solid foundation in HTML, CSS and JavaScript. I love web development, and I&apos;m all about crafting intuitive and user-friendly designs. Check out my portfolio website. It&apos;s packed with projects I&apos;ve been working on, showcasing my skills and eagerness to keep learning and growing in this fast-moving tech world.</p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-2'/>
                    </span>
                </Link>
            </div>
        </div>

        <div className='lg:mt-40'>
            <img src={HeroImage} alt="Me" className='rounded-2xl mx-auto w-2/3 md:max-w-lg'/>
        </div>

      </div>
    </div>
  )
}

export default Home
