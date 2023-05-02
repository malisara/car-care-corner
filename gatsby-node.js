
require('dotenv').config({ // allows Gatsby access environment variables
    path: `.env.${process.env.NODE_ENV}`
});

const fetch = require('node-fetch');

const YEAR = new Date().getFullYear();
const LANG_CODE = 'US';

exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest
}) => {

    const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${YEAR}/${LANG_CODE}`
    );

    const data = await response.json();

    data.forEach((holiday) => {
        createNode({
            ...holiday,
            id: holiday.localName,
            internal: {
                type: 'HolidayDates',
                contentDigest: createContentDigest(holiday)
            }
        });
    });
};