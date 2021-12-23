import data from "../data";

let initialState = {
  allProduct: data,
  cart: [],
  currentProduct: null,
};

const Reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    // GET CURRENT PRODUCT CASE
    case "getCurrentProduct":
      return {
        ...state,
        currentProduct: action.payload,
      };

    // ADD TO CART CASE
    case "addCart":
      const inCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };

    // INCREAMENT THE PRODUCT CASE
    case "incCart":
      const isCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: isCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };

    // DECREAMENT THE PRODUCT CASE
    case "decCart":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    // REMOVE FROM CART
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default Reducer;
