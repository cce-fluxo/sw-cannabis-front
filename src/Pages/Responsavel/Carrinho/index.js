import React from 'react';

import Header from '../../../Components/Header';
import { Product } from '../../../Components/Product';
import { useCart } from '../../../hooks/useCart';
import { ContainerBg, ProductsContainer, Title, Total } from './styles';

export default function Produtos() {
  const { cart, handleEditCart } = useCart()

  

  const handleSubmit = () => {
    alert('Pedido realizado com sucesso!')
  }

  return (
    <>
      <Header />
      <ContainerBg>
        <Title>Carrinho</Title>
        <ProductsContainer>
          {
            cart.map((product) => (
              <Product key={product.id} handleEditCart={handleEditCart} product={product} isInCartPage />

            ))
          }
          <Total>
            <p>Total: </p>
            <div>
              R$ {cart.reduce((total, product) => total + product.price * product.amount, 0).toFixed(2).replace(".", ",")}
              <button onClick={handleSubmit}>Solicitar compra</button>
            </div>
          </Total>
        </ProductsContainer>

      </ContainerBg>
    </>
  );
}

