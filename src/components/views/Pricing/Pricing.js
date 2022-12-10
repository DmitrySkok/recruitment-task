import React from 'react'
import Button from '../../common/Button/Button';
import styles from './Pricing.module.scss';

const Pricing = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <h2>A Price To Suit Everyone</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
        </div>
        <div className={styles.priceBlock}>
          <h1>$40</h1>
          <p>UI Design Kit</p>
        </div>
        <div className={styles.btnBlock}>
          <p>See, One price. Simple.</p>
          <Button big={true} pricingComp={true}>Purchase Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Pricing