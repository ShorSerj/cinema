let films = [
    ['10:00', 'Человек паук', 1],
    ['12:00', 'Собачья жизнь 2', 4],
    ['14:00', 'История игрушек 4', 6],
    ['16:00', 'Люди в черном: Интернешнл', 1]
]

let ganars = [
    'Фантастика', 'Боевик', 'Приключения',
    'Фэнтэзи', 'Дрма', 'Комедия', 'Мультфильм'
]

for (let i = 0; i < films.length; i++) {

    for (let j = 0; j < ganars.length; j++) {
        if (films[i][2] == j) {
            films[i][2] = ganars[j]
            console.log(films[i][2])
        }
    }
}
let element_start_film_1 = document.getElementById('start_film_1')
element_start_film_1.innerHTML = films[0][0]
let element_name_film_1 = document.getElementById('name_film_1')
element_name_film_1.innerHTML = films[0][1]
let element_ganar_film_1 = document.getElementById('ganar_film_1')
element_ganar_film_1.innerHTML = films[0][2]

let element_start_film_2 = document.getElementById('start_film_2')
element_start_film_2.innerHTML = films[1][0]
let element_name_film_2 = document.getElementById('name_film_2')
element_name_film_2.innerHTML = films[1][1]
let element_ganar_film_2 = document.getElementById('ganar_film_2')
element_ganar_film_2.innerHTML = films[1][2]

let element_start_film_3 = document.getElementById('start_film_3')
element_start_film_3.innerHTML = films[2][0]
let element_name_film_3 = document.getElementById('name_film_3')
element_name_film_3.innerHTML = films[2][1]
let element_ganar_film_3 = document.getElementById('ganar_film_3')
element_ganar_film_3.innerHTML = films[2][2]

let element_start_film_4 = document.getElementById('start_film_4')
element_start_film_4.innerHTML = films[3][0]
let element_name_film_4 = document.getElementById('name_film_4')
element_name_film_4.innerHTML = films[3][1]
let element_ganar_film_4 = document.getElementById('ganar_film_4')
element_ganar_film_4.innerHTML = films[3][2]