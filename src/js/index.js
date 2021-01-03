const show         = document.getElementById('show-menu')
const menu         = document.getElementById('main-menu')
const menuList     = document.getElementById('main-menu__list')
const closeMenu = document.getElementById('close-menu')

    show.addEventListener('click',()=>{
            menu.classList.add('main-menu')
            menuList.classList.toggle('show-menu')
            show.classList.toggle('close-menu')
            closeMenu.classList.toggle('open-menu')
            document.body.style.overflowY = "hidden";
            
    });

    closeMenu.addEventListener('click', () =>{
        menu.classList.remove('main-menu')
        menuList.classList.toggle('show-menu')
        show.classList.toggle('close-menu')
        closeMenu.classList.toggle('open-menu')
        document.body.style.overflowY = "scroll";
});

