const show           = document.getElementById('show-menu')
const menu           = document.getElementById('main-menu')
const menuList       = document.getElementById('main-menu__list')
const closeMenu      = document.getElementById('close-menu')
const cardSlide      = document.querySelectorAll('.card__items')
const emailValue     = document.getElementById('inputEmail')
const form           = document.getElementById('form')
let   mediaQueryList = window.matchMedia("(min-width:1000px)")

form.classList.add('no-after')

const resetValues = () =>{
        emailValue.value = ''
}
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

const validation = () =>{
        let expReg   = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let validate = expReg.test(emailValue.value)
        
        if(validate){
        
        }else{ 
              form.classList.add('alert') 
              setTimeout(()=>{
                      form.classList.remove('alert')
                      resetValues()
              },2000)              
        }
}


//EventListener
form.addEventListener('submit', (e)=>{
        e.preventDefault();
        validation();
} )

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
                        let slides      = Array.prototype.slice.call(this.parentElement.children)
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

