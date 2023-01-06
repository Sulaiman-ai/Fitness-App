var apiKey = 'AIzaSyA7GFSrrG8v7j_vHqluZD_SnoUS-LgLiDE';
var youtube = 'https://www.youtube.com/embed/';
var fetchApi = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet'
var otherSearchParameters = 'videoType=videoTypeUnspecified'

var playlist = [
    {
        'playlistId': 'playlistId=PLp4G6oBUcv8x4Z0h8Fd40t--bGSwZjusI',
    },
    {
        'playlistId': 'playlistId=PLp4G6oBUcv8zONgSGJFZRnsOM5Np_hrXr'
    }
];

async function fetchApiData(UserId) {
    return $.get(`${fetchApi}&key=${apiKey}&${UserId}`)
        .then(resp => {
            console.log(resp);
            return resp;
        });
}

async function fullBodyWorkOut() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);
    console.log('PlayList item:  ' + Object.values(ipareturnedData.items));
    var domContainer = $('.cotainer');
    ipareturnedData.items.forEach((el) => {
        //console.log(el.snippet
        //);
        console.log('print: ',
            el
        );

        var emBedClip = youtube + el.snippet.resourceId.videoId;
        var title = el.snippet.title;
        var description = el.snippet.description;

        var videos = `
       
        <iframe width="420" height="315" src='${emBedClip}'></iframe>
        <h2>${title}</h2>
        `
        domContainer.append(videos);
    });
}
fullBodyWorkOut();


async function benchPress() {



    var ipareturnedData = await fetchApiData(playlist[1].playlistId);
    console.log('Bench press:  ' + Object.values(ipareturnedData.items));
    var domContainer = $('.cotainer');
    ipareturnedData.items.forEach((el) => {
        //console.log(el.snippet
        //);
        console.log('print: ',
            el
        );

        var emBedClip = youtube + el.snippet.resourceId.videoId;
        var title = el.snippet.title;
        var description = el.snippet.description;

        var videos = `
      
        <iframe width="420" height="315" src='${emBedClip}'></iframe>
        <h2>${title}</h2>
        `
        domContainer.after(videos);
    });
}
benchPress();
