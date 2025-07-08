import * as S from "./styles";

import Texts from "@/components/layout/Texts";
import ExCode from "@/components/layout/ExCode";

export default function Guide() {
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
      code: `pip install rerun-sdk
rerun`,
    },
    {
      id: 2,
      name: "Java",
      code: `cargo install rerun-cli --locked
rerun`,
    },
  ];
  return (
    <S.container id="start">
      <Texts
        isCentered={true}
        Title="Start visualizing in seconds"
        Text="
        Powerful and flexible visualization for spatial and embodied AI that's shockingly easy to get started with. Simple no sign-up installation and minimal code to get up and running."
      />
      <S.CodeContainer>
        <ExCode code={languages} minWidth="800px" minHeight="150px" />
      </S.CodeContainer>
    </S.container>
  );
}
