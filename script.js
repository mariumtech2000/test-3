let count = 5.99;
let count2 = 0.00;


function sum(){
    document.querySelector(".m").value = count2--;
    document.querySelector(".amount").innerHTML = count2 * count;
}

function add(){
  document.querySelector(".m").value = count2++;
    document.querySelector(".amount").innerHTML = count2 * count;
}