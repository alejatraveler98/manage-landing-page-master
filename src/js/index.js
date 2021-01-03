const show         = document.getElementById('show-menu')
const menu         = document.getElementById('main-menu')
const menuList     = document.getElementById('main-menu__list')
const showInactive = document.getElementById('close-menu')
// const close        = document.getElementById('')
    show.addEventListener('click',()=>{
            menu.classList.add('main-menu')
            menuList.classList.toggle('show-menu')
            show.style.display = "none";
            showInactive.classList.toggle('close-menu-active')
            document.body.style.overflowY = "hidden";
            
    });

    showInactive.addEventListener('click', () =>{
        menu.classList.remove('main-menu')
        menuList.classList.toggle('show-menu')
        show.style.display = "block";
        showInactive.classList.toggle('close-menu-active')
        document.body.style.overflowY = "scroll";

});

