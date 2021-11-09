import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';


import { Container, AmountDiv, AddButton, ButtonsContainer, Image, Price, LeftContent, RightContent } from './styles';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
export function Product({ product, handleEditCart, isInCartPage = false }) {
  const { cart } = useCart()
  const [amount, setAmount] = useState(() => {
    const existentProduct = cart.find(p => p.id === product.id)
    return existentProduct ? existentProduct.amount : 0
  });
  return (
    <Container>
      <LeftContent>
        <Image src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}<span>{isInCartPage && `x${amount}`}</span></h3>
          <Price>{product.formatedPrice}</Price>
        </div>
      </LeftContent>
      {
        isInCartPage ?
          <RightContent>
            <ButtonsContainer>
              <button onClick={() => {
                setAmount(amount - 1)
                handleEditCart(product, amount - 1)
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
          </RightContent>
          :
          <RightContent>
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

          </RightContent>
      }
    </Container>

  );
}