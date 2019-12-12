const SYPEX_URL = 'https://api.sypexgeo.net/json/';
CITIES_URL="http://glavpunkt.ru/api/get_rf_cities/"

let cities
/**
 * 
 * @param {*} api_url  - адрес запроса
 */


// C применением JQuery
function getRequest(api_url, callback) {
    // let xhr = new XMLHttpRequest();
    let xhr = $.ajax({
        url: api_url,
        type: "GET",
        success: function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                callback.call(xhr.responseText);
            }
        }
    })
}


jQuery(($) => {
    $('#city_name').on('click', function(e) {
        e.preventDefault();
        $('#choose_city').modal().open();
        if (!cities){
            getRequest(CITIES_URL, function(){
                cities = $.parseJSON(this)
            })
        }
    })

    $('body').on('input keyup', 'input[name=city_choose]', function(){
        let search = $(this).val();
        counter =0;
        console.log(cities);
        let html = '<ul>';
        for (let i =0; i < cities.lenght; i++){
            if (cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5){
                html += '<li data-city="'+ cities[i].name +' (' + cities[i].area+ ')</li>'
                counter++;
            }
        }
        html +='</ul>';
        $('#search_result').html(html);
    })
})

$('body').on('click', '#search_result li', function(){
    $('#city_name').html($(this).data('city'));
    $.modal().close();
})
jQuery(document).ready(($) => {
    // console.log('start request');
    getRequest(SYPEX_URL, function(){
        let answer = $.parseJSON(this);
        let city = answer['city']['name_ru'];
        // console.log(answer);
        $('#city_name').html(city);
    }); 
});

