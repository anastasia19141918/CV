const btnBack = document.getElementById('btn_back');
const btnNext = document.getElementById('btn_next');
const imgItemns = document.querySelectorAll('.projects__slaider');
const imgCurrent = document.getElementById('projects__numn_current');
const imgNumber = document.getElementById('projects__numn_number');

let index = 0;
let number = '';

function slaiderActive(n) {
  imgItemns.forEach(function(el){
    el.classList.remove('projects__slaider_active');
  });
  imgItemns[n].classList.add('projects__slaider_active');

  let numberSlaider = number = n+1;
  imgNumber.innerHTML = numberSlaider;
};

btnBack.addEventListener('click', function(){
  if(index === 0) {
    index = imgItemns.length -1;
    slaiderActive(index);
  } else {
    index--;
    slaiderActive(index);
    console.log(index);
  }
});

btnNext.addEventListener('click', function(){
  if(index === imgItemns.length -1) {
    index = 0;
    slaiderActive(index);
  } else {
    index++;
    slaiderActive(index);
  }
})

function currentSlaider() {
  let currentSlaider = imgItemns.length;
  imgCurrent.innerHTML = currentSlaider;
}
currentSlaider();



