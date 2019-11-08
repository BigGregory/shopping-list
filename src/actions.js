import * as constants from './constants';

export const addItem = (item) => {
  return {
    type: constants.ADD_ITEM,
    item: item
  }
}

export const removeItem = (item) => {
  return {
    type: constants.REMOVE_ITEM,
    item: item
  }
}

export const removeAllItems = () => {
  return {
    type: constants.REMOVE_ALL_ITEMS
  }
}
