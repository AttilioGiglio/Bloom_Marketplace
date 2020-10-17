import { ADD_PRODUCTS, GET_PRODUCTS, DELETE_PRODUCTS, UPDATE_PRODUCTS_CART } from '../../types/constants';

export default (state, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                tareas: [ ...state.tareas, action.payload],
            }
        case UPDATE_PRODUCTS_CART:
            const newItem = { id: action.payload.id, img: action.payload.img, name: action.payload.name, price: action.payload.price }
            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        default:
            return state;
    }
}
