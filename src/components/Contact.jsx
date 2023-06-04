
const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full space-y-8">
        <div className="space-y-4 mt-40">
            <p className="font-logo inline text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400">Contact</p>
            <p className="text-gray-400 sm:text-lg">Let&apos;s be in touch!</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/b240fd90-5ae9-4818-aa30-5ad886b4072b" method="POST" className="flex flex-col w-full md:w-1/2 space-y-4">
                <input type="text" name="name" placeholder="Enter your name here" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input type="email" name="email" placeholder="Enter your email here" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <textarea name="message" rows="10" placeholder="Enter your message here" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">Let&apos;s talk!</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
