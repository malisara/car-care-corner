import React from 'react';

import {
    Box,
    Flex,
    Heading,
    useColorModeValue,
    VStack
} from '@chakra-ui/react';


export default function BaseSection({
    title,
    children,
    bgColor = false,
    paddingBottom = { base: 5, md: 10 } }) {
    const bluishBg = useColorModeValue('offwhite', 'darkdarkblue');
    const whiteBg = useColorModeValue('white', 'darkblue');
    const headerColor = useColorModeValue('darkdarkblue', 'white');
    return (
        <Box bg={bgColor ? bluishBg : whiteBg}
            id={title.toLowerCase()}>
            <Flex p={{ base: 10, md: 20 }}>
                <VStack w='full'>
                    <Heading pb={paddingBottom}
                        color={headerColor}
                        as='h2'>
                        {title}
                    </Heading>
                    {children}
                </VStack>
            </Flex>
        </Box >
    );
}
