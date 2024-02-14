/* Адаптация слайдера на мобильных устройствах */
const stageContainer = document.querySelector(".stage__container.container");


const swiperContainer = document.createElement("div");
swiperContainer.className = "swiper stage__swiper stage__swiper--mobile";

const swiperWrapper = document.createElement("div");
swiperWrapper.className = "swiper-wrapper";

const swiperBtnCnt = document.createElement("div");
swiperBtnCnt.className = "swiperBtnCnt";

const prevButton = document.createElement("div");
prevButton.className = "swiper-button-prev";

const nextButton = document.createElement("div");
nextButton.className = "swiper-button-next";

const pagination = document.createElement("div");
pagination.className = "swiper-pagination";

swiperBtnCnt.append(prevButton, pagination, nextButton);
swiperContainer.append(swiperWrapper, swiperBtnCnt);


const itemContainer = document.querySelector(".item__container");
const slidesData = [
	{ index: 1, elements: [1, 2] },
	{ index: 2, elements: [3] },
	{ index: 3, elements: [4, 5] },
	{ index: 4, elements: [6] },
	{ index: 5, elements: [7] }
];

slidesData.forEach(slideData => {
	const slide = document.createElement("div");
	slide.className = "swiper-slide";

	slideData.elements.forEach(elementIndex => {
		const itemElement = itemContainer.querySelector(`.item:nth-child(${elementIndex})`);
		const newDiv = document.createElement("div");
		newDiv.className = "item";
		newDiv.innerHTML = itemElement.innerHTML;
		slide.appendChild(newDiv);
	});

	swiperWrapper.appendChild(slide);
});

stageContainer.appendChild(swiperContainer);

let swiperStage;

function initSwiper() {
	if (window.innerWidth <= 992) {
		swiperStage = new Swiper(".stage__swiper", {
			pagination: {
				el: ".stage__swiper .swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".stage__swiper .swiper-button-next",
				prevEl: ".stage__swiper .swiper-button-prev",
			},
			breakpoints: {
				480: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
		});
	}
}

initSwiper();

window.addEventListener('resize', function () {
	if (window.innerWidth <= 992) {
		if (swiperStage) {
			swiperStage.destroy();
		}
		initSwiper();
	} else {
		if (swiperStage) {
			swiperStage.destroy();
		}
	}
});



/* Свайпер участников */
var swiperParticipant = new Swiper(".participant__swiper", {
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-button__cnt--title .swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button__cnt--title .swiper-button-next",
		prevEl: ".swiper-button__cnt--title .swiper-button-prev",
	},
	breakpoints: {
		480: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

