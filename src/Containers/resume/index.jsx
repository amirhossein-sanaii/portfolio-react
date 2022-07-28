import React from 'react'
import Header from '../../Component/Header'
import { BsInfoCircleFill } from 'react-icons/bs'


const Resume = () => {
  return (
    <section>
      <Header textHeader='Resume' icon={<BsInfoCircleFill size={40}/>}/>
    </section>
  )
}

export default Resume