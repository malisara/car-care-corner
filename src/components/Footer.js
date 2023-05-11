import React from 'react';
import { Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';


export default function Footer() {
    const bluishBg = useColorModeValue('offwhite', 'darkdarkblue');

    return (
        <Flex as='footer'
            bg={bluishBg}
            h={50}
            alignItems='center'
            justifyContent='center'
            px={1}>
            <Text as='i' fontSize={12}>
                Car Care Company
                <PhoneIcon mx={4} />0123456789
                <EmailIcon mx={4} />carcompany@mail.com
            </Text>
        </Flex>
    );
}
