import classes from '../../styles/Button.module.scss'

const Button = props => {
  //   console.log()
  return (
    <a
      href='#!'
      className={`${classes.buttonDefault} ${
        classes[props.btnStyleForMobDeskCombo]
      }`}>
      {props.btnText}
    </a>
  )
}

export default Button
