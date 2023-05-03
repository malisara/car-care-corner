import React from 'react';
import {
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
} from '@chakra-ui/react';


export default function VisitUs({ openingHours }) {

    return (
        <Flex direction='column' alignItems='center'>

            <Heading fontSize={'xl'} p={4}>Address</Heading>
            <Text pb={10}>123 Main Street <br />
                Anytown, USA 12345</Text>

            <Heading fontSize={'xl'} p={4}>Contact</Heading>
            <Text pb={10}>John: 0123456789 <br />
                Tony: 1234567890</Text>

            <Heading fontSize={'xl'}>Opening hours</Heading>
            <TableContainer py={5}>
                <Table variant='unstyled' w='fit'>
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
