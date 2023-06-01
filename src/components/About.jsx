const About = () => {
  return (
    <div 
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="space-y-8">
            <p className="font-logo inline text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400">About</p>

            <p className="text-gray-400 sm:text-lg">Hello world! I&apos;m Ignacio Cerda, a creative spark and friendly face nestled in the wonderful city of Malmö, Sweden. My journey as a junior Front-end Developer took shape at Grit Academy, a crucial step in my professional growth. It&apos;s my passion for web development and technology that keeps my wheels turning, always eager to innovate and bring ideas to life in the digital realm.</p>

            <p className="text-gray-400 sm:text-lg">Though I&apos;m a proud Spanish native, the world is my oyster! I speak Swedish fluently, and my conversational English is strong, allowing me to connect with a diverse array of people in this fascinating digital landscape. When I&apos;m not immersed in the latest tech trends, you&apos;ll often find me playing and creating music - another passion that resonates deeply with me. Let&apos;s explore the endless possibilities of the web together, and perhaps share a melody or two along the way!</p>
        </div>
      </div>
    </div>
  )
}

export default About
