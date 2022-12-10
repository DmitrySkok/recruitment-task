import React from 'react';
import styles from './Hero.module.scss';
import Button from '../../common/Button/Button'
import Container from '../../common/Container/Container';

const Hero = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth={'1258px'}>
        <div className={styles.textBlock}>
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <div className={styles.pragraphBlock}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus
            </p>
            <p>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </p>
          </div>
          <div className={styles.textBlockButtons}>
            <Button big={true} path={'/uiKits'} >Purchase UI Kit</Button>
            <Button big={true} path={'/moreAboutKits'} transparent={true}>Learn More</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero