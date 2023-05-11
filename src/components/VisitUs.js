import React from 'react';
import {
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
} from '@chakra-ui/react';
import TextParagraph from './TextParagraph';


export default function VisitUs({ openingHours }) {

    return (
        <Flex direction='column' alignItems='center'>

            <TextParagraph title={'Address'}
                text={['123 Main Street', 'Anytown, USA 12345']}>
            </TextParagraph>

            <Heading fontSize={'xl'} pt={4} as='h3'>Opening hours</Heading>
            <TableContainer py={5}>
                <Table variant='simple' w='fit'>
                    <Tbody alignContent='start'>
                        {openingHours.map((dayHour, i) => (
                            <Tr key={i}>
                                <Td > {dayHour.weekday}</Td>
                                {dayHour.hours.start === 0 ?
                                    (<Td textAlign='start'>closed</Td>) :
                                    <Td textAlign='start'>{dayHour.hours.start}-{dayHour.hours.end}</Td>
                                }
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

            </TableContainer>

        </Flex>
    );
};
