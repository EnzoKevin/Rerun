import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
  width: 100vw;
  height: fit-content + 200;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const Article = styled.section`
  max-width: 80%;
  height: fit-content;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  box-sizing: border-box;
`;

export const Title = styled.h1``;

export const H2 = styled.h2`
  font-size: 26.35px;
  margin: 0px 0px 1rem 0px;

  font-family: "Plus Jakarta Sans";
`;
export const P = styled.p`
  font-size: 17px;
`;

export const text = styled.div`
  width: 459px;
  padding-right: 1rem;
  text-wrap: balance;
  line-height: 1.33;

  color: #b2b2bb;
`;

export const NextImage = styled(Image)`
  width: 450px;
  height: 250px;

  border-radius: 20px;
`;
