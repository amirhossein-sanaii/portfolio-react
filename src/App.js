import { Routes, Route, useLocation } from 'react-router-dom';

// animation backgroun
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { particlesConfig } from './hellper/particleConfig'

// pages
import Home from './Containers/Home'
import About from './Containers/about'
import Skills from './Containers/skills'
import Resume from './Containers/resume'
import Portfolio from './Containers/portfolio'
import Contact from './Containers/contact'

// navbar component
import Navbar from './Component/Navbar';

// css
import './App.scss';

function App() {

  // amination background
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  // render Particles only in Home page
  const location = useLocation()
  const locationHome = location.pathname === "/"

  return (
    <>
      <div className='App'>

        {/* animation background & render Particles only in Home page */}
        <div className='App__particles'>
          {
            locationHome && <Particles id='particles' options={particlesConfig} init={particlesInit} />
          }
        </div>


        <div className='App__navbar'>
          {/* navbar */}
          <Navbar />
        </div>

        <div className='App__container'>
          {/* pages */}
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/about' index element={<About />} />
            <Route path='/skills' index element={<Skills />} />
            <Route path='/resume' index element={<Resume />} />
            <Route path='/portfolio' index element={<Portfolio />} />
            <Route path='/contact' index element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
