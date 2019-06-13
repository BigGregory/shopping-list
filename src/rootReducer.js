import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS } from './constants';

const initialState = {
  itemList: []
  // item: {
  //   name: '',
  //   description: '',
  //   quantity: 0
  // }
}  
export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: state.itemList.concat(action.item)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        itemList: state.itemList.filter((item) => item !== action.item)
      }
    case REMOVE_ALL_ITEMS:
      return {
        ...state,
        itemList: state.itemList.slice(0, 0)
      }
    default: return state
  }
}