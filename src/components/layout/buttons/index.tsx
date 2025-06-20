import * as S from "./styles";

interface Buttons {
  white: boolean;
  children: string;
}

export default function Button({ white, children }: Buttons) {
  return (
    <>
      <S.buttons $white={white}>{children}</S.buttons>
    </>
  );
}
