let buttonShowModalPresent = document.getElementById('getPresentModal')
let modalPresentWindow = document.getElementById('modalPresent')
let closePresentWindow = document.getElementById('closeModalPresent')
let sendPresentInfo = document.getElementById('sendPresentInfo')
buttonShowModalPresent.onclick = function() {
    modalPresentWindow.style.display = 'block'
    console.log()

}

closePresentWindow.onclick = function() {
    modalPresentWindow.style.display = 'none'
}

sendPresentInfo.onclick = function() {
    let nameGuest = document.getElementById('name_guest')
 
    if (nameGuest.value) {
        console.log('nameGuest', nameGuest.value)
        nameGuest.style.border = '1px sold #bebebe';
    }
    else{
        nameGuest.style.border = '2px solid red'
    }

    if(nameGuest.value != 0){
        modalPresentWindow.style.display = 'none'
    }
}

let nameGuest = document.getElementById('name_guest')
nameGuest.onchange = function() {
    console.log('nameGuest', nameGuest.value)
}