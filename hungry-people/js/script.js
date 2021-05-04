//btn-scroll__top
let btnScrollTop=document.querySelector('.btn-scroll__top');
//Появление кнопки при прокрутке больше чем на высоту экрана
window.addEventListener('scroll', showBtn);
function showBtn() {
    if (pageYOffset>document.documentElement.clientHeight){
        btnScrollTop.style.cssText='visibility:visible; opacity:';
        btnScrollTop.style.top=headerPage.clientHeight+20+'px';
    }
    else {
    btnScrollTop.style.cssText='visibility:hidden; opacity: 0; top:-10%;';
    }
}
