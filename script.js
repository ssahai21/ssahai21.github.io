
function onScroll() {
    const scrollY = window.scrollY;
    console.log(scrollY);
    navShift(scrollY);
}

window.addEventListener('scroll', onScroll);

// Optional external trigger
function aboutClick() {
    onScroll();
}

function navShift(scrollY) {
    const nav = document.getElementsByClassName('mynav')[0]
    if (scrollY >= 100) {
        nav.style.backgroundColor = '#ed834a'
        nav.style.top = '20px'
        nav.style.left = '50%'
        nav.style.transform = 'translateX(-50%)'
        nav.style.width = '95%'
        nav.style.borderRadius = '50px'
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
        document.getElementById('main').style.color = "mistyrose"

    }
    if (scrollY < 100) {
        nav.style.backgroundColor = 'mistyrose';
        nav.style.top = '0'
        nav.style.left = '0'
        nav.style.transform = 'none'
        nav.style.width = '100%'
        nav.style.borderRadius = '0'
        nav.style.boxShadow = 'none'
        document.getElementById('main').style.color = "lightcoral"
    }
}