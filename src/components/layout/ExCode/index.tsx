import { useEffect, useState } from "react";

import * as S from "./styles";

import Image from "next/image";
import Copy from "@/components/images/icons/copy.png";
import Button from "@/components/layout/buttons";

interface Codes {
  code?: [id: number, name: string, code: string];
  buttons?: boolean;
}

export default function ExCode({ code, buttons = true }: Codes) {
  const [actual, setActual] = useState<number>(0);

  const languages: any[] = [
    {
      id: 0,
      name: "C++",
      code: `# Add this to your CMakeLists.txt:
include(FetchContent)
FetchContent_Declare(rerun_sdk URL
https://github.com/rerun-io/rerun/releases/latest/download/rerun_cpp_sdk.zip)
FetchContent_MakeAvailable(rerun_sdk)`,
    },
    {
      id: 1,
      name: "Python",
      code: `teste mutio do top`,
    },
    {
      id: 2,
      name: "Java",
      code: `# Add this to your CMakeLists.txt:
        include(FetchContent)
        FetchContent_Declare(rerun_sdk URL
        https://github.com/rerun-io/rerun/releases/latest/download/rerun_cpp_sdk.zip)
        FetchContent_MakeAvailable(rerun_sdk)`,
    },
  ];

  useEffect(() => {
    console.log(actual);
  }, [actual]);

  return (
    <S.Container>
      <S.CodeBlock>
        <S.Options>
          {languages.map((languages) => (
            <S.Languages
              $actual={actual == languages.id}
              key={languages.id}
              onClick={() => setActual(languages.id)}
            >
              {languages.name}
            </S.Languages>
          ))}
        </S.Options>
        <S.SubContainer>
          <S.Icon>
            <Image
              onClick={() => {
                navigator.clipboard.writeText(languages[actual].code);
              }}
              src={Copy}
              height={16}
              width={16}
              alt=""
            />
          </S.Icon>
          <S.PreCode>
            <S.Code>{languages[actual].code}</S.Code>
          </S.PreCode>
        </S.SubContainer>
      </S.CodeBlock>
      {buttons ? (
        <S.BtnContainer>
          <Button
            white={true}
            text={`${languages[actual].name} quick start guide`}
          />
          <Button white={false} text="try browser demo" />
        </S.BtnContainer>
      ) : null}
    </S.Container>
  );
}
