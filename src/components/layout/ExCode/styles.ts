import styled from "styled-components";
import { inherits } from "util";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
`;

export const Options = styled.div`
  width: 100%;
  height: 50px;

  border: 1px solid #fff;
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;
`;

export const Languages = styled.button<{ $actual: boolean }>`
  width: fit-content;
  height: 100%;

  padding: 10px 20px;

  border: 1px solid #fff;

  background-color: ${({ $actual }) => ($actual ? "#222222" : "inherit")};

  &:hover {
    background-color: #222222;
  }
`;

export const CodeBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  border: 1px solid #fff;
`;

export const PreCode = styled.pre`
  width: 100%;
  height: 100%;
`;

export const Code = styled.code`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  margin-top: 20px;
`;

export const Icon = styled.figure`
  width: 30px;
  height: 30px;

  position: absolute;
  right: 30px;
  top: 10px;

  cursor: pointer;

  background-color: transparent;

  padding: 7px;
  border-radius: 7px;

  transition: 0.6s linear;

  ${CodeBlock}:hover & {
    background-color: white;
  }

  &:hover {
    box-shadow: inset 0 1px #fff, 0 0 30px #fff3;
  }
`;
