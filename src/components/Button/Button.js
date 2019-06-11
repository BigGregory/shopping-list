import React from 'react';
import styles from './Button.module.css';

const Button = ({clickedHandler, children, type='button'}) => {
  return (
    <button 
      onClick={clickedHandler}
      className={styles.Button}
      type={type}>{children}</button>
  );
};

export default Button;