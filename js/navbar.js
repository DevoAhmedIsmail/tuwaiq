                                
let menu_btn = document.querySelector('nav.navbar .menu_bar');
let sidebar_navbar = document.querySelector('.sidebar_navbar');

menu_btn.addEventListener('click',()=>{
    sidebar_navbar.classList.toggle('active')
})

document.addEventListener('mouseup', function(e) {
    
    if (!sidebar_navbar.contains(e.target)) {
        sidebar_navbar.classList.remove('active')
    }
});