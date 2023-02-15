import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FooterContainer } from './style'

const Footer = () => {
  return (
    <FooterContainer>
        <ul>
            <li><Link target="blank" to="https://www.linkedin.com/in/joaoknisspell/"><AiFillLinkedin /></Link></li>
            <li><Link target="blank" to="https://github.com/joaoKnisspell"><AiFillGithub /></Link></li>
        </ul>
        <p>Desenvolvido por João Knisspell.</p>
    </FooterContainer>
  )
}

export default Footer