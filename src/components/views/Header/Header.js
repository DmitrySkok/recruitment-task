import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.scss'
import Container from '../../common/Container/Container'

const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth={'1110px'}>
        <NavBar />
      </Container>
    </div>
  )
}

export default Header