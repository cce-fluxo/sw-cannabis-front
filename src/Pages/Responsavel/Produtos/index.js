import React from 'react';

import Header from '../../../Components/Header';
import { Product } from '../../../Components/Product';
import { useCart } from '../../../hooks/useCart';
import { ContainerBg, ProductsContainer, Title } from './styles';

export default function Produtos() {
  const { handleEditCart } = useCart()
  const products = [
    {
      id: "1",
      name: "Produto 1",
      price: 100,
      formatedPrice: "R$ 100,00",
    },
    {
      id: "2",
      name: "Produto 2",
      price: 200,
      formatedPrice: "R$ 200,00",
    }

  ]

  return (
    <>
      <Header />
      <ContainerBg>
        <Title>Produtos</Title>
        <ProductsContainer>
          {
            products.map((product) => (
              <Product key={product.id} handleEditCart={handleEditCart} product={product}/>
                
            ))
          }
        </ProductsContainer>
      </ContainerBg>
    </>
  );
}

