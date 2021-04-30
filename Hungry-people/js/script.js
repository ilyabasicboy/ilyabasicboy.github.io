/*scroll func*/
let checkInterval=false;
function scrollWindow(target) {
    if (checkInterval)return;
        let scrollFunc=setInterval(() => {
        checkInterval=true;
        let scrollPix=target.getBoundingClientRect().top;
        if (Math.abs(scrollPix)<20) window.scrollBy(0,scrollPix/10);
        if (Math.abs(scrollPix)<10) window.scrollBy(0,scrollPix/5);
        if (Math.abs(scrollPix)<5) window.scrollBy(0, scrollPix);
        else window.scrollBy(0,scrollPix/20);
        if(Math.floor(scrollPix)==0) {
            checkInterval=false;
            clearInterval(scrollFunc);
        }
        window.addEventListener('wheel',()=>{checkInterval=false; clearInterval(scrollFunc);})
    }, 10);
}

/*header*/
let headerPage=document.querySelector('.header-page');
//header background
window.addEventListener('scroll', setBackground);
function setBackground() {
    if (pageYOffset<=10) headerPage.style.background='none';
    else headerPage.style.background='rgba(0, 0, 0, 0.4)'
}
//header links
headerPage.addEventListener('click',function(event) {
    //Отмена действия по умолчанию
    event.preventDefault();
    //Настраиваем сработку только при клике на тэг 'a'
    let link=event.target.closest('a');
    if (!link) return;
    if (!headerPage.contains(link)) return;
    //Вычисляем секцию куда будет происходить скролл
    let target=document.querySelector('.'+link.dataset.type);
    scrollWindow(target);
    
})

/*btn-scroll*/

//btn-scroll__about
let btnScrollAbout=document.querySelector('.btn-scroll__about');
let sectionAbout=document.querySelector('.section-about');
btnScrollAbout.addEventListener('click',()=>scrollWindow(sectionAbout));

//btn-scroll__top
let btnScrollTop=document.querySelector('.btn-scroll__top');
//Появление кнопки при прокрутке больше чем на высоту экрана
window.addEventListener('scroll', showBtn);
function showBtn() {
    if (pageYOffset>document.documentElement.clientHeight){
        btnScrollTop.style.opacity='';
        btnScrollTop.style.top=headerPage.clientHeight+20+'px';
    }
    else {
    btnScrollTop.style.cssText='opacity:0; top:-10%;';
    }
}

//Настройка скроллинга
btnScrollTop.addEventListener('click', ()=>scrollWindow(document.body));
