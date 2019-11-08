import {ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS} from '../constants';
import {addItem, removeItem, removeAllItems} from '../actions';

describe('Shopping list actions', () => {
  it('should create action addItem', () => {
    const action = {name: 'Potato', quantity: 3};
    const expectedAction = {
      type: ADD_ITEM,
      item: action
    };
    expect(addItem(action)).toEqual(expectedAction);
  });

  it('should create action removeItem', () => {
    const action = {name: 'Potato', quantity: 3};
    const expectedAction = {
      type: REMOVE_ITEM,
      item: action
    };
    expect(removeItem(action)).toEqual(expectedAction);
  });

  it('should create action removeAllItems', () => {
    const action = REMOVE_ALL_ITEMS;
    const expectedAction = {
      type: REMOVE_ALL_ITEMS,
    };
    expect(removeAllItems(action)).toEqual(expectedAction);
  });

});
