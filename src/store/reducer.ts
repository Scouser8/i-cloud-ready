import { UPDATE_CART, CHECKOUT } from "@/actions";
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
    case UPDATE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case CHECKOUT:
      return {
        ...state,
        cartItems: [],
        kitchenItems: [...state.kitchenItems, ...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
