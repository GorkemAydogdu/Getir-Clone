//SLIDER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});


const bannerCountry = document.querySelector('.banner__country');
const bannerList = document.querySelector('.banner__list');
const bannerItem = document.querySelectorAll('.banner__item');

const selectedFlag = document.querySelector(".banner__selected-flag");
const selectedCode = document.querySelector(".banner__selected-dial-code");

bannerCountry.addEventListener('click', () => {
    bannerCountry.classList.toggle('banner__country--open');
    bannerList.classList.toggle('banner__list--open');
})

bannerItem.forEach((item) => {
    item.addEventListener('click', () => {
        selectedFlag.src = item.querySelector('.banner__flag').src;
        selectedCode.innerHTML = item.querySelector('.banner__dial-code').innerHTML;
    })
})