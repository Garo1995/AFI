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
})






$('.btn-news').on('click', function () {
    $(this).addClass('btn-line-act');
    $('.all-news-cnt').addClass('all-news-opened');
    $('.construct-prog-rel').addClass('construct-prog-none');
    $('.btn-line').removeClass('btn-line-act');
})

$('.menu-open-news').on('click', function () {
    $('.btn-news').addClass('btn-line-act');
    $('.all-news-cnt').addClass('all-news-opened');
    $('.construct-prog-rel').addClass('construct-prog-none');
    $('.btn-line').removeClass('btn-line-act');
})



$('.btn-line').on('click', function () {
    $(this).addClass('btn-line-act');
    $('.all-news-cnt').removeClass('all-news-opened');
    $('.construct-prog-rel').removeClass('construct-prog-none');
    $('.btn-news').removeClass('btn-line-act');
})

$('.construction-xod').on('click', function () {
    $('.btn-line').addClass('btn-line-act');
    $('.all-news-cnt').removeClass('all-news-opened');
    $('.construct-prog-rel').removeClass('construct-prog-none');
    $('.btn-news').removeClass('btn-line-act');
})



$('.open-all-news').on('click', function () {
    $(this).toggleClass('open-all-news-act');
    $('.all-news-wrap').toggleClass('all-news-wrap-add');
})





$('.interactive-map').on('click', function () {
    $('body').addClass('body-fixed');
    $('.interactive-modal').addClass('interactive-modal-open');
})

$('.back-interactive').on('click', function () {
    $('.interactive-modal').removeClass('interactive-modal-open');
    $('body').removeClass('body-fixed');

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
})




$('.select-param').on('click', function () {
    $('body').addClass('body-fixed');
    $('.floor-plan').addClass('floor-plan-opened');
})




$('.back-floor-sel').on('click', function () {
    $('body').removeClass('body-fixed');
    $('.floor-plan').removeClass('floor-plan-opened');
})







$('.found-cnt-box').on('click', function () {
    $('.floor-plan').addClass('floor-plan-none');
    $('.floor-room-boxis').addClass('floor-room-opened');
})



$('.back-parameters').on('click', function () {
    $('.floor-plan').removeClass('floor-plan-none');
    $('.floor-room-boxis').removeClass('floor-room-opened');
})




$('.all-news-box').on('click', function (e) {
    e.stopPropagation();
    $('.all-news-modal').addClass('news-modal-opened');

})

$('.all-news-modal').on('click', function (e) {
    e.stopPropagation();
})

$(window).on('click', function (e) {
    let newsSort = $('.all-news-modal');
    if (e.target !== newsSort) {
        newsSort.removeClass('news-modal-opened');
    }
});


$('.close-news-modal').on('click', function () {
    $('.all-news-modal').removeClass('news-modal-opened');
})



$('.open-filter-mobile').on('click', function (e) {
    e.stopPropagation();

    $('.floor-plan-fixed').toggleClass('plan-fixed-open');
})

$('.floor-plan-fixed').on('click', function (e) {
    e.stopPropagation();
})

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
    direction: "vertical",
    centeredSlides: true,


    pagination: {
        el: ".office-pagination",
        clickable: true,
    }
});


// Автопрокрутка вниз (то есть вызов предыдущего слайда)
setInterval(() => {
    officeSwiper.slidePrev(); // вместо slideNext
}, 2500);





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







let startY = 0;
let modal = document.querySelector('.sorting-modal'); // замени на свой класс

modal.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY;
}, false);

modal.addEventListener('touchmove', function (e) {
    let moveY = e.touches[0].clientY;
    let diffY = moveY - startY;

    // если свайп вниз больше 50px — закрываем окно
    if (diffY > 50) {
        closeModal(); // твоя функция закрытия окна
    }
}, false);

function closeModal() {
    modal.style.display = 'none'; // или любой способ скрытия
}





$('.open_modal').on('click', function (e) {
    e.preventDefault();
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);

    // Показываем модалку
    modal.removeClass('out');
    $('body').css({overflow: 'hidden'});
    modal.fadeIn();

});
$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()
            }, 100)
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()
            }, 100)
            $('body').css({overflow: 'visible '})
        }
    })
});



$('.menu-scroll a').click(function(e) {
    e.preventDefault();

    let target = $(this).attr('href'); // например "#section1"
    if (!target.startsWith('#')) return;

    let targetId = target.substring(1); // "section1"
    let $target = $('#' + targetId);

    if ($target.length === 0) return;

    // Проверяем, входит ли целевой элемент в fullpage
    if ($target.closest('#fullpage').length > 0) {
        // Используем fullpage для прокрутки
        if (typeof fullpage_api !== 'undefined') {
            fullpage_api.moveTo(targetId);
        }
    } else {
        // Обычный плавный скролл для секций вне fullpage
        let targetOffset = $target.offset().top - 20; // отступ
        $('html, body').animate({scrollTop: targetOffset}, 1800);
    }
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
