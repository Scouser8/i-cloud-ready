import { Pillar } from "@/types";

export const ADD_TO_CART = "ADD_TO_CART";
export const CHECKOUT = "CHECKOUT";

const addToCart = (pillar: Pillar) => ({
  type: ADD_TO_CART,
  payload: pillar,
});

const checkout = () => ({
  type: CHECKOUT,
});

export { addToCart, checkout };
