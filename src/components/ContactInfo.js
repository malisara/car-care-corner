import React from 'react';
import { Text, Icon, useColorModeValue, Link } from '@chakra-ui/react';

import { EmailIcon } from '@chakra-ui/icons';
import { MdFacebook } from 'react-icons/md';
import TextParagraph from './TextParagraph';


export default function ContactInfo() {
    const iconColor = useColorModeValue('darkdarkblue', 'white');

    return (
        <>
            <TextParagraph title={'Contact us'} text={['John: 0123456789',
                'Tony: 1234567890']}></TextParagraph>

            <Text pb={{ base: 2, md: 3 }} lineHeight={2}>
                <EmailIcon
                    color={iconColor}
                    fontSize={18}
                    mr={3}
                    as='i' />
                carcompany@mail.com
                <br />

                <Icon as={MdFacebook}
                    color={iconColor}
                    fontSize={18}
                    mr={3} />
                <Link href='/#' isExternal as='i'>
                    @OurPage
                </Link>
            </Text >
        </>
    );
};
