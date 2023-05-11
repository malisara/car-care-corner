import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function TextParagraph({ title, text }) {
    return (
        <Flex direction='column'>
            <Heading fontSize={'xl'} py={4} as='h3'>{title}</Heading>
            <Text pb={{ base: 2, md: 3 }} lineHeight={2}>

                {text.map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}

            </Text >
        </Flex>
    );
}
