import styled from "styled-components";
import Icon from "@/components/images/icons/check.png";

export const Container = styled.section`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const SubContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
`;

export const BigTitle = styled.h1`
  font-size: 36px;
  color: #fff;
`;

export const CardsContainer = styled.div`
  width: 452px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-color: #fff;
`;

export const Cards = styled.div<{ $white: boolean }>`
  width: 452px;
  height: 450px;

  background-color: ${({ $white }) => ($white ? "#e4e4e4" : "#151515")};
  color: ${({ $white }) => ($white ? "#000" : "#fff")};

  padding: 32px;

  border-radius: 32px;
  box-shadow: inset 0 1px #ffffff0d;
`;

// head of the card

export const head = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid gray;
`;

export const title = styled.h1`
  font-size: 30px;
`;

export const subTitle = styled.span`
  font-size: 18px;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 200;
  color: gray;
`;

export const Button = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px 0px 30px 0px;
`;

// foot of the card

export const listeds = styled.ul`
  list-style-image: url("@/components/images/icons/check.png");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    width: 95%;
    margin-top: 15px;
  }
`;
