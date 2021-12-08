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
      image: "https://s2.glbimg.com/bsDgOxQiSHlQU_YzR2RLnpW0x7w=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/03/29/maconha2.jpg"
    },
    {
      id: "2",
      name: "Produto 2",
      price: 200,
      formatedPrice: "R$ 200,00",
      image: "https://s2.glbimg.com/bsDgOxQiSHlQU_YzR2RLnpW0x7w=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/03/29/maconha2.jpg"
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

