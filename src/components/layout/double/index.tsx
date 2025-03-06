import * as S from "./styles";

export default function Double() {
  const Mock: { id: number; title: string; text: string }[] = [
    { id: 1, title: "Title 1", text: "Text 1" },
    { id: 2, title: "Title 2", text: "Text 2" },
  ];
  return (
    <S.Container>
      <S.Left>
        {Mock[0].id}
        {Mock[0].title}
        {Mock[0].text}
      </S.Left>
      <S.Right></S.Right>
    </S.Container>
  );
}
