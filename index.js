const {Client} = require('@notionhq/client')
const {createInfluencerPayload, createFollower} = require('./utils.js')
require('dotenv').config()

// This will use the Notion API to create a dashboard for Paktola that lists
// all influencers, users and meetings. For management and quick looks at the database

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

const getNewInfluencers = async () => {
    // This influencer array will come from firebase
    const influencers = [
        {id: '1231323'},
        {id: '12312323'},
        {id: '13231323'},
    ]

    // Get existing influencer objects in Notion and map out to array of IDs
    const existingInfluencers = (await notion.databases.query({
        database_id: process.env.DB_ID,
    })).results.map(obj => obj.properties.ID.rich_text[0]?.plain_text)

    // Compare IDs to influencers from Firebase
    console.log(existingInfluencers)

    return []
}

const run = async () => {
    // console.log(await notion.users.list())
    // const test = await notion.pages.create(createInfluencerPayload(influencer))
    getNewInfluencers()
    // console.log(test)
}

run()