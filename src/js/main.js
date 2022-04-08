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
const pastItems = document.querySelectorAll(".past__img-past");

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

const options = {
	threshold: 0.75,
};

let interval = 1;
let intervalS = 1;
let clicked = 0;
let windowScroll = 0;
let innerCursor = document.querySelector(".inner-cursor");
let images = Array.from(document.querySelectorAll(".img"));

const moveCursor = (e) => {
	let x = e.clientX;
	let y = e.clientY;

	innerCursor.style.left = `${x}px`;
	innerCursor.style.top = `${y}px`;
};

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

document.addEventListener("mousemove", moveCursor);
images.forEach((image) => {
	image.addEventListener("mouseover", () => {
		innerCursor.classList.add("grow");
	});
	image.addEventListener("mouseleave", () => {
		innerCursor.classList.remove("grow");
	});
});
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
pastItems.forEach((item) => {
	item.addEventListener("mouseover", () => {
		item.classList.add("hidePastEl");
	});
});
