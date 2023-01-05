var apiKey = 'AIzaSyA7GFSrrG8v7j_vHqluZD_SnoUS-LgLiDE';
var youtube = 'https://www.youtube.com/watch?'


$.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&type=video&type=channel&videoType=any&key=${apiKey}`)
    .then(data => {

        console.log('second api', data)

        var videoId = data.items[1].id.videoId;
        var channelId = data.items[1].snippet.channelId;
        var channelTitle = data.items[1].snippet.title;
        var description = data.items[1].snippet.description;

        console.log(`videoId: ${videoId} channelId: ${channelId} channelTitle: ${channelTitle} description: ${description}`)

        console.log(youtube + "v=" + videoId + "&ab_channel=" + channelId);


    });
