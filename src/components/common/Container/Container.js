import styles from './Container.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Container = (props) => {

  const children = props.children;
  const maxWidth = props.maxWidth;
  console.log(children);

  return (
    <div
      style={{ maxWidth: maxWidth }}
      className={clsx(
        styles.container,
        (children.type.name !== 'NavBar' && children.type !== 'footer') && styles.containerRwd,
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.object,
  maxWidth: PropTypes.string
}

export default Container;