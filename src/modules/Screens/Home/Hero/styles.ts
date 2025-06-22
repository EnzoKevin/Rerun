import styled from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

export const ButtonGradient = styled.button`
  max-width: 480px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 70px;

  padding: 5px 20px;

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
  margin-bottom: 1rem;
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 1.25rem;
  font-size: calc(2rem + 1vw);
  letter-spacing: -0.015em;
  word-spacing: 0.03em;
  white-space: balance;
  animation: svelte-wc1y15-fade-up 0.3s 0.3s ease-out both;
`;

export const Text = styled.div`
  max-width: 38rem;
  text-align: center;
  margin-bottom: 1.7rem;
  font-size: 17px;
  font-weight: 400;
  animation: svelte-wc1y15-fade-up 0.3s 0.35s ease-out both;
  color: #b2b2bb;
`;

export const BContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
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
