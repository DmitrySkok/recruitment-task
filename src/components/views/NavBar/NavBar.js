import React from 'react'
import Button from '../../common/Button/Button'
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <Button path={'/buy'}>Buy Now</Button>
    </div>
  )
}

export default NavBar