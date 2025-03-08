import * as S from "./styles";

import Double from "@/components/layout/double";
import ExCode from "@/components/layout/ExCode";

export default function HowWorks() {
  const languages: any[] = [
    {
      id: 0,
      name: "C++",
      code: `#include <rerun.hpp>

int main() {
    const auto rec = rerun::RecordingStream("my_data_generating_app");
    rec.connect().throw_on_failure();

    // …

    rec.log("points", rerun::Points3D(positions));
    rec.log("camera", rerun::Transform3D::from_translation_rotation(pos, rot));
    rec.log("camera/image", rerun::Pinhole(intrinsics));
    rec.log("camera/image", rerun::Image(buffer, format));
    rec.log("reprojection_error", rerun::Scalar(err));
}`,
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
    <S.Container>
      <Double Right={<ExCode code={languages} buttons={false} />} />
      <Double Right={<ExCode code={languages} buttons={false} />} />
      <Double Right={<ExCode code={languages} buttons={false} />} />
      <Double Right={<ExCode code={languages} buttons={false} />} />
    </S.Container>
  );
}
