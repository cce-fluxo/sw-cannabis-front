import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';


import {Container, AmountDiv, AddButton } from './styles';

export function Product({ product, handleAddToCart }) {
  const {cart} = useCart()
  const [amount, setAmount] = useState(() => {
    const existentProduct = cart.find(p => p.id === product.id)
    return existentProduct ? existentProduct.amount : 0
  });
  return (
    <Container>
      <div>
        <strong>{product.name}</strong>
        <p>{product.price}</p>
      </div>
      <div>
        <AmountDiv>
          <p>Quantidade</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </AmountDiv>
        <AddButton onClick={() => handleAddToCart(product, amount)}>
          Adicionar
        </AddButton>

      </div>
    </Container>

  );
}