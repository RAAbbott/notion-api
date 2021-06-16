const {Client} = require('@notionhq/client')
require('dotenv').config()

// This will use the Notion API to create a dashboard for Paktola that lists
// all influencers, users and meetings. For management and quick looks at the database

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})
console.log(notion)

const run = async () => {
    console.log(await notion.users.list())
}

run()