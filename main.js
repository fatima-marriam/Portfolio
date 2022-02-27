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
//portfolio section model 
const portfolioModals = document.querySelectorAll('.portfolio-model');
 const imgCards = document.querySelectorAll('.img-card');
 const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');
var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard, i)=>{
    imgCard.addEventListener('click' , ()=>{
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
    portfolioCloseBtn.addEventListener('click', ()=>{
    portfolioModals.forEach((portfolioModalView) => {
        portfolioModalView.classList.remove("active");
    });
});
});
// For swiper slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });