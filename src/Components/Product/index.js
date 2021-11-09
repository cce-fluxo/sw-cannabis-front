import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';


import { Container, AmountDiv, AddButton, ButtonsContainer } from './styles';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
export function Product({ product, handleEditCart, isInCartPage = false }) {
  const { cart } = useCart()
  const [amount, setAmount] = useState(() => {
    const existentProduct = cart.find(p => p.id === product.id)
    return existentProduct ? existentProduct.amount : 0
  });
  return (
    <Container>
      <div>
        <strong>{product.name}<span>{isInCartPage && `x${amount}`}</span></strong>
        <p>{product.formatedPrice}</p>
      </div>
      {
        isInCartPage ?
          <div>
            <ButtonsContainer>
              <button onClick={() => {
                setAmount(amount - 1)
                handleEditCart(product, amount -1)
              }
              }>
                <AiOutlineLine />
              </button>
              <button onClick={() => {
                setAmount(amount + 1)
                handleEditCart(product, amount + 1)
              }
              }>
                <AiOutlinePlus />
              </button>
            </ButtonsContainer>
          </div>
          :
          <div>
            <AmountDiv>
              <p>Quantidade</p>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </AmountDiv>
            <AddButton onClick={() => handleEditCart(product, amount)}>
              Adicionar
            </AddButton>

          </div>
      }
    </Container>

  );
}