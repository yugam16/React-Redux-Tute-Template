import { showRoute, cartItem } from './Reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    cartItem,
    showRoute
})
