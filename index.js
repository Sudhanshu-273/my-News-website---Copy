//4e64231677c545f7831456b345c7ace0

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

let source = 'the-times-of-india';
let apiKey = '4e64231677c545f7831456b345c7ace0';

//Create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

//what to do when response is ready

xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles)
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <div class="mb-0">
                                    <div><i>#${index+1}</i> Source : <b>${element.source["name"]}</b></div>
                                    <button style="text-decoration:none" class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true"  aria-controls="collapse${index}">
                                    <b>${element["title"]}</b>
                                    </button>
                                </div>
                            </div>

                            <div id="collapse${index}" class="collapse hide" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here...</a> </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();