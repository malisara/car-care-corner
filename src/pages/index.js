import * as React from "react";
import BaseSection from "../components/BaseSection";
import HeroBanner from "../components/HeroBanner";
import Navbar from '../components/Navbar';
import Products from "../components/Products";
import {
  Flex,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>

      <BaseSection title='Products' bgColor={false}>
        <Flex flexWrap='wrap' justifyContent='center'>
          <Products></Products>
        </Flex>
      </BaseSection>

      {/* <section>products</section>
      <section>contact</section>
      <section>visit us</section> */}
      <footer></footer>

    </>
  );

}
