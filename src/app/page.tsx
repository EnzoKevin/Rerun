import Image from "next/image";
import Layout from "@/layout";
import { InitialHome } from "@/modules/Home";

export default function Home() {
  return (
    <Layout>
      <InitialHome />
    </Layout>
  );
}
