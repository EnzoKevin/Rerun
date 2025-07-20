import * as S from "./styles";

import { Sides } from "@/components/sides";
import { Lero, Aria, Kornia, Brush } from "@/assets/sides/export";
import { StaticImageData } from "next/image";

export default function Community() {
  const Side: {
    id: number;
    title: string;
    text: string;
    img: StaticImageData;
  }[] = [
    {
      id: 0,
      title: "Le Robot",
      text: "LeRobot is Huggingface’s State-of-the-art AI for real-world robotics project. They are using Rerun as an integrated part of their visualization tools.",
      img: Lero,
    },
    {
      id: 1,
      title: "Aria Dataset Explorer",
      text: "Project Aria is a research platform developed by Meta Reality Labs Research to push the state of the art in egocentric AI research. Rerun is used to visualize sequences in their Aria Dataset Explorer.",
      img: Aria,
    },
    {
      id: 2,
      title: "kornia-rs",
      text: "The kornia-rs crate is a low level library for Computer Vision written in Rust 🦀 by the Kornia team. You can use the library to perform image I/O, Rerun vizualisation and other low level operations in your machine learning and data-science projects in a thread-safe and efficient way.",
      img: Brush,
    },
    {
      id: 3,
      title: "kornia-rs",
      text: "The kornia-rs crate is a low level library for Computer Vision written in Rust 🦀 by the Kornia team. You can use the library to perform image I/O, Rerun vizualisation and other low level operations in your machine learning and data-science projects in a thread-safe and efficient way.",
      img: Kornia,
    },
  ];
  return (
    <S.container>
      <S.title>The community loves building on Rerun</S.title>
      <Sides side={Side} />
    </S.container>
  );
}
