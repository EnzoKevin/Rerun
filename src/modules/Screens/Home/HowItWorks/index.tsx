import * as S from "./styles";
import React from "react";

import Double from "@/components/layout/double";
import ExCode from "@/components/layout/ExCode";
import Button from "@/components/layout/buttons";

import Image from "next/image";
import Rerun from "@/components/images/print_Rerun.png";
import Rerun2 from "@/components/images/Rerun_2.png";

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
      code: `import rerun as rr
rr.init("my_data_generating_application")
rr.connect()  # Connect to a remote viewer
…
rr.log("points", rr.Points3D(positions))
rr.log("camera", rr.Transform3D(pos, rot))
rr.log("camera/image", rr.Pinhole(intrinsics))
rr.log("camera/image", rr.Image(tensor))
rr.log("reprojection_error", rr.Scalar(err))`,
    },
    {
      id: 2,
      name: "Java",
      code: `fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rec = rerun::RecordingStreamBuilder::new("my_data_generating_application")
        .connect_opts(rerun::default_server_addr(), rerun::default_flush_timeout())?
        .connect()?;

    // …

    rec.log("points", &rerun::Points3D::new(positions))?;
    rec.log(
        "camera",
        &rerun::Transform3D::with_translation(pos).with_mat3x3(rot),
    )?;
    rec.log("camera/image", &rerun::Pinhole::new(intrinsics))?;
    rec.log("camera/image", &rerun::Image::new(buffer, format))?;
    rec.log("reprojection_error", &rerun::Scalar::new(err))?;

    Ok(())
}`,
    },
  ];

  const Text: {
    id: number;
    title: string;
    text: string;
    component: React.ReactNode;
  }[] = [
    {
      id: 0,
      title: "Model",
      text: "Use the SDK to model your data and write it to storage or a live viewer. Rerun's data model, a time aware Entity Component System, makes common scenarios simple but is flexible enough to handle custom data.",
      component: <ExCode code={languages} buttons={false} />,
    },
    {
      id: 1,
      title: "Model",
      text: "Use the SDK to model your data and write it to storage or a live viewer. Rerun's data model, a time aware Entity Component System, makes common scenarios simple but is flexible enough to handle custom data.",
      component: <S.ImageNext src={Rerun} alt="" />,
    },
    {
      id: 2,
      title: "Model",
      text: "Use the SDK to model your data and write it to storage or a live viewer. Rerun's data model, a time aware Entity Component System, makes common scenarios simple but is flexible enough to handle custom data.",
      component: <S.ImageNext src={Rerun2} alt="" />,
    },
    {
      id: 3,
      title: "Model",
      text: "Use the SDK to model your data and write it to storage or a live viewer. Rerun's data model, a time aware Entity Component System, makes common scenarios simple but is flexible enough to handle custom data.",
      component: <ExCode code={languages} buttons={false} />,
    },
  ];

  return (
    <S.Container>
      {Text.map((item) => (
        <Double key={item.id} left={item} Right={item.component} />
      ))}
      <Button white={false} text="Read the documentation" />
    </S.Container>
  );
}
