import styles from './Button.module.scss';
import clsx from 'clsx';
import { useNavigate  } from 'react-router-dom'

const Button = props => {
  const navigate = useNavigate ();

  const handleClick = () => {
    navigate(props.path);
  }

  return (
    <div>
      <button onClick={handleClick} 
      className={clsx(styles.button, props.big ? styles.big : styles.small, props.transparent && styles.transparent)}
      >{props.children}</button>
    </div>
  );
};

export default Button;