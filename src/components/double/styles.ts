import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 350px;

  display: grid;
  grid-template-columns: 50% 50%;

  gap: 20px;

  @media screen and (max-width: 840px) {
    grid-template-columns: 100%;
    grid-template-rows: 40% 80%;
    row-gap: 100px;
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;

  color: #5d5d61;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 10px;
`;

export const Right = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 840px) {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1<{ $number?: boolean }>`
  font-size: ${({ $number }) => ($number ? "3rem" : "1.55rem")};
  color: ${({ $number }) => ($number ? "#39393b" : "#fff")};
`;

export const P = styled.p``;
