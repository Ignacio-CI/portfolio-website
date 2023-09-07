import { useEffect, useState } from 'react'
import Header from './components/Header'
import DarkModeButton from './components/DarkModeButton'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <Header />
      <DarkModeButton
        theme={theme}
        setTheme={setTheme}
      />
      <Home />
      <Experience />
      <Portfolio />
      <About />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
