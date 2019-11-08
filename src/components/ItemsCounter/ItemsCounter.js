import React from 'react';
import Button from '../Button/Button';
import styles from './ItemsCounter.module.css';
import PropTypes from 'prop-types';

// TODO prop-types required
const ItemsCounter = ({ItemDescriptionList, removeAllItems}) => {
  const isEmptyList = ItemDescriptionList.length === 0;
  const listCount = ItemDescriptionList.length; 
  let description;
  if (isEmptyList) {
    description = <p>No items in list</p>
  } else {
    description = <p className={styles.ItemCounter}>{listCount} item <Button clickedHandler={removeAllItems}>Remove All</Button></p>
  }
  return (
    <div>
      {description}
      <div className={styles.Separator}></div>
    </div>
  );

};

ItemsCounter.propTypes = {
  ItemDescriptionList: PropTypes.array
}
ItemsCounter.defaultProps = {
  ItemDescriptionList: []
}

export default ItemsCounter;