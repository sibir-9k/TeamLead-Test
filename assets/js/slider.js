let position = 0;
const slidesToShow = 2; // Сколько эл-ов показывать
const slidesToScroll = 1; // Сколько эл-ов скролить

const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.feedback-container');

const itemsCount = items.length;
const itemWidth = (container.clientWidth / slidesToShow)-25;
console.log(container.clientWidth)
console.log(itemWidth)
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemLeft = Math.abs(position) / itemWidth;
  position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;

  if(position === 0){
    btnPrev.classList.add('disabled')
  }else{
    btnPrev.classList.remove('disabled')
    btnPrev.disabled = false
  }
  
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  if( position <= -(itemsCount - slidesToShow) * itemWidth){
    btnNext.classList.add('disabled')
  }else{
    btnNext.classList.remove('disabled')
    btnNext.disabled = false
  }
};

checkBtns()