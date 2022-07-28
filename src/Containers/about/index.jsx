import Header from "../../Component/Header"

// icon
import { BsInfoCircleFill } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { BsGithub } from 'react-icons/bs'


// data information
import { personalData } from './utile'

// css
import './style.scss'

// Animation library react
import { Animate } from "react-simple-animate"

const About = () => {
  return (
    <section className="about">
      <Header textHeader='About' icon={<BsInfoCircleFill size={40} />} />

      <div className="about__contact">
        <div className="about__contact__personal">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translatex(-800px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3 className="developer">Front End</h3>
            <p>
              The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translatex(500px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3 className="developer-info">Personal Information</h3>
            <ul>
              {personalData.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="labale">{item.labale} : {item.value} </span>
                  </li>
                )
              })}
            </ul>
          </Animate>
        </div>

        <div className="about__contact__servis">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translatex(500px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <div className="about__contact__servis__inner">
              <div><AiFillHtml5 size={40} color="var(--selected-theme-main-color)" /></div>
              <div><FaReact size={40} color="var(--selected-theme-main-color)" /></div>
              <div><DiCss3 size={40} color="var(--selected-theme-main-color)" /></div>
              <div><BsGithub size={40} color="var(--selected-theme-main-color)" /></div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About