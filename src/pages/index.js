import * as React from "react";
import BaseSection from "../components/BaseSection";
import HeroBanner from "../components/HeroBanner";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <BaseSection title='Products' bgColor={false}></BaseSection>

      <section>products</section>
      <section>contact</section>
      <section>visit us</section>
      <footer></footer>

    </>
  );

}
