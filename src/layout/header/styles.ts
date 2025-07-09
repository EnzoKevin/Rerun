import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: #fff;
  background-color: #101010;
  border-bottom: 1px solid #987;
`;

export const ul = styled.ul`
  width: 30vw;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 20px;

  li {
    margin: 0px 0px 5px 0px;
    display: inline;
  }
`;
