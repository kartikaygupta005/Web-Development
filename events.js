// function eventChange(ele) {
//     ele.style.color = 'white';
//     ele.style.backgroundColor = 'red';
// }


// while(count >= -2 || count >= 15){
//     function increment(ele){
//     count++;
//     console.log(count);
// }
// function decrement(ele){
//     count--;
//     console.log(count);
// }
// function reset(ele){
//     count = 0 ;;
//     console.log(count);
// }

// }
let count = 0; // 1. Global counter variable

function increment(ele) {
    if (count < 15) { // 2. Limit maximum to 15
        count++;
        document.getElementById("counter").innerHTML = count;
    }
}

function decrement(ele) {
    if (count > -110000000) { // 3. Limit minimum to -2
        count--;
        document.getElementById("counter").textContent =  count;
    }
}

function reset(ele) { // 4. Renamed to match HTML onclick="reset(this)"
    count = 0;
    document.getElementById("counter").textContent = count;
}
// function mouse(ele){
//     ele.style.backgroundColor = 'red';

// }
// function mouse2(ele){
//     ele.style.backgroundColor = default;

// }

var btn = document.getElementById('mybody').lastElementChild.previousElementSibling
console.log(btn);

btn.onmouseenter = ()=>{
    console.log('3')
    btn.style.backgroundColor= 'red';
}
/** 
btn.onmouseleave = ()=>{
    console.log('5')
    btn.all =  revert ;
    
}
    */
   