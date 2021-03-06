const TelegramBot = require ('node-telegram-bot-api');
const bottext = require ('./bot.json');
const dialogflow = require ('./dialogflow');
const youtube = require('./youtube');

 

const token = bottext.token_uri;

// replace the value below with the Telegram token you receive from @BotFather
//const token = 'YOUR_TELEGRAM_BOT_TOKEN';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true}); /// pinga o server do telegram 
 
// Matches "/echo [whatever]"

//bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
 // const chatId = msg.chat.id;
 // const resp = match[1]; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
 // bot.sendMessage(chatId, resp);
//});
 
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async function(msg) {
  const chatId = msg.chat.id; /// qual o chat id , a tela utilizada no TG
  console.log(msg.text);
  
  const dfResponse = await dialogflow.sendMessage(chatId.toString(),msg.text);

  let responseText= dfResponse.text; 
  if ((dfResponse).intent === 'Treino específico'){
    responseText = await youtube.searchVideoURL(responseText,dfResponse.field.corpo.stringValue);
  }
 
  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, 'Received your message');
  bot.sendMessage(chatId, responseText);

});

