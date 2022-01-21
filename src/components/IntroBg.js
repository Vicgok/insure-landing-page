import classes from '../styles/IntroBg.module.scss'

import leftIntroBgMob from '../images/bg-pattern-intro-left-mobile.svg'
import rightIntroBgMob from '../images/bg-pattern-intro-right-mobile.svg'

import leftIntroBgDesktop from '../images/bg-pattern-intro-left-desktop.svg'
import rightIntroBgDesktop from '../images/bg-pattern-intro-right-desktop.svg'

const IntroBg = () => {
  return (
    <>
      <picture className={classes.leftIntroBg}>
        <source media='(min-width:50em)' srcSet={leftIntroBgDesktop}></source>
        <img src={leftIntroBgMob} alt='leftIntro'></img>
      </picture>
      <picture className={classes.rightIntroBg}>
        <source media='(min-width:50em)' srcSet={rightIntroBgDesktop}></source>
        <img src={rightIntroBgMob} alt='leftIntro'></img>
      </picture>
    </>
  )
}

export default IntroBg
