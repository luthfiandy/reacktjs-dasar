import toolkit from "@reduxjs/toolkit";

const {configureStore, createAction, createReducer} = toolkit;

//action
const addToCart = createAction("ADD_TO_CART");

//reducer = buat misah state mana yang mau dipake
const cartReducer = createReducer ([], (builder) => {

    // buat function builder untuk menjalankan metod ke switch case
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

//reducer kedua
const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
    },
});
console.log("create store : ", store.getState());

// subcribe == buat mantau perubahannnya
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

//action/dispacth
const action = {type : "ADD_TO_CART", payload: {id:1, qty:5}};
store.dispatch(action);

//cara kedua
//store.dispatch(addToCart({ id:1, qty:5}));

store.dispatch(login());