// Task 1

let arr = [231, 865, false, 'margin']
console.log(arr)

// Task 2

a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};
for (let key in a3) {
    if (`${key}`.length > 4) {
        exit = `${key} - ${a3[key]}`
        // console.log(`${key} - ${a3[key]}`)
        let arr1 = document.getElementById('exit')
        arr1.innerHTML = exit
    }
}

// Task 3

let a7 = new Object();
let a8 = {};
let spaceX = {
    name: 'Falcon 1',
    "first start": "28 setember 2008",
}
    let key = document.getElementById('u7-key__input');
    let value = document.getElementById('u7-value__input'); 
    let button = document.querySelector('button');

    button.onclick = function () {
    let keys = key.value
    let values = value.value
    spaceX[key.value] = values
    output.innerHTML = a7
    let zero = " key: "+ keys + "; value: " + values 
    output.innerHTML = zero 
}
// Task 4
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet']
let lengtharr = document.getElementById("length")
lengtharr = a.length
lenght.innerHTML = lengtharr

// Task 5
let d = [0, 2, 5, -4, 6, 22, -9, -12, , 13, 78]
let c = []
let b = []
let s = 0
let j = 0
console.log(d.length)
for (i = 0; i < d.length; i++) {
    // console.log(i)
    if (d[i] % 2 == 0) {
        c[s] = d[i]
        s++
    } else {
        b[j] = d[i]
        j++
    }
}
evens = c
even.innerHTML = evens
not_evens = b
evennot.innerHTML = not_evens

// Task 6
let max = 0
for (i = 0; i < d.length; i++) {
    let find = d[i] / 2
    if (find > max) {
        max = find
    }
}
console.log(max)
maximum = max
task_6.innerHTML = maximum