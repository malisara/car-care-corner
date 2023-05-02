import React, { useState, useEffect } from 'react';
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


const openingHours = [
    { 'weekday': 'Mon-Fri', 'hours': { 'start': 9, 'end': 17 } },
    { 'weekday': 'Sat', 'hours': { 'start': 9, 'end': 12 } },
    { 'weekday': 'Sun', 'hours': { 'start': 0, 'end': 0 } }
];


export default function VisitUs() {

    const [holidays, setHolidays] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 8000);

        fetch(`https://date.nager.at/api/v3/PublicHolidays/2023/US`,
            { signal: controller.signal })

            .then(response => response.json())
            .then(resultData => {
                setHolidays(resultData.map((x) => {
                    return {
                        date: new Date(x.date).toLocaleDateString('en-US'),
                        localName: x.localName
                    };
                }));

            })
            .catch(() => { });
    }, []);


    const dateToday = new Date();

    function checkHowLongOpen() {

        for (const holiday of holidays) {
            if (holiday.date === dateToday.toLocaleDateString('en-US')) {
                return 'CLOSED (' + holiday.localName + ')';
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
