require('dotenv').config()

const createInfluencerPayload = (influencer) => {
    return {
        parent: {
            database_id: process.env.DB_ID
        },
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: influencer.name
                        }
                    }
                ]
            },
            Type: {
                select: {
                    name: 'Influencer'
                }
            },
            Email: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: influencer.email,
                            link: null
                        },
                        plain_text: influencer.email
                    }
                ]
            },
            'Fee Tier': {
                select: {
                    name: influencer.feeTier
                }
            },
            'Paktola Link': {
                url: influencer.paktolaLink
                // rich_text: [
                //     {
                //         type: 'text',
                //         text: {
                //             content: influencer.paktolaLink,
                //             url: influencer.paktolaLink
                //         }
                //     }
                // ]
            },
            Username: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: influencer.username
                        }
                    }
                ]
            },
            'Flat Rate': {
                number: influencer.flatRate
            },
            'Hourly Rate': {
                number: influencer.hourlyRate
            },
            ID: {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: influencer.id,
                            link: null
                        },
                        plain_text: influencer.id
                    }
                ]
            }
        },
        Timezone: {
            type: 'rich_text',
            rich_text: [
                {
                    type: 'text',
                    text: {
                        content: influencer.tz
                    }
                }
            ]
        }
    }
}

const createFollower = () => {

}


module.exports = {createInfluencerPayload, createFollower}