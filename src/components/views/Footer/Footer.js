import React from 'react'
import Button from '../../common/Button/Button';
import styles from './Footer.module.scss';
import Container from '../../common/Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.root}>
      <Container>
        <>
          <div className={styles.upperSection}>
            <div>
              <p>©2020 Yourcompany</p>
            </div>
            <div className='logo header'>Landie</div>
            <div>
              <Button footerComp={true}>Purchase now</Button>
            </div>
          </div>
          <hr />
          <div className={styles.lowerSection}>
            <ul className={styles.menu}>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
            <ul className={styles.socialMedia}>
              <li>
                <a href='/facebook'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href='/linkedin'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href='/twitter'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href='/youtube'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href='/instagramm'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </>
      </Container>
    </div>
  )
}

export default Footer