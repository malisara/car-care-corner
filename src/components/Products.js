import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
    Flex,
} from '@chakra-ui/react';
import { productImage } from '../styles/index.module.css';


export default function Products() {

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
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        key={products.frontmatter.image.id}
                        m={4}>
                        <Flex justifyContent='center' >
                            <GatsbyImage key={products.frontmatter.image.id}
                                alt={products.frontmatter.title}
                                image={products.frontmatter.image.childImageSharp.gatsbyImageData}
                                className={productImage} />
                        </Flex>
                        <Stack>
                            <CardBody maxW='sm'>
                                <Heading size='md'
                                    textAlign={{ base: 'center', md: 'start' }}>
                                    {products.frontmatter.title}
                                </Heading>
                                <Text py='2'>
                                    {products.internal.content}
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card >
                );
            }

            )}
        </>
    );
}

