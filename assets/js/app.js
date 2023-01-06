var apiKey = 'AIzaSyA7GFSrrG8v7j_vHqluZD_SnoUS-LgLiDE';
var youtube = 'https://www.youtube.com/embed/';
var fetchApi = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet'
var otherSearchParameters = 'channelType=channelTypeUnspecified&videoType=videoTypeUnspecified'

var userChannelId = [
    {
        'channelId': 'channelId=UCsC9Y1KhOw-aKSUBE0F_ikQ'
    },
    {
        'channelId': 'channelId=UCs_azWRsdYDhKonquMlAMfQ',
    },
    {
        'channelId': 'channelId=UCjTp-nBKswYLumqmVeBPwYw'
    }
];

async function fetchApiData(UserId) {
    return $.get(`${fetchApi}&key=${apiKey}&${UserId}&${otherSearchParameters}`)
        .then(resp => {
            return resp;
        });
}

async function goodVibesPodCast() {
    var ipareturnedData = await fetchApiData(userChannelId[0].channelId);
    console.log('getAPIData function:  ' + ipareturnedData);
    var domContainer = $('.cotainer');
    ipareturnedData.items.forEach((el) => {
        console.log(el);
        var videoId = el.id.videoId;
        var channelId = el.snippet.channelId;
        var channelTitle = el.snippet.title;
        var description = el.snippet.description;

        // console.log(`videoId: ${videoId} channelId: ${channelId} channelTitle: ${channelTitle} description: ${description}`)
        // console.log(youtube + "v=" + videoId + "&ab_channel=" + channelId);

        var videos = `<iframe width="420" height="315" src='${youtube}${videoId}'></iframe>
                <p><h2>${channelTitle}</h2></p>
                <p>${description}</p>`
        domContainer.append(videos);
    });
}
goodVibesPodCast();

async function keepMindAndBodytuned() {
    var ipareturnedData = await fetchApiData(userChannelId[1].channelId);

    console.log('ipareturnedData:  ' + ipareturnedData);
    var domContainer = $('.cotainer');
    ipareturnedData.items.forEach((el) => {
        console.log(el);
        var videoId = el.id.videoId;
        var channelId = el.snippet.channelId;
        var channelTitle = el.snippet.title;
        var description = el.snippet.description;

        // console.log(`videoId: ${videoId} channelId: ${channelId} channelTitle: ${channelTitle} description: ${description}`)
        // console.log(youtube + "v=" + videoId + "&ab_channel=" + channelId);

        var videos = `<iframe width="420" height="315" src='${youtube}${videoId}'></iframe>
                    <p><h2>${channelTitle}</h2></p>
                    <p>${description}</p>`
        domContainer.append(videos);
    });
}
keepMindAndBodytuned()

async function BuildAdefinedBody() {
    var ipareturnedData = await fetchApiData(userChannelId[2].channelId);
    console.log('BuildAdefinedBody function:  ' + ipareturnedData);
    var domContainer = $('.cotainer');
    ipareturnedData.items.forEach((el) => {
        console.log(el);
        var videoId = el.id.videoId;
        var channelId = el.snippet.channelId;
        var channelTitle = el.snippet.title;
        var description = el.snippet.description;

        // console.log(`videoId: ${videoId} channelId: ${channelId} channelTitle: ${channelTitle} description: ${description}`)
        // console.log(youtube + "v=" + videoId + "&ab_channel=" + channelId);

        var videos = `<iframe width="420" height="315" src='${youtube}${videoId}'></iframe>
                <p><h2>${channelTitle}</h2></p>
                <p>${description}</p>`
        domContainer.append(videos);
    });
}

BuildAdefinedBody();




