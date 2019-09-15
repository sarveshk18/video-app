import { combineReducers } from 'redux';
import operationReducer from './operationReducer'
import whistlistReducer from './whistlistReducer'

export default combineReducers({
    fetch: operationReducer,
    whistlist: whistlistReducer
});