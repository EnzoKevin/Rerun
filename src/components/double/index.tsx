"use client";
import * as S from "./styles";

interface Double {
  left: {
    id: number;
    title: string;
    text: string;
    component: React.ReactNode;
  };
  Right?: React.ReactNode;
}

export default function Double({ left, Right }: Double) {
  const Mock: { id: number; title: string; text: string }[] = [
    {
      id: 1,
      title: "Model",
      text: "Use the SDK to model your data and write it to storage or a live viewer. Rerun's data model, a time aware Entity Component System, makes common scenarios simple but is flexible enough to handle custom data.",
    },
    { id: 2, title: "Title 2", text: "Text 2" },
  ];
  return (
    <S.Container>
      <S.Left>
        <S.Title $number={true}>{left.id}</S.Title>
        <S.Title>{left.title}</S.Title>
        {left.text}
      </S.Left>
      <S.Right>{Right}</S.Right>
    </S.Container>
  );
}
