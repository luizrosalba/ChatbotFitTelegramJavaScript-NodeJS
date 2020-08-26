const dialogflow = require('dialogflow');
const configs = require('./bot.json');

const sessionClient = new dialogflow.SessionsClient({ /// craindo a sessao 
    projectId: configs.project_id,
    credentials:{
        private_key:configs.private_key,
        client_email: configs.client_email
    }
});

async function sendMessage(chatId,message){
    const sessionPath = sessionClient.sessionPath(configs.project_id,chatId);
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client (en-US)
        languageCode: 'pt-BR',
      },
    },
  }

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult; /// primeira resposta 
  return { 
    text:result.fulfillmentText,
    intent: result.intent.displayName,
    fields : result.parameters.fields 

  };

};
//console.log(JSON.stringify(result,null,2));

//sendMessage('12938123','oi');
/// inserindo busca de vídeos 

module.exports.sendMessage = sendMessage; 