import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import MainSection from './components/MainSection'

import flashIcon from './images/icon-snappy-process.svg'
import dollarIcon from './images/icon-affordable-prices.svg'
import peopleIcon from './images/icon-people-first.svg'

import fbIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import pintrestIcon from './images/icon-pinterest.svg'
import instaIcon from './images/icon-instagram.svg'

import logo from './images/logo.svg'
import Footer from './components/Footer'

import { useState } from 'react'

const navLinkItems = ['how we work', 'blog', 'account']

const featureCardContents = [
  {
    id: '1',
    icon: flashIcon,
    title: 'Snappy Process',
    para: `Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.`,
  },
  {
    id: '2',
    icon: dollarIcon,
    title: 'Affordable Prices',
    para: `We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.`,
  },

  {
    id: '3',
    icon: peopleIcon,
    title: 'People First',
    para: `Our plans aren’t full of conditions and
    clauses to prevent payouts. We make sure you’re covered when you need it.`,
  },
]

const footerContents = [
  {
    logo: logo,
    socialIcons: [fbIcon, twitterIcon, pintrestIcon, instaIcon],
  },
  {
    title: 'Our company',
    links: ['How we work', 'Why Insure?', 'View plans', 'Reviews'],
  },

  {
    title: 'Help me',
    links: ['FAQ', 'Terms of use', 'Privacy policy', 'Cookies'],
  },

  {
    title: 'Contact',
    links: ['Sales', 'Support', 'Live chat'],
  },
  {
    title: 'Others',
    links: ['Careers', 'Press', 'Licenses'],
  },
]

const App = () => {
  const [heroInView, setHeroInView] = useState(true)

  const heroSectionInView = inView => {
    setHeroInView(inView)
  }

  return (
    <>
      <NavBar navLinkItems={navLinkItems} inView={heroInView} />
      <HeroSection heroSectionInView={heroSectionInView} />
      <MainSection featureCardContents={featureCardContents} />
      <Footer footerContents={footerContents} />
    </>
  )
}

export default App
