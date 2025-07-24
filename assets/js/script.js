// $(window).on('load', function() {
//     $('html, body').stop().animate({ scrollTop: 0 }, 400);
// });



$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.header-menu').addClass('transition-menu');
            // $('body').addClass('body_fix');
        } else {
            $('.header-menu').addClass('menu-width');
            // $('body').removeClass('body_fix');
            $('.header-menu').removeClass('transition-menu');
        }
    });
    $('.header-menu a').on('click', function () {
        $('.header-menu').addClass('menu-width');
        // $('body').removeClass('body_fix');
        $('.header-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});






$('.open-menu').on('click', function (e) {
    e.stopPropagation();
    $('.head-menu').toggleClass('menu-opened');

})
$(window).on('click', function (e) {
    let menuSort = $('.head-menu');
    if (e.target !== menuSort) {
        menuSort.removeClass('menu-opened');
    }
});


$('.head-menu a').on('click', function () {
    $('.head-menu').removeClass('menu-opened');
    $('.interactive-modal').removeClass('interactive-modal-open');
    $('body').removeClass('body-fixed');
    $('.floor-plan').removeClass('floor-plan-opened');
    $('.select-layout').removeClass('select-layout-opened');
    $('.floor-room-boxis').removeClass('floor-room-opened');

})

$('.close-all-plan').on('click', function () {
    $('body').removeClass('body-fixed');
    $('.floor-plan').removeClass('floor-plan-opened');
    $('.floor-room-boxis').removeClass('floor-room-opened');
    $('.floor-plan').removeClass('floor-plan-none');


    const anyOpenBack = $('.floor-room-boxis.floor-room-opened').length > 0;

    if (!anyOpenBack && window.fullpage_api) {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }

})




$('.btn-news').on('click', function () {
    $(this).addClass('btn-line-act');
    $('.all-news-cnt').addClass('all-news-opened');
    $('.construct-prog-rel').addClass('construct-prog-none');
    $('.btn-line').removeClass('btn-line-act');
    let text = $(this).text();
    $('.construct-title').text(text);
})

$('.menu-open-news').on('click', function () {
    $('.btn-news').addClass('btn-line-act');
    $('.all-news-cnt').addClass('all-news-opened');
    $('.construct-prog-rel').addClass('construct-prog-none');
    $('.btn-line').removeClass('btn-line-act');
    let text = $(this).text();
    $('.construct-title').text(text);
})



$('.btn-line').on('click', function () {
    $(this).addClass('btn-line-act');
    $('.all-news-cnt').removeClass('all-news-opened');
    $('.construct-prog-rel').removeClass('construct-prog-none');
    $('.btn-news').removeClass('btn-line-act');
    let text = $(this).text();
    $('.construct-title').text(text);

})

$('.construction-xod').on('click', function () {
    $('.btn-line').addClass('btn-line-act');
    $('.all-news-cnt').removeClass('all-news-opened');
    $('.construct-prog-rel').removeClass('construct-prog-none');
    $('.btn-news').removeClass('btn-line-act');
    let text = $(this).text();
    $('.construct-title').text(text);
})



$('.open-all-news').on('click', function () {
    $(this).toggleClass('open-all-news-act');
    $('.all-news-wrap').toggleClass('all-news-wrap-add');
})





$('.interactive-map').on('click', function () {
    $('body').addClass('body-fixed');
    $('.interactive-modal').addClass('interactive-modal-open');
    if (window.fullpage_api) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    }

})

$('.back-interactive').on('click', function () {
    $('.interactive-modal').removeClass('interactive-modal-open');
    $('body').removeClass('body-fixed');
    const interaOpenBack = $('.interactive-modal.interactive-modal-open').length > 0;

    if (!interaOpenBack && window.fullpage_api) {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }
})




$('.back-select-layout').on('click', function() {
    $('.select-layout').removeClass('select-layout-opened');
    $('body').removeClass('body-fixed');

    const anyOpenBack = $('.select-layout.select-layout-opened').length > 0;

    if (!anyOpenBack && window.fullpage_api) {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }
})


$('.sort-floor').on('click', function (e) {
    e.stopPropagation();
    $('.sort-floor-abs').toggleClass('sort-floor-abs-act');
})

$(window).on('click', function (e) {
    let floorSort = $('.sort-floor-abs');
    if (e.target !== floorSort) {
        floorSort.removeClass('sort-floor-abs-act');
    }
});


$('.sort-check-radio').on('click', function () {
    $('.sort-floor-abs').removeClass('sort-floor-abs-act');
    let textChack = $(this).text();
    $('.sort-floor-title').text(textChack);
})




$('.select-param').on('click', function () {
    $('body').addClass('body-fixed');
    $('.floor-plan').addClass('floor-plan-opened');
    if (window.fullpage_api) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    }
})




$('.back-floor-sel').on('click', function () {
    $('body').removeClass('body-fixed');
    $('.floor-plan').removeClass('floor-plan-opened');

    // Проверяем: остались ли открытые модалки?
    const anyOpen = $('.floor-plan.floor-plan-opened').length > 0;

    if (!anyOpen && window.fullpage_api) {
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }
})






const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);













$('.found-cnt-box').on('click', function () {
    $('.floor-plan').addClass('floor-plan-none');
    $('.floor-room-boxis').addClass('floor-room-opened');
})

$('.floor-lot-card').on('click', function () {
    $('.floor-plan').addClass('floor-plan-none');
    $('.floor-room-boxis').addClass('floor-room-opened');
    $('.select-layout').removeClass('select-layout-opened');
})



$('.back-parameters').on('click', function () {
    $('.floor-plan').removeClass('floor-plan-none');
    $('.floor-room-boxis').removeClass('floor-room-opened');
})



let isAnimating = false;

$('.all-news-box').on('click', function (e) {
    e.stopPropagation();
    if (isAnimating) return;

    isAnimating = true;

    const modal = $('.all-news-modal');

    // Сначала закрываем
    modal.removeClass('news-modal-opened');

    // Подождём закрытие и откроем снова
    setTimeout(() => {
        // Здесь можешь подставить новый контент внутрь окна, если нужно
        modal.addClass('news-modal-opened');
        isAnimating = false;
    }, 300); // 300 мс — время "закрытия"
});

// Клик вне окна — закрытие
$(window).on('click', function (e) {
    $('.all-news-modal').removeClass('news-modal-opened');
});

// Закрытие по кнопке
$('.close-news-modal').on('click', function () {
    $('.all-news-modal').removeClass('news-modal-opened');
});

// Чтобы клик по самому окну не закрывал
$('.all-news-modal').on('click', function (e) {
    e.stopPropagation();
});



$('.open-filter-mobile').on('click', function (e) {
    e.stopPropagation();

    $('.floor-plan-fixed').toggleClass('plan-fixed-open');
});


$('.floor-plan-line').on('click', function (e) {
    e.stopPropagation();
    $('.floor-plan-fixed').removeClass('plan-fixed-open');
});


$('.floor-plan-fixed').on('click', function (e) {
    e.stopPropagation();
});

$(window).on('click', function (e) {
    let fixedSort = $('.floor-plan-fixed');
    if (e.target !== fixedSort) {
        fixedSort.removeClass('plan-fixed-open');
    }
});






$('.offices-business-box').on('click', function () {
    $('.offices-business-box').removeClass('offices-business-act');
    $(this).addClass('offices-business-act');
})


$(document).ready(function () {
    $('.all-news-box').on('click', function () {
        // Получаем данные из нажатого блока
        const imgSrc = $(this).find('.get-news-photo').attr('src');
        const title = $(this).find('.get-news-title').text();
        const text = $(this).find('.get-news-text').text();

        // Вставляем данные в окно
        $('.add-news-photo').attr('src', imgSrc);
        $('.add-news-title').text(title);
        $('.add-news-text').text(text);

        // Открытие окна (если оно скрыто, добавь свою логику)

        $('.all-news-col').fadeIn(); // или .addClass('active'), если ты используешь CSS-модалки
    });
});



let officeSwiper = new Swiper(".office-station-slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".office-pagination",
        clickable: true,
    }
});





let constructDescSwiper = new Swiper(".construct-desc-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    speed: 600,
    direction: "vertical",
    navigation: {
        nextEl: ".construct-button-next",
        prevEl: ".construct-button-prev",
    },
});

let constructSwiper = new Swiper(".construct-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    speed: 600,
    breakpoints: {
        '1020': {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        '707': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".construct-button-next",
        prevEl: ".construct-button-prev",
    },
});



$('.open-filt-map').on('click', function (){
    $('.infrast-map-cnt').addClass('infrast-map-open')
})
$('.close-filt-map').on('click', function (){
    $('.infrast-map-cnt').removeClass('infrast-map-open')
})


let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
    pagination: {
        el: ".gallery-pagination",
        type: "fraction",
    }
});










$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});















$('.open_modal').on('click', function (e) {
    e.preventDefault();
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);

    modal.removeClass('out');
    $('body').css({ overflow: 'hidden' });
    modal.fadeIn();

    if (window.fullpage_api) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    }
});

$('.close').on('click', function () {
    let prt = $(this).closest('.modal');
    prt.addClass('out');

    setTimeout(function () {
        prt.fadeOut(200, function () {
            // После fadeOut() — включаем scroll обратно
            const anyOpen = $('.modal:visible').length > 0;

            if (!anyOpen && window.fullpage_api) {
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }

            $('body').css({ overflow: 'visible' }); // ❗️без пробела
        });
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        const modal = $(this);
        const content = modal.find('.modal-content');

        if (event.target === this || event.target === content[0]) {
            modal.addClass('out');
            setTimeout(function () {
                modal.fadeOut(200, function () {
                    const anyOpen = $('.modal:visible').length > 0;

                    if (!anyOpen && window.fullpage_api) {
                        fullpage_api.setAllowScrolling(true);
                        fullpage_api.setKeyboardScrolling(true);
                    }

                    $('body').css({ overflow: 'visible' }); // ❗️без пробела
                });
            }, 100);
        }
    });
});





function setupSingleSlider(id, thumbId, formatFn = v => v) {
    const wrapper = document.getElementById(id);
    const input = wrapper.querySelector("input");
    const highlight = wrapper.querySelector(".range-highlight");
    const thumb = document.getElementById(thumbId);

    function update() {
        const percent = (input.value - input.min) / (input.max - input.min);
        const wrapperWidth = wrapper.offsetWidth;
        const thumbWidth = thumb.offsetWidth;
        const left = percent * (wrapperWidth - thumbWidth) + thumbWidth / 2;

        thumb.style.left = `${left}px`;
        thumb.textContent = formatFn(input.value);
        highlight.style.width = `${percent * 100}%`;
    }

    input.addEventListener("input", update);
    window.addEventListener("resize", update);
    update();
}

function setupDoubleSlider(id, thumb1Id, thumb2Id, formatFn = v => v) {
    const wrapper = document.getElementById(id);
    const inputs = wrapper.querySelectorAll("input");
    const highlight = wrapper.querySelector(".range-highlight");
    const thumb1 = document.getElementById(thumb1Id);
    const thumb2 = document.getElementById(thumb2Id);

    function update() {
        let val1 = parseInt(inputs[0].value);
        let val2 = parseInt(inputs[1].value);

        if (val1 > val2) [val1, val2] = [val2, val1];

        const percent1 = (val1 - inputs[0].min) / (inputs[0].max - inputs[0].min);
        const percent2 = (val2 - inputs[1].min) / (inputs[1].max - inputs[1].min);

        const wrapperWidth = wrapper.offsetWidth;
        const thumbWidth = thumb1.offsetWidth;

        const left1 = percent1 * (wrapperWidth - thumbWidth) + thumbWidth / 2;
        const left2 = percent2 * (wrapperWidth - thumbWidth) + thumbWidth / 2;

        thumb1.style.left = `${left1}px`;
        thumb2.style.left = `${left2}px`;
        thumb1.textContent = formatFn(val1);
        thumb2.textContent = formatFn(val2);

        highlight.style.left = `${percent1 * 100}%`;
        highlight.style.width = `${(percent2 - percent1) * 100}%`;

        // Устанавливаем z-index так, чтобы верхний ползунок был активным
        if (parseInt(inputs[0].value) < parseInt(inputs[1].value)) {
            inputs[0].style.zIndex = 5;
            inputs[1].style.zIndex = 4;
        } else {
            inputs[0].style.zIndex = 4;
            inputs[1].style.zIndex = 5;
        }
    }

    inputs.forEach(input => input.addEventListener("input", update));
    window.addEventListener("resize", update);
    update();
}

// Запускаем
setupDoubleSlider("floor", "floor-thumb1", "floor-thumb2");
setupDoubleSlider("area", "area-thumb1", "area-thumb2"); // ← изменено
setupDoubleSlider("price", "price-thumb1", "price-thumb2");
