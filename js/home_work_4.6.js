// Task 1
function r1 () {
    let name = document.getElementById("raz").value;
    output.innerHTML = name;
}

// Task 2
function r2 (){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    if(+first > +second){
        max.innerHTML = first;
    }
    else{
        max.innerHTML = second;
    }
}
// Task 4
function r4 (){
    let first = document.getElementById("left").value;
    let second = document.getElementById("right").value;
    if(first > second){
        var max = first;
        var min = second;
        console.log(max)
        console.log(min)        
    }
    else{
        var max = second;
        var min = first;
        console.log(max)
        console.log(min)     
    }
   random = Math.floor(Math.random() * (+max - +min)) + +min; 
   number1.innerHTML = random
}



    

