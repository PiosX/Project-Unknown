const glassItem = document.querySelectorAll(".header__box-item");
const split = document.querySelector(".split");
const header = document.querySelector(".header");
const h1Mask = document.querySelector(".header__title-mask");
const splitItem = document.querySelectorAll(".split__box--first-item");
const splitItemB = document.querySelectorAll(".split__box--second-item");
const splitBox = document.querySelector(".split__box--first");
const splitBoxB = document.querySelector(".split__box--second");
const splitBoxes = document.querySelectorAll(".split__box");
const splitText = document.querySelector(".split__text--first");
const splitTextC = document.querySelectorAll(".split__text--second");
const splitTextB = document.querySelector(".split__text--third");
const splitContent = document.querySelector(".split__text-content--first");
const splitContentB = document.querySelector(".split__text-content--second");
const pastItems = document.querySelectorAll(".past__img-past");
const footerYear = document.querySelector(".footer__year");
const splashScene = document.querySelector(".splash-scene");
const counter = document.querySelector(".splash-scene__text");

const path1 = document.querySelector(".path-item:nth-child(1)");
const path2 = document.querySelector(".path-item:nth-child(2)");
const path3 = document.querySelector(".path-item:nth-child(3)");

const pathS1 = document.querySelector(".path-s-item:nth-child(1)");
const pathS2 = document.querySelector(".path-s-item:nth-child(2)");
const pathS3 = document.querySelector(".path-s-item:nth-child(3)");
const pathS4 = document.querySelector(".path-s-item:nth-child(4)");
const pathS5 = document.querySelector(".path-s-item:nth-child(5)");
const pathS6 = document.querySelector(".path-s-item:nth-child(6)");
const pathS7 = document.querySelector(".path-s-item:nth-child(7)");

const pathM1 = document.querySelector(".path-m-item:nth-child(1)");
const pathM2 = document.querySelector(".path-m-item:nth-child(2)");
const pathM3 = document.querySelector(".path-m-item:nth-child(3)");
const pathM4 = document.querySelector(".path-m-item:nth-child(4)");
const pathM5 = document.querySelector(".path-m-item:nth-child(5)");
const pathM6 = document.querySelector(".path-m-item:nth-child(6)");
const pathM7 = document.querySelector(".path-m-item:nth-child(7)");
const pathM8 = document.querySelector(".path-m-item:nth-child(8)");
const pathM9 = document.querySelector(".path-m-item:nth-child(9)");
const pathM10 = document.querySelector(".path-m-item:nth-child(10)");
const pathM11 = document.querySelector(".path-m-item:nth-child(11)");
const pathM12 = document.querySelector(".path-m-item:nth-child(12)");
const pathM13 = document.querySelector(".path-m-item:nth-child(13)");
const pathM14 = document.querySelector(".path-m-item:nth-child(14)");

const pathP1 = document.querySelector(".path-p-item:nth-child(1)");
const pathP2 = document.querySelector(".path-p-item:nth-child(2)");
const pathP3 = document.querySelector(".path-p-item:nth-child(3)");
const pathP4 = document.querySelector(".path-p-item:nth-child(4)");
const pathP5 = document.querySelector(".path-p-item:nth-child(5)");
const pathP6 = document.querySelector(".path-p-item:nth-child(6)");
const pathP7 = document.querySelector(".path-p-item:nth-child(7)");
const pathP8 = document.querySelector(".path-p-item:nth-child(8)");
const pathP9 = document.querySelector(".path-p-item:nth-child(9)");
const pathP10 = document.querySelector(".path-p-item:nth-child(10)");
const pathP11 = document.querySelector(".path-p-item:nth-child(11)");
const pathP12 = document.querySelector(".path-p-item:nth-child(12)");

const hText1 = document.querySelector(".header__thought-item:nth-child(1)");
const hText2 = document.querySelector(".header__thought-item:nth-child(2)");
const hText3 = document.querySelector(".header__thought-item:nth-child(3)");
const hText4 = document.querySelector(".header__thought-item:nth-child(4)");
const hText5 = document.querySelector(".header__thought-item:nth-child(5)");
const hText6 = document.querySelector(".header__thought-item:nth-child(6)");

const mText1 = document.querySelector(".map__prediction-text:nth-child(1)");
const mText2 = document.querySelector(".map__prediction-text:nth-child(2)");
const mText3 = document.querySelector(".map__prediction-text:nth-child(3)");

const pText1 = document.querySelector(".past__date-item:nth-child(1)");
const pText2 = document.querySelector(".past__date-item:nth-child(2)");
const pText3 = document.querySelector(".past__date-item:nth-child(3)");
const pText4 = document.querySelector(".past__date-item:nth-child(4)");

const mCont1 = document.querySelector(".map-box--first-content-text");
const mCont2 = document.querySelector(".map-box--second-content-text");
const mCont3 = document.querySelector(".map-box--third-content-text");

const mAuth1 = document.querySelector(".map-box--first-content-author");
const mAuth2 = document.querySelector(".map-box--second-content-author");
const mAuth3 = document.querySelector(".map-box--third-content-author");

const options = {
	threshold: 0.75,
};

let interval = 1;
let intervalS = 1;
let clicked = 0;
let clickedSplit = 0;
let windowScroll = 0;
let innerCursor = document.querySelector(".inner-cursor");
let images = Array.from(document.querySelectorAll(".img"));

const moveCursor = (e) => {
	let x = e.clientX;
	let y = e.clientY;

	innerCursor.style.left = `${x}px`;
	innerCursor.style.top = `${y}px`;
};

const scrollHeader = () => {
	const value = window.scrollY;
	const height = window.innerHeight;
	const toScroll = 3 * header.clientHeight - window.innerHeight;

	const scrollPath1 = Math.floor((value / toScroll) * 65);
	const scrollPath2 = Math.floor((value / toScroll) * 65 - 85);
	const scrollPath3 = Math.floor((value / toScroll) * 65 - 95 - 90);
	const scrollPathS1 = Math.floor((value / toScroll) * 65 - 95 - 90);
	const scrollPathS2 = Math.floor((value / toScroll) * 65 - 95 - 115);
	const scrollPathS3 = Math.floor((value / toScroll) * 65 - 95 - 125);
	const scrollPathS5 = Math.floor((value / toScroll) * 65 - 95 - 130);
	const scrollPathS7 = Math.floor((value / toScroll) * 65 - 95 - 140);
	const scrollPathM1 = Math.floor((value / toScroll) * 65 - 95 - 153);
	const scrollPathM2 = Math.floor((value / toScroll) * 65 - 95 - 158);
	const scrollPathM3 = Math.floor((value / toScroll) * 65 - 95 - 162);
	const scrollPathM4 = Math.floor((value / toScroll) * 65 - 95 - 162);
	const scrollPathM5 = Math.floor((value / toScroll) * 65 - 95 - 167);
	const scrollPathM6 = Math.floor((value / toScroll) * 65 - 95 - 195);
	const scrollPathM7 = Math.floor((value / toScroll) * 65 - 95 - 255);
	const scrollPathM8 = Math.floor((value / toScroll) * 65 - 95 - 263);
	const scrollPathM9 = Math.floor((value / toScroll) * 65 - 95 - 273);
	const scrollPathM10 = Math.floor((value / toScroll) * 65 - 95 - 200);
	const scrollPathM11 = Math.floor((value / toScroll) * 65 - 95 - 210);
	const scrollPathM12 = Math.floor((value / toScroll) * 65 - 95 - 227);
	const scrollPathM13 = Math.floor((value / toScroll) * 65 - 95 - 231);
	const scrollPathM14 = Math.floor((value / toScroll) * 65 - 95 - 241);
	const scrollPathP1 = Math.floor((value / toScroll) * 65 - 95 - 290);
	const scrollPathP2 = Math.floor((value / toScroll) * 65 - 95 - 300);
	const scrollPathP3 = Math.floor((value / toScroll) * 65 - 95 - 305);
	const scrollPathP4 = Math.floor((value / toScroll) * 65 - 95 - 305);
	const scrollPathP5 = Math.floor((value / toScroll) * 65 - 95 - 335);
	const scrollPathP6 = Math.floor((value / toScroll) * 65 - 95 - 345);
	const scrollPathP7 = Math.floor((value / toScroll) * 65 - 95 - 349);
	const scrollPathP8 = Math.floor((value / toScroll) * 65 - 95 - 358);
	const scrollPathP9 = Math.floor((value / toScroll) * 65 - 95 - 363);
	const scrollPathP10 = Math.floor((value / toScroll) * 65 - 95 - 369);
	const scrollPathP11 = Math.floor((value / toScroll) * 65 - 95 - 375);
	const scrollPathP12 = Math.floor((value / toScroll) * 65 - 95 - 377);
	const scrollH1Mask = Math.floor((value / toScroll) * 65);
	const scrollTextH = Math.floor((value / toScroll) * 65);

	if (scrollTextH >= 10) {
		hText1.style.transform = `translateX(0)`;
	} else {
		hText1.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 25) {
		hText2.style.transform = `translateX(0)`;
	} else {
		hText2.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 40) {
		hText3.style.transform = `translateX(0)`;
	} else {
		hText3.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 55) {
		hText4.style.transform = `translateX(0)`;
	} else {
		hText4.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 70) {
		hText5.style.transform = `translateX(0)`;
	} else {
		hText5.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 100) {
		hText6.style.transform = `translateX(0)`;
	} else {
		hText6.style.transform = `translateX(2000px)`;
	}
	if (scrollH1Mask) {
		h1Mask.style.opacity = `${scrollH1Mask / 200}`;
	} else {
		h1Mask.style.opacity = `0`;
	}
	if (scrollTextH >= 250) {
		mText1.style.transform = `translateX(0)`;
	} else {
		mText1.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 290) {
		mText2.style.transform = `translateX(0)`;
	} else {
		mText2.style.transform = `translateX(-2000px)`;
	}
	if (scrollTextH >= 320) {
		mText3.style.transform = `translateX(0)`;
	} else {
		mText3.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 400) {
		pText1.style.opacity = `1`;
	} else {
		pText1.style.opacity = `0`;
	}
	if (scrollTextH >= 397) {
		pText2.style.opacity = `1`;
	} else {
		pText2.style.opacity = `0`;
	}
	if (scrollTextH >= 402) {
		pText3.style.opacity = `1`;
	} else {
		pText3.style.opacity = `0`;
	}
	if (scrollTextH >= 403) {
		pText4.style.opacity = `1`;
	} else {
		pText4.style.opacity = `0`;
	}
	if (scrollTextH >= 270) {
		mCont1.style.transform = `translateX(0)`;
	} else {
		mCont1.style.transform = `translateX(-2000px)`;
	}
	if (scrollTextH >= 300) {
		mCont2.style.transform = `translateX(0)`;
	} else {
		mCont2.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 335) {
		mCont3.style.transform = `translateX(0)`;
	} else {
		mCont3.style.transform = `translateX(-2000px)`;
	}
	if (scrollTextH >= 275) {
		mAuth1.style.transform = `translateX(0)`;
	} else {
		mAuth1.style.transform = `translateX(-2000px)`;
	}
	if (scrollTextH >= 305) {
		mAuth2.style.transform = `translateX(0)`;
	} else {
		mAuth2.style.transform = `translateX(2000px)`;
	}
	if (scrollTextH >= 340) {
		mAuth3.style.transform = `translateX(0)`;
	} else {
		mAuth3.style.transform = `translateX(-2000px)`;
	}
	if (scrollPath1 <= 85) {
		path1.style.height = `${scrollPath1}vh`;
	} else if (scrollPath1 > 85) {
		path1.style.height = `85vh`;
	}
	if (scrollPath2 <= 100 && scrollPath2 > 0) {
		path2.style.transform = `scaleX(${scrollPath2 / 100})`;
	} else if (scrollPath2 < 0) {
		path2.style.transform = `scaleX(0)`;
	} else if (scrollPath2 > 100) {
		path2.style.transform = `scaleX(1)`;
	}
	if (scrollPath3 <= 5 && scrollPath3 > 0) {
		path3.style.height = `${scrollPath3}vh`;
	} else if (scrollPath3 < 0) {
		path3.style.height = `0`;
	} else if (scrollPath3 > 5) {
		path3.style.height = `5vh`;
	}

	if (scrollPathS1 <= 25 && scrollPathS1 > 0) {
		pathS1.style.height = `${scrollPathS1}%`;
	} else if (scrollPathS1 > 25) {
		pathS1.style.height = `25%`;
	}
	if (scrollPathS2 <= 10 && scrollPathS2 > 0) {
		pathS2.style.transform = `scaleX(${scrollPathS2 / 10})`;
	} else if (scrollPathS2 < 0) {
		pathS2.style.transform = `scaleX(0)`;
	} else if (scrollPathS2 > 15) {
		pathS2.style.transform = `scaleX(1)`;
	}
	if (scrollPathS3 * 10 <= 50 && scrollPathS3 * 10 > 0) {
		pathS3.style.height = `${scrollPathS3 * 10}%`;
		pathS4.style.height = `${scrollPathS3 * 10}%`;
	} else if (scrollPathS3 * 10 < 0 || scrollPathS3 < 0) {
		pathS3.style.height = `0`;
		pathS4.style.height = `0`;
	} else if (scrollPathS3 * 10 > 50) {
		pathS3.style.height = `50%`;
		pathS4.style.height = `50%`;
	}
	if (scrollPathS5 <= 10 && scrollPathS5 > 0) {
		pathS5.style.transform = `scaleX(${scrollPathS5 / 10})`;
		pathS6.style.transform = `scaleX(${scrollPathS5 / 10})`;
	} else if (scrollPathS5 < 0) {
		pathS5.style.transform = `scaleX(0)`;
		pathS6.style.transform = `scaleX(0)`;
	} else if (scrollPathS5 > 10) {
		pathS5.style.transform = `scaleX(1)`;
		pathS6.style.transform = `scaleX(1)`;
	}
	if (scrollPathS7 <= 25 && scrollPathS7 > 0) {
		pathS7.style.height = `${scrollPathS7 * 2}%`;
	} else if (scrollPathS7 < 0) {
		pathS7.style.height = `0`;
	} else if (scrollPathS5 > 25) {
		pathS7.style.height = `25%`;
	}

	if (scrollPathM1 * 3 <= 25 && scrollPathM1 * 3 > 0) {
		pathM1.style.height = `${scrollPathM1 * 3}vh`;
	} else if (scrollPathM1 * 3 < 0) {
		pathM1.style.height = `0`;
	} else if (scrollPathM1 * 3 > 25) {
		pathM1.style.height = `25vh`;
	}
	if (scrollPathM2 * 2 <= 10 && scrollPathM2 * 2 > 0) {
		pathM2.style.transform = `scaleX(${(scrollPathM2 * 2) / 10})`;
	} else if (scrollPathM2 * 2 < 0) {
		pathM2.style.transform = `scaleX(0)`;
	} else if (scrollPathM2 * 2 > 30 || scrollPathM2 * 2 > 10) {
		pathM2.style.transform = `scaleX(1)`;
	}
	if (scrollPathM3 * 2 <= 10 && scrollPathM3 * 2 > 0) {
		pathM3.style.transform = `scaleX(${(scrollPathM3 * 2) / 10})`;
	} else if (scrollPathM3 * 2 < 0) {
		pathM3.style.transform = `scaleX(0)`;
	} else if (scrollPathM3 * 2 > 40 || scrollPathM3 * 2 > 10) {
		pathM3.style.transform = `scaleX(1)`;
	}
	if (scrollPathM4 * 3.5 <= 21 && scrollPathM4 * 3.5 > 0) {
		pathM4.style.height = `${scrollPathM4 * 3.5}vh`;
	} else if (scrollPathM4 * 3.5 < 0) {
		pathM4.style.height = `0`;
	} else if (scrollPathM4 * 3.5 > 21) {
		pathM4.style.height = `21vh`;
	}
	if (scrollPathM5 * 3.5 <= 47 && scrollPathM5 * 3.5 > 0) {
		pathM5.style.height = `${scrollPathM5 * 3.5}vh`;
	} else if (scrollPathM5 * 3.5 < 0) {
		pathM5.style.height = `0`;
	} else if (scrollPathM5 * 3.5 > 47) {
		pathM5.style.height = `47vh`;
	}
	if (scrollPathM6 * 3.5 <= 20 && scrollPathM6 * 3.5 > 0) {
		pathM6.style.height = `${scrollPathM6 * 3.5}vh`;
	} else if (scrollPathM6 * 3.5 < 0) {
		pathM6.style.height = `0`;
	} else if (scrollPathM6 * 3.5 > 20) {
		pathM6.style.height = `20vh`;
	}
	if (scrollPathM7 * 3.5 <= 22 && scrollPathM7 * 3.5 > 0) {
		pathM7.style.height = `${scrollPathM7 * 3.5}vh`;
	} else if (scrollPathM7 * 3.5 < 0) {
		pathM7.style.height = `0`;
	} else if (scrollPathM7 * 3.5 > 22) {
		pathM7.style.height = `22vh`;
	}
	if (scrollPathM8 <= 10 && scrollPathM8 > 0) {
		pathM8.style.transform = `scaleX(${scrollPathM8 / 10})`;
	} else if (scrollPathM8 < 0) {
		pathM8.style.transform = `scaleX(0)`;
	} else if (scrollPathM8 > 30 || scrollPathM8 > 10) {
		pathM8.style.transform = `scaleX(1)`;
	}
	if (scrollPathM9 * 1.8 <= 23 && scrollPathM9 * 1.8 > 0) {
		pathM9.style.height = `${scrollPathM9 * 1.8}vh`;
	} else if (scrollPathM9 * 1.8 < 0) {
		pathM9.style.height = `0`;
	} else if (scrollPathM9 * 1.8 > 23) {
		pathM9.style.height = `23vh`;
	}
	if (scrollPathM10 <= 10 && scrollPathM10 > 0) {
		pathM10.style.transform = `scaleX(${scrollPathM10 / 10})`;
	} else if (scrollPathM10 < 0) {
		pathM10.style.transform = `scaleX(0)`;
	} else if (scrollPathM10 > 10 || scrollPathM10 > 10) {
		pathM10.style.transform = `scaleX(1)`;
	}
	if (scrollPathM11 * 3.5 <= 14 && scrollPathM11 * 3.5 > 0) {
		pathM11.style.height = `${scrollPathM11 * 3.5}vh`;
	} else if (scrollPathM11 * 3.5 < 0) {
		pathM11.style.height = `0`;
	} else if (scrollPathM11 * 3.5 > 14) {
		pathM11.style.height = `14vh`;
	}
	if (scrollPathM12 * 3.5 <= 17 && scrollPathM12 * 3.5 > 0) {
		pathM12.style.height = `${scrollPathM12 * 3.5}vh`;
	} else if (scrollPathM12 * 3.5 < 0) {
		pathM12.style.height = `0`;
	} else if (scrollPathM12 * 3.5 > 17) {
		pathM12.style.height = `17vh`;
	}
	if (scrollPathM13 <= 10 && scrollPathM13 > 0) {
		pathM13.style.transform = `scaleX(${scrollPathM13 / 10})`;
	} else if (scrollPathM13 < 0) {
		pathM13.style.transform = `scaleX(0)`;
	} else if (scrollPathM13 > 10 || scrollPathM13 > 10) {
		pathM13.style.transform = `scaleX(1)`;
	}
	if (scrollPathM14 * 3.5 <= 17 && scrollPathM14 * 3.5 > 0) {
		pathM14.style.height = `${scrollPathM14 * 3.5}vh`;
	} else if (scrollPathM14 * 3.5 < 0) {
		pathM14.style.height = `0`;
	} else if (scrollPathM14 * 3.5 > 17) {
		pathM14.style.height = `17vh`;
	}

	if (scrollPathP1 * 1.8 <= 20 && scrollPathP1 * 1.8 > 0) {
		pathP1.style.height = `${scrollPathP1 * 1.8}vh`;
	} else if (scrollPathP1 * 1.8 < 0) {
		pathP1.style.height = `0`;
	} else if (scrollPathP1 * 1.8 > 20) {
		pathP1.style.height = `20vh`;
	}
	if (scrollPathP2 * 2 <= 10 && scrollPathP2 * 2 > 0) {
		pathP2.style.transform = `scaleX(${(scrollPathP2 * 2) / 10})`;
	} else if (scrollPathP2 * 2 < 0) {
		pathP2.style.transform = `scaleX(0)`;
	} else if (scrollPathP2 * 2 > 20 || scrollPathP2 * 2 > 10) {
		pathP2.style.transform = `scaleX(1)`;
	}
	if (scrollPathP3 * 2 <= 10 && scrollPathP3 * 2 > 0) {
		pathP3.style.transform = `scaleX(${(scrollPathP3 * 2) / 10})`;
	} else if (scrollPathP3 * 2 < 0) {
		pathP3.style.transform = `scaleX(0)`;
	} else if (scrollPathP3 * 2 > 20 || scrollPathP3 * 2 > 10) {
		pathP3.style.transform = `scaleX(1)`;
	}
	if (scrollPathP4 <= 20 && scrollPathP4 > 0) {
		pathP4.style.height = `${scrollPathP4}vh`;
	} else if (scrollPathP4 < 0) {
		pathP4.style.height = `0`;
	} else if (scrollPathP4 > 20) {
		pathP4.style.height = `20vh`;
	}
	if (scrollPathP5 <= 10 && scrollPathP5 > 0) {
		pathP5.style.height = `${scrollPathP5}vh`;
	} else if (scrollPathP5 < 0) {
		pathP5.style.height = `0`;
	} else if (scrollPathP5 > 10) {
		pathP5.style.height = `10vh`;
	}
	if (scrollPathP6 * 2 <= 10 && scrollPathP6 * 2 > 0) {
		pathP6.style.transform = `scaleX(${(scrollPathP6 * 2) / 10})`;
	} else if (scrollPathP6 * 2 < 0) {
		pathP6.style.transform = `scaleX(0)`;
	} else if (scrollPathP6 * 2 > 35 || scrollPathP6 * 2 > 10) {
		pathP6.style.transform = `scaleX(1)`;
	}
	if (scrollPathP7 * 1.3 <= 13 && scrollPathP7 * 1.3 > 0) {
		pathP7.style.height = `${scrollPathP7 * 1.3}vh`;
	} else if (scrollPathP7 * 1.3 < 0) {
		pathP7.style.height = `0`;
	} else if (scrollPathP7 * 1.3 > 13) {
		pathP7.style.height = `13vh`;
	}
	if (scrollPathP8 <= 5 && scrollPathP8 > 0) {
		pathP8.style.height = `${scrollPathP8}vh`;
	} else if (scrollPathP8 < 0) {
		pathP8.style.height = `0`;
	} else if (scrollPathP8 > 5) {
		pathP8.style.height = `5vh`;
	}
	if (scrollPathP9 * 3.5 <= 24 && scrollPathP9 * 3.5 > 0) {
		pathP9.style.height = `${scrollPathP9 * 3.5}vh`;
	} else if (scrollPathP9 * 3.5 < 0) {
		pathP9.style.height = `0`;
	} else if (scrollPathP9 * 3.5 > 24) {
		pathP9.style.height = `24.1vh`;
	}
	if (scrollPathP10 * 4 <= 10 && scrollPathP10 * 4 > 0) {
		pathP10.style.transform = `scaleX(${(scrollPathP10 * 4) / 10})`;
	} else if (scrollPathP10 * 4 < 0) {
		pathP10.style.transform = `scaleX(0)`;
	} else if (scrollPathP10 * 4 > 40 || scrollPathP10 * 4 > 10) {
		pathP10.style.transform = `scaleX(1)`;
	}
	if (scrollPathP11 * 3.5 <= 6 && scrollPathP11 * 3.5 > 0) {
		pathP11.style.height = `${scrollPathP11 * 3.5}vh`;
	} else if (scrollPathP11 * 3.5 < 0) {
		pathP11.style.height = `0`;
	} else if (scrollPathP11 * 3.5 > 6) {
		pathP11.style.height = `6vh`;
	}
	if (scrollPathP12 * 4 <= 10 && scrollPathP12 * 4 > 0) {
		pathP12.style.transform = `scaleX(${(scrollPathP12 * 4) / 10})`;
	} else if (scrollPathP12 * 4 < 0) {
		pathP12.style.transform = `scaleX(0)`;
	} else if (scrollPathP12 * 4 > 40 || scrollPathP12 * 4 > 10) {
		pathP12.style.transform = `scaleX(1)`;
	}
};

splitItem.forEach((item) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				item.style.transform = `translateX(-200px)`;
				setInterval(() => {
					if (splitBox.style.transform != "translateX(-50%)") {
						item.classList.add("scale-s");
					} else {
						item.classList.remove("scale-s");
					}
				}, `${interval}00`);
				interval++;
				return;
			}
		});
	});
	observer.observe(item);
});

splitItemB.forEach((item) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				item.style.transform = `translateX(200px)`;
				setInterval(() => {
					if (splitBoxB.style.transform != "translateX(50%)") {
						item.classList.add("scale-sB");
					} else {
						item.classList.remove("scale-sB");
					}
				}, `${intervalS}00`);
				intervalS++;
				return;
			}
		});
	});
	observer.observe(item);
});

const scrollSplitText = () => {
	let value1 = -window.innerHeight + (window.scrollY - windowScroll);
	let value2 = window.innerHeight - (window.scrollY - windowScroll);
	if (pathS1.style.opacity != "0") {
		if (windowScroll != 0 && value1 <= 0 && value2 >= 0) {
			splitText.style.transform = `translateX(${value1}px)`;
			splitTextB.style.transform = `translateX(${value2}px)`;
		} else {
			splitText.style.transform = `translateX(${0}px)`;
			splitTextB.style.transform = `translateX(${0}px)`;
			windowScroll = 6 * window.innerHeight;
		}
	}
};

const hideSplitText = (e) => {
	splitTextC.forEach((text) => {
		if (text.classList.contains("textAnimS")) {
			text.classList.add("textAnimS-r");
			text.classList.remove("textAnimS");
		} else {
			text.classList.add("textAnimS");
			text.classList.remove("textAnimS-r");
		}
	});
	hidePath();
};
const hidePath = () => {
	clickedSplit++;
	if (clickedSplit % 2 != 0) {
		pathS1.style.opacity = `0`;
		pathS2.style.opacity = `0`;
		pathS3.style.opacity = `0`;
		pathS4.style.opacity = `0`;
		pathS5.style.opacity = `0`;
		pathS6.style.opacity = `0`;
		pathS7.style.opacity = `0`;
	} else {
		pathS1.style.opacity = `1`;
		pathS2.style.opacity = `1`;
		pathS3.style.opacity = `1`;
		pathS4.style.opacity = `1`;
		pathS5.style.opacity = `1`;
		pathS6.style.opacity = `1`;
		pathS7.style.opacity = `1`;
	}
};

const chooseSplitA = () => {
	clicked++;
	hideSplitText();
	if (clicked % 2 == 0) {
		splitBox.style.transform = "translateX(0)";
		splitBoxB.style.transform = "translateX(0)";
		splitText.style.transform = "translateX(0)";
		splitTextB.style.transform = "translateX(0)";
		splitContent.style.transform = `translateX(2000px)`;
	} else {
		splitBox.style.transform = "translateX(-50%)";
		splitBoxB.style.transform = "translateX(250%)";
		splitText.style.transform = "translateX(10%)";
		splitTextB.style.transform = "translateX(20%)";
		splitContent.style.transform = `translate(-50%,-50%)`;
	}
};
const chooseSplitB = () => {
	clicked++;
	hideSplitText();
	if (clicked % 2 == 0) {
		splitBoxB.style.transform = "translateX(0)";
		splitBox.style.transform = "translateX(0)";
		splitText.style.transform = "translateX(0)";
		splitTextB.style.transform = "translateX(0)";
		splitContentB.style.transform = `translateX(-2000px)`;
	} else {
		splitBoxB.style.transform = "translateX(50%)";
		splitBox.style.transform = "translateX(-250%)";
		splitText.style.transform = "translateX(-10%)";
		splitTextB.style.transform = "translateX(-10%)";
		splitContentB.style.transform = `translate(-50%,-50%)`;
	}
};

document.addEventListener("mousemove", moveCursor);
images.forEach((image) => {
	image.addEventListener("mouseover", () => {
		innerCursor.classList.add("grow");
	});
	image.addEventListener("mouseleave", () => {
		innerCursor.classList.remove("grow");
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const splashSceneCounter = () => {
	const finalNumber = counter.getAttribute("data-number");
	const value = parseInt(counter.textContent);

	const speed = finalNumber / 50;

	if (value < finalNumber) {
		counter.textContent = `${Math.floor(value + speed)}`;
		setTimeout(splashSceneCounter, 50);
	} else {
		counter.textContent = finalNumber;
	}
	if (value == 100) {
		splashScene.classList.add("splashAnim");
	}
};
splashSceneCounter();

window.addEventListener("scroll", scrollHeader);
splitItem.forEach((item) => item.addEventListener("click", chooseSplitA));
splitItemB.forEach((item) => item.addEventListener("click", chooseSplitB));
splitContent.addEventListener("click", chooseSplitA);
splitContentB.addEventListener("click", chooseSplitB);
window.addEventListener("scroll", scrollSplitText);
pastItems.forEach((item) => {
	item.addEventListener("mouseover", () => {
		item.classList.add("hidePastEl");
	});
});
