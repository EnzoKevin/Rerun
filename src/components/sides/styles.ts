import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 68%;

  display: flex;
  flex-direction: column;

  color: #fff;
`;

export const SubContainer = styled.div`
  width: 100%;

  display: flex;

  gap: 50px;
`;

export const options = styled.div`
  width: 100%;

  display: flex;
  margin-bottom: 15px;
`;

export const option = styled.button<{ $actual: boolean }>`
  width: 25%;
  height: 40px;

  text-align: center;
  font-weight: 500;
  border-bottom: ${({ $actual }) =>
    $actual ? "1px solid #fff" : "1px solid transparent"};

  transition: border-color 0.2s ease-in-out;

  cursor: pointer;
`;

export const Figure = styled.figure`
  width: 40%;
`;

export const ImageNext = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 26px;
`;

export const P = styled.p`
  margin: 10px 0px 20px 0px;
`;
