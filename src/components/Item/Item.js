import React from 'react';
import styles from './Item.module.css';
import Button from '../Button/Button';
// TODO replace onBlur --> onChange - Done
// rename id of inputs --> e.q name - Done
// change div -> from, add required on Name, Quantity - Done
const Item = ({nameChange, descriptionChange, quantityChange, addItem, cancelItem, clearInputs}) => {
  return (
    <form className={styles.Item} onSubmit={addItem}>
      <label htmlFor="name">Name *</label>
      <input type="text" placeholder="Enter Name" id="name" onChange={nameChange} required></input>
      <label htmlFor="description">Description</label>
      <textarea id="description" onChange={descriptionChange}></textarea>
      <label htmlFor="quantity">Quantity *</label>
      <input type="number" id="quantity" onChange={quantityChange} required></input>
      <div className={styles.Separator}></div>
      <Button type="submit">Add</Button>
      <Button clickedHandler={cancelItem}>Cancel</Button>
    </form>
  );
};

export default Item;