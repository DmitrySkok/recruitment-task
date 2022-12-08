import React from 'react'
import Button from '../../common/Button/Button'
import styles from './NavBar.module.scss'
import { useState } from "react";
import clsx from 'clsx';

const NavBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <ul className={clsx(styles.list, isNavExpanded && styles.open)}>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <div className='logo header'>Landie</div>
      <div className={clsx(styles.navBtn, isNavExpanded && styles.open)}>
        <Button path={'/buy'}>Buy Now</Button>
      </div>
      <div 
        role='button' 
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          console.log(isNavExpanded);
        }}
        className={clsx(styles.hamburger, isNavExpanded && styles.open)}
      >
        <div className={styles.iconLeft}></div>
        <div className={styles.iconRight}></div>
      </div>
    </div>
  )
}

export default NavBar