import { combineReducers } from 'redux';
import operationReducer from './operationReducer'

export default combineReducers({
    fetch: operationReducer
});