import { useState } from 'react'
import classes from '../../styles/MenuBtn.module.scss'

const MenuBtn = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuBtnClickHandler = () => {
    setIsMenuOpen(!isMenuOpen)
    props.onMenuBtnClick(!isMenuOpen)
  }

  return (
    <div
      className={`${classes.menu_btn_wrap} ${isMenuOpen ? classes.open : ''}`}
      onClick={menuBtnClickHandler}>
      <div className={classes.menu_btn__bar}></div>
    </div>
  )
}

export default MenuBtn
