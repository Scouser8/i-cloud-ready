import { Pillar } from "@/types";

export const UPDATE_CART = "UPDATE_CART";
export const CHECKOUT = "CHECKOUT";

const updateCart = (pillars: Pillar[]) => ({
  type: UPDATE_CART,
  payload: pillars,
});

const checkout = (pillars: Pillar[]) => ({
  type: CHECKOUT,
  payload: pillars,
});

export { updateCart, checkout };
