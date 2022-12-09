import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = (props) => {
  
  const children = props.children;
  const maxWidth = props.maxWidth;

  return (
    <div style={{maxWidth: maxWidth}} className={styles.container}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.object,
  maxWidth: PropTypes.string
}

export default Container;