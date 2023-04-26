import React from 'react';
import {
    Box,
    Heading,
    Flex,
    VStack,
    useColorModeValue,
    Text
} from '@chakra-ui/react';

export default function HeroBanner() {
    return (
        <Box bg={useColorModeValue('offwhite', 'gray.800')}>
            <Flex py={10}>
                <VStack w='full'>
                    <Heading color={useColorModeValue('gray.800', 'offwhite')}>Car Care Corner</Heading>
                    <Text>

                        "Drive in style - maintain & repair like pro."

                    </Text>
                </VStack>
            </Flex>
        </Box >
    );
}
