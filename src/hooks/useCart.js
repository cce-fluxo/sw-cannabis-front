import { useContext } from "react";
import { CartContext } from "../Storage/cart-context";

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};