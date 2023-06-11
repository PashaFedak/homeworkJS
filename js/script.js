let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");

let x1 = 0;
let y1 = 0;
let x2 = window.innerWidth - 400;
let y2 = window.innerHeight - 400;

let x1Direction = 1;
let y1Direction = 1;
let x2Direction = -1;
let y2Direction = -1;

function moveElements() {
	x1 += 1 * x1Direction; // Змініть це значення для налаштування швидкості руху
	y1 += 1 * y1Direction; // Змініть це значення для налаштування швидкості руху
	x2 += 1 * x2Direction; // Змініть це значення для налаштування швидкості руху
	y2 += 1 * y2Direction; // Змініть це значення для налаштування швидкості руху

	if (x1 >= window.innerWidth - 400 || x1 <= 0) {
		x1Direction *= -1;
	}
	if (y1 >= window.innerHeight - 400 || y1 <= 0) {
		y1Direction *= -1;
	}
	if (x2 >= window.innerWidth - 400 || x2 <= 0) {
		x2Direction *= -1;
	}
	if (y2 >= window.innerHeight - 400 || y2 <= 0) {
		y2Direction *= -1;
	}

	element1.style.left = x1 + "px";
	element1.style.top = y1 + "px";
	element2.style.left = x2 + "px";
	element2.style.top = y2 + "px";
}
function changeGeometry() {
	let randomWidth1 = Math.floor(Math.random() * 200) + 200; // Випадкова ширина для елементу 1 (від 200 до 400)
	let randomHeight1 = Math.floor(Math.random() * 200) + 200; // Випадкова висота для елементу 1 (від 200 до 400)
	let randomWidth2 = Math.floor(Math.random() * 200) + 200; // Випадкова ширина для елементу 2 (від 200 до 400)
	let randomHeight2 = Math.floor(Math.random() * 200) + 200; // Випадкова висота для елементу 2 (від 200 до 400)

	element1.style.transition = "width 5s, height 6s"; // Плавна зміна розміру елементу 1
	element2.style.transition = "width 6s, height 5s"; // Плавна зміна розміру елементу 2

	element1.style.width = randomWidth1 + "px";
	element1.style.height = randomHeight1 + "px";
	element2.style.width = randomWidth2 + "px";
	element2.style.height = randomHeight2 + "px";
}

setInterval(moveElements, 20);
setInterval(changeGeometry, 3000); // Змінює геометрію кожні 3 секунди
