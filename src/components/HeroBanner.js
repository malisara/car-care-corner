import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {
    Heading,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function HeroBanner() {
    const textColor = useColorModeValue('darkblue', 'offwhite');
    const bgColor = useColorModeValue('offwhite', 'darkdarkblue');
    return (
        <Flex
            height='fit'
            bg={bgColor}
            direction='column'
            px={10}
            py={15}
        >

            <Flex direction='column'
                w={{ base: 'full', '2xl': '50%' }}
                textAlign={{ base: 'center', xl: 'justify' }}
                ms={{ xl: '60' }}
                pt={{ xl: '50' }}>
                <Heading sd='h1'
                    size='3xl'
                    color={textColor}>
                    Car Care Corner
                </Heading>

                <Text fontSize={{ base: 'lg', md: '2xl' }} as='b' pt={5}
                    color={textColor}>
                    Drive in style,
                    maintain & repair like pro
                </Text>

                <Text
                    py={5}
                    w={{ base: 'full', xl: '60%' }}
                    as='i'
                    lineHeight={7}
                >
                    Welcome to our one-stop shop for vehicle owners and enthusiasts!

                    Our comprehensive inventory includes everything required to maintain and
                    repair your beloved ride. Whether you're looking for a specific
                    part or want to give your car a fresh look, we've got you
                    covered
                </Text>
            </Flex>

            <Flex mt={{ base: '10', xl: '0' }} me={{ base: '0', xl: '60' }}
                justifyContent='end' >
                <StaticImage src="../images/hero-image-2.png"
                    alt="A gray sport car" />
            </Flex>

        </Flex >

    );
}
