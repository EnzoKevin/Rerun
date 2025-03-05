import * as S from "./styles";

import Image from "next/image";
import Texts from "@/components/layout/Texts";
import ExCode from "@/components/layout/ExCode";
import Button from "@/components/layout/buttons";

export default function Guide() {
  return (
    <S.container>
      <Texts
        isCentered={true}
        Title="Teste"
        Text="
     Powerful and flexible visualization for spatial and embodied AI that's shockingly easy to get started with. Simple no sign-up installation and minimal code to get up and running."
      />
      <div style={{ width: 765 }}>
        <ExCode />
      </div>
    </S.container>
  );
}
