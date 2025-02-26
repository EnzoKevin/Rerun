import React from "react";
import * as S from "./styles";
import Header from "./header";
import Footer from "./footer";

interface Layout {
  children: React.ReactNode;
}

export default function Layout({ children }: Layout) {
  return (
    <S.Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </S.Container>
  );
}
