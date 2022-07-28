// scss
import './style.scss'

const Header = ({textHeader , icon}) => {
  return (
    <div className='wrapper'>
        <h2>{textHeader}</h2>
        <span>{icon}</span>
    </div>
  )
}

export default Header