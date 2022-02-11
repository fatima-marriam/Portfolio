//=====================nav bar effect on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
} );

// =======================service section - modal
 const serviceModals = document.querySelectorAll('.service-modal');
 const learnmoreBtns = document.querySelectorAll('.learn-more-btn');
 const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((lmb, i)=>{
    lmb.addEventListener('click' , ()=>{
        modal(i);
    });
});
modalCloseBtns.forEach((mcb)=>{
mcb.addEventListener('click', ()=>{
    serviceModals.forEach((mv) => {
        mv.classList.remove("active");
    });
});
});