import classes from '../styles/Attribution.module.scss'

const Attribution = () => {
  return (
    <div className={classes.attribution}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'>
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href='https://github.com/Vicgok' target='_blank' rel='noreferrer'>
        Vigneshwaraa
      </a>
      .
    </div>
  )
}

export default Attribution
