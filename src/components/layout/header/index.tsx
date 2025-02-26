import react from "react";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <figure>
        <span>Icone</span>
      </figure>
      <nav>
        <S.ul>
          <li>Home</li>
          <li>Docs</li>
          <li>Outro</li>
          <li>Outro</li>
          <li>Outro</li>
        </S.ul>
      </nav>
      <button>SearchBar</button>
    </S.Header>
  );
}
