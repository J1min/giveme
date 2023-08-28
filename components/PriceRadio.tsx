import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface AmountSelectorProps {
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}

const AmountSelector = ({ price, setPrice }: AmountSelectorProps) => {
  const handleAmountSelect = (price: number) => {
    setPrice(price);
  };

  return (
    <Container>
      <AmountTitle>금액 선택</AmountTitle>
      <AmountList>
        {[5000, 10000, 20000, 50000].map((amount, idx) => (
          <AmountItem
            key={idx}
            className={price === amount ? "selected" : ""}
            onClick={() => handleAmountSelect(amount)}
          >
            {amount.toLocaleString()} 원
          </AmountItem>
        ))}
      </AmountList>
    </Container>
  );
};

export default AmountSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AmountList = styled.ul`
  display: flex;
  list-style-type: none;
  color: #a1c4fd;
  padding: 0;
  margin: 0;
`;

const AmountItem = styled.li`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #a1c4fd;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #a1c4fd;
    color: white;
  }
`;

const AmountTitle = styled.h2`
  margin: 0;
`;
