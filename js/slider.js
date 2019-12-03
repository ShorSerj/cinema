let p = new Promise ((resolve, reject) => {

    var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e2c01b015b375681951ef2536440f652';

    var request = new XMLHttpRequest();

    request.open('Get', url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
           
            var data = JSON.parse(this.response);
            resolve(data);
            // console.log(data)

        } else {
            reject()
        }
    };

    request.onerror = function () {

    };

    request.send();
    
})

p.then((data) => {
    const filmsSlider = data.results

    const urlServerApImages = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    const filmsForSlider = filmsSlider.map (film => {
        return ({
            name: film.title,
            ganar: "film.genre_ids",
            image: urlServerApImages + film.poster_path,
            release_date: film.release_date,
            slider: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis',
            fb: "https://fb.com",
            twitter: "https://twitter.com",
            behance: "https://www.behance.net",
            dribble: "https://dribbble.com",
        })
    })

    let mosaicDOM = document.getElementById("grid"); 
    let fullHTML = "";
    for (let i = 0; i < filmsForSlider.length; i++) {
        let currentFilm = filmsForSlider[i]
            filmBlockHTML = film.renderFilmBlock.bind(currentFilm)();
            let duble = fullHTML
            fullHTML = '<div class="movie-grid_item">' + filmBlockHTML + '</div>';
            fullHTML += duble
            mosaicDOM.innerHTML = fullHTML;
        }

    
}).catch()