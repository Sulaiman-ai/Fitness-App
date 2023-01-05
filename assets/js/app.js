var apiKey = 'AIzaSyA7GFSrrG8v7j_vHqluZD_SnoUS-LgLiDE';
var youtube = 'https://www.youtube.com/embed/'
//var chanelsID = 'golujalalabadvlogs571';


https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsC9Y1KhOw-aKSUBE0F_ikQ&channelType=channelTypeUnspecified&videoType=videoTypeUnspecified&key=[YOUR_API_KEY]' \


$.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsC9Y1KhOw-aKSUBE0F_ikQ&channelType=channelTypeUnspecified&videoType=videoTypeUnspecified&key=${apiKey}`)
    .then(data => {
        var domContainer = $('.cotainer');
        console.log('second api', data);



        data.items.forEach((el) => {

            console.log(el);
            var videoId = el.id.videoId;
            var channelId = el.snippet.channelId;
            var channelTitle = el.snippet.title;
            var description = el.snippet.description;

            console.log(`videoId: ${videoId} channelId: ${channelId} channelTitle: ${channelTitle} description: ${description}`)
            console.log(youtube + "v=" + videoId + "&ab_channel=" + channelId);

            var videos = `<iframe width="420" height="315" src='${youtube}${videoId}'></iframe>
            
                <p><h2>${channelTitle}</h2></p>
                <p>${description}</p>`
            domContainer.append(videos);
        });




    });
