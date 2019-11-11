// Тестовые данные (заглушка, моковые данные, стабы) - ответ от сервиса фильмов
// films.ru/api/v1.0/films

films = [
    film1 = {
        name: 'Человек паук',
        start: '',
        ganar: [1, 2],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        image: 'images/spider.jpg',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        dribble: "https://dribbble.com",
    },
    film2 = {
        name: 'Собачья жизнь 2',
        start: '',
        ganar: [3, 4, 0],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        image: 'images/dog.jpg',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        dribble: "https://dribbble.com",
    },
    film3 = {
        name: 'История игрушек 4',
        start: '19:00',
        ganar: [5, 3, 2],
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        dribble: "https://dribbble.com",
    },
    film4 = {
        name: 'Люди в черном: 2',
        start: '',
        ganar: [1, 2, 3],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        image: 'images/mib.jpg',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        dribble: "https://dribbble.com",
    },
    film5 = {
        name: 'История игрушек 2',
        start: '15:00',
        ganar: [5, 3, 2],
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        dribble: "https://dribbble.com",
    },
    film6 = {
        name: 'Люди в черном',
        start: '19:00',
        ganar: [1, 2, 3],
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        dribble: "https://dribbble.com",
    },
]

// Справочник жанров
const ganars = [
    'Фантастика',
    'Боевик',
    'Комедия',
    'Фэнтэзи',
    'Драма',
    'Мультфильм'
]

console.log('ganars ', ganars)

// Для секции Выберите фильм
let filmsHire = []

// Для секции Новинки слайдера
let filmsNew = []

for (let i = 0; i < films.length; i++) {
    if (films[i].hire === true) {
        // console.log(filmsHire)
        filmsHire.push(films[i])
    }
    if (films[i].hire === false && films[i].new === true) {
        filmsNew.push(films[i])
    }
}
// console.log(filmsNew)

const film = {
    getName: function () {
        return this.name
    },
    getStart: function () {
        return this.start
    },
    getGanar: function () {
        const ganarsFilm = this.ganar
        let arrGanars = []
        for (let i = 0; i < ganarsFilm.length; i++) {
            arrGanars.push(ganars[ganarsFilm[i]])
        }
        let strGanars = arrGanars.join(', ')
        return strGanars
    },
    renderFilmBlock() {
        let filmName = this.name,
            filmImage = this.image,
            filmDescription = this.description,
            filmFb = this.fb,
            filmTw = this.twitter,
            filmBh = this.behance,
            filmHTML = `
                    <div class="movie-grid_inner1"></div>
                        <div class="movie-grid_poster">
                            <img src="${filmImage}" alt="">
                        </div>
                        <div class="movie-grid_description">
                            <p class="movie-grid_text1">${filmName}</p>
                            <hr class="movie-grid_hr" />
                            <p class="movie-grid_text2">${filmDescription}</p>
                            <div class="block05__linls">
                                <a href="${filmTw}" target="_blank"><i class="icon icon-twitter" title="twitter"></i></a>
                                <a href="${filmFb}" target="_blank"><i class="icon icon-facebook" title="facebook"></i></a>
                                <a href="${filmBh}"><i class="icon icon-camera" title="camera"></i></a>
                            </div>
                        </div>
                    </div>
                `;
        return filmHTML;
    }

}
// C использованием appendChild!

// let mosaicDOM = document.getElementById("grid"); // это flex контейнер, куда добавляются блоки
// for (let i = 0; i < filmsNew.length; i++) {
//     let currentFilm = filmsNew[i],
//         filmBlockHTML = film.renderFilmBlock.bind(currentFilm)(),
//         div = document.createElement("div"); //содаем DOM элемент DIV - контейнер одного фильма в мозайке

//     // у вашего контейнера DIV, который держит один блок с фильмом есть какой то свой класс
//     // поскольку этот контейнер мы создаем программно. То этот класс нужно будет так же
//     //добавить программно
//     div.classList.add("movie-grid_item");
//     div.innerHTML = filmBlockHTML; //записываем в DOM элемент HTML разметку
//     mosaicDOM.appendChild(div); //добавляем в DOM элемент таблицы DOM элемент строки с фильмом
// }


// C использованием innerHTML!

let mosaicDOM = document.getElementById("grid"); 
let fullHTML
for (let i = 0; i < filmsNew.length; i++) {
    let currentFilm = filmsNew[i],
        filmBlockHTML = film.renderFilmBlock.bind(currentFilm)();
        let duble = fullHTML
        fullHTML = '<div class="movie-grid_item">'+filmBlockHTML+'</div>';
        fullHTML += duble
        mosaicDOM.innerHTML = fullHTML;
    }




for (let i = 0; i < filmsHire.length; i++) {
    const filmName = film.getName.bind(filmsHire[i])()
    const filmStart = film.getStart.bind(filmsHire[i])()
    const filmGnars = film.getGanar.bind(filmsHire[i])()
    let filmsHireHTML = document.getElementById('filmsHire')

    console.log('filmsHireHTML', filmsHireHTML)

    let filmHTML = `
            <td class="movie__table__tbody-time" id="start_film_$(1)">${filmStart}
            </td>
            <td class="movie__table__tbody-stuff" id="name_film_$(1)">${filmName}
            </td>
            <td class="movie__table__tbody-genre" id="ganar_film_$(1)">${filmGnars}
            </td>
            <td class="movie__table__tbody-plus">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="33px" height="33px">
                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                        d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
                </svg>
            </td>
        `
    let filmsCounter = '<tr>' + filmHTML + '</tr>'
    filmsHireHTML.innerHTML += filmsCounter
    // let tr = document.createElement("tr")
    // tr.innerHTML = filmHTML
    // filmsHireHTML.appendChild(tr)
}
