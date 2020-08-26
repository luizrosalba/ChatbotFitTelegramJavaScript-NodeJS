const YouTube = require('youtube-node')
const config = require('./yt-config.json')

const youtube = new YouTube();

youtube.setKey(config.key);

youtube.search('Exercicio em casa para bíceps', 2,function(error,result){
    if (!error){
        console.log(JSON.stringify(result,null,2));
    }
    else{
        console.log(error);
    }
    
});

function searchVideoURL(message, queryText){
    return new Promise ((resolve,reject) => {
        youtube.search(`Exercício em casa para biceps ${queryText}`, 2 , function (error, result) {
            if (!error) {
                const videosIds = result.items.map((item)=> item.id.videoId).filter(item=>item); /// retorna so videos com id validos 
                const youtubeLinks = videosIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}` );
                resolve(`${message} ${youtubeLinks.join(`, `)}`);
            }
            else  {
                reject('Deu erro');
            }
        });
    
    });

}

module.exports.searchVideoURL = searchVideoURL; 
/// 