import styled from "styled-components";

export const Container = styled.div<{
  $minWidth?: string;
}>`
  width: 100%;
  min-height: 100%;

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

export const SubContainer = styled.div<{
  $minHeight?: string;
}>`
  width: 100%;
  min-height: 100%;
  min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "")};

  overflow: auto;
`;
/* ${({ $minWidth }) => ($minWidth ? $minWidth : "fit-content")} */
export const Languages = styled.button<{ $actual: boolean }>`
  width: fit-content;
  min-height: 100%;

  padding: 10px 20px;

  border: 1px solid #fff;

  background-color: ${({ $actual }) => ($actual ? "#222222" : "inherit")};

  &:hover {
    background-color: #222222;
  }
`;

export const CodeBlock = styled.div<{
  $minHeight?: string;
}>`
  width: 100%;
  height: 100%;
  min-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "")};
  max-height: ${({ $minHeight }) => ($minHeight ? $minHeight : "")};

  display: flex;
  flex-direction: column;

  position: relative;
  border: 1px solid #fff;

  @media screen and (max-width: 840px) {
    max-height: 150px;
  }
`;

export const PreCode = styled.pre`
  width: 100%;
  min-height: 100%;
`;

export const Code = styled.code`
  width: 100%;
  min-height: 100%;
`;

export const BtnContainer = styled.div`
  width: 100%;

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
