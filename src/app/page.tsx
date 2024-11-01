/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import DescriptionOne from "@/components/DescriptionOne";
import DescriptionTwo from "@/components/DescriptionTwo";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Integration from "@/components/integration";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RigidPace",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Integration/>
      <DescriptionOne />
      <Products />
      <DescriptionTwo/>
    </>
  );
}
