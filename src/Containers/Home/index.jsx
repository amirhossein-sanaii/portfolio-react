// scss
import './style.scss'

// Animation library react
import { Animate } from "react-simple-animate"

import { FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='home__text-wrapper'>
          <h1>
            Hello Im Amirhossein
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
            <a href='https://jobinja.ir/user/YZ-1254339/download' className='button__home__button'>Resume</a>
          </div>
      </Animate>
        </section>
      <section className='icons'>
        <span className='icons__me'><a href='https://t.me/donald_o'><FaTelegram size={36} /></a></span>
        <span className='icons__me'><a href='https://www.instagram.com/amirhossein.sanaii/'><FaInstagram size={36} /></a></span>
        <span className='icons__me'><a href='https://www.linkedin.com/in/amirhossein-sanaii-765109241'><FaLinkedin size={36} /></a></span>
      </section>
    </>
  )
}

export default Home