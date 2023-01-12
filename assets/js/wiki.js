thumbnailURL = "https://picsum.photos/200"

caption = `This is a wider
                    card with supporting text below as a
                    natural lead-in to additional
                    content. This content is a little
                    bit longer.`

function createCard(number, thumbnailURL, title, caption){
    // loop number times
    // for each loop add html for the new thumbnail
    
    return `<div class="card mb-3" style="max-width: 1000px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src= ${thumbnailURL}
                    class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${caption}</p>
                    <p class="card-text"><small
                            class="text-muted">Last updated
                            3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>`
    // )
}
// ---------------------------------------------------------------------------------------------------

// function loops through titles
// gets the wiki data from each title
// appends the object to list
// loops through object list to create cards
// data = {title, thumbnail, caption}

// options
// get all wiki data, then start creating cards
// create card each time a get data


// url = "https://en.wikipedia.org/w/api.php?action=parse&page=pizza&prop=text&section=0&format=json"

// thumbnailURL = "https://en.wikipedia.org/w/api.php?action=query&titles=pizza&prop=pageimages&format=json&pithumbsize=100"

titles = ["Food_group", "Aerobics", "Weight_loss"]

async function wikiDataList(titles){
    let wikiData = [];
    
    // titles.forEach(()=>{wikiData.push(getWikiData())})
    for (const title of titles){
        let wikiObj;
        await getWikiData(title).then((data)=>{
            html = data.html;
            pageID = data.pageID;
            console.log(title)
            console.log(pageID)
            
            return getThumbnail(title, pageID).then((url)=>{
                thumbnailSRC = url;
                wikiObj = {header, html, pageID, thumbnailSRC}
                // wikiData.push({title:"title", html:"html", pageID:"pageID", thumbnailSRC:"thumbnailSRC"})
                wikiData.push(wikiObj);
                console.log("just pushed")
            })
        });
        console.log(wikiData)
        console.log(wikiData.length)
    }
    console.log("loop finish")
    // wikiData.push({title:"title", html:"html", pageID:"pageID", thumbnailSRC:"thumbnailSRC"})
    // wikiData.shift()
    // console.log(wikiData)
    // console.log(wikiData["1"])
    return wikiData
}

async function getWikiData(title){
    console.log(title)
    url = getURL(title)
    console.log(url)
    let html;
    let pageID;
    const wikiPromise = new Promise((resolve, reject) => {
        $.get(url + '&origin=*', function( data ) {
            html = data.parse.text["*"];
            pageID = data.parse.pageid;
            header = data.parse.title;
            console.log("data", data)
            let thumbnailSRC;

            console.log(data)

            // thumbnailSRC = getThumbnail(title, pageID);
            // getThumbnail(title, pageID).then((data)=>{
            //     thumbnailSRC=data
            //     console.log(thumbnailSRC)
            //     resolve({html, thumbnailSRC});
            // });
            resolve({html, pageID, header});
        })
        // .then(()=> {return {html, thumbnailSRC}});
    });
    return wikiPromise
  };

async function getThumbnail(title, pageID){
    thumbnailURL = getThumbnailURL(title)
    console.log(thumbnailURL)
    thumbnailPromise = new Promise((resolve, reject) =>{
        $.get(thumbnailURL + '&origin=*', function( data ) {
            console.log(data)
            console.log(title)
            console.log(pageID);
            console.log(data.query.pages)
            thumbnailSRC = data.query.pages[pageID].thumbnail.source;
            resolve(thumbnailSRC)
        })
        // .then(()=>{return thumbnailSRC});
    });
    return thumbnailPromise
};


async function generateCards(number){
    wikiData = await wikiDataList(titles)
    console.log(wikiData["0"])
    console.log(wikiData.length)
    html = "";
    for (i=0; i<wikiData.length; i++){
        article = wikiData[i];
        html += createWikiCard(article.thumbnailSRC, article.header, getCaption(article.html))
    }
    // wikiData.forEach((article)=>{
    //     console.log("hello")
    //     console.log(createWikiCard(article.thumbnailSRC, article.title, "caption"))
    //     html += createWikiCard(article.thumbnailSRC, article.title, "caption")
    // })
    console.log(html)
    return html;
}

function loadCards(html){
    console.log(html)
    $("#main").html(html)
}

// console.log(wikiDataList(titles))
async function showCards(){
    html = await generateCards(1)
    loadCards(html)
}



$("#articles-btn").click(function(){
    $("#main").html("")
    showCards()
})


function getURL(title){
    return `https://en.wikipedia.org/w/api.php?action=parse&page=${title}&prop=text&section=0&format=json`
}

function getThumbnailURL(title){
    return `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=100`
}


function getCaption(html){
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let description = doc.getElementsByClassName('shortdescription')
    caption = description[0].innerHTML;
    console.log(description[0].innerHTML)
    return caption;
}



// loadCards(thumbnailURL, "Fitness", caption)


// $("#exercise-routine-btn").click(function(){}
// })



function createWikiCard(thumbnailURL, title, caption){
    return `
    <div class="card shadow mb-3 bg-white rounded " style="max-width: 1000px;">
                        <div class="row no-gutters">
                            <div class=" col-md-4" data-toggle="modal" data-target="#exampleModal">
                              <img src="${thumbnailURL}" class="card-img" alt="..."> 
                                
                            </div>
                            <div class="col-md-8" data-toggle="modal" data-target="#exampleModal">
                                <div class="card-body" data-toggle="modal" data-target="#exampleModal">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>              
    `
}

