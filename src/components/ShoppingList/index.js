import { connect } from 'react-redux';
import ShoppingList from './ShoppingList';
import { addItem, removeItem, removeAllItems } from '../../actions';

const mapStateToProps = (state) => {
  return {
    itemList: state.itemList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (event, item) => {
      event.preventDefault();
      dispatch(addItem(item));
    },
    removeItem: (item) => dispatch(removeItem(item)),
    removeAllItems: () => dispatch(removeAllItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
