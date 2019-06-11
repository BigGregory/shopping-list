import React from 'react';
import styles from './ItemDescription.module.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types'

const ItemDescription = ({item, removeItem}) => {
  return (
    <div className={styles.ItemDescription}>
      <p>{item.quantity}x <strong>{item.name}</strong></p>
      <p>{item.description}</p>
      <Button clickedHandler={removeItem}>remove</Button>
    </div>
  );
};

ItemDescription.propTypes = {
  item: PropTypes.object
}
ItemDescription.defaultProps = {
  item: {}
}

export default ItemDescription;