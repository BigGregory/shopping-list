import React from 'react';
import styles from './ShoppingList.module.css';
import ItemForm from '../ItemForm';
import ItemDescriptionList from '../ItemDescriptionList';
import ItemsCounter from '../ItemsCounter';

const ShoppingList = () => {
  return (
    <div className={styles.ShoppingList}>
      <h1>Shopping List</h1> 
      <div className={styles.Flex}>
        <div>
          <ItemsCounter />          
          <ItemDescriptionList />             
        </div> 
        <div>
          <ItemForm />
        </div>  
      </div>               
        
    </div>        
    
  );
} 

export default ShoppingList; 