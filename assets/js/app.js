// App logic would go on this page
var giphyApiKey = 'tmI2zoMloYI1yzpVJ3Fu89QrG5JqVbGG';
var giphyBaseUrl = 'http://api.giphy.com/v1/gifs/search?'

// https://www.pexels.com/api/new/
var pexelApiKey = '563492ad6f91700001000001f9159f2f3b3945ec9be0440bb7301e28';
pexelBaseUrl = 'https://api.pexels.com/v1/search?';

async function fetchPexelApiData(giphyKey) {
    return fetch(`${pexelBaseUrl}query=Muslces`,
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

    var giphyApiData = await fetchPexelApiData(pexelApiKey);
    console.log(giphyApiData
    );
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[0].src.original;
    console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div class="card mb-3 " style="max-width: 1000px;">
                            <div class="row no-gutters">
                                <div class=" col-md-4" data-toggle="modal" data-target="#exampleModal">
                                  <img src="${image}" class="card-img" alt="..."> 
                                    
                                </div>
                                <div class="col-md-8" data-toggle="modal" data-target="#exampleModal">
                                    <div class="card-body" data-toggle="modal" data-target="#exampleModal">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">This is a wider
                                            card with supporting text below as a
                                            natural lead-in to additional
                                            content. This content is a little
                                            bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}
fundamentalsSeriesDOMoutPut();




async function nutritianHelpRegulateMoodDOMoutPut() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);

    var giphyApiData = await fetchPexelApiData(pexelApiKey);
    console.log(giphyApiData
    );
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[0].src.original;
    console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div class="card mb-3 " style="max-width: 1000px;">
                            <div class="row no-gutters">
                                <div class=" col-md-4" data-toggle="modal" data-target="#exampleModal">
                                  <img src="${image}" class="card-img" alt="..."> 
                                    
                                </div>
                                <div class="col-md-8" data-toggle="modal" data-target="#exampleModal">
                                    <div class="card-body" data-toggle="modal" data-target="#exampleModal">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">This is a wider
                                            card with supporting text below as a
                                            natural lead-in to additional
                                            content. This content is a little
                                            bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}
nutritianHelpRegulateMoodDOMoutPut();




async function lowIntensityWorkOutDOMoutPut() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);

    var giphyApiData = await fetchPexelApiData(pexelApiKey);
    console.log(giphyApiData
    );
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[0].src.original;
    console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div class="card mb-3 " style="max-width: 1000px;">
                            <div class="row no-gutters">
                                <div class=" col-md-4" data-toggle="modal" data-target="#exampleModal">
                                  <img src="${image}" class="card-img" alt="..."> 
                                    
                                </div>
                                <div class="col-md-8" data-toggle="modal" data-target="#exampleModal">
                                    <div class="card-body" data-toggle="modal" data-target="#exampleModal">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">This is a wider
                                            card with supporting text below as a
                                            natural lead-in to additional
                                            content. This content is a little
                                            bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}
nutritianHelpRegulateMoodDOMoutPut();

async function fullBodyWorkOutDOMoutPut() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);

    var giphyApiData = await fetchPexelApiData(pexelApiKey);
    console.log(giphyApiData
    );
    // var image = giphyApiData.data[0].url;
    var pushToMainCont = $('#main');

    // var image = ipareturnedData.items[0].snippet.thumbnails.standard
    //     .url;
    // console.log(image);
    var image = giphyApiData[0].src.original;
    console.log(image);
    var title = ipareturnedData.items[0].snippet.title;
    // // var description = el.snippet.description;

    var videos = `
        <div class="card mb-3 " style="max-width: 1000px;">
                            <div class="row no-gutters">
                                <div class=" col-md-4" data-toggle="modal" data-target="#exampleModal">
                                  <img src="${image}" class="card-img" alt="..."> 
                                    
                                </div>
                                <div class="col-md-8" data-toggle="modal" data-target="#exampleModal">
                                    <div class="card-body" data-toggle="modal" data-target="#exampleModal">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">This is a wider
                                            card with supporting text below as a
                                            natural lead-in to additional
                                            content. This content is a little
                                            bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>              
        `
    pushToMainCont.append(videos);

}
fullBodyWorkOutDOMoutPut();

