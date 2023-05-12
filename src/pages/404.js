import * as React from "react";

import {
    Flex,
    Heading,
    Link,
    Text,
} from '@chakra-ui/react';

import Navbar from '../components/Navbar';


const NotFoundPage = () => {
    return (
        <div>
            <Navbar />
            <Flex
                w='full'
                flexDirection='column'
                alignItems='center'
                p={4}
                textAlign='center'>

                <Heading as='h1' size='4xl' mt={12} color='darkdarkblue'>
                    404
                </Heading>
                <Text fontSize='2xl' my={2}>Page not found</Text>
                <Text fontSize='lg' mt={5}>
                    We couldn not find what you were looking for.
                </Text>

                <Text mt={5} as='b'> Visit the
                    <Link color='gray.600' href="/"> homepage</Link>.
                </Text>
            </Flex>
        </div>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
