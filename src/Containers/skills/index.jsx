import Header from '../../Component/Header'

// icon
import { GiSkills } from 'react-icons/gi'
// data
import { skillsdata } from './utile'
// chart
import { Line } from 'rc-progress'
// css
import './style.scss'
// Animation library react
import { Animate } from "react-simple-animate"

const Skills = () => {
  return (
    <section className='skill'>
      <Header textHeader='Skills' icon={<GiSkills size={40} />} />
      <div className='skill__container'>
        {
          skillsdata.map((item, index) => {
            return (
              <>
                <div key={index} className='skill__container__inner'>
                  <h3 className='skill__container__inner__labale'>{item.labale}</h3>
                  <div className='skill__container__inner__power'>
                    {item.data.map((item, index) => {
                      return (
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
                          <div key={index} className='power-item'>
                            <p className='power-item__paragraf'>{item.skillname}</p>
                            <Line
                              percent={item.power}
                              strokeWidth="3"
                              strokeColor='var(--selected-theme-main-color)'
                              strokeLinecap='square'
                              trailWidth='3'
                            >
                            </Line>
                            <span className='darsad'>{item.power}%</span>
                          </div>
                        </Animate>
                      )
                    })}
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills