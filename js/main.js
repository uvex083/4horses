/* Бегущая строка */
document.addEventListener('DOMContentLoaded', () => {

	/* добавление точки разделителя */

	const tickerItems = document.querySelectorAll('.ticker__item');

	tickerItems.forEach(item => {
		const tickerDot = document.createElement('div');
		tickerDot.classList.add('ticker__item', 'item--dot');
		item.after(tickerDot);
	});


	/* Дублируем список элементов в бегущей строке */

	const tickerContainers = document.querySelectorAll('.ticker__item-container');

	tickerContainers.forEach(item => {
		const currentTickerList = document.querySelector('.ticker__item-list.ticker--animation');
		const newTickerList = currentTickerList.cloneNode(true);
		newTickerList.setAttribute('aria-hidden', 'true');
		item.append(newTickerList);
	});

})



// Получаем элементы заголовка и изображения
const customHeading = document.querySelector('.support__row.row--top .support__title');
const imgContainer = document.querySelector('.support__row.row--top .support__img');
const img = imgContainer.querySelector('img');

const moveImgToTitle = () => {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 992 && imgContainer) {
		customHeading.insertBefore(imgContainer, customHeading.querySelector('.mobile__title--bottom'));
	} else {/* возвращаем картинку на место */
		document.querySelector('.support__row.row--top').append(imgContainer);
	}
}

window.addEventListener('resize', moveImgToTitle);
moveImgToTitle();