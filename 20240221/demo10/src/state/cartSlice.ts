import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../models/IProduct";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: Array<IProduct>()
    },
    reducers: {
        addToCart : (state, action) => {    
            // Si el producto no está en el carrito se agrega
            if (state.items.findIndex(p=> p.id === action.payload.id) === -1)
            {
                state.items = [{...action.payload, quantity: 1}, ...state.items]
            } 
            else
            {
                const p = state.items.find(p=> p.id === action.payload.id)
                if (p)
                {
                    p.quantity++
                }
            }
        },
        removeFromCart : (state, action) => {
            const p = state.items.find(p=> p.id === action.payload.id)
            if (p)
            {
                p.quantity--
                if (p.quantity === 0)
                {
                    state.items = state.items.filter(p => p.id !== action.payload.id)
                }
            }
        },
        clearCart : (state) => {
            state.items = []
        }
    }
})

export default cartSlice