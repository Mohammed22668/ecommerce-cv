import { createContext, Dispatch, SetStateAction } from "react";

interface CartContextType {
  cart: any[] | null; // Adjust the type according to your actual cart structure
  setCart: Dispatch<SetStateAction<any[]>>;
}

export const CartContext = createContext<CartContextType | null>(null);
