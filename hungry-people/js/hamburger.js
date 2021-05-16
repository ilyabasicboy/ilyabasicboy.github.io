//hamburger
document.body.addEventListener('click', function(event) {
    let btnMenu=event.target.closest('.btn-menu');
    if (!btnMenu) return;
    console.log(btnMenu);
    let menu=btnMenu.parentNode.querySelector('.hamburger__menu');
    console.log(menu);
    menu.classList.toggle('hidden');
    btnMenu.classList.toggle('opened');
    menu.classList.add('fadeIn')
});