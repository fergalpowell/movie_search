let api_key = "c315c16c11dbc03308d8efd355eeb5a9";
let genres;
let example = document.getElementById("movie-example");
let movie_template = example.cloneNode(true);

$.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + api_key + '&language=en-US',
        headers: {
            "Accept": "application/json"
        },
        success: function (response) {
            console.log(response);
            genres = response.genres;
        },
        error: function(e){
            console.log(e);
        },
        timeout: 10000
});

document.getElementById("filter-genre").addEventListener("click", function(){
    if(this.firstChild.classList.contains("fa-minus")){
        this.firstChild.classList.remove("fa-minus");
        this.firstChild.classList.add("fa-plus");
        document.getElementById("genres").style.display = "none";
    } else {
        this.firstChild.classList.remove("fa-plus");
        this.firstChild.classList.add("fa-minus");
        document.getElementById("genres").style.display = "flex";
    }
});

$("#search-title").on("input", function(){
    let request = null;
    document.getElementById("search-results").innerHTML = "";
    if(this.value !== ""){
        request = $.ajax({
            type: 'get',
            url: 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + this.value,
            headers: {
                "Accept": "application/json"
            },
            success: function (response) {
                DisplayMovies(response);
            },
            error: function(e){
                console.log(e);

            },
            timeout: 10000
    });
    }
});


function DisplayMovies(data){
    for (let i = 0; i < data.results.length; i++){
        let movie_result = movie_template.cloneNode(true);
        let c = movie_result.children;
        c[0].children[0].src = "http://image.tmdb.org/t/p/w185/" + data.results[i].poster_path;
        let info = c[1].children;
        info[0].children[0].innerHTML = data.results[i].title;
        info[1].children[0].innerHTML = data.results[i].vote_average;
        info[2].innerHTML = "";
        for (let j = 0; j < data.results[i].genre_ids.length; j++){
            info[2].innerHTML += "<span>" + getGenre(data.results[i].genre_ids[j]); + "</span>";
            if(j !== data.results[i].genre_ids.length - 1){
                info[2].innerHTML += "<span>&nbsp;|&nbsp;</span>"
            }
        }
        info[3].children[0].innerHTML = data.results[i].overview;
        info[4].children[0].innerHTML = data.results[i].release_date;
        document.getElementById("search-results").appendChild(movie_result);
    }
}

function getGenre(id){
    for (let i = 0; i < genres.length; i++){
        if(genres[i].id === id){
            return genres[i].name;
        }
    }
}