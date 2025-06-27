import * as S from "./styles";

import Image from "next/image";
import {
  RerunLogo,
  GitHub,
  Linkedin,
} from "@/components/images/icons/logo/Icons";
import Link from "next/link";
export default function Header() {
  return (
    <S.Header>
      <figure>
        <span className="flex gap-2 justify-center align-middle">
          <Image src={RerunLogo} alt="" width={30} height={20} /> Rerun
        </span>
      </figure>
      <nav>
        <S.ul>
          <Link href={"#start"}>
            <li>Careers</li>
          </Link>
          <Link href={"#start"}>
            <li>Examples</li>
          </Link>
          <Link href={"#start"}>
            <li>Docs</li>
          </Link>
          <Link href={"#start"}>
            <li>Blog</li>
          </Link>
          <li>
            <Link href={"https://github.com/EnzoKevin"}>
              <GitHub />
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://www.linkedin.com/in/enzo-kevin-morais-rocha-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
            >
              <Linkedin />
            </Link>
          </li>
        </S.ul>
      </nav>
    </S.Header>
  );
}
