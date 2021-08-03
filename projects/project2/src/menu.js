const hamburger=document.querySelector(".hamburger"),
      menu=document.querySelector(".menu");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle("menu_active");
})
