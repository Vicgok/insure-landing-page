import classes from '../styles/Footer.module.scss'
import Attribution from './Attribution'

const Footer = props => {
  const socialIcons = props.footerContents[0].socialIcons
  const footerListItems = props.footerContents.slice(1)

  // function to render social icons
  const renderSocialIcons = (icon, index) => {
    return (
      <a href='#!' key={index}>
        <img src={icon} alt='facebook'></img>
      </a>
    )
  }

  // function to render footer links
  const renderFooterLinks = (element, index) => {
    return (
      <div className={classes.footer__linksWrap} key={index}>
        <p className={classes.footer__linkTitle}>{element.title}</p>
        <ul className={classes.footer__linkItemsWrap}>
          {element.links.map((link, index) => (
            <li key={index}>
              <a href='#!'>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <footer>
      <div className={`${classes.footer__contents} ${classes.container}`}>
        <div className={classes.footer__top}>
          <img
            className={classes.footer__logo}
            src={props.footerContents[0].logo}
            alt='logo'></img>
          {/* Render social icons from array */}
          <div className={classes.footer__socialIcons}>
            {socialIcons.map((icon, index) => renderSocialIcons(icon, index))}
          </div>
        </div>
        <div className={classes.footer__divider}></div>
        <div className={classes.footer__btm}>
          {/* Render footer links from array of objects */}
          {footerListItems.map((element, index) =>
            renderFooterLinks(element, index)
          )}
        </div>
      </div>
      <Attribution />
    </footer>
  )
}

export default Footer
