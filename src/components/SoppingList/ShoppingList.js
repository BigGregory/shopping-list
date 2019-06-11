import React, { Component } from 'react';
import styles from './ShoppingList.module.css';
import Item from '../Item/Item';
import ItemDescription from '../ItemDescription/ItemDescription';
import ItemsCounter from '../ItemsCounter/ItemsCounter'

class ShoppingList extends Component {

  state = {
    itemList: [],
    item: {
      name: '',
      description: '',
      quantity: 0
    }
  }  

  inputList = []

  nameChangeHandler = (event) => {
    const {item} = this.state;
    item.name = event.target.value;
    this.setState({item: item});
    this.putInputsForClearing(event.target);
  }  

  descriptionChangeHandler = (event) => {
    const {item} = this.state;
    item.description = event.target.value;
    this.setState({item: item});
    this.putInputsForClearing(event.target);
  }

  quantityChangeHandler = (event) => {
    const {item} = this.state;
    item.quantity = Number(event.target.value);
    this.setState({item: item});
    this.putInputsForClearing(event.target);
  }

  addItemHandler = (event) => {
    event.preventDefault();
    const item = Object.assign({}, this.state.item);
    const {itemList} = this.state;
    itemList.push(item);
    this.setState({itemList: itemList});
    this.clearInputs(this.inputList);
    let emptyItem = this.setDefaultItem();
    this.setState({item: emptyItem});
  }

  setDefaultItem = () => {
    return {
      name: '',
      description: '',
      quantity: 0
    }
  }  

  removeAllHandler = () => {
    this.setState({itemList: []});
  }

  removeItemHandler = (item) => {
    let {itemList} = this.state;
    itemList = itemList.filter((list) => {
      return list !== item;
    })
    this.setState({itemList: itemList});
  }

  putInputsForClearing = (input) => {
    if (!this.inputList.includes(input)) {
      this.inputList.push(input);
    }
  }
  
  clearInputs = (inputs) => {
    inputs.map((input) => input.value = '');
  }

  render() {
    const {itemList} = this.state;
    return (
      <div className={styles.ShoppingList}>
        <h1>Shopping List</h1> 
        <div className={styles.Flex}>
          <div>
              <ItemsCounter removeAll={this.removeAllHandler} itemList={itemList}/>
              {itemList.length > 0 && itemList.map((listItem) => 
                <ItemDescription 
                  item={listItem} 
                  removeItem={() => this.removeItemHandler(listItem)} // TODO => Done
                  key={listItem.name+listItem.description}/>)}
          </div> 
          <div>
          <Item           
            nameChange={this.nameChangeHandler}
            descriptionChange={this.descriptionChangeHandler}
            quantityChange={this.quantityChangeHandler}
            addItem={this.addItemHandler}
            cancelItem={() => this.clearInputs(this.inputList)}
           />
          </div>  
        </div>               
          
      </div>        
      
    );
  }
}

export default ShoppingList; 