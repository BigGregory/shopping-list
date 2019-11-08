import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS } from './constants';

const initialState = {
  ItemDescriptionList: []
}  
export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        ItemDescriptionList: state.ItemDescriptionList.concat(action.item)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        ItemDescriptionList: state.ItemDescriptionList.filter((item) => item !== action.item)
      }
    case REMOVE_ALL_ITEMS:
      return {
        ...state,
        ItemDescriptionList: state.ItemDescriptionList.slice(0, 0)
      }
    default: return state
  }
}