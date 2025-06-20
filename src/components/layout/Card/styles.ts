import styled from "styled-components";

export const Container = styled.div`
  min-width: 326px;
  max-width: 326px;
  height: 390px;
  border-radius: 24px;
  background: #171717;
  box-shadow: inset 0 1px #ffffff0d;
  padding: 34px 1rem;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.55rem;
`;

export const P = styled.p`
  font-size: 14px;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
`;
