// // function str (){
// //     let x = 'st' 
// //     return function sx (){
// //         console.log(x)
// //     }
    
// // }

// // let a = str()
// // console.log(typeof a);
// // a();

// function counter (){
//     let count = 0;
//     return function inc (){
//         return count ++
//     }
// }
//  let a = counter()
//  let b = counter()
//  console.log("cчетчик b " + b())
//  console.log("cчетчик b " + b())
//  console.log("cчетчик a " + a())
//  console.log("cчетчик a " + a())
//  console.log("cчетчик a " + a())

//  function x (){
    for(var i=0; i<10; i++){
       setTimeout(
           function(y){
               return function(){
                   console.log(y)
                }
            }(i), 1000)
            
    }
// }
