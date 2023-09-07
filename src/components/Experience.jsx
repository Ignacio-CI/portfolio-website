import { motion } from 'framer-motion'
import { container, item, title } from '../helpers/animations.js'
import reactLogo from '../assets/experience/React.png';
import vueLogo from '../assets/experience/Vue.png';
import figma from '../assets/experience/Figma.png';
import tailwindcss from '../assets/experience/tailwind-css.png';
import nodejs from '../assets/experience/Nodejs.png';
import redis from '../assets/experience/Redis.png';
import mongodb from '../assets/experience/MongoDB.png';
import mysql from '../assets/experience/MySQL.png';
import nextjs from '../assets/experience/nextjs.png';
import git from '../assets/experience/Git.png';
import jira from '../assets/experience/Jira.png';
import postman from '../assets/experience/Postman.png';



const Experience = () => {
    const techStack = [
        {
            id: 1,
            src: reactLogo,
            title: 'React',
            style: 'shadow-sky-500'
        },
        {
            id: 2,
            src: vueLogo,
            title: 'Vue',
            style: 'shadow-emerald-600'
        },
        {
            id: 3,
            src: nextjs,
            title: 'Next.js',
            style: 'shadow-teal-500'
        },
        {
            id: 4,
            src: tailwindcss,
            title: 'TailwindCSS',
            style: 'shadow-sky-500'
        },
        {
            id: 5,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-lime-500'
        },
        {
            id: 6,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: redis,
            title: 'Redis',
            style:'shadow-red-600'
        },
        {
            id: 10,
            src: git,
            title: 'Git',
            style: 'shadow-orange-700'
        },
        {
            id: 11,
            src: jira,
            title: 'Jira',
            style: 'shadow-blue-600'
        },
        
        {
            id: 12,
            src: figma,
            title: 'Figma',
            style: 'shadow-violet-500'
        },
    ];

    return (
    <div 
        name="experience" 
        className='bg-gradient-to-b from-slate-200 to-slate-100 dark:from-gray-800 dark:to-black w-full min-h-screen'
    >
        <div 
            className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <motion.div 
                className='space-y-4 mt-40'
                variants={title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.p className='font-logo inline text-black dark:text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400'>Experience</motion.p>
                <motion.p className='text-gray-800 dark:text-gray-400 sm:text-lg'>Constantly evolving, working with diverse tech stacks.</motion.p>
            </motion.div>

            <motion.ul 
                className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {techStack.map( ({ id, src, title, style }) => (
                    <motion.li 
                        key={id} 
                        className={`shadow-md duration-500 py-2 flex flex-col text-black dark:text-white justify-around rounded-lg cursor-pointer bg-slate-100 dark:bg-transparent ${style}`}
                        variants={item}
                    >
                        <img src={src} alt="" className='w-10 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </motion.li>
                ))}
            </motion.ul>

        </div>

    </div>
  )
}

export default Experience
