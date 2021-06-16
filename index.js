const {Client} = require('@notionhq/client')
const {createInfluencerPayload, createFollower} = require('./utils.js')
require('dotenv').config()

// This will use the Notion API to create a dashboard for Paktola that lists
// all influencers, users and meetings. For management and quick looks at the database

// EDIT: This is just some playground code for now, I will add a firebase function that adds the influencer/follower to notion
// when their account is created. This current code isn't efficient for long term at all, I'l prob use it
// just the first time to get all the current influencers/followers into Notion

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})
// console.log(notion)
const influencer = {
    name: 'alex',
    email: 'safldjsaf@fdlasfjds.com',
    feeTier: 'bronze',
    flatRate: 122,
    hourlyRate: 148,
    paktolaLink: 'fdlkjsaklfjfdklsajf',
    tz: 'America/Denver',
    username: 'alexabbott',
    id: '12312lkjlksfdjlkj21'
}

const follower = {

}

const getUniqueInfluencers = async () => {
    // This influencer array will come from firebase
    const influencers = [
        {
            name: 'alex',
            email: 'safldjsaf@fdlasfjds.com',
            feeTier: 'bronze',
            flatRate: 122,
            hourlyRate: 148,
            paktolaLink: 'fdlkjsaklfjfdklsajf',
            tz: 'America/Denver',
            username: 'alexabbott',
            id: '12312lkjlksfdjlkj21'
        },
        {
            name: 'alexs',
            email: 'dfdf@fdlasfjds.com',
            feeTier: 'bronze',
            flatRate: 121232,
            hourlyRate: 1232348,
            paktolaLink: 'fdlkjsasdafdsafdsfdklfjfdklsajf',
            tz: 'America/Denver',
            username: 'alexabddbott',
            id: '1234567894564sd'
        }
    ]

    // Get existing influencer objects in Notion and map out to array of IDs
    const existingInfluencers = (await notion.databases.query({
        database_id: process.env.DB_ID,
    })).results.map(obj => obj.properties.ID.rich_text[0]?.plain_text)

    // Compare IDs to influencers from Firebase and return unique influencers only
    return existingInfluencers.length ? [influencers.filter(obj => !existingInfluencers.includes(obj.id))]: influencers
}

const run = async () => {
    const promises = (await getUniqueInfluencers()).map(obj => notion.pages.create(createInfluencerPayload(obj)))
    Promise.all(promises).then(values => {
        console.log('All objects added!')
    })
    // console.log(await notion.users.list())
    // const test = await notion.pages.create(createInfluencerPayload(influencer))
    // console.log(test)
}

run()