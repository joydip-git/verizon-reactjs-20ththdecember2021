import { getProducts, getProduct } from '../services/productService'
import * as actionCreators from './actioncreators'

export const fetchProductsCallbackCreator = () => {
    return (dispatch) => {

        const initiateFetching = actionCreators.fetcProductsInitiateActionCreator()
        dispatch(initiateFetching)

        getProducts()
            .then(
                (resp) => {
                    const successAction = actionCreators.fetcProductsSuccessActionCreator(resp.data)
                    dispatch(successAction)
                },
                (err) => {
                    const failureAction = actionCreators.fetcProductsFailureActionCreator(err.message)
                    dispatch(failureAction)
                }
            )
    }
}

export const fetchProductByIdCallbackCreator = (id) => {

    return (dispatch) => {

        const initiateFetching = actionCreators.fetcProductByIdInitiateActionCreator()
        dispatch(initiateFetching)

        // setTimeout(() => {
        getProduct(id)
            .then(
                (resp) => {
                    const successAction = actionCreators.fetcProductByIdSuccessActionCreator(resp.data)
                    dispatch(successAction)
                },
                (err) => {
                    const failureAction = actionCreators.fetcProductByIdFailureActionCreator(err.message)
                    dispatch(failureAction)
                }
            )
        // }, 2000)
    }
}