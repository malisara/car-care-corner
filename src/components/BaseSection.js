import React from 'react';
import {
    Box,
    Heading,
    Flex,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function BaseSection({ title, children, bgColor }) {
    const bluishBg = useColorModeValue('offwhite', 'gray.800');
    const whiteBg = useColorModeValue('white', 'gray.700');
    return (
        <Box bg={bgColor ? bluishBg : whiteBg}>
            <Flex py={{ base: 10, md: 20 }}>
                <VStack w='full'>
                    <Heading pb={{ base: 5, md: 10 }} color={useColorModeValue('gray.800', 'offwhite')}>{title}</Heading>
                    {children}
                </VStack>
            </Flex>
        </Box >
    );
}
