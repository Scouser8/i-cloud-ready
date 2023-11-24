import { ADD_TO_CART, CHECKOUT } from "@/actions";
import { Pillar } from "@/types";

type ApplicationState = {
  cartItems: Pillar[];
  kitchenItems: Pillar[];
};
type Action = {
  type: String;
  payload: any;
};

export const initialState: ApplicationState = {
  cartItems: [],
  kitchenItems: [],
};

const reducer = (state: ApplicationState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case CHECKOUT:
      return {
        ...state,
        cartItems: [],
        kitchenItems: [...state.kitchenItems, ...state.cartItems],
      };

    default:
      return state;
  }
};

export default reducer;
