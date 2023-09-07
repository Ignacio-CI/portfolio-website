import { motion } from "framer-motion"
import { title } from "../helpers/animations"

const About = () => {
  return (
    <div 
        name="about"
        className="w-full min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 dark:from-gray-800 dark:to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          className="space-y-8 mt-40"
          variants={title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
            <p className="font-logo inline text-black dark:text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400">About</p>

            <p className="text-gray-700 dark:text-gray-400 sm:text-lg">Hello world! I&apos;m Ignacio Cerda, a creative spark nestled in the wonderful city of Malmö, Sweden. My journey as a Front-end Developer took shape at Grit Academy, a crucial step in my professional growth. It&apos;s my passion for web development and technology that keeps my wheels turning, always eager to innovate and bring ideas to life in the digital realm.</p>
            
            <p className="text-gray-700 dark:text-gray-400 sm:text-lg">Immersed in the dynamic world of web development, my curiosity thrives on exploring modern frameworks and languages. Committed to lifelong learning, I constantly synchronize with the latest tech trends. With a foundational understanding of backend development, I&apos;m ambitiously strumming the chords towards mastering the full-stack ensemble.</p>

            <p className="text-gray-700 dark:text-gray-400 sm:text-lg">Away from the world of code, you&apos;ll often find me enveloped in the universal language of music, playing and creating melodies that stir the soul. This passion for music, like my love for web development, stems from a deep-seated desire to create and inspire. Let&apos;s traverse the boundless possibilities of the web together, intertwining lines of code with notes of music, fostering a symphony of innovation and harmony along the way!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
