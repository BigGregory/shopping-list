import React from 'react';
import Button from '../Button/Button';
import styles from './ItemsCounter.module.css';
import PropTypes from 'prop-types';

// TODO prop-types required
const ItemsCounter = ({itemList, removeAll}) => {
  let isEmptyList = itemList.length === 0;
  let listCount = itemList.length; 
  let description;
  if (isEmptyList) {
    description = <p>No items in list</p>
  } else {
    description = <p className={styles.ItemCounter}>{listCount} item <Button clickedHandler={removeAll}>Remove All</Button></p>
  }
  return (
    <div>
      {description}
      <div className={styles.Separator}></div>
    </div>
  );

};

ItemsCounter.propTypes = {
  itemList: PropTypes.array
}
ItemsCounter.defaultProps = {
  itemList: []
}

export default ItemsCounter;