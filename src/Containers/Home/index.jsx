// scss
import './style.scss'

// Animation library react
import { Animate } from "react-simple-animate"

import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='home__text-wrapper'>
          <h1>
            Hello im Amirhossein
            <br />
            Front End Devlopers
          </h1>

        </div>
      </section>
      <section className='button'>
      <Animate
        play
        duration={1}
        delay={0}
        start={{
           transform: 'translate(800px)' 
        }}
        end={{
          transform: 'translatex(0px)'
        }}
      >
          <div className='button__home__div'>
            <button className='button__home__button'>Her Me</button>
            <button className='button__home__button'>Resume</button>
          </div>
      </Animate>
        </section>
      <section className='icons'>
        <span className='icons__me'><a href='#'><FaFacebook size={36} /></a></span>
        <span className='icons__me'><a href='https://www.instagram.com/amirhossein.sanaii/'><FaInstagram size={36} /></a></span>
        <span className='icons__me'><a href='#'><FaLinkedin size={36} /></a></span>
      </section>
    </>
  )
}

export default Home