import {connect} from 'react-redux';
import ItemForm from './ItemForm';
import {addItem} from '../../actions';

const mapStateToProps = (state) => {
  return {
    ItemDescriptionList: state.ItemDescriptionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
