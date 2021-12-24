import * as actionTypes from './actiontypes'

export const fetcProductsInitiateActionCreator = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_AND_SAVE_INITIATE
    }
}

export const fetcProductsSuccessActionCreator = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_AND_SAVE_SUCCESS,
        payload: data
    }
}

export const fetcProductsFailureActionCreator = (errormsg) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_AND_SAVE_FAILURE,
        payload: errormsg
    }
}

export const fetcProductByIdInitiateActionCreator = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_BY_ID_AND_SAVE_INITIATE
    }
}

export const fetcProductByIdSuccessActionCreator = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT_BY_ID_AND_SAVE_SUCCESS,
        payload: data
    }
}

export const fetcProductByIdFailureActionCreator = (errormsg) => {
    return {
        type: actionTypes.FETCH_PRODUCT_BY_ID_AND_SAVE_FAILURE,
        payload: errormsg
    }
}