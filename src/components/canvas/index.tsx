"use client";

import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import canvaImg from "@/assets/canvas.png";
import Xarrow, { Xwrapper } from "react-xarrows";

export default function Canvas() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => setSize(window.innerWidth);

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <S.Container>
      <Xwrapper>
        <>
          <S.VideoContainer>
            <video
              id={`1`}
              src={`/rerun1.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              id={`2`}
              src={`/rerun2.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              id={`3`}
              src={`/rerun3.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              id={`4`}
              src={`/rerun4.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              id={`5`}
              src={`/rerun5.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
          </S.VideoContainer>
        </>

        <S.ImageContainer>
          <Image id="image" src={canvaImg} alt="Imagem central" />
        </S.ImageContainer>
        <S.Hidden>
          <Xarrow
            start={"1"}
            end={"image"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            dashness
            strokeWidth={2}
            color="gray"
          />
          <Xarrow
            start={"2"}
            end={"image"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            dashness
            strokeWidth={2}
            color="gray"
          />
          <Xarrow
            start={"3"}
            end={"image"}
            startAnchor={size <= 995 ? "right" : "bottom"}
            endAnchor={"top"}
            dashness
            strokeWidth={2}
            color="gray"
            path={size <= 995 ? "grid" : "smooth"}
          />
          <Xarrow
            start={"4"}
            end={"image"}
            startAnchor={size <= 995 ? "left" : "bottom"}
            endAnchor={"top"}
            dashness
            strokeWidth={2}
            color="gray"
            path={size <= 1324 ? "grid" : "smooth"}
            gridBreak={size <= 1324 && size >= 995 ? "59%" : ""}
          />
          <Xarrow
            start={"5"}
            end={"image"}
            startAnchor={"bottom"}
            endAnchor={"top"}
            dashness
            strokeWidth={2}
            color="gray"
            path={size <= 1324 && size >= 995 ? "grid" : "smooth"}
            gridBreak={size <= 1324 && size >= 995 ? "59%" : ""}
          />
        </S.Hidden>
      </Xwrapper>
    </S.Container>
  );
}
