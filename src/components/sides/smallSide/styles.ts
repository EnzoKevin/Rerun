"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div<{ $visible: boolean }>`
  width: 100%;
  background-color: ${({ $visible }) => ($visible ? "#171717" : "inherit")};

  position: relative;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

export const Arrow = styled(Image)<{ $visible: boolean }>`
  transition: all 0.3s linear;
  transform: ${({ $visible }) => ($visible ? "rotate(180deg)}" : "")};
`;

export const Hidden = styled.div<{ $visible: boolean }>`
  height: fit-content;
  max-height: ${({ $visible }) => ($visible ? "fit-content" : "0")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  padding: ${({ $visible }) => ($visible ? "10px 16px" : "0 16px")};
  transition: all 0.2s ease-in-out;
`;

export const ImageNext = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
