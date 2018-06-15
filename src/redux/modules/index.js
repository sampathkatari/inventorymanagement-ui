import { combineReducers } from 'redux';
import { supplier } from './supplier';

export * from './supplier';

const appReducer = combineReducers({
    supplier
})

const reducer = (state, action) => {
    if(action.type === 'CLEAR_REDUX_DATA') {
        state = {};
    }
    return appReducer(state, action);
}

export default reducer;