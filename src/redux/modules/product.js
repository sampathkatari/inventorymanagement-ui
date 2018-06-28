import fetch from 'isomorphic-fetch';
import { API_URL } from '../../config';

const initialState = {
    list: []
};

const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => {
    return (dispatch, state) => {
        let fetchOptions = {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }
        fetch(`${API_URL}product`, fetchOptions)
        .then(response => {
            return response.json()
        })
        .then(response => {
            dispatch({ type: GET_PRODUCTS, response })
        })
    }
}

export const createProduct= (product, callback) => {
    return (dispatch, state) => {
        let fetchOptions = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(product)
        }
        fetch(`${API_URL}product`, fetchOptions)
        .then(response => {
            dispatch(getProducts())  
            callback()
        })
    }
}
export function product(product = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                list: action.response
            }
        default:
            return product;
    }
}