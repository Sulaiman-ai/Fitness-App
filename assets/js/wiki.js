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

categories = [
    {heading: "Exercise",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgPx0siuRGE6tdeqq080yhX84qQMfIvWfTQ&usqp=CAU",
    caption: "Various exercise to meet different targets"},
    // {heading: "Mental Health",
    // thumbnail: "",
    // caption: "Tips for managing mental health"},
    {heading:"Dieting",
    thumbnail: "https://stevegranthealth.com/wp-content/uploads/flexible-dieating-for-weight-loss-min-scaled.jpg",
    caption: "Information on different diet types"}
]

// function to generate and compile the category card html
function generateCategoryCards(categories){
    html = "";
    for (const category of categories){
        html += createCategoryCard(category.thumbnail, category.heading, category.caption)
    }
    return html;
}

article_titles = {
    Exercise: ["Aerobics", "Calisthenics", "Strength_training", "Pilates"],
    // "Mental Health": ["Mindfulness"],
    Dieting: ["Food_group", "Low-carbohydrate_diet", "Mediterranean_diet"]
}

titles = ["Food_group", "Aerobics", "Weight_loss"]


// function to call the API and compile all the data into an array of objects
async function wikiDataList(titles){
    let wikiData = [];
    
    for (const title of titles){
        let wikiObj;
        await getWikiData(title).then((data)=>{
            html = data.html;
            pageID = data.pageID;
            link = `https://en.wikipedia.org/wiki/${title}`
            
            return getThumbnail(title, pageID).then((url)=>{
                thumbnailSRC = url;
                wikiObj = {header, html, pageID, thumbnailSRC, link}
                wikiData.push(wikiObj);
            })
        });
    }
    return wikiData
}

// Promise which calls the wiki API the resolves the relevant data
async function getWikiData(title){
    console.log(title)
    url = getURL(title)
    let html;
    let pageID;
    const wikiPromise = new Promise((resolve, reject) => {
        $.get(url + '&origin=*', function( data ) {
            html = data.parse.text["*"];
            pageID = data.parse.pageid;
            header = data.parse.title;
            console.log("data", data)
            let thumbnailSRC;

            console.log("data", data)

            resolve({html, pageID, header});
        })
    });
    return wikiPromise
  };


// API call to get the thumbnail source
async function getThumbnail(title, pageID){
    thumbnailURL = getThumbnailURL(title)
    console.log(thumbnailURL)
    thumbnailPromise = new Promise((resolve, reject) =>{
        $.get(thumbnailURL + '&origin=*', function( data ) {
            thumbnailSRC = data.query.pages[pageID].thumbnail.source;
            resolve(thumbnailSRC)
        })
    });
    return thumbnailPromise
};

// gets the data from the API call and compiles the cards created using that API data
async function generateCards(titles){
    wikiData = await wikiDataList(titles)
    console.log(wikiData)
    html = "";
    for (i=0; i<wikiData.length; i++){
        article = wikiData[i];
        html += createWikiCard(article.thumbnailSRC, article.header, getCaption(article.html), article.link)
    }

    return html;
}

// takes a container and html code, and adds the elements inside the container
function loadCards(container, html){
    $(container).html(html)
    // $('#modal-body').html(html)
}


async function showCards(){
    html = await generateCards(1)
    loadCards(html)
}


// click listener which generates the cards when the user selects articles
$("#articles-btn").click(function(){
    $("#main").html("")
    html = generateCategoryCards(categories);
    loadCards("#main", html)
    // showCards()
    categoryListeners();
    
})


// assigns listener to the category cards
// when the card is clicked the relevant cards are added to the modal
function categoryListeners(){
    $("#Exercise-articles").click(async function(){
        $("#modal-body").html("")
        html = await generateCards(article_titles.Exercise);
        console.log(html)
        loadCards("#modal-body", html)
    });

    $("[id='Mental Health-articles']").click(async function(){
        $("#modal-body").html("")
        html = await generateCards(article_titles["Mental Health"]);
        console.log(html)
        loadCards("#modal-body", html)
    });

    $("#Dieting-articles").click(async function(){
        $("#modal-body").html("")
        html = await generateCards(article_titles.Dieting);
        console.log(html)
        loadCards("#modal-body", html)
    });
}



// gets the url to use for the API based on the article's title
function getURL(title){
    return `https://en.wikipedia.org/w/api.php?action=parse&page=${title}&prop=text&section=0&format=json`
}

// gets the url to use in the API call to get the article thumbnail
function getThumbnailURL(title){
    return `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=100`
}


// a function to retrieve the article description from the wiki articles html code
function getCaption(html){
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let description = doc.getElementsByClassName('shortdescription')
    caption = description[0].innerHTML;
    console.log(description[0].innerHTML)
    return caption;
}




// Generates the html for the cards showing the different fitness categories
function createCategoryCard(thumbnailURL, title, caption){
    return `
    <div id="${title}-articles" class="card shadow mb-3 bg-white rounded " style="max-width: 1000px;">
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



function createWikiCard(thumbnailURL, title, caption, link, category){
    return `
    <div id="${category}-articles" class="card shadow mb-3 bg-white rounded " style="max-width: 1000px;">
                        <div class="row no-gutters">
                            <div class=" col-md-4" data-toggle="modal" data-target="#exampleModal">
                              <img src="${thumbnailURL}" class="card-img" alt="..."> 
                                
                            </div>
                            <div class="col-md-8" data-toggle="modal" data-target="#exampleModal">
                                <div class="card-body" data-toggle="modal" data-target="#exampleModal">
                                <a href=${link}><h5 class="card-title">${title}</h5></a>
                                    <p class="card-text">${caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>              
    `
}

// Categories
// - Exercises
//  - "Aerobics"
//  - Calisthenics
//  - Strength_training
// - Mental Health
// - Dieting
//  - "Food_group"
//  - Low-carbohydrate_diet

// Cards
// Modal cards

// loop through catergories
// create card for each category
// each card needs:
// 1. Title
// 2. Thumbnail
// 3. Caption