import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const Button = props => {

  const navigate = useNavigate();

  const bigBtn = props.big;
  const trnBtn = props.transparent;
  const pricingComp = props.pricingComp;
  const footerComp = props.footerComp;
  const children = props.children;
  const path = props.path;

  const handleClick = () => {
    navigate(path);
  }

  return (
    <button onClick={handleClick}
      className={clsx(
        styles.button,
        bigBtn ? styles.bigBtn : styles.smallBtn,
        pricingComp && styles.bigBtnPricingComp,
        footerComp && styles.smallBtnFooterComp,
        trnBtn && styles.transparent
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  bigBtn: PropTypes.bool,
  trnBtn: PropTypes.bool,
  children: PropTypes.string,
  path: PropTypes.string,
  pricingComp: PropTypes.bool,
  footerComp: PropTypes.bool,
}

export default Button;