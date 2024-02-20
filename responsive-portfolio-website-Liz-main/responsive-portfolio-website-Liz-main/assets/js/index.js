/*=============== SERVICES MODAL ===============*/
 const model = document.querySelectorAll('.service__model'),
       modelButton = document.querySelectorAll('.services__button'),
       modelClose = document.querySelectorAll('.service__model-close')

       let activeModal = (modalClick) =>{
        model[modalClick].classList.add('active-modal')
       }
       modelButton.forEach((modelButton, i) =>{
        modelButton.addEventListener('click', () =>{
            activeModal(i)
        })
       })
// for close  
       modelClose.forEach((modelClose) => {
         modelClose.addEventListener('click', () =>{
            model.forEach((modelRemove) =>{
                modelRemove.classList.remove('active-modal')
            })
         })
       })

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
spaceBetween: 32,
grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets:true,
    clickable: true,
  },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)