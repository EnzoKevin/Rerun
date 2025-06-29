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
  overflow-x: auto;

  display: flex;
  justify-content: center;
  gap: 10px;

  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 40px;
  width: 400px;
  height: 200px;

  img {
    object-fit: contain;
  }
`;
