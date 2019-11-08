import React, {Component} from 'react';
import styles from './ItemForm.module.css';
import Button from '../Button/Button';


class ItemForm extends Component {
  state = {
    item: {
      name: '',
      description: '',
      quantity: 0
    },
    inputList: []
  } 

  nameChangeHandler = (event) => {
    const item = Object.assign({}, this.state.item);
    item.name = event.target.value;
    this.setState({item: item});
    this.putInputsForClearing(event.target);
  }  

  descriptionChangeHandler = (event) => {
    const item = Object.assign({}, this.state.item);
    item.description = event.target.value;
    this.setState({item: item});
    this.putInputsForClearing(event.target);
  }

  quantityChangeHandler = (event) => {
    const item = Object.assign({}, this.state.item);
    item.quantity = Number(event.target.value);
    this.setState({item: item});
    this.putInputsForClearing(event.target);
  }

  putInputsForClearing = (input) => {
    if (!this.state.inputList.includes(input)) {
      this.state.inputList.push(input);
    }
  }
  
  clearInputs = (inputs) => {
    inputs.map((input) => input.value = '');
  }

  render() {
    const {item, inputList} = this.state;
    const {addItem} = this.props;
    return (
      <form className={styles.ItemForm} onSubmit={(event) => {
        event.preventDefault();
        this.clearInputs(inputList);
        addItem(item);
      }}>
        <label htmlFor="name">Name *</label>
        <input type="text" placeholder="Enter Name" id="name" onChange={this.nameChangeHandler} required></input>
        <label htmlFor="description">Description</label>
        <textarea id="description" onChange={this.descriptionChangeHandler}></textarea>
        <label htmlFor="quantity">Quantity *</label>
        <input type="number" id="quantity" onChange={this.quantityChangeHandler} required></input>
        <div className={styles.Separator}></div>
        <Button type="submit">Add</Button>
        <Button clickedHandler={() => this.clearInputs(inputList)}>Cancel</Button>
      </form>
    );
  }
}

export default ItemForm;