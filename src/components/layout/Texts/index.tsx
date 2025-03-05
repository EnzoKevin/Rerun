import * as S from "./styles";

interface Texts {
  isCentered?: boolean;
  Title: string;
  Text: string;
  color?: string; // optional prop to set custom color for the text
}

export default function Texts({ isCentered, Title, Text, color }: Texts) {
  return (
    <S.Container $isCentered={isCentered} color={color}>
      <S.Title>{Title}</S.Title>
      <S.Text>{Text}</S.Text>
    </S.Container>
  );
}
