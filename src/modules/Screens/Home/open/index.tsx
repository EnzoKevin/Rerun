import * as S from "./styles";
import Button from "@/components/layout/buttons";

export default function Open() {
  return (
    <S.Container>
      <S.BigTitle>Open source vs commercial</S.BigTitle>
      <S.SubContainer>
        <S.Cards $white={false}>
          <S.head>
            <S.title>Open source</S.title>
            <S.subTitle>Visualization and simple log handling</S.subTitle>
            <S.Span>Dual licensed under MIT and Apache 2</S.Span>
            <S.Button>
              <Button white={false}>join on github</Button>
            </S.Button>
          </S.head>
          <S.listeds>
            {" "}
            <li>
              The fastest & easiest to use multimodal visualizer out there
            </li>
            <li>
              Visualizer runs native, on the web and is embeddable in notebooks
              and web apps{" "}
            </li>
            <li>An SDK for modeling and handling multimodal logs</li>{" "}
          </S.listeds>
        </S.Cards>
        <S.Cards $white={true}>
          <S.head>
            <S.title>Commercial</S.title>
            <S.subTitle>Data management at scale</S.subTitle>
            <S.Span>Under development with select design partners</S.Span>
            <S.Button>
              <Button white={false}>Sign up for waitlist</Button>
            </S.Button>
          </S.head>
          <S.listeds>
            {" "}
            <li>
              Data platform for Physical AI where all data is instantly
              visualizable and debuggable
            </li>
            <li>
              Ingestion, storage engine and index management for large scale
              data
            </li>
            <li>
              Dataset management for both recordings and structured tables
            </li>{" "}
          </S.listeds>
        </S.Cards>
      </S.SubContainer>
    </S.Container>
  );
}
