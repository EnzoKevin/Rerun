"use client";

import { useEffect, useState } from "react";

import * as S from "./styles";

import Image from "next/image";
import Copy from "@/components/images/icons/copy.png";
import Button from "@/components/buttons";

interface Codes {
  code: { id: number; name: string; code: string }[];
  buttons?: boolean;
  minWidth?: string;
  minHeight?: string;
}

export default function ExCode({
  code,
  buttons = true,
  minWidth,
  minHeight,
}: Codes) {
  const [actual, setActual] = useState<number>(0);

  return (
    <S.Container $minWidth={minWidth}>
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
      <S.CodeBlock $minHeight={minHeight}>
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
        <S.SubContainer $minHeight={minHeight}>
          <S.PreCode>
            <S.Code>{code[actual]?.code}</S.Code>
          </S.PreCode>
        </S.SubContainer>
      </S.CodeBlock>
      {buttons ? (
        <S.BtnContainer>
          <Button
            white={true}
            children={`${code[actual]?.name} quick start guide`}
          />
          <Button white={false} children="try browser demo" />
        </S.BtnContainer>
      ) : null}
    </S.Container>
  );
}
