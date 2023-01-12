// App logic would go on this page
var giphyApiKey = 'tmI2zoMloYI1yzpVJ3Fu89QrG5JqVbGG';
var giphyBaseUrl = 'http://api.giphy.com/v1/gifs/search?'

// https://www.pexels.com/api/new/
var pexelApiKey = '563492ad6f91700001000001f9159f2f3b3945ec9be0440bb7301e28';
pexelBaseUrl = 'https://api.pexels.com/v1/search?';

async function fetchPexelApiData(giphyKey, searchKey) {
    return fetch(`${pexelBaseUrl}query=${searchKey}`,
        {
            headers: {
                Authorization: giphyKey
            }
        }).then(resp => {
            return resp.json()
        })
        .then(data => {
            //  console.log(data.photos);

            return data.photos;
        });
}


async function fundamentalsSeriesDOMoutPut() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);

    var searchkeyPexels = 'Muslce';
    var giphyApiData = await fetchPexelApiData(pexelApiKey, searchkeyPexels);
    // console.log(giphyApiData);
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[8].src.original;
    var PexelAlt = giphyApiData[8].alt;
    // console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;
    // data-toggle="modal" data-target="#exampleModal"
    var videos = `
        <div id="fundSeries" onclick="fundamentalsSeries()" class="card fundSeries cardOptions shadow mb-3 bg-white rounded" style="max-width: 1000px;" data-toggle="modal" data-target="#exampleModal">
                            <div class="row no-gutters">
                                <div class=" col-md-4" >
                               
                                  <img src="${image}" class="card-img" alt="${PexelAlt}"> 
                                    
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body" >
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">
                                        
                                    
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}

async function nutritianHelpRegulateMoodDOMoutPut() {
    var ipareturnedData = await fetchApiData(runingPlayList[1].playlistId);
    var searchkeyPexels = 'nutritionist';
    var giphyApiData = await fetchPexelApiData(pexelApiKey, searchkeyPexels);
    // console.log(giphyApiData );
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[14].src.tiny;
    var PexelAlt = giphyApiData[14].alt;
    // console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div onclick=" nutritianHelpRegulateMood()" class="card  cardOptions shadow mb-3 bg-white rounded" style="max-width: 1000px;" data-toggle="modal" data-target="#exampleModal">
                            <div class="row no-gutters">
                                <div class=" col-md-4" >
                                  <img src="${image}" class="card-img" alt="${PexelAlt}"> 
                                    
                                </div>
                                <div class="col-md-8" >
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">A good nutrition is important for our mental health. Checkout these anti-inflamatory recipes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}


async function lowIntensityWorkOutDOMoutPut() {
    var ipareturnedData = await fetchApiData(runingPlayList[0].playlistId);

    var searchkeyPexels = 'running';
    var giphyApiData = await fetchPexelApiData(pexelApiKey, searchkeyPexels);
    console.log(giphyApiData);
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[0].src.tiny;
    var PexelAlt = giphyApiData[0].alt;
    // console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div onclick="lowIntensityWorkOut()" class="card cardOptions  shadow mb-3 bg-white rounded" style="max-width: 1000px;" data-toggle="modal" data-target="#exampleModal">
                            <div class="row no-gutters">
                                <div class=" col-md-4" >
                                  <img src="${image}" class="card-img" alt="..."> 
                                    
                                </div>
                                <div class="col-md-8" >
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">Want to improve your self-confidence, your mental health or strengthen your muscles? See what jogging 30 minutes a day can do for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}

async function fullBodyWorkOutDOMoutPut() {
    var ipareturnedData = await fetchApiData(playlist[1].playlistId);

    var searchkeyPexels = 'body building';
    var giphyApiData = await fetchPexelApiData(pexelApiKey, searchkeyPexels);
    console.log('full body', giphyApiData
    );
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[0].src.tiny;
    // console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div id="firstquestion" onclick="fullBodyWorkOut()" class="card cardOptions shadow mb-3 bg-white rounded " style="max-width: 1000px;" data-toggle="modal" data-target="#exampleModal">
                            <div class="row no-gutters">
                                <div class=" col-md-4">
                                  <img src="${image}" class="card-img" alt="..."> 
                                    
                                </div>
                                <div class="col-md-8" >
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">Whether you're a bodybuilder of any level, are underweight, or want to build muscle following an injury or illness, a total-body workout can help you gain muscle and strength.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}


// This function will load once the button is clicked
async function init() {
    await fundamentalsSeriesDOMoutPut();
    await nutritianHelpRegulateMoodDOMoutPut();
    await lowIntensityWorkOutDOMoutPut();
    await fullBodyWorkOutDOMoutPut();

};
// init();

$("#exercise-routine-btn").click(function(){
    $("#main").html("")
    init()
})


// window.load = (function () {
//     alert('page is loaded');

//     // setTimeout(function () {
//     //     alert('page is loaded and 1 minute has passed');   
//     // }, 60000);



// });


// if (document.querySelector("#fundSeries")) {
//     alert("Element exists");
// } else {
//     alert("Element does not exist");
// }


function getLocaStorageItem() {
    return JSON.parse(localStorage.getItem('PlayListWatched')) || [];
}

// var localstoredItem = getLocaStorageItem();
// console.log('consoling out local storange: ', localstoredItem);

var modalBody = $('#modal-body');
console.log(modalBody);




