import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {
    Box,
    Heading,
    VStack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function HeroBanner() {
    return (
        <Box bg={useColorModeValue('offwhite', 'gray.800')} flexDirection='column' display='flex' alignItems='center'>
            <VStack py={[10, 20, 90]} px={3} w='full'>
                <Heading sd='h1' size='2xl' color={useColorModeValue('gray.800', 'offwhite')}>Car Care Corner</Heading>
                <Text fontSize={{ base: 'lg', md: '2xl' }} pt={5}>
                    Drive in style - maintain & repair like pro
                </Text>
            </VStack>
            <StaticImage src="../images/hero-image.png" alt="A yellow sport car" />
        </Box >
    );
}
