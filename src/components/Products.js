import React from "react";

import {
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { productImage } from "../styles/index.module.css";

export default function Products() {
  const cardBgColor = useColorModeValue("offwhite", "darkdarkblue");

  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            image {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          internal {
            content
          }
        }
      }
    }
  `);

  const data = query.allMarkdownRemark.nodes;

  return (
    <>
      {data.map((products) => {
        return (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            key={products.frontmatter.image.id}
            m={4}
            bg={cardBgColor}
          >
            <Flex justifyContent="center">
              <GatsbyImage
                key={products.frontmatter.image.id}
                alt={products.frontmatter.title}
                image={
                  products.frontmatter.image.childImageSharp.gatsbyImageData
                }
                className={productImage}
              />
            </Flex>
            <Stack>
              <CardBody maxW="sm">
                <Heading
                  size="md"
                  as="h3"
                  textAlign={{ base: "center", md: "start" }}
                >
                  {products.frontmatter.title}
                </Heading>
                <Text pt={4}>{products.internal.content}</Text>
              </CardBody>
            </Stack>
          </Card>
        );
      })}
    </>
  );
}
