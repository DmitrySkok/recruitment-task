import React from 'react';
import styles from './UndrawMobLog.module.scss';
import Container from '../../common/Container/Container';

const UndrawMobLog = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth={'1052px'}>
        <div className={styles.textBlock}>
          <h2>Light, Fast & Powerful</h2>
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
          <div className={styles.textBlockCards}>
            <div className={styles.card}>
              <p className={styles.smallTitle}>Title Goes Here</p>
              <p className={styles.smallParagraph}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.smallTitle}>Title Goes Here</p>
              <p className={styles.smallParagraph}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UndrawMobLog