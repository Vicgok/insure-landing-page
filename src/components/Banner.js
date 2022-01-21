import classes from '../styles/Banner.module.scss'
import Button from './UI/Button'

const Banner = () => {
  return (
    <div className={classes.banner}>
      <h2 className={classes.banner__title}>
        Find out more <span>about how we work</span>
      </h2>
      <Button btnText='how we work' btnStyleForMobDeskCombo='btn-light' />
    </div>
  )
}

export default Banner
