                                
let menu_btn = document.querySelector('nav.navbar .menu_bar');
let sidebar_navbar = document.querySelector('.sidebar_navbar');
let close_btn = document.querySelector('.close_btn');

close_btn.addEventListener('click',()=>{
    sidebar_navbar.classList.remove('active')
    document.body.classList.remove('overflow-hidden')
})

menu_btn.addEventListener('click',()=>{
    sidebar_navbar.classList.toggle('active')
    document.body.classList.toggle('overflow-hidden')
})

document.addEventListener('mouseup', function(e) {
    
    if (!sidebar_navbar.contains(e.target)) {
        sidebar_navbar.classList.remove('active')
    document.body.classList.remove('overflow-hidden')

    }
});

