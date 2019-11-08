import React from 'react';
import styles from './ItemDescriptionList.module.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types'

const ItemDescriptionList = ({ItemDescriptionList, removeItem}) => {
  return (
    <div>
      {ItemDescriptionList.length > 0 && ItemDescriptionList.map((listItem) => {
        return (
          <div className={styles.ItemDescriptionList} key={listItem.name + listItem.description}>
            <p>{listItem.quantity}x <strong>{listItem.name}</strong></p>
            <p>{listItem.description}</p>
            <Button clickedHandler={() => removeItem(listItem)}>remove</Button>
          </div>
        );        
      })}
    </div>
  );
};

ItemDescriptionList.propTypes = {
  listItem: PropTypes.object
}
ItemDescriptionList.defaultProps = {
  listItem: {}
}

export default ItemDescriptionList;