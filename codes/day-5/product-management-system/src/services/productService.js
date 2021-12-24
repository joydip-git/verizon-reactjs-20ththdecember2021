import Axios from 'axios'

const baseUrl = 'http://127.0.0.1:8081/products'

export const getProducts = () => {
    return Axios.get(baseUrl)
}

export const getProduct = (pid) => {
    return Axios.get(`${baseUrl}/${pid}`)
}

export const deleteProduct = (pid) => {
    return Axios.delete(`${baseUrl}/${pid}`)
}

export const addProduct = (product) => {
    return Axios.post(baseUrl, product)
}

export const updateProduct = (product) => {
    return Axios.put(baseUrl, product)
}

