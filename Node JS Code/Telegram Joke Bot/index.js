const TelegramBot = require('node-telegram-bot-api');
const dotenv=require('dotenv');
const axios = require ('axios');

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});
// Polling means :- The bot will continuously check for new messages and respond to them in real-time. This allows the bot to interact with users without needing to wait for a specific event or trigger. When a user sends a message to the bot, it will immediately process the message and send a response back to the user. This is useful for creating interactive bots that can provide instant feedback or information to users.//

// bot.on('message',(option)=>{
//     console.log("Message received on the bot ",option);

//     bot.sendMessage(option.chat.id,"Hello! This is a Joke Bot. Currently under development.");
// })

bot.onText(/\joke/,async (option)=>{
    const response=await axios.get('https://official-joke-api.appspot.com/random_joke');

    const setup=response.data.setup;
    const punchline=response.data.punchline;

    bot.sendMessage(option.chat.id, setup + "\n" + punchline);
})