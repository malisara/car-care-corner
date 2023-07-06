import * as React from "react";

import { Flex, Tag, TagLabel } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";

import BaseSection from "../components/BaseSection";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import VisitUs from "../components/VisitUs";

const dateToday = new Date();
const openingHours = [
  { weekday: "Mon-Fri", hours: { start: 9, end: 17 } },
  { weekday: "Sat", hours: { start: 9, end: 12 } },
  { weekday: "Sun", hours: { start: 0, end: 0 } },
];

export default function Home() {
  const [holidays, setHolidays] = React.useState([]);

  React.useEffect(() => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 8000);

    fetch(`https://date.nager.at/api/v3/PublicHolidays/2023/US`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((resultData) => {
        setHolidays(
          resultData.map((x) => {
            return {
              date: new Date(x.date).toLocaleDateString("en-US"),
              localName: x.localName,
            };
          })
        );
      })
      .catch(() => {});
  }, []);

  const howLongOpen = checkHowLongOpen(holidays);

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>

      <BaseSection title="Products">
        <Flex flexWrap="wrap" justifyContent="center">
          <Products></Products>
        </Flex>
      </BaseSection>

      <BaseSection title="Contact" bgColor={true} justifyContent="end">
        <Flex
          direction={{ base: "column", lg: "row" }}
          w="80%"
          alignItems="center"
          textAlign={{ base: "center", lg: "start" }}
          justifyContent="center"
        >
          <Flex direction="column" w={{ base: "full", lg: "25%" }}>
            <ContactInfo />
          </Flex>
          <ContactForm />
        </Flex>
      </BaseSection>

      <BaseSection title="Visit us" paddingBottom={{ base: 2, md: 0 }}>
        <Tag
          colorScheme={howLongOpen.includes("OPEN") ? "teal" : "red"}
          borderRadius="full"
          variant="solid"
          size={"lg"}
          p={3}
          w="fit-content"
        >
          <TagLabel>Now: {howLongOpen}</TagLabel>
        </Tag>

        <Flex
          wrap="wrap"
          w="80%"
          alignItems="center"
          j
          justifyContent="center"
          pt={{ base: "2", lg: "10" }}
        >
          <Flex direction="column" w={{ base: "full", lg: "25%" }}>
            <VisitUs openingHours={openingHours}></VisitUs>
          </Flex>
          <Location />
        </Flex>
      </BaseSection>

      <Footer />
    </>
  );
}

function checkHowLongOpen(holidays) {
  for (const holiday of holidays) {
    if (holiday.date === dateToday.toLocaleDateString("en-US")) {
      return "CLOSED (" + holiday.localName + ")";
    }
  }

  const dayIndexToday = dateToday.getDay();

  if (dayIndexToday > 0 && dayIndexToday <= 5) {
    return storeOpenOrClosed(0);
  } else if (dayIndexToday === 6) {
    return storeOpenOrClosed(1);
  } else {
    return storeOpenOrClosed(2);
  }
}

function storeOpenOrClosed(index) {
  if (
    dateToday.getHours() >= openingHours[index].hours.start &&
    dateToday.getHours() < openingHours[index].hours.end
  ) {
    return "OPEN";
  }
  return "CLOSED";
}

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <title>{data.site.siteMetadata.title}</title>;
};
