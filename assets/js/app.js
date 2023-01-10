// App logic would go on this page

async function fundamentalsSeriesDOMoutPut() {
    var ipareturnedData = await fetchApiData(playlist[0].playlistId);
    // console.log(for Object.values(ipareturnedData.items));

    ipareturnedData.items.forEach((el) => {
        //console.log(el.snippet
        //);
        console.log('Running low intensity workout print: ',
            el
        );

        var image = youtube + el.snippet.resourceId.videoId;
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
// fundamentalsSeriesDOMoutPut();
