import classes from '../styles/HeroSection.module.scss'
import { useEffect } from 'react'
import heroImgMob from '../images/image-intro-mobile.jpg'
import heroImgDesktop from '../images/image-intro-desktop.jpg'
import Button from './UI/Button'
import { useInView } from 'react-intersection-observer'

const HeroSection = props => {
  const [heroRef, inView, entry] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (entry) props.heroSectionInView(inView)
  }, [entry, inView, props])

  return (
    <section className={classes.heroSection} ref={heroRef}>
      <div className={`${classes.heroSection__content} ${classes.container}`}>
        <div className={classes.heroSection__text}>
          <div className={classes.line}></div>
          <h1 className={classes.heroSection__title}>
            Humanizing your insurance.
          </h1>
          <p className={classes.heroSection__para}>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button btnText='view plans' btnStyleForMobDeskCombo='btn-light' />
        </div>
        <div className={classes.heroSection__heroImg}>
          <picture>
            <source media='(min-width:40em)' srcSet={heroImgDesktop}></source>
            <img src={heroImgMob} alt='hero'></img>
          </picture>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
