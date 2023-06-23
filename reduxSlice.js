import toolkit from "@reduxjs/toolkit"

const { configureStore , createSlice} = toolkit;

//cara simpel ngegabungin reducer ama action
//reducer+actions

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action. payload);
        },
    },
});


//store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        login: cartSlice.reducer,
    },
});
console.log("create store : ", store.getState());

//subscribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

//dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 10}));