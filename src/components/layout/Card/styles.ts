"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 326px;
  height: 390px;
  border-radius: 10px;

  background-color: #171717;
  box-shadow: inset 0 1px #ffffff0d;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  padding: 30px 15px;
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
  font-size: 15px;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
`;
