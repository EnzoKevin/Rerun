import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 250px;

  display: flex;
  gap: 20px;
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

export const Title = styled.h1<{ $number?: boolean }>`
  font-size: ${({ $number }) => ($number ? "3rem" : "1.55rem")};
  color: ${({ $number }) => ($number ? "#39393b" : "#fff")};
`;

export const P = styled.p``;

export const Right = styled.div`
  width: 50%;
  height: 100%;
`;
