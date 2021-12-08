import {useState, createContext} from 'react';

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleEditCart = (product, amount) => {
    const cartCopy = [...cart];
    const numericAmount = amount === "" ? 0 : parseInt(amount)
    
    if (numericAmount === 0) {
      const newCart = cartCopy.filter(p => p.id !== product.id)
      setCart(newCart)
      return;
    }
    const index = cartCopy.findIndex(p => p.id === product.id)
    if (index !== -1) {
      cartCopy[index].amount = numericAmount
      setCart(cartCopy)
    }
    else {
      cartCopy.push({ ...product, amount: numericAmount })
      setCart(cartCopy)
    }
    
  }

  return (
    <CartContext.Provider value={{cart, handleEditCart}}>
      {children}
    </CartContext.Provider>
  );
};
