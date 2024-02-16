import React from 'react';
import { BasketContainer, Item, Items } from './styled';
import { SelectedBet } from '../../contexts/bet';

interface Props {
    items: SelectedBet[];
    totalPrice: number;
}

const BasketComponent = ({ items = [], totalPrice = 0 }: Props) => {
  return (
    <BasketContainer>
      {items.length ? 
        <Items>
          {items?.map((item) => <Item key={item.id}>4 <b>-</b> Kod:{item.code} <b>-</b> Maç: {item.match} <b>-</b> <b>Oran: {item.rate}</b></Item>)}
        </Items> : null}
      <Item>Toplam Tutar: {totalPrice} TL</Item>
    </BasketContainer>
  );
};

export default BasketComponent;