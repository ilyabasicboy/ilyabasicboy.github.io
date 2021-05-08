//Нижняя панель слайдера

//Переменные
let position=0;
let slider=document.querySelector('.slider__buttons');
let sliderBox=document.querySelector('.slider-box');
let blockWidth=sliderBox.firstElementChild.clientWidth;

//Добавляем кнопки в нижнюю панель по количеству блоков
for (let i=0; i<sliderBox.children.length; i++){
   let sliderBtn=document.createElement('button')
   sliderBtn.className='slider__btn';
   sliderBtn.dataset.position=i;
   slider.append(sliderBtn);
}

sliderBox.style.width=sliderBox.children.length*100+'%';
slider.addEventListener('click', function(e){

    //Пролистывание слайдера
    let btn=e.target;
    if (btn.className!='slider__btn') return;
    sliderBox.style.left=-btn.dataset.position*sliderBox.firstElementChild.clientWidth+'px';
    position=-btn.dataset.position*sliderBox.firstElementChild.clientWidth;

    //Подсветка кнопки
    setBackgroundBtn(btn)
})

//Создаём функцию подсветки кнопки
function setBackgroundBtn(btn) {
    for (a of slider.children) {
        a.style.background='#ffffff80';
    }
    btn.style.background='#fff';
}

//Правая кнопка слайдера
let sliderBtnRight=document.querySelector('.slider-btn__right');
sliderBtnRight.addEventListener('click', function(event) {
    if (position<=-sliderBox.clientWidth+sliderBox.firstElementChild.clientWidth) return;
    sliderBox.style.left=position-sliderBox.firstElementChild.clientWidth+'px';
    position-=sliderBox.firstElementChild.clientWidth;
    setBackgroundBtn(slider.children[Math.abs(position/sliderBox.firstElementChild.clientWidth)])
})
//Левая кнопка слайдера
let sliderBtnLeft=document.querySelector('.slider-btn__left');
sliderBtnLeft.addEventListener('click', function(event) {
    if (position==0) return;
    sliderBox.style.left=position+sliderBox.firstElementChild.clientWidth+'px';
    position+=sliderBox.firstElementChild.clientWidth;
    setBackgroundBtn(slider.children[Math.abs(position/sliderBox.firstElementChild.clientWidth)])
})