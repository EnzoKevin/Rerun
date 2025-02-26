"use client";
import Image from "next/image";
import Layout from "@/components/layout";
import { InitialHome } from "@/modules/Screens/Home";

export default function Home() {
  return (
    <Layout>
      <InitialHome />
    </Layout>
  );
}
