const { createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')
const Axios = require('axios')
//state
const initialProductListState = {
    records: [],
    fetchStatus: false,
    errorMessage: ''
}
const initialViewProductState = {
    loading: true,
    errorMessage: '',
    productInfo: undefined
}

//action types
const FETCH_PRODUCTS_AND_SAVE_SUCCESS = 'FETCH_PRODUCTS_AND_SAVE_SUCCESS'
const FETCH_PRODUCTS_AND_SAVE_FAILURE = 'FETCH_PRODUCTS_AND_SAVE_FAILURE'

const FETCH_PRODUCT_BY_ID_AND_SAVE_SUCCESS = 'FETCH_PRODUCT_BY_ID_AND_SAVE_SUCCESS'
const FETCH_PRODUCT_BY_ID_AND_SAVE_FAILURE = 'FETCH_PRODUCT_BY_ID_AND_SAVE_FAILURE'

//actions/action creators
const fetcProductsSuccessActionCreator = (data) => {
    return {
        type: FETCH_PRODUCTS_AND_SAVE_SUCCESS,
        payload: data
    }
}

const fetcProductsFailureActionCreator = (errormsg) => {
    return {
        type: FETCH_PRODUCTS_AND_SAVE_FAILURE,
        payload: errormsg
    }
}

const fetcProductByIdSuccessActionCreator = (data) => {
    return {
        type: FETCH_PRODUCT_BY_ID_AND_SAVE_SUCCESS,
        payload: data
    }
}

const fetcProductByIdFailureActionCreator = (errormsg) => {
    return {
        type: FETCH_PRODUCT_BY_ID_AND_SAVE_FAILURE,
        payload: errormsg
    }
}

const fetchProductsReducer = (state = initialProductListState, action) => {
    let newState;

    switch (action.type) {
        case FETCH_PRODUCTS_AND_SAVE_SUCCESS:
            newState = {
                ...state,
                records: action.payload,
                fetchStatus: true,
                errorMessage: ''
            }
            break;

        case FETCH_PRODUCTS_AND_SAVE_FAILURE:
            newState = {
                ...state,
                records: [],
                fetchStatus: true,
                errorMessage: action.payload
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }

    return newState;
}

const fetchProductByIdReducer = (state = initialViewProductState, action) => {
    let newState;

    switch (action.type) {
        case FETCH_PRODUCT_BY_ID_AND_SAVE_SUCCESS:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                productInfo: action.payload
            }
            break;

        case FETCH_PRODUCT_BY_ID_AND_SAVE_FAILURE:
            newState = {
                ...state,
                loading: true,
                errorMessage: action.paylod,
                productInfo: undefined
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }

    return newState;
}

const rootReducer = combineReducers({
    allProductsState: fetchProductsReducer,
    singleProductState: fetchProductByIdReducer
})

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
)

//component code
Axios.get('http://127.0.0.1:8081/products')
    .then(
        (resp) => {
            const successAction = fetcProductsSuccessActionCreator(resp.data)
            store.dispatch(successAction)
        },
        (err) => {
            const failureAction = fetcProductsFailureActionCreator(err.message)
            store.dispatch(failureAction)
        }
    )

//component code
Axios.get('http://127.0.0.1:8081/products/1')
    .then(
        (resp) => {
            const successAction = fetcProductByIdSuccessActionCreator(resp.data)
            store.dispatch(successAction)
        },
        (err) => {
            const failureAction = fetcProductByIdFailureActionCreator(err.message)
            store.dispatch(failureAction)
        }
    ) 
