# ChatbotFitTelegramJavaScript-NodeJS
## Construindo um ChatbotFit no Telegram com JavaScript e NodeJS
Neste projeto construimos um  chatbot do telegram em um server nodejs que ao inserir uma pergunta cadastrada no dialogflow , responde com um vídeo relacionado à pergunta, neste exemplo, fizemos perguntas relacionadas à treinos de academia. Quando o usuário pergunta ao telegram : 
<br> Me manda um vídeo de bíceps 
<br> O bot responde com 2 vídeos de bíceps para o usuário 
### Início : 
- @BotFather 
- conjunto de comandos para acessar o bot 
-  /newbot
- nome de usuario do bot meubot pcm@ster_bot
- terminar sempre com a palavra bot 
```
Done! Congratulations on your new bot. You will find it at t.me/pcmster_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
-******
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
``` 

- gerenciador de versões no node para linux e mac 
-  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
- nvm list lista as versões do node que vc possui 
- npm init
- https://www.npmjs.com/package/node-telegram-bot-api
- npm i node-telegram-bot-api --save (atualiza seu packjson )
- clica no link do bot t.me/nome_do_seu_bot
- para conversar usaremos o dialog flow (ferramenta do google para processamento de linguagem natural e criar uma interface de conversa)
- pode-se criar agentes de bots mas precisa de cartao de credito para cadastrar :( 
```
Acesso a todos os produtos do Cloud Platform
Tenha tudo o que você precisa para criar e executar apps, sites e serviços, incluindo o Firebase e a API Google Maps.

Crédito de US$ 300 gratuito
Use o Google Cloud com US$ 300 em crédito para gastar nos próximos 90 dias

Nenhuma cobrança automática será feita após o término do período de teste gratuito
Solicitamos seu cartão de crédito para ter certeza de que você não é um robô. Você não será cobrado, a menos que atualize manualmente para uma conta paga.
```
- pode-se escolher as linguagens 
- em new agent : create_new_project -> create 
- em new agent 
- adicionar um service account 
- pegar as credenciais geradas e criar uma chave em json 
- salvar o arquivo da chave privada 
- comunicação com o dialog flow 
- https://www.npmjs.com/package/dialogflow
- npm install dialogflow
- no site do dialogflow 
- tem um link chamado intents ( intenções )
- welcome 
- Adição de frases de treinamento 
- pode-se definir as respostar 
- pode-se definir a inteção padrão ( quando a pergunta não está cadastrada)
- cadastrar o maior conjunt ode agentes possiveis para melhorar a responsividade 
- podemos saber em qual intent ele cai olhando a resposta em JSON 
-  parte 6 inserindo busca de videos 
- https://www.npmjs.com/package/youtube-node
- npm install youtube-node --save
- precisamos de uma key para fazer a busca 
- no google cloud 
- https://developers.google.com/youtube/v3/getting-started
- https://developers.google.com/youtube/v3/quickstart/nodejs
- Use this wizard to create or select a project in the Google Developers Console and automatically turn on the API. Click Continue, then Go to credentials.
- selecionar o projeto criado no dialogflow 
- youtubedata apiv3
- servidor web nodejs 
- dados publicos
- preciso de quais credenciais 
- obtive a chave das crednciais 
- parte 7 juntando toda a api 
- criar uma intenção para pedir videos 
- nome : treino específico 
- adicionar frases de treinamento 
- trainign phrases 
- me manda umn video de biceps 
- video de biceps 
- videos de exercicios de pernas 
- ... 
- clicar em biceps e transformar em entidade 
- entidade chamada corpo 
- pode ter vários sinonimos  ex : braço (biceps ) , pernas (panturrilha , bunda , bum-bum , gluteo   )
- se buscarmos por video sde gluteos ele identificara como a entidade @corpo 
- e na resposta : 
- Legal , vou te mandar um treino de @corpo , dá uma olhada 
- salvar 
-  já funciona a consulta de intenção no telegram so falta enviar os videos 
-  agora a  consulta funciona e mostra os vídeos, projeto terminado ! 

