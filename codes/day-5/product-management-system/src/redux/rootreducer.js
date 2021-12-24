import { combineReducers} from 'redux' 
import { fetchProductByIdReducer, fetchProductsReducer} from './reducers'

export const rootReducer = combineReducers({
    allProductsState: fetchProductsReducer,
    singleProductState: fetchProductByIdReducer
})