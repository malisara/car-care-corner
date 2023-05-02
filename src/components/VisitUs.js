import React from 'react';
import {
    TableContainer,
    Thead,
    Tbody,
    Table,
    Td,
    Tr,
    Th,
    Alert
} from '@chakra-ui/react';

import {
    TimeIcon
} from '@chakra-ui/icons';
import { useStaticQuery, graphql } from 'gatsby';



const openingHours = [
    { 'weekday': 'Mon-Fri', 'hours': { 'start': 9, 'end': 17 } },
    { 'weekday': 'Sat', 'hours': { 'start': 9, 'end': 12 } },
    { 'weekday': 'Sun', 'hours': { 'start': 0, 'end': 0 } }
];


export default function VisitUs() {
    const dateToday = new Date();
    const query = useStaticQuery(graphql` 
    query {
        allHolidayDates {
          nodes {
            date
            localName
          }
        }
      }
      `);

    const holidays = query.allHolidayDates.nodes.map(holiday => {
        return [new Date(holiday.date).toLocaleDateString('en-US'), holiday.localName];
    });

    //TODO handle fetch error


    function checkHowLongOpen() {

        for (const [date, holiday] of holidays) {
            if (date === dateToday.toLocaleDateString('en-US')) {
                return 'CLOSED (' + holiday + ')';
            }
        }

        const dayIndexToday = dateToday.getDay();

        if (dayIndexToday > 0 && dayIndexToday <= 5) {
            return storeOpenOrClosed(0);
        }

        if (dayIndexToday === 6) {
            if (dayIndexToday > 0 && dayIndexToday <= 5) {
                return storeOpenOrClosed(1);
            }
        }

        else {
            if (dayIndexToday > 0 && dayIndexToday <= 5) {
                return storeOpenOrClosed(2);
            }
        }

    }

    function storeOpenOrClosed(index) {
        if (dateToday.getHours() >= openingHours[index].hours.start &&
            dateToday.getHours() < openingHours[index].hours.end) {
            return 'OPEN';
        }
        return 'CLOSED';
    }

    const isOpen = checkHowLongOpen().includes('OPEN');
    const howLongOpen = checkHowLongOpen();
    return (
        <>
            <Alert status={isOpen ? 'success' : 'error'} fontSize='lg' w='fit'>
                Now: {howLongOpen}
            </Alert>

            <TableContainer pt={5}>
                <Table variant='unstyled'>
                    <Thead>
                        <Tr>
                            <Th>
                                Opening Hours
                            </Th>

                            <Th><TimeIcon /></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
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
        </>
    );
};
