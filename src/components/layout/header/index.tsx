import * as S from "./styles";
import Logo from "@/components/images/logo.png";

export default function Header() {
  return (
    <S.Header>
      <figure>
        <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img src={Logo.src} alt="" /> Rerun
        </span>
      </figure>
      <nav>
        <S.ul>
          <li>Careers</li>
          <li>Examples</li>
          <li>Docs</li>
          <li>Blog</li>
        </S.ul>
      </nav>
      {<button style={{ visibility: "hidden" }}>SearchBar</button>}{" "}
    </S.Header>
  );
}
