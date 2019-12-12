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
        price: 400,
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
        price: 320,
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
        price: 360,
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

//База для бронипрования мест
allplace = 10;
let placebaz = [];

for (let i = 1; i <= allplace; i++) {
    function check(){
        let rightBetterPlace = allplace-(allplace / 3)
        let leftBetterPlace = allplace - 2 * (allplace / 3)
        if (i > rightBetterPlace || i < leftBetterPlace) {
            price = 200
            return price
        }else{
            price = 350
            return price  
        }
    }
    function bronePlace(){
        let chans = Math.ceil(Math.random() * 100)
        if (chans > 50) {
            chans = true
            return chans
        }else { 
            chans = false
            return chans
        }        
    }
    let place = {
        number: i,
        price: check(),
        brone: bronePlace(),
    }
    
    placebaz.push(place)
}
//

//Распределяет свободные и забронированные места в зале
let placesHTML = document.getElementById('places')
let zall = document.createElement('div')
zall.className = 'places'
for (place of placebaz) {
    let placeDiv = document.createElement('div')
    placeDiv.className = 'place'
    placeDiv.innerHTML = place.number
    

    if(place.brone) {
        placeDiv.className = 'place placeBrone'
    }else{
        placeDiv.className = 'place placeFree'
    }
    zall.append(placeDiv)
}
placesHTML.append(zall) 
let choose = document.getElementsByClassName('placeFree')
let allzal = document.getElementsByClassName('place')
// console.log(choose.length)
// console.log(allzal.length)
//

// order()
// placeToggle()
// placeContext() 
// placeHover() 
// placeHoverOut() 



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
    getPrice: function () {
        return this.price
    },
    renderFilmBlock() {
        let filmName = this.name,
            filmImage = this.image,
            filmDescription = this.description,
            filmFb = this.fb,
            filmTw = this.twitter,
            filmBh = this.behance,
            filmHTML = `
                 <div class="owl-stage>
                    <div class="movie-grid_inner1">
                    </div>
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
                `
        return filmHTML;
    }

}

let orderForm = document.getElementById('orderForm')
let closeOrderForm = document.getElementById('closeOrderForm')

closeOrderForm.onclick = function(){
    orderForm.style.display = 'none' 
}

for (let i = 0; i < filmsHire.length; i++) {
    const filmName = film.getName.bind(filmsHire[i])()
    const filmStart = film.getStart.bind(filmsHire[i])()
    const filmGnars = film.getGanar.bind(filmsHire[i])()
    const filmPrice = film.getPrice.bind(filmsHire[i])()
    let filmsHireHTML = document.getElementById('filmsHire')

    let filmHTML = `
            <td class="movie__table__tbody-time" id="start_film_$(1)">${filmStart}
            </td>
            <td class="movie__table__tbody-stuff" id="name_film_$(1)">${filmName}
            </td>
            <td class="movie__table__tbody-genre" id="ganar_film_$(1)">${filmGnars}
            </td>
            <td class="movie__table__tbody-genre" id="ganar_film_$(1)">${filmPrice}
            </td>
            <td class="movie__table__tbody-plus">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="33px" height="33px">
                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                        d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
                </svg>
            </td>
        `

    let tr = document.createElement("tr")
    tr.className = 'strFilmHire'
    tr.innerHTML = filmHTML
    
    tr.onclick = function () {
        orderForm.style.display = 'block'

        let orderFilmName = document.getElementById('orderFilmName')
        let orderFilmStart = document.getElementById('orderFilmStart')
        let orderFilmGanar = document.getElementById('orderFilmGanar')
        let orderFilmPrice = document.getElementById('orderFilmPrice')

        orderFilmName.innerHTML = filmName
        orderFilmStart.innerHTML = filmStart
        orderFilmGanar.innerHTML = filmGnars
        orderFilmPrice.innerHTML = filmPrice
    }
    
    filmsHireHTML.appendChild(tr)

}

let sendOrder = document.getElementById('sendOrder')
sendOrder.onclick = function(){
    let orderClientName = document.getElementById('orderClientName')
 
    if (orderClientName.value) {
        orderClientName.style.border = '1px sold #bebebe';
    }
    else{
        orderClientName.style.border = '2px solid red'
    }
}

let orderFilmPrice = document.getElementById('orderFilmPrice')
let orderFilmCauntTicket = document.getElementById('orderFilmCauntTicket')
let orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice')

//общая цена за билеты
orderFilmCauntTicket.onclick = function() {
    if(orderFilmPrice.innerText > 0 && orderFilmCauntTicket.value <= choose.length) {
    let TotalPrice = orderFilmPrice.innerText * orderFilmCauntTicket.value ;
    orderFilmTotalPrice.innerHTML = TotalPrice;
    }else {
        orderFilmCauntTicket.value = choose.length
        console.log('Больше нет свободных мест')
    }
}
//

//Не дает вводить буквы в номер телефона
document.getElementById('orderFilmPhone').onkeydown = function(e){
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));
}
//

//Быстрый доступ к меню ввиде шторки при скроле
$('.link-menu').on('click', function (event) {
    let elementClick = $(this).attr("href")
    let destination = $(elementClick).offset().top
    if (false) {
        $('body').animate({ scrollTop: destination}, 5600)
    }else {
        $('html').animate({ scrollTop: destination}, 1500)
    }
    
    return false
})

let header = $('.main__menu')
let scrollPrev = 0

$(window).scroll(function () {
    let scrolled = $(window).scrollTop()
    
    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out')
    } else {
        header.removeClass('out')
    }
    scrollPrev = scrolled
})
//


//По клику бронирует/снимает бронь места
for(let i = 0; i < allzal.length; i++){ 
    allzal[i].addEventListener("click", function() {
        let orderBubble = allzal[i].classList.value
        if(orderBubble !== 'place placeBrone'){
            let placeFre = allzal[i]
            let myBrone = document.getElementsByClassName('placeClick')
            placeFre.classList.toggle("placeClick");
            if(orderFilmCauntTicket.value < myBrone.length){
                mistake.innerText = "Выделенных мест больше чем заявлено"
            }else {
                mistake.innerText =""
            }
        }else{
            mistake.innerText = "Место занято"
        }
    })
       
}


