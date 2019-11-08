import {connect} from 'react-redux';
import ItemsCounter from './ItemsCounter';
import {removeAllItems} from '../../actions';

const mapStateToProps = (state) => {
  return {
    ItemDescriptionList: state.ItemDescriptionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {    
    removeAllItems: () => dispatch(removeAllItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCounter);
