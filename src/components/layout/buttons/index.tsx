import * as S from "./styles";

interface Buttons {
  white: boolean;
  text: string;
}

export default function Button({ white, text }: Buttons) {
  return (
    <>
      <S.buttons $white={white}>{text}</S.buttons>
    </>
  );
}
