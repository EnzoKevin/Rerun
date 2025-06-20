import styled from "styled-components";

interface Button {
  white?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const ButtonGradient = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px 20px;

  border-radius: 15px;
  background: linear-gradient(
    90deg,
    rgba(65, 83, 232, 1) 0%,
    rgba(9, 9, 121, 1) 29%,
    rgba(249, 0, 68, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  transition: ease 0.3s all;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const BContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const buttons = styled.button<{ white?: string }>`
  width: fit-content;

  padding: 10px;

  color: ${({ white }) => (white ? "#fff" : "#000")};
  background-color: ${({ white }) => (white ? "#000" : "#fff")};
  border-radius: 10px;

  border: ${({ white }) => (white ? "1px solid #639" : "")};

  display: flex;
  justify-content: space-around;

  transition: 0.2s linear;

  &:hover {
    box-shadow: inset 0 1px #fff, 0 0 30px #fff3;
  }
`;

export const Nota = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 10px;
`;
