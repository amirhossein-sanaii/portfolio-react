import React from 'react'
import Header from '../../Component/Header'
import { BsInfoCircleFill } from 'react-icons/bs'


const Portfolio = () => {
  return (
    <section>
      <Header textHeader='Portfolio' icon={<BsInfoCircleFill size={40}/>}/>
    </section>
  )
}

export default Portfolio