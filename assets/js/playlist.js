var apiKey = 'AIzaSyA7GFSrrG8v7j_vHqluZD_SnoUS-LgLiDE';
var youtube = 'https://www.youtube.com/embed/';
var fetchApi = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet'
var otherSearchParameters = 'videoType=videoTypeUnspecified'


// Local storage checks

function getLocaStorageItem() {
    return JSON.parse(localStorage.getItem('PlayListWatched')) || [];
}

// Setting Local storage
function LocaStorageItem(ItemRecieved) {
    localStorage.setItem('PlayListWatched', JSON.stringify(ItemRecieved));
}


// adding stuff to local storage once clicked
function eventListenerForLocalStorage() {
    var watchedButton = $('button#watched');

    watchedButton.on("click", function (event) {
        event.preventDefault();
        var isThereItemInLocoStorage = getLocaStorageItem();
        var localStorangeArr = [];

        var className = $(this).attr('class');
        var videoPlayId = className.split(' ')[0];
        var watchedId = className.split(' ')[1];

        var itemsToStore = {
            'videoPlayId': videoPlayId,
            'videoId': watchedId
        }

        isThereItemInLocoStorage.push(itemsToStore)
        LocaStorageItem(isThereItemInLocoStorage)

        // alert(videoPlayId + " " + watchedId);

        getAndSetPorpertiesToDom();
    });

    getAndSetPorpertiesToDom();
}

function getAndSetPorpertiesToDom() {
    var locallyStoredIds = getLocaStorageItem();
    locallyStoredIds.forEach(items => {
        console.log(items);
        console.log(items.videoId);
        $(`button.${items.videoId}`).css({ "background": "green" });

    });
}
getAndSetPorpertiesToDom();
// function WatchedButton() {
//     ` <button class='${playListId + " watched-" + videoId}' id='watched'>Mark this clip as watched?</button>`
// }


// building muscles: https://www.youtube.com/@JeffNippard
// We are going for three types of playlist for building body mass
// PlayListId key that would be used to get the clips
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

// as the name suggest its an api reqester/fetter
async function fetchApiData(getPlayListId) {
    return $.get(`${fetchApi}&key=${apiKey}&${getPlayListId}`)
        .then(resp => {
            console.log(resp);
            return resp;
        });
}

// Fully body work playlist item: Full Body Science Applied Workouts
async function fundamentalsSeries() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);
    // console.log(for Object.values(ipareturnedData.items));
    var domContainer = $('#modal-body');
    domContainer.html(' ');

    ipareturnedData.items.forEach((el) => {
        //console.log(el.snippet
        //);
        // console.log('Running low intensity workout print: ',el );

        var emBedClip = youtube + el.snippet.resourceId.videoId;
        console.log(emBedClip);
        var title = el.snippet.title;
        var description = el.snippet.description;
        var playListId = el.snippet.playlistId;
        //console.log('id: ', playListId);
        var videoId = el.snippet.resourceId.videoId;

        // building DOM HTML cards
        var videos = `
        <div class="card modalCards ${playListId + " " + videoId} col-md-10" id="${playListId}"  style="width: 20rem;">
         <button class='${playListId + " watched-" + videoId}' id='watched'>Mark this clip as watched?</button>
                            <iframe class="${videoId}"  id="${videoId}" width="420" height="315" src='${emBedClip}'>   
                           
                            </iframe>
                            <h4  class="card-text" >${title}</h4>
                            </div>
                        </div>

        `
        domContainer.append(videos);
    });


    // Call the local storange event function 
    eventListenerForLocalStorage();
}

// Fully body work playlist item: Full Body Science Applied Workouts

async function fullBodyWorkOut() {
    var ipareturnedData = await fetchApiData(playlist[1].playlistId);
    // console.log(for Object.values(ipareturnedData.items));


    var domContainer = $('#modal-body');
    domContainer.html('');

    ipareturnedData.items.forEach((el) => {
        //console.log(el.snippet
        //);
        // console.log('print: ',
        //     el
        // );

        var emBedClip = youtube + el.snippet.resourceId.videoId;
        var title = el.snippet.title;
        var description = el.snippet.description;

        var playListId = el.snippet.playlistId;
        //console.log('id: ', playListId);
        var videoId = el.snippet.resourceId.videoId;


        var videos = `
        <div class="card modalCards ${playListId + ' ' + videoId} col-md-10" id="${playListId}"  style="width: 20rem;">
        <button class='${playListId + " watched-" + videoId}' id='watched'>Mark this clip as watched?</button>
                            <iframe class="${videoId}"  id="${videoId}" width="420" height="315" src='${emBedClip}'></iframe>
                            <h4  class="card-text" >${title}</h4>
                            </div>
                        </div>
        `
        domContainer.append(videos);
    });

    eventListenerForLocalStorage();
}
// fullBodyWorkOut();

// Fully body work playlist item: your lower part of your body
// async function benchPress() {
//     var ipareturnedData = await fetchApiData(playlist[2].playlistId);
//     console.log('Bench press:  ' + Object.values(ipareturnedData.items));
//     var domContainer = $('.cotainer');
//     var headerH1 = $('<h1></h1>').text('PUSH Workout: Chest, Shoulders & Triceps');
//     var section = $('<section></section');
//     section.prepend(headerH1);
//     ipareturnedData.items.forEach((el) => {
//         //console.log(el.snippet
//         //);
//         console.log('print: ',
//             el
//         );

//         var emBedClip = youtube + el.snippet.resourceId.videoId;
//         var title = el.snippet.title;
//         var description = el.snippet.description;

//         var videos = `
//         <iframe width="420" height="315" src='${emBedClip}'></iframe>
//         <h3>${title}</h3>
//         `
//         section.append(videos);
//     });
//     domContainer.append(section);
// }
// benchPress();



