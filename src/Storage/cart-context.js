import {useState, createContext} from 'react';

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const handleEditCart = (product, amount) => {
    const numericAmount = amount === "" ? 0 : parseInt(amount)
    const newCart = cart.filter(p => p.id !== product.id)
    if (numericAmount === 0) {
      setCart(newCart)
      return;
    }
    setCart([...newCart, { ...product, amount: numericAmount }])
  }

  return (
    <CartContext.Provider value={{cart, handleEditCart}}>
      {children}
    </CartContext.Provider>
  );
};
