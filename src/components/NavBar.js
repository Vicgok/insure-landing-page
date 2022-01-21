import classes from '../styles/NavBar.module.scss'
import logo from '../images/logo.svg'
import { useState } from 'react'

import MenuBtn from './UI/MenuBtn'
import NavLinks from './NavLinks'

const NavBar = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuBtnHandler = isMenuOpen => {
    setIsMenuOpen(isMenuOpen)
  }

  return (
    <nav
      className={`${classes.navbar} ${
        classes[props.inView ? 'notsticky' : 'navbar__sticky']
      }`}>
      <div className={`${classes.navbar__wrap} ${classes.container}`}>
        <div className={classes.navbar__logo}>
          <img src={logo} alt='logo'></img>
        </div>
        <NavLinks navLinkItems={props.navLinkItems} isMenuOpen={isMenuOpen} />
        <MenuBtn onMenuBtnClick={menuBtnHandler} />
      </div>
    </nav>
  )
}

export default NavBar
