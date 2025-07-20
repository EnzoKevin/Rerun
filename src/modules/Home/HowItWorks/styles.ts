import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 60px;

  padding: 0px 50px;

  @media screen and (max-width: 840px) {
    gap: 250px;
  }
`;

export const ImageNext = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const CodeContainer = styled.div`
  /*   width: 390px;*/
  height: 77%;
  width: 100%;
`;

export const dContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > :not(:first-child) {
    margin-top: 20px;
  }

  @media screen and (max-width: 840px) {
    & > :not(:first-child) {
      margin-top: 250px;
    }
  }
`;
