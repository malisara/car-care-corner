import React from 'react';

import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';


export default function Footer() {
    const bluishBg = useColorModeValue('offwhite', 'darkdarkblue');

    return (
        <Flex //as='footer'
            bg={bluishBg}
            h='fit'
            alignItems='center'
            justifyContent='center'
            py={4}
            direction={{ base: 'column', lg: 'row' }}
            fontSize={12}
            lineHeight={5}
        >
            <Text as='b' >
                Car Care Company
            </Text>
            <Text as='i'>
                <PhoneIcon mx={4} />0123456789
            </Text>
            <Text as='i'>
                <EmailIcon mx={4} />carcompany@mail.com
            </Text>


        </Flex >
    );
}
