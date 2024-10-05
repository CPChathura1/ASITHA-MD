const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Se4SQRIJ#OHi-5Ivs0jZ8JD-7KYW9bzAgKRXOuQ4J9JNfbY1e8l4",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
