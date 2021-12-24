import * as actionTypes from './actiontypes'

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

export const fetchProductsReducer = (state = initialProductListState, action) => {
    let newState;

    switch (action.type) {

        case actionTypes.FETCH_PRODUCTS_AND_SAVE_INITIATE:
            newState = {
                ...state,
                records: [],
                fetchStatus: false,
                errorMessage: ''
            }
            break;

        case actionTypes.FETCH_PRODUCTS_AND_SAVE_SUCCESS:
            newState = {
                ...state,
                records: action.payload,
                fetchStatus: true,
                errorMessage: ''
            }
            break;

        case actionTypes.FETCH_PRODUCTS_AND_SAVE_FAILURE:
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

export const fetchProductByIdReducer = (state = initialViewProductState, action) => {
    let newState;

    switch (action.type) {

        case actionTypes.FETCH_PRODUCT_BY_ID_AND_SAVE_INITIATE:
            newState = {
                ...state,
                loading: true,
                errorMessage: '',
                productInfo: undefined
            }
            break;

        case actionTypes.FETCH_PRODUCT_BY_ID_AND_SAVE_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errorMessage: '',
                productInfo: action.payload
            }
            break;

        case actionTypes.FETCH_PRODUCT_BY_ID_AND_SAVE_FAILURE:
            newState = {
                ...state,
                loading: false,
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