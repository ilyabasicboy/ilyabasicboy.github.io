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
    }, 5);
}