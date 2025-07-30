import * as S from "./styles";
import { First, Second, Third } from "@/assets/blog";

export default function Blog({}) {
  return (
    <S.Container>
      <h1>Blog</h1>
      <S.Article>
        <S.NextImage src={First} alt="" />
        <S.text>
          <S.H2>Backwards compatibility of .rrd files</S.H2>{" "}
          <S.P>
            We are finally strting to support backwards compatibility for our
            .rrd data format!{" "}
          </S.P>
        </S.text>
      </S.Article>
      <S.Article>
        <S.NextImage src={Second} alt="" />
        <S.text>
          <S.H2>The Missing Data Infastructure for Physical AI</S.H2>{" "}
          <S.P>
            Rerun has raised $17 million in seed funding to build out the data
            stack for Physical AI. In a addition to the open source project for
            logging and visualizing multimodal data, we're building a database
            for Physical AI.
          </S.P>
        </S.text>
      </S.Article>
      <S.Article>
        <S.NextImage src={Third} alt="" />
        <S.text>
          <S.H2>Entity Filtering & Partial Update APIs</S.H2>{" "}
          <S.P>
            This release brings powerful new tools for discovering entities in
            the Viewer, much improved partial update APIs for Python/C++/Rust
            and many more improvements.
          </S.P>
        </S.text>
      </S.Article>
    </S.Container>
  );
}
