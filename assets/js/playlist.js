var apiKey = 'AIzaSyA7GFSrrG8v7j_vHqluZD_SnoUS-LgLiDE';
var youtube = 'https://www.youtube.com/embed/';
var fetchApi = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet'
var otherSearchParameters = 'videoType=videoTypeUnspecified'

// building muscles: https://www.youtube.com/@JeffNippard
// We are going for three types of playlist for building body mass
var playlist = [
    {
        'playlistId': 'playlistId=PLp4G6oBUcv8yxB4H2Y7IdOjst78R9UmCg'
    },
    {
        'playlistId': 'playlistId=PLp4G6oBUcv8zeDXbOiCu4AKcs9nlRSjYY'
    },
    {
        'playlistId': 'playlistId=PLp4G6oBUcv8x4Z0h8Fd40t--bGSwZjusI'
    }
];



async function fetchApiData(UserId) {
    return $.get(`${fetchApi}&key=${apiKey}&${UserId}`)
        .then(resp => {
            console.log(resp);
            return resp;
        });
}

// Fully body work playlist item: Full Body Science Applied Workouts
async function fundamentalsSeries() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);
    // console.log(for Object.values(ipareturnedData.items));
    var domContainer = $('.cotainer');
    var headerH1 = $('<h1></h1>').text('Fundamentals Series');
    var section = $('<section></section');
    section.prepend(headerH1);
    ipareturnedData.items.forEach((el) => {
        //console.log(el.snippet
        //);
        console.log('Running low intensity workout print: ',
            el
        );

        var emBedClip = youtube + el.snippet.resourceId.videoId;
        var title = el.snippet.title;
        var description = el.snippet.description;

        var videos = `
        <iframe width="420" height="315" src='${emBedClip}'></iframe>
        <h3>${title}</h3>
        `
        section.append(videos);
    });
    domContainer.prepend(section);
}
fundamentalsSeries();

// Fully body work playlist item: Full Body Science Applied Workouts
async function fullBodyWorkOut() {
    var ipareturnedData = await fetchApiData(playlist[1].playlistId);
    // console.log(for Object.values(ipareturnedData.items));

    var domContainer = $('.cotainer');
    var headerH1 = $('<h1></h1>').text(' FULL BODY Workout For Muscle Growth');
    var section = $('<section></section');
    section.prepend(headerH1);
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
        <h3>${title}</h3>
        `
        section.append(videos);
    });
    domContainer.append(section);
}
fullBodyWorkOut();

// Fully body work playlist item: your lower part of your body
async function benchPress() {
    var ipareturnedData = await fetchApiData(playlist[2].playlistId);
    console.log('Bench press:  ' + Object.values(ipareturnedData.items));
    var domContainer = $('.cotainer');
    var headerH1 = $('<h1></h1>').text('PUSH Workout: Chest, Shoulders & Triceps');
    var section = $('<section></section');
    section.prepend(headerH1);
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
        <h3>${title}</h3>
        `
        section.append(videos);
    });
    domContainer.append(section);
}
benchPress();

