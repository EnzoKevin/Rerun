"use client";

import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import canvaImg from "@/components/images/canvas.png";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = Array.from({ length: 5 }, () =>
    useRef<HTMLVideoElement>(null)
  );

  const [isVideosReady, setIsVideosReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const image = imageContainerRef.current;
    const videos = videoRefs.map((ref) => ref.current);

    if (!canvas || !ctx || !image || videos.some((v) => v === null)) return;

    if (!isVideosReady) return; // 🚩 Só desenha se os vídeos estiverem carregados

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawLines = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imageRect = image.getBoundingClientRect();
      const imageCenterX = imageRect.left + imageRect.width / 2;
      const imageCenterY = imageRect.top + imageRect.height / 2;

      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);

      videos.forEach((video) => {
        if (!video) return;
        const rect = video.getBoundingClientRect();
        const videoCenterX = rect.left + rect.width / 2;
        const videoCenterY = rect.top + rect.height / 2;

        ctx.beginPath();
        ctx.moveTo(imageCenterX, imageCenterY);
        ctx.lineTo(videoCenterX, videoCenterY);
        ctx.stroke();
      });

      ctx.setLineDash([]);
    };

    const handleResize = () => {
      updateCanvasSize();
      drawLines();
    };

    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      handleResize();
    });

    observer.observe(document.body);
    observer.observe(image);
    videos.forEach((video) => {
      if (video) observer.observe(video);
    });

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [isVideosReady]); // 🚩 Só ativa quando os vídeos estão prontos

  // ✅ Função para verificar se todos os vídeos estão carregados
  const handleVideoLoaded = () => {
    const allLoaded = videoRefs.every(
      (ref) => ref.current && ref.current.readyState >= 1
    );
    if (allLoaded) {
      setIsVideosReady(true);
    }
  };

  return (
    <S.Container>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <S.VideoContainer>
        {videoRefs.map((ref, index) => (
          <video
            key={index}
            ref={ref}
            src={`/rerun${index + 1}.mp4`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={handleVideoLoaded}
          />
        ))}
      </S.VideoContainer>

      <S.ImageContainer ref={imageContainerRef}>
        <Image src={canvaImg} alt="Imagem central" fill />
      </S.ImageContainer>
    </S.Container>
  );
}
