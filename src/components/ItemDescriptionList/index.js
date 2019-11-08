import {connect} from 'react-redux';
import ItemDescriptionList from './ItemDescriptionList';
import {removeItem} from '../../actions';

const mapStateToProps = (state) => {
  return {
    ItemDescriptionList: state.ItemDescriptionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDescriptionList);
