import * as React from "react";
import BaseSection from "../components/BaseSection";
import HeroBanner from "../components/HeroBanner";
import Location from "../components/Location";
import Navbar from '../components/Navbar';
import Products from "../components/Products";
import VisitUs from "../components/VisitUs";
import { Flex, Tag, TagLabel, } from '@chakra-ui/react';

const dateToday = new Date();
const openingHours = [
  { 'weekday': 'Mon-Fri', 'hours': { 'start': 9, 'end': 17 } },
  { 'weekday': 'Sat', 'hours': { 'start': 9, 'end': 12 } },
  { 'weekday': 'Sun', 'hours': { 'start': 0, 'end': 0 } }
];


export default function Home() {

  const [holidays, setHolidays] = React.useState([]);

  React.useEffect(() => {
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

  const howLongOpen = checkHowLongOpen(holidays);


  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>

      <BaseSection title='Products' bgColor={false}>
        <Flex flexWrap='wrap' justifyContent='center'>
          <Products></Products>
        </Flex>
      </BaseSection>

      <BaseSection title='Visit us' bgColor={true}>
        <Tag colorScheme={howLongOpen.includes('OPEN') ? 'green' : 'red'}
          borderRadius='md'
          variant='solid'
          size={'lg'}
          p={3}
          w='fit-content'
        >
          <TagLabel>Now: {howLongOpen}</TagLabel>
        </Tag>
        <br />

        <Flex wrap='wrap' w='80%' alignItems='center' justifyContent='center'>
          <Flex direction='column' w={{ base: 'full', lg: '25%' }}>
            <VisitUs openingHours={openingHours}></VisitUs>
          </Flex>


          <Location></Location>
        </Flex>
      </BaseSection>



      {/* <section>products</section>
      <section>contact</section>
      <section>visit us</section> */}
      <footer></footer>

    </>
  );

}


function checkHowLongOpen(holidays) {

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