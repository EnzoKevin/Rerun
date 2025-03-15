import { useEffect, useState } from "react";

import * as S from "./styles";

import Image from "next/image";
import Copy from "@/components/images/icons/copy.png";
import Button from "@/components/layout/buttons";

interface Codes {
  code: { id: number; name: string; code: string }[];
  buttons?: boolean;
}

export default function ExCode({ code, buttons = true }: Codes) {
  const [actual, setActual] = useState<number>(0);

  return (
    <S.Container>
      <S.Options>
        {code?.map((code) => (
          <S.Languages
            $actual={actual == code?.id}
            key={code?.id}
            onClick={() => setActual(code?.id)}
          >
            {code.name}
          </S.Languages>
        ))}
      </S.Options>
      <S.CodeBlock>
        <S.Icon>
          <Image
            onClick={() => {
              navigator.clipboard.writeText(code[actual]?.code);
            }}
            src={Copy}
            height={16}
            width={16}
            alt=""
          />
        </S.Icon>
        <S.SubContainer>
          <S.PreCode>
            <S.Code>{code[actual]?.code}</S.Code>
          </S.PreCode>
        </S.SubContainer>
      </S.CodeBlock>
      {buttons ? (
        <S.BtnContainer>
          <Button
            white={true}
            text={`${code[actual]?.name} quick start guide`}
          />
          <Button white={false} text="try browser demo" />
        </S.BtnContainer>
      ) : null}
    </S.Container>
  );
}
