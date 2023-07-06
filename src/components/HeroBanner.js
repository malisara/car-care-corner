import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Flex, Text, Box } from "@chakra-ui/react";

export default function HeroBanner() {
  return (
    <Flex height={{ base: 600, xl: 800 }} width="full">
      <Flex height="full" width="100vw">
        <StaticImage
          src="../images/hero-image.png"
          alt="Sport car"
          style={{ width: "100%", height: "100%" }}
          position="relative"
        />
        <Box
          position="absolute"
          top={"10rem"}
          right={{ base: 0, xl: "10%" }}
          width="fit"
          height="auto"
          p={10}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1}
          textAlign={{ base: "center", xl: "start" }}
        >
          <Text color="yellow" fontWeight="bold" fontSize="5xl" mb={2}>
            Car Care Corner
          </Text>
          <Text color="white" fontSize="xl">
            Drive in style, maintain & repair like pro
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
