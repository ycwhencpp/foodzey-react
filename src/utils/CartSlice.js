import { createSlice } from "@reduxjs/toolkit"
const cart =  createSlice({
    name: 'cart',
    initialState: {
        items:['a','b'],
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            let index =  state.items.findIndex(item => item === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearAll: (state) => {
            state.items = [];
        },
    }
})
export const {addItem, removeItem, clearAll} = cart.actions;
export default cart.reducer;