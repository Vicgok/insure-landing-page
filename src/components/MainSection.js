import classes from '../styles/MainSection.module.scss'
import Banner from './Banner'

const MainSection = props => {
  const featureCard = (element, id) => {
    return (
      <div className={classes.main__featureCard} key={id}>
        <img
          src={element.icon}
          alt={element.title}
          className={classes.main__featureCardIcon}></img>
        <h3 className={classes.main__featureCardTitle}>{element.title}</h3>
        <p className={classes.main__featureCardPara}>{element.para}</p>
      </div>
    )
  }

  return (
    <main className={`${classes.main__content} ${classes.container}`}>
      <div className={classes.main__textContent}>
        <div className={classes.line}></div>
        <h2 className={classes.main__title}>We’re different</h2>
        <div className={classes.main__features}>
          {props.featureCardContents.map((element, index) =>
            featureCard(element, index)
          )}
        </div>
      </div>
      <div className={classes.main__banner}>
        <Banner />
      </div>
    </main>
  )
}

export default MainSection
