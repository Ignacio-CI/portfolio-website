import { motion } from "framer-motion"
import veterinary from '../assets/portfolio/veterinaria.png';
import budgetPlanner from '../assets/portfolio/budget-planner.png';
import pricingCards from '../assets/portfolio/pricing-cards-1.png';
import FavoritePosts from '../assets/portfolio/favorite_posts_vue.png';
import realEstate from '../assets/portfolio/real_estate.png';
import socialBuddies from '../assets/portfolio/social_buddies.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: veterinary,
            title: 'Seguimiento de Pacientes',
            demo: 'https://seguimiento-pacientes-react-vite.netlify.app/',
            code: 'https://github.com/Ignacio-CI/citas_react_vite',
            disabled: false
        },
        {
            id: 2,
            src: budgetPlanner,
            title: 'Planificador Presupuesto',
            demo: 'https://presupuesto-react-ashy.vercel.app/',
            code: 'https://github.com/Ignacio-CI/budget_planner_react',
            disabled: false

        },
        {
            id: 3,
            src: pricingCards,
            title: 'Pricing Cards (only TailwindCSS)',
            demo: 'https://ignacio-ci.github.io/pricing-grids-tailwindcss-miniproject-2/',
            code: 'https://github.com/Ignacio-CI/pricing-grids-tailwindcss-miniproject-2',
            disabled: false
        },
        {
            id: 4,
            src: FavoritePosts,
            title: 'My Favorite Posts App',
            demo: 'https://my-favorite-posts-app.netlify.app/',
            code: 'https://github.com/Ignacio-CI/post-app-vue',
            disabled: false
        },
        {
            id: 5,
            src: realEstate,
            title: 'Real Estate Website (in progress)',
            demo: '',
            code: 'https://github.com/Ignacio-CI/post-app-https://github.com/Ignacio-CI/realestate',
            disabled: true
        },
        {
            id: 6,
            src: socialBuddies,
            title: 'SocialBuddies',
            demo: 'https://ignacio-ci.github.io/fe22-js2-slutprojekt-ignacio-cerda/',
            code: 'https://github.com/Ignacio-CI/fe22-js2-slutprojekt-ignacio-cerda',
            disabled: false
        },
    ];
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen'>
      <div 
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <motion.div 
            className='space-y-4 mt-40'
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true }}
        >
            <p className='font-logo inline text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400'>Portfolio</p>
            <p className='text-gray-400 sm:text-lg'>Check out some of my work right here.</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-8'>
        {
            portfolios.map(({ id, src, title, demo, code, disabled }, i) => (
            <motion.div 
                key={id} 
                className='shadow-md shadow-gray-600 rounded-lg'
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ type: "tween", duration: 0.3, delay: i * 0.02 }}
                viewport={{ once: true }}
            >
                <div className='h-2/3'>
                    <img 
                        src={src} 
                        alt="Potfolio projects" 
                        className='rounded-md object-contain hover:scale-105 duration-200'
                    />
                    <div className='w-full p-2'>
                        <p className='text-gray-400 text-center'>{title}</p>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='flex items-end justify-center h-1/3'>
                    <button 
                        onClick={() => window.open(demo, '_blank')}
                        className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'
                        disabled={disabled}
                    >Demo
                    </button>

                    <button
                        onClick={() => window.open(code, '_blank')} 
                        className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'
                    >Code
                    </button>
                </div>
            </motion.div>
            ))
        }
        </div>

      </div>
    </div>
  )
}

export default Portfolio
