import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 60px;

  padding: 0px 50px;
`;

export const ImageNext = styled(Image)`
  width: 1000px;
  height: 100%;
`;
