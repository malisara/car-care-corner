import React from 'react';
import { Text, Icon, Link } from '@chakra-ui/react';

import { EmailIcon } from '@chakra-ui/icons';
import { MdFacebook } from 'react-icons/md';
import TextParagraph from './TextParagraph';


export default function ContactInfo() {
    return (
        <>
            <TextParagraph title={'Contact'} text={['John: 0123456789',
                'Tony: 1234567890']}></TextParagraph>

            <Text pb={{ base: 2, md: 3 }}>
                <EmailIcon />
                carcompany@mail.com
                <br />

                <Icon as={MdFacebook} />
                <Link href='/#' isExternal>
                    @OurPage
                </Link>
            </Text>
        </>
    );
};
