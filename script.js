//SLIDER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});


// BANNER COUNTRY AND ERROR MESSAGE
const bannerCountry = document.querySelector('.banner__country');
const bannerList = document.querySelector('.banner__list');
const bannerItem = document.querySelectorAll('.banner__item');
const bannerNumber = document.querySelector('.banner__number');
const bannerMessage = document.querySelector('.banner__message');
const bannerNotification = document.querySelector('.banner__notification');
const bannerButton = document.querySelector('.banner__button');
const selectedFlag = document.querySelector(".banner__selected-flag");
const selectedCode = document.querySelector(".banner__selected-dial-code");

bannerCountry.addEventListener('click', () => {
    bannerCountry.classList.toggle('banner__country--open');
    bannerList.classList.toggle('banner__list--open');
})

window.addEventListener('click', (e) => {
    if (!e.target.closest('.banner__country')) {
        bannerCountry.classList.remove('banner__country--open');
        bannerList.classList.remove('banner__list--open');
    }
})

bannerItem.forEach((item) => {
    item.addEventListener('click', () => {
        selectedFlag.src = item.querySelector('.banner__flag').src;
        selectedCode.innerHTML = item.querySelector('.banner__dial-code').innerHTML;
    })
})

bannerNumber.addEventListener('focus', () => {
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.banner__number')) {
            if (bannerNumber.value == "") {
                bannerMessage.classList.add('banner__message--open');
                bannerNotification.classList.add('banner__notification--open');
                bannerMessage.style.marginTop = '1rem';
                bannerButton.style.marginTop = "3rem";
                bannerNumber.style.borderColor = 'var(--color-red)';
            }
        }
    })
})

bannerNumber.addEventListener('keydown', () => {
    bannerMessage.classList.remove('banner__message--open');
    bannerNotification.classList.remove('banner__notification--open');
    bannerMessage.style.marginTop = '0';
    bannerButton.style.marginTop = "0";
    bannerNumber.style.borderColor = 'var(--color-gray-light)';
})


// CATEGORIES
const categories__group = document.querySelector('.categories__group');

async function getData() {
    const res = await fetch("/api/categories.json");
    const data = await res.json();
    data.forEach(item => {
        createCategories(item)
    })

}

function createCategories(data) {
    const html = `
    <div class="categories__item">
    <div class="categories__photo">
        <img
        src="${data.image}"
        alt="${data.title}"
    />
    </div>
    <span class="categories__name">${data.title}</span>
  </div>
    `;
    categories__group.innerHTML += html;
}

getData();


// FOOTER

const footerButton = document.querySelectorAll('.footer__button');
const footerList = document.querySelectorAll(".close");
const footerArrow = document.querySelectorAll(".footer__arrow");

function footerOpen() {
    footerButton.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            if (footerList[idx].classList.contains('close')) {
                footerList[idx].classList.remove('close');
                footerList[idx].classList.add('open');
            } else if (footerList[idx].classList.contains('open')) {
                footerList[idx].classList.remove('open');
                footerList[idx].classList.add('close');
            }

            footerArrow[idx].classList.toggle('footer__arrow--open');
        })
    })
}

footerOpen();
