import React from 'react'
import styles from './Intro.module.scss';
import Container from '../../common/Container/Container';

const Intro = () => {
  return (
    <Container maxWidth={'1102px'}>
      <div className={styles.root}>
        <div className={styles.textBlock}>
          <h2>Light, Fast & Powerful</h2>
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
        </div>
      </div>
    </Container>
  )
}

export default Intro