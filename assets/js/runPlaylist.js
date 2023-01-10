var runingPlayList = [
    // running play list
    {
        'playlistId': 'playlistId=PL9EOmt9pLEmUMUwSCElenjEQoljab98YX'
    }
    ,
    {
        'playlistId': 'playlistId=PL5TLzNi5fYd_gQY6cV42FZ4V4-16W8B_E'
    }
];

// lowIntensityWorkOut()

async function lowIntensityWorkOut() {
    var ipareturnedData = await fetchApiData(runingPlayList[0].playlistId);
    console.log('Running low intensity workout:  ' + Object.values(ipareturnedData.items));
    var domContainer = $('.cotainer');
    var headerH1 = $('<h1></h1>').text('Running low intensity workout');
    var section = $('<section></section');
    section.prepend(headerH1);

    // var tumbNail = ipareturnedData.items[0].snippet[0].thumbnails.standard.url;
    ipareturnedData.items.forEach((el) => {

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
    domContainer.after(section);
}

lowIntensityWorkOut();

// Nutrition and mood regulation 
async function nutritianHelpRegulateMood() {
    var ipareturnedData = await fetchApiData(runingPlayList[1].playlistId);
    console.log('Running low intensity workout:  ' + Object.values(ipareturnedData.items));
    var domContainer = $('.cotainer');
    var headerH1 = $('<h1></h1>').text('Regulate mood by taking the right nutrition');
    var section = $('<section></section');
    section.prepend(headerH1);

    // var tumbNail = ipareturnedData.items[0].snippet[0].thumbnails.standard.url;
    ipareturnedData.items.forEach((el) => {

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
    domContainer.after(section);
}

nutritianHelpRegulateMood();

