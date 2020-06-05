// ===============
// BUTTON TO TOP
// ===============
$(".gallery").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  })


// ===============
// IMAGE GALLERY
// ===============
  const toTop = document.querySelector(".topBtn");
window.addEventListener("scroll", () => {
    if(window.pageYOffset>200){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
