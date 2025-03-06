import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

export const Left = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export const Title = styled.h1<{ $number: boolean }>`
  font-size: ${({ $number }) => ($number ? "3rem" : "1.55rem")};
  color: ${({ $number }) => ($number ? "#39393b" : "#fff")};
`;

export const P = styled.p``;

export const Right = styled.div`
  width: 100%;
`;
