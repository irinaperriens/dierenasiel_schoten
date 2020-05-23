// hier komt je code
// console.log("Hallo wereld!");

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');

hamburger.addEventListener('click', zichtbaarMaken);


function zichtbaarMaken(){
  console.log(this);

  if(menu.classList.contains('onzichtbaar')){
    menu.classList.remove('onzichtbaar');
  } else menu.classList.add('onzichtbaar');

}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

$(document).keydown(function(e){
    if(e.which === 123){

       return false;

    }

});
