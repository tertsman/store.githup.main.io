// copymenu for mobile
function copyMenu(){
    // copy menu inside dpt-cat to departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;


    // copy inside nav to nav 

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // coppy hader-top .wrapper to the top
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();
// show menu 

const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass =  document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu')
});
closeButton.addEventListener('click', function(){
    addClass.classList.remove('showmenu')
});

// show sub menu==============
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));


function toggle(e){
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') :null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

// slider==============
const swiper = new Swiper('.swiper', {
   
    loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },


});

// show search
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');

searchButton.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
});
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch');
});

// show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function(){
    dptClass.classList.toggle('showdpt');
});

// product image slide 
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween :10,
    slidesPerView:3,
    watchSlideProgress:true,
    Preakpoints:{
        481:{
            spaceBetween:32,
        }
    }
    

});
var productBig= new Swiper('.big-image', {
    loop:true,
    autoMeight:true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs:{
        swiper:productThumb,
    }
});

// stock product
var stocks = document.querySelectorAll('.products .stock');
for(let x = 0; x < stocks.length; x++){
    let stock = stocks[x].dataset.stock,
    avialable = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold * 100 / stock;
    stocks[x].querySelector('.available').style.width = percent + '%';
}


// trigger-cartt
const divtoShow = '.mini-cart',
      divPopup = document.querySelector(divtoShow),
      divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () =>{
    setTimeout(() => {
        if(!divPopup.classList.contains('show')){
            divPopup.classList.add('show');
        }
    },250)
})

document.addEventListener('click', (e) => {
    const isClose = e.target.closest(divtoShow);
    if(!isClose && divPopup.classList.contains('show')){
        divPopup.classList.remove('show');
    }
})

// show model onload
window.onload = function() {
    document.querySelector('.site').classList.toggle('showmodal');
}
document.querySelector('.modalclose').addEventListener('click',function(){
    document.querySelector('.site').classList.remove('showmodal');
})

// sigin sign up
