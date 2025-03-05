import styled from "styled-components";

export const Container = styled.div<{ $isCentered?: boolean; color?: string }>`
  max-width: 800px;

  display: flex;
  flex-direction: column;

  h1,
  p {
    color: ${({ color }) => (color ? color : "#fff")};
    text-align: ${({ $isCentered }) => ($isCentered ? "center" : "left")};
  }
`;

export const Title = styled.h1`
  font-size: 60px;
`;

export const Text = styled.p`
  font-size: 20px;
`;
