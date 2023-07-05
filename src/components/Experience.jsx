import { motion } from 'framer-motion'
import html from '../assets/experience/html.png';
import css from '../assets/experience/css.png';
import javascript from '../assets/experience/javascript.png';
import reactLogo from '../assets/experience/react-logo.png';
import vueLogo from '../assets/experience/vue-logo.png';
import bootstrap from '../assets/experience/bootstrap-logo.png';
import tailwindcss from '../assets/experience/tailwind-css.png';
import nodejs from '../assets/experience/nodejs-icon-logo.png';
import firebase from '../assets/experience/firebase-logo.png';
import mongodb from '../assets/experience/mongodb-logo.png';
import typeScript from '../assets/experience/typescript.png';
import github from '../assets/experience/github.png';


const Experience = () => {
    const techStack = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: typeScript,
            title: 'TypeScript',
            style: 'shadow-sky-500'
        },
        {
            id: 5,
            src: reactLogo,
            title: 'React',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: vueLogo,
            title: 'Vue',
            style: 'shadow-emerald-600'
        },
        {
            id: 7,
            src: tailwindcss,
            title: 'TailwindCSS',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-violet-500'
        },
        {
            id: 9,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-lime-500'
        },
        {
            id: 10,
            src: firebase,
            title: 'Firebase',
            style:'shadow-yellow-400'
        },
        {
            id: 11,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 12,
            src: github,
            title: 'GitHub',
            style: 'shadow-neutral-500'
        },
    ];

    return (
    <div 
        name="experience" 
        className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'
    >
        <div 
            className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <motion.div 
                className='space-y-4 mt-40'
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewport={{ once: true }}
            >
                <p className='font-logo inline text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400'>Experience</p>
                <p className='text-gray-400 sm:text-lg'>Constantly evolving, working with diverse tech stacks.</p>
            </motion.div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techStack.map( ({ id, src, title, style }, i) => (
                    <motion.div 
                        key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-around rounded-lg cursor-pointer ${style}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "tween", duration: 1, delay: i * 0.02 }}
                        viewport={{ once: true }}
                    >
                        <img src={src} alt="" className='w-10 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </motion.div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Experience
