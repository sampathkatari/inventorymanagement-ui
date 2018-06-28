import { combineReducers } from 'redux';
import { supplier } from './supplier';
import { brand } from './brand';
import { product } from './product';

export * from './supplier';
export * from './brand';
export * from './product';

const appReducer = combineReducers({
    supplier,
    brand,
    product
})

const reducer = (state, action) => {
    if(action.type === 'CLEAR_REDUX_DATA') {
        state = {};
    }
    return appReducer(state, action);
}

export default reducer;