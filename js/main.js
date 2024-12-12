
let b = window.location.href
let count = document.querySelector('.header__nav-shop-list').getElementsByTagName('li').length

for (let i = 0; i < count; i++) {
    let c = document.querySelectorAll('.header__nav-shop-link')[i]
    let d = c.href
    if (d == b) {
    c.classList.add('header__nav-shop-link--selected')
    } else {
    c.classList.remove('header__nav-shop-link--selected')
    }
}


document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest ('.burger-icon')
    const burgerNavLink = e.target.closest ('.nav__link')

    if (!burgerIcon && !burgerNavLink) return

    if(document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }

}

document.addEventListener('click', filterInit)

function filterInit(e) {
    const filterIcon = e.target.closest ('.filter__mobile')

    if (!filterIcon) return
    
    if(document.documentElement.clientWidth > 1000) return

    if (!document.body.classList.contains('body--opened-filter')) {
        document.body.classList.add('body--opened-filter')
    } else {
        document.body.classList.remove('body--opened-filter')
    }

    const filterTitle = document.getElementById('filterMain')
	if (document.documentElement.clientWidth <= 1000) {
		filterTitle.classList.add('filter__mobile');
	} else {
		filterTitle.classList.remove('filter__mobile');
	}
}

// ============== Верхний мейн слайдер
const previewSlider = new Swiper('.slider-preview', {
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.slider__preview-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider__preview-next',
        prevEl: '.slider__preview-prev',
    },
});

// ============== Cлайдер коллекций
const collectionSlider = new Swiper('.collection-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    
    // Navigation arrows
    navigation: {
        nextEl: '.collection__next',
        prevEl: '.collection__prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        601: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        801: {
            spaceBetween: 40,
        },
        1101: {
        slidesPerView: 4,
        }
    }
});

// ============== Cлайдер отзывы 

const feedbackSlider = new Swiper('.feedback-slider', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 23,

    pagination: {
        el: '.feedback__pagination',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        601: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        801: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }

});

// ================== Футер аккордион
const acc = document.getElementsByClassName("footer__accordion-inner");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('footer__accordion-active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
};

const accordionF = document.getElementsByClassName("filter__accordion-inner");


for (i = 0; i < accordionF.length; i++) {
    accordionF[i].addEventListener('click', function () {
        this.classList.toggle('filter__accordion-active');
        let panelF = this.nextElementSibling;
        if (panelF.style.maxHeight) {
            panelF.style.maxHeight = null;
        } else {
            panelF.style.maxHeight = panelF.scrollHeight + 'px';
        }
    });
};

// =================== Кнопка "показать больше"
function readMore() {
    let dots = document.getElementById('dots')
    let more = document.getElementById('more')
    let btn = document.getElementById('btn')

    if(dots.style.display === 'none') {
        dots.style.display='inline';
        btn.innerHTML='See More';
        more.style.display='none';
    } else {
        dots.style.display='none';
        btn.innerHTML='Hide';
        more.style.display='inline';
    }

}
