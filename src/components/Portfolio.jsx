import veterinary from '../assets/portfolio/veterinaria.png';
import emailSubscribe from '../assets/portfolio/email-subscribe.png';
import pricingCards from '../assets/portfolio/pricing-grids.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: veterinary,
            demo: 'https://seguimiento-pacientes-react-vite.netlify.app/',
            code: 'https://github.com/Ignacio-CI/citas_react_vite'
        },
        {
            id: 2,
            src: emailSubscribe,
            demo: 'https://ignacio-ci.github.io/email-subscribe-tailwindcss-miniproject-1/',
            code: 'https://github.com/Ignacio-CI/email-subscribe-tailwindcss-miniproject-1'

        },
        {
            id: 3,
            src: pricingCards,
            demo: 'https://ignacio-ci.github.io/pricing-grids-tailwindcss-miniproject-2/',
            code: 'https://github.com/Ignacio-CI/pricing-grids-tailwindcss-miniproject-2'
        },
    ];
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='space-y-4'>
            <p className='font-logo inline text-white uppercase font-bold text-4xl sm:text-7xl border-b-2 border-gray-400'>Portfolio</p>
            <p className='text-gray-400 sm:text-lg'>Check out some of my work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-8'>
        {
            portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <div className='h-2/3'>
                <img 
                    src={src} 
                    alt="Potfolio projects" 
                    className='rounded-md object-contain hover:scale-105 duration-200'
                />
                </div>
                <div className='flex items-center justify-center h-1/3'>
                    <button 
                        onClick={() => window.open(demo, '_blank')}
                        className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'
                    >Demo
                    </button>

                    <button
                        onClick={() => window.open(code, '_blank')} 
                        className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'
                    >Code
                    </button>
                </div>
            </div>
            ))
        }
        </div>

      </div>
    </div>
  )
}

export default Portfolio
