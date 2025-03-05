import styled from "styled-components";

export const buttons = styled.button<{ $white?: boolean }>`
  width: fit-content;

  padding: 10px;

  color: ${({ $white }) => ($white ? "#000" : "#fff")};
  background-color: ${({ $white }) => ($white ? "#fff" : "#000")};
  border-radius: 10px;

  border: ${({ $white }) => ($white ? "1px solid #639" : "")};

  display: flex;
  justify-content: space-around;

  transition: 0.2s linear;

  &:hover {
    box-shadow: inset 0 1px #fff, 0 0 30px #fff3;
  }
`;
