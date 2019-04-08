function but1_onclick() {
	let text1 = document.getElementById('text1');
	text1.innerText = 'Привет';
}

function but2_onclick() {
	let oldElement = document.getElementById('text2');
	let newElement = document.createElement('h3');
	newElement.innerHTML = oldElement.innerHTML;
	oldElement.replaceWith(newElement);
}

function but3_onclick() {
	let ul = document.getElementById('ul3');
	let listElements = ul.getElementsByTagName('li');
	for (let i = 0; i < listElements.length; i++) {
		listElements[i].innerText = 'list' + (i + 1);
	}
}

function but4_onclick(opType) {
	let num1 = +document.getElementById('num1').value; //
	let num2 = +document.getElementById('num2').value; //
	let res;
	switch (opType) {
		case 1:
			res = num1 + num2;
			break;
		case 2:
			res = num1 - num2;
			break;
		case 3:
			res = num1 * num2;
			break;
		case 4:
			res = num1 / num2;
			break;
	}
	document.getElementById('res').innerText = res;
}

function but5_onclick(opType) {
	let oldLi = document.getElementById('list');
	let newLi = document.createElement('li');
	newLi.innerText = 'Первый элемент списка';
	oldLi.parentNode.insertBefore(newLi, oldLi);

}

function but6_onclick(opType) {

	let task6 = document.getElementById('task6');

	let board = document.createElement('div');
	board.classList.add('board');
	for (let i = 0; i < 8; i++) {
		for (let k = 0; k < 8; k++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.classList.add((i % 2 == 0) ^ (k % 2 == 0) ? 'white' : 'black');
			board.appendChild(cell);
		}
	}
	let clrfix = document.createElement('div');
	clrfix.classList.add('clrfix');
	board.appendChild(clrfix);
	task6.appendChild(board);
}
