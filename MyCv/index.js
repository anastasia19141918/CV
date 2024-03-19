const btnBack = document.getElementById('btn_back');
const btnNext = document.getElementById('btn_next');
const imgItemns = document.querySelectorAll('.projects__slaider');

let index = 0;

function slaiderActive(n) {
  imgItemns.forEach(function(el){
    el.classList.remove('projects__slaider_active');
  });
  imgItemns[n].classList.add('projects__slaider_active');
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



