const { Pool } = require('pg')
const proxy = process.env.QUOTAGUARDSTATIC_URL;
const agent = new HttpsProxyAgent(proxy);

require('dotenv').config()
const adminPool = new Pool({
    user: process.env.USERADMIN,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORDADMIN,
    port: process.env.PORT_DB,
    ssl: {
        rejectUnauthorized: false,
        agent: agent
    }
})

const employeePool = new Pool({
    user: process.env.USEREMPLOYEE,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORDEMPLOYEE,
    port: process.env.PORT_DB,
    ssl: {
        rejectUnauthorized: false,
        agent: agent
    }
});

const publicPool = new Pool({
    user: process.env.USERPUBLIC,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORDPUBLIC,
    port: process.env.PORT_DB,
    ssl: {
        rejectUnauthorized: false,
        agent: agent
    }
});

module.exports = { adminPool, employeePool, publicPool }