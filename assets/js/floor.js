const boxes = document.querySelectorAll('.floor-svg-box');
const infoBox = document.getElementById('info-box');
const floorCount = infoBox.querySelector('.floor-count');
const numberRooms = infoBox.querySelector('.number-rooms');
const numberPremises = infoBox.querySelector('.number-premises');
const costPremises = infoBox.querySelector('.cost-premises');
const floorButtons = document.querySelectorAll('.floor-selection-count li');

let isOverSvg = false;

// Показать инфо-блок
function showInfoBox(box) {
    const floor = box.getAttribute('data-count'); // этаж
    const rooms = box.getAttribute('data-number'); // помещений
    const premises = box.getAttribute('data-premises');
    const cost = box.getAttribute('data-cost');

    floorCount.textContent = floor;
    numberRooms.textContent = rooms;
    numberPremises.textContent = premises;
    costPremises.textContent = cost;
}

// Очистить активные состояния
function clearActive() {
    boxes.forEach(f => f.classList.remove('active-floor'));
    floorButtons.forEach(b => b.classList.remove('active-btn'));
}

// Наведение на SVG этаж
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        isOverSvg = true;
        showInfoBox(box);
    });
    box.addEventListener('mouseleave', () => {
        isOverSvg = false;
        setTimeout(() => {
            if (!isOverSvg) return;
        }, 100);
    });
});

// Клик по цифрам этажей
floorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const floorNum = btn.textContent.trim();
        const box = document.querySelector(`.floor-svg-box[data-count="${floorNum}"]`);
        if (!box) return;
        clearActive();
        btn.classList.add('active-btn');
        box.classList.add('active-floor');
        showInfoBox(box);
    });
});




$('.floor-svg-box').on('click', function() {
    $('body').addClass('body-fixed');
    $('.select-layout').addClass('select-layout-opened');
})

$('.pop-office').on('click', function() {
    $('body').addClass('body-fixed');
    $('.select-layout').addClass('select-layout-opened');
})


$('.back-select-layout').on('click', function() {
    $('.select-layout').removeClass('select-layout-opened');
    $('body').removeClass('body-fixed');

})



let layoutSwiper = new Swiper(".layout-number-slider", {
    spaceBetween: 10,
    slidesPerView: 5,
    direction: "vertical",
    freeMode: true,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".layout-button-next",
        prevEl: ".layout-button-prev",
    },
    breakpoints: {
        1199: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        1020: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            direction: "horizontal",
        },
        320: {
            direction: "horizontal",
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
    },
});
let swiper2 = new Swiper(".select-layout-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: ".layout-button-next",
        prevEl: ".layout-button-prev",
    },
    thumbs: {
        swiper: layoutSwiper,
    },
});