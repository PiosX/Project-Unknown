const glassItem = document.querySelectorAll(".header__box-item");
const split = document.querySelector(".split");
const header = document.querySelector(".header");
const splitItem = document.querySelectorAll(".split__box--first-item");
const splitItemB = document.querySelectorAll(".split__box--second-item");
const splitBox = document.querySelector(".split__box--first");
const splitBoxB = document.querySelector(".split__box--second");
const splitBoxes = document.querySelectorAll(".split__box");
const splitText = document.querySelector(".split__text--first");
const splitTextC = document.querySelectorAll(".split__text--second");
const splitTextB = document.querySelector(".split__text--third");

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

const options = {
	threshold: 0.75,
};

let randomPosX = [];
let randomPosY = [];
let interval = 1;
let intervalS = 1;
let clicked = 0;
let clickedB = 0;
let itemCount = 1;
let itemCountB = 1;
let windowScroll = 0;

const changePosition = () => {
	let j = 0;
	glassItem.forEach((item) => {
		if (!item.classList.contains("item-anim")) {
			item.style.opacity = 0;
		}
		j++;
	});
};

const scrollHeader = () => {
	const value = window.scrollY;
	const height = window.innerHeight;
	for (let i = 0; i < 85; i++) {
		if (height < value && i % 5 == 0) {
			glassItem[i].classList.add("item-pos-anim");
		}
		if (2 * height < value && i % 4 == 0) {
			glassItem[i].classList.add("item-pos-anim");
		}
		if (3 * height < value && i % 3 == 0) {
			glassItem[i].classList.add("item-pos-anim");
		}
		if (4 * height < value && i % 2 == 0) {
			glassItem[i].classList.add("item-pos-anim");
		}
		if (5 * height < value && i % 1 == 0) {
			glassItem[i].classList.add("item-pos-anim");
		}
	}
	const toScroll = 3 * header.clientHeight - window.innerHeight;
	const scrollPath1 = Math.floor((value / toScroll) * 65);
	const scrollPath2 = Math.floor((value / toScroll) * 65 - 85);
	const scrollPath3 = Math.floor((value / toScroll) * 65 - 95 - 90);
	const scrollPathS1 = Math.floor((value / toScroll) * 65 - 95 - 90);
	const scrollPathS2 = Math.floor((value / toScroll) * 65 - 95 - 115);
	const scrollPathS3 = Math.floor((value / toScroll) * 65 - 95 - 125);
	const scrollPathS5 = Math.floor((value / toScroll) * 65 - 95 - 130);
	const scrollPathS7 = Math.floor((value / toScroll) * 65 - 95 - 140);
	if (scrollPath1 <= 85) {
		path1.style.height = `${scrollPath1}vh`;
	} else if (scrollPath1 > 85) {
		path1.style.height = `85vh`;
	}
	if (scrollPath2 <= 100 && scrollPath2 > 0) {
		path2.style.transform = `scaleX(${scrollPath2 / 100})`;
	} else if (scrollPath2 < 0) {
		path2.style.transform = `scaleX(0)`;
	} else {
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
	if (scrollPathS3 * 10 <= 50) {
		pathS3.style.height = `${scrollPathS3 * 10}%`;
		pathS4.style.height = `${scrollPathS3 * 10}%`;
	} else if (scrollPathS3 * 10 < 0) {
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

// const observer = new IntersectionObserver(
// 	function (entries, observer) {
// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				window.scrollTo(0, split.offsetTop);
// 				return;
// 			}
// 		});
// 	},
// 	{ threshold: 0.5 }
// );
// observer.observe(split);

const scrollSplitText = () => {
	let value1 = -window.innerHeight + (window.scrollY - windowScroll);
	let value2 = window.innerHeight - (window.scrollY - windowScroll);
	if (windowScroll != 0 && value1 <= 0 && value2 >= 0) {
		splitText.style.transform = `translateX(${value1}px)`;
		splitTextB.style.transform = `translateX(${value2}px)`;
	} else {
		splitText.style.transform = `translateX(${0}px)`;
		splitTextB.style.transform = `translateX(${0}px)`;
		windowScroll = 6 * window.innerHeight;
	}
};

const hideSplitText = (e) => {
	splitTextC.forEach((text) => {
		if (text.classList.contains("textAnimS")) {
			text.style.strokeDashoffset = 500;
			text.classList.add("textAnimS-r");
			text.classList.remove("textAnimS");
		} else {
			text.style.strokeDashoffset = 0;
			text.classList.add("textAnimS");
			text.classList.remove("textAnimS-r");
		}
	});
};

const chooseSplitA = () => {
	clicked++;
	if (clicked % 2 == 0) {
		splitBox.style.transform = "translateX(0)";
		splitBoxB.style.transform = "translateX(0)";
		splitText.style.transform = "translateX(0)";
		splitTextB.style.transform = "translateX(0)";
	} else {
		splitBox.style.transform = "translateX(-50%)";
		splitBoxB.style.transform = "translateX(250%)";
		splitText.style.transform = "translateX(10%)";
		splitTextB.style.transform = "translateX(20%)";
	}
};
const chooseSplitB = () => {
	clicked++;
	if (clicked % 2 == 0) {
		splitBoxB.style.transform = "translateX(0)";
		splitBox.style.transform = "translateX(0)";
		splitText.style.transform = "translateX(0)";
		splitTextB.style.transform = "translateX(0)";
	} else {
		splitBoxB.style.transform = "translateX(50%)";
		splitBox.style.transform = "translateX(-250%)";
		splitText.style.transform = "translateX(-10%)";
		splitTextB.style.transform = "translateX(-10%)";
	}
};

document.addEventListener("DOMContentLoaded", changePosition);
window.addEventListener("scroll", scrollHeader);
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};
splitItem.forEach((item) => item.addEventListener("click", chooseSplitA));
splitItemB.forEach((item) => item.addEventListener("click", chooseSplitB));
window.addEventListener("scroll", scrollSplitText);
splitItem.forEach((box) => box.addEventListener("click", hideSplitText));
splitItemB.forEach((box) => box.addEventListener("click", hideSplitText));
