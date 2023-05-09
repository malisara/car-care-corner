import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

export default function TextParagraph({ title, text }) {
    return (
        <>
            <Heading fontSize={'xl'} p={2}>{title}</Heading>
            <Text pb={{ base: 2, md: 3 }}>

                {text.map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}

            </Text >
        </>
    );
}
