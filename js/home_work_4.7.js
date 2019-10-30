// Решение №1 = №3(просто вынес setTimeout)
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, i*3000)  
    
// }

// Решение №2
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function (i) {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, i* 3000, i)   
    
// }

// Решение №3
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     function numb() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }     
//     setTimeout(numb, i*3000)
// }

// Решение №4
// Не знаю как, но работает!!!=) Подсмотрел в интернете и подшаманил. Исходник под данным решением.
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i) {
    return function() {
      console.log('Index: ' + i + ', element: ' + arr[i]);
    }
  }(i), i*3000);
}

// Исходник!!!!
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     // передадим функции переменную i, в результате
//     // у каждой функции будет доступ к правильному значению индекса
//     setTimeout(function(i_local) {
//       return function() {
//         console.log('The index of this number is: ' + i_local);
//       }
//     }(i), 3000);
//   }