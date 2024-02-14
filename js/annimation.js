/* Картинки главного экрана */
const city = document.querySelector('.header__img--city');
const sun = document.querySelector('.header__img--sun');
const king = document.querySelector('.header__img--king');
const queen = document.querySelector('.header__img--queen');
const horse = document.querySelector('.header__img--horse');
const pawn = document.querySelector('.header__img--pawn');

document.addEventListener('DOMContentLoaded', () => {

	city.classList.add('show');
	sun.classList.add('show');

	setTimeout(() => {
		horse.classList.add('show');
	}, 2000);

	setTimeout(() => {
		pawn.classList.add('show');
	}, 2000);

	setTimeout(() => {
		king.classList.add('show');
	}, 3000);

	setTimeout(() => {
		queen.classList.add('show');
	}, 3300);
});



/* Текст главного экрана */
const mainScreenTitle = document.querySelector('.header__title');
const mainScreenSubTitle = document.querySelector('.header__subtitle');
const mainScreenButtons = document.querySelector('.header__button-cnt');

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		mainScreenTitle.classList.add('show');
	}, 300)

	setTimeout(() => {
		mainScreenSubTitle.classList.add('show');
	}, 600)

	setTimeout(() => {
		mainScreenButtons.classList.add('show');
	}, 900)
})



/* Фиксируем высоту экрана для анимации */
const triggerHeight = window.innerHeight / 5 * 4;



/* Запускаем самолет */
const planeFlight = () => {

	const plane = document.querySelector('.stage__container .plane');
	const topOfPlane = plane.getBoundingClientRect().top;

	if (triggerHeight > topOfPlane) {
		plane.classList.add('show');
	};
}

planeFlight();
window.addEventListener('scroll', planeFlight);



/* Анимация блока с этапами */
const showItem = () => {
	const itemContainer = document.querySelector('.item__container');
	const topOfItemContainer = itemContainer.getBoundingClientRect().top;
	const items = document.querySelectorAll('.item');


	if (triggerHeight > topOfItemContainer) {

		items.forEach((item, index) => {
			setTimeout(() => {
				item.classList.add('show');
			}, index * 100)
		})

	};
}

showItem();
window.addEventListener('scroll', showItem);



/* Анимация блока участников */
const showParticipant = () => {
	const participantContainer = document.querySelector('.participant__container');
	const topOfParticipantContainer = participantContainer.getBoundingClientRect().top;
	const participants = document.querySelectorAll('.participant-card');


	if (triggerHeight > topOfParticipantContainer) {

		participants.forEach((item, index) => {
			setTimeout(() => {
				item.classList.add('show');
			}, index * 300)
		})

	};
}

showParticipant();
window.addEventListener('scroll', showParticipant);






