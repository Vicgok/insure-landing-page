import classes from '../styles/NavLinks.module.scss'
import Button from './UI/Button'

const NavLinks = props => {
  return (
    <div
      className={`${classes.navlinkWrap} ${
        props.isMenuOpen ? classes.open : ''
      } `}>
      <ul className={classes.navlinks}>
        {props.navLinkItems.map((item, index) => (
          <li key={index}>
            <a href='#!'>{item}</a>
          </li>
        ))}
      </ul>
      <Button
        btnStyleForMobDeskCombo='btn-light-dark-combo'
        btnText='View Plans'
      />
    </div>
  )
}

export default NavLinks
