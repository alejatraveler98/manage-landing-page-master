const show = document.getElementById('show-menu')
const menu = document.getElementById('main-menu')
const menuList = document.getElementById('main-menu__list')
const closeMenu = document.getElementById('close-menu')
const cardSlide = document.querySelectorAll('.card__items')
let mediaQueryList = window.matchMedia("(min-width:1000px)")

//Funciones
const showSlide = (slide_index) => {
        console.log(cardSlide[0]);
        for (let i = 0; i < cardSlide.length; i++) {
                cardSlide[i].classList.remove('display-block')
                cardSlide[i].classList.add('display-none')
                // cardSlide[i].style.display='none'
        }
        cardSlide[slide_index].classList.add('display-block')
}

//EventListener

mediaQueryList.addEventListener("change",function(EventMediaQueryList){
        if (EventMediaQueryList.matches) {
                console.log('Menu');
                for(let i=0; i< 3;i++){
                        cardSlide[i].classList.remove('display-none');
                }
        }else{
                 //Change Images
        document.querySelectorAll('.slide__item').forEach(slide => {
                slide.addEventListener('click', function () {
                        let slides = Array.prototype.slice.call(this.parentElement.children)
                        let slide_index = slides.indexOf(slide)
                        console.log(slide_index);
                        showSlide(slide_index)
                })
        })

        }
})

show.addEventListener('click', () => {
        menu.classList.add('main-menu')
        menuList.classList.toggle('show-menu')
        show.classList.toggle('close-menu')
        closeMenu.classList.toggle('open-menu')
        document.body.style.overflowY = "hidden";
});

closeMenu.addEventListener('click', () => {
        menu.classList.remove('main-menu')
        menuList.classList.toggle('show-menu')
        show.classList.toggle('close-menu')
        closeMenu.classList.toggle('open-menu')
        document.body.style.overflowY = "scroll";
});

