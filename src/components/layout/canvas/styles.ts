import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 150px;
  position: relative;
`;

export const VideoContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1700px) {
    flex-wrap: wrap-reverse;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 40px;
  width: 1200px;
  height: 400px;

  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;

export const Hidden = styled.div`
  visibility: visible;

  @media screen and (max-width: 664px) {
    visibility: hidden;
  }
`;
