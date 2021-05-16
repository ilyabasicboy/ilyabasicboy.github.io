//Настройка menu-nav
let menu=document.querySelector('.section-menu__nav');
menu.addEventListener('click', function(event) {
    event.preventDefault();
    let target=event.target.closest('[data-type]')
    if (!target) return;
    if (!menu.contains(target)) return;
    let btns=document.querySelectorAll('[data-type]');
    for (a of btns) {
        a.classList.remove('active')
    }
    target.classList.add('active');
    let table=document.querySelector('.section-menu__table');
    let blocks=table.children;
   
    let section=document.querySelector('.section-menu__'+target.dataset.type);
    for (a of blocks) {
        a.style.display='none';
    };
        section.style.display='flex';
        section.classList.add('fadeIn');
})