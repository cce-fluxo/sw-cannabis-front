import React from 'react';

import Header from '../../../Components/Header';
import { Product } from '../../../Components/Product';
import { useCart } from '../../../hooks/useCart';
import { ContainerBg, ProductsContainer, Title } from './styles';

export default function Produtos() {
  const { cart, setCart } = useCart()
  const products = [
    {
      id: "1",
      name: "Produto 1",
      price: "R$ 100,00",
    },
    {
      id: "2",
      name: "Produto 2",
      price: "R$ 200,00",
    }

  ]

  const handleAddToCart = (product, amount) => {
    const numericAmount = amount === ""? 0: parseInt(amount)
    const newCart = cart.filter(p => p.id !== product.id)
    if (numericAmount === 0) {
      setCart(newCart)
      return;
    }
    setCart([...newCart, { ...product, amount: numericAmount }])
  }
  return (
    <>
      <Header />
      <ContainerBg>
        <Title>Produtos</Title>
        <ProductsContainer>
          {
            products.map((product) => (
              <Product key={product.id} handleAddToCart={handleAddToCart} product={product}/>
                
            ))
          }
        </ProductsContainer>
      </ContainerBg>
    </>
  );
}

