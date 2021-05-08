let headerPage=document.querySelector('.header-page');
//header background
window.addEventListener('scroll', setBackground);
function setBackground() {
    let links=document.querySelectorAll('.header-page__a');
    if (window.matchMedia('(max-width:992px)').matches) return;
    if (pageYOffset<=10) {
        headerPage.style.cssText='background:none; min-height:100px';
        for (a of links) {
            a.style.padding='35px';
        }
    }
    else {
        headerPage.style.cssText='background:rgba(0, 0, 0, 0.5); min-height:50px';
        for (a of links) {
            a.style.padding='20px 35px';
        }
    }
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


//hamburger
let btnMenu=document.querySelector('.btn-menu');
btnMenu.addEventListener('click', function(event) {
    let menu=document.querySelector('.hamburger__menu');
    menu.classList.toggle('hidden');
    btnMenu.classList.toggle('opened');
});