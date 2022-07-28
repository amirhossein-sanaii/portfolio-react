import Header from '../../Component/Header'
// icon
import { MdOutlineContactMail } from 'react-icons/md'
// scss
import './style.scss'

// Animation library react
import { Animate } from "react-simple-animate"


const Contact = () => {
  return (
    <section>
      <Header textHeader='Contant' icon={<MdOutlineContactMail size={40} />} />
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
        <div className='contact__contect'>
          <h3>
            lets Talk
          </h3>
          <div className='contact__contect__form'>
            <div className='contact__contect__form__wrapper'>
              <div className='name-wrapper'>
                <input name='name' className='inputName input ' type='text' />
                <label className='labaleName labale'>Name</label>
              </div>

              <div className='email-wrapper'>
                <input name='email' className='inputEmail input' type='email' />
                <label className='labaleEmail labale'>Email</label>
              </div>

              <div className='des-wrapper'>
                <textarea rows={5} style={{ resize: 'none' }} name='description' className='inputdes input' type='text' />
                <label className='labaleName labale'>Description</label>
              </div>
            </div>
          </div>
          <button className='btnsub'>Submit</button>
        </div>
        </Animate>
    </section>
  )
}

export default Contact

