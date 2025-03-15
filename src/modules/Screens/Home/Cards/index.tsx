import * as S from "./styles";

import Card from "@/components/layout/Card";
import CardImage from "@/components/images/Card1.svg";
import CardImage2 from "@/components/images/Card2.svg";
import CardImage3 from "@/components/images/Card3.svg";

export default function Cards() {
  return (
    <S.Container>
      <S.Title>Infrastructure to simplify your data engine</S.Title>
      <S.CardContainer>
        <Card
          Img={CardImage}
          title="Run & record"
          text="Run your systems and record data for analysis and training. Use the Rerun SDK to log data or interpret existing log files."
        />
        <Card
          Img={CardImage2}
          title="Find issues"
          text="Use the Rerun viewer to understand behavior and pinpoint issues. Extract signals from logs for further analysis."
        />
        <Card
          Img={CardImage3}
          title="Improve & deploy"
          text="Visualize training and eval, debug prototypes, and extract time aligned training samples from messy logs."
        />
      </S.CardContainer>
    </S.Container>
  );
}
