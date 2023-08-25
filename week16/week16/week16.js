//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById("practicum");

function makeOne() {
	const collection = document.forms.length;
	/* console.log("Количество форм на странице:", collection); */
	paragraph.innerText = `Количество форм на странице: ${collection}`;
	//Ваш код
}

document.querySelector(".b-1").onclick = makeOne;

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById("practicum2");
const form1 = document.forms[0];
const formname = form1.getAttribute("name");
function makeTwo() {
	/* console.log(formname); */
	paragraphTwo.innerText = formname;
	//Ваш код
}

document.querySelector(".b-2").onclick = makeTwo;

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById("practicum3");
const form4 = document.forms[3];
const formname4 = form4.getAttribute("name");
function makeThree() {
	/* 	console.log(formname4); */
	paragraphThree.innerText = formname4;
	//Ваш код
}

document.querySelector(".b-3").onclick = makeThree;

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById("practicum4");
const all_forms = document.forms;
let formNames = [];

function makeFour() {
	for (let i = 0; i < all_forms.length; i++) {
		const form = all_forms[i];
		const formName = form.getAttribute("name");
		formNames.push(formName);
	}
	const formNameString = formNames.join(", ");
	paragraphFour.innerText = formNameString;
	//Ваш код
}

document.querySelector(".b-4").onclick = makeFour;

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById("practicum5");
const form3 = document.forms.formThree; // Имя 3 формы из коллекции document.forms

function makeFive() {
	paragraphFive.innerText =
		"Количество элементов в форме: " + form3.elements.length;
}

document.querySelector(".b-5").onclick = makeFive;

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById("practicum6");
const form2 = document.forms.formTwo; // Имя 2 формы из коллекции document.forms

function makeSix() {
	paragraphSix.innerText =
		"Количество элементов в форме:" + form2.elements.length;
	//Ваш код
}

document.querySelector(".b-6").onclick = makeSix;

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById("practicum7");
const collection_of_all_forms = document.forms;
const the_second_form_in_the_collection = document.forms[1];
const collection_of_elements = the_second_form_in_the_collection.elements;
let elementsList = "";

function makeSeven() {
	for (let i = 0; i < collection_of_elements.length; i++) {
		elementsList += " -" + collection_of_elements[i].name; // Добавляем название элемента с дефисом перед ним
	}
	paragraphSeven.textContent = elementsList; // Выводим перечисление элементов на экран
}

document.querySelector(".b-7").onclick = makeSeven;

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById("practicum8");
const form_1 = document.forms;
const collection_form_1 = document.forms[0];
const collection_elements_form1 = collection_form_1.elements;
let elements_form1 = "";

function makeEight() {
	for (let i = 0; i < collection_elements_form1.length; i++) {
		elements_form1 += " -" + collection_elements_form1[i].name;
	}
	paragraphEight.textContent = elements_form1;
	//Ваш код
}

document.querySelector(".b-8").onclick = makeEight;

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById("practicum9");
const collection_form3 = document.forms[2];
const collection_elements_form3 = collection_form3.elements;
let elements_form3 = "";
function makeNine() {
	for (let i = 0; i < collection_elements_form3.length; i++) {
		elements_form3 += " -" + collection_elements_form3[i].name;
	}
	paragraphNine.textContent = elements_form3;
	//Ваш код
}

document.querySelector(".b-9").onclick = makeNine;

//Задание 10
//Выведите на экран значенеие radio кнопки четвёртой формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

const paragraphTen = document.getElementById("practicum10");
const collection_form4 = document.forms[3];
const collection_elements_form4 = collection_form4.elements;

function makeTen() {
	const radioValue = collection_elements_form4[0].value; //Получаем значение выбранной radio кнопки, которое хранится в свойстве value первого элемента collection_elements_form4[0]
	paragraphTen.innerHTML = radioValue; //Присваиваем полученное значение переменной radioValue
	//Ваш код
}

document.querySelector(".b-10").onclick = makeTen;

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById("practicum11");
const form_1_ = document.forms[0];
const elements_form_1_ = form_1_.elements;
let optionsValues = "";

function makeEleven() {
	for (let i = 0; i < elements_form_1_.length; i++) {
		optionsValues += elements_form_1_[i].value;
	}
	paragraphEleven.textContent = optionsValues;
}

document.querySelector(".b-11").onclick = makeEleven;

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

const paragraphTwelve = document.getElementById("practicum12");
const form = document.forms[1];
const checkboxes = form.elements;
let checkbox_form2 = " ";

function makeTwelve() {
	for (let i = 0; i < checkboxes.length; i++) {
		checkbox_form2 += " " + checkboxes[i].id;
	}
	paragraphTwelve.textContent = checkbox_form2;
}

document.querySelector(".b-12").onclick = makeTwelve;

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById("practicum13");
const form_4 = document.forms[3];
const form_4_ = document.querySelector(".fourthForm");

form_4_.addEventListener("submit", (event) => {
	event.preventDefault();
});

function checkButton(e) {
	const radioButton = form_4.elements[0];
	if (radioButton.checked) {
		paragraphThirteen.textContent = "Кнопка выбрана";
	} else {
		paragraphThirteen.textContent = "Кнопка не выбрана";
	}
}
//Ваш код

document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById("practicum14");
const forms1_ = document.forms[0];
const selectEl = forms1_.elements.firstSelect;
selectEl.selectedIndex = 1;

function checkOption() {
	const options = selectEl.value;
	if (options === "Опция 1") {
		paragraphFourteen.textContent = "Выбран первый вариант";
	} else if (options === "Опция 2") {
		paragraphFourteen.textContent = "selectedIndex: " + selectEl.selectedIndex;
	} else if (options === "Опция 3") {
		paragraphFourteen.textContent = "Выбран третий вариант";
	}
}

document.querySelector(".b-14").onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию
const practicum15 = document.getElementById("errorMessage");
const form_one = document.forms[0];
const select_1 = form_one.elements.firstSelect;
select_1.selectedIndex = 2;
const index_select = select_1.selectedIndex;
// Добавить данные в <p>

function makeFifteen() {
	practicum15.innerHTML = "selectedIndex: " + index_select;
	//Ваш код
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта
const forms_2 = document.forms[1];
const forms2_checkbox = forms_2.elements.checkboxThree;

function makeSixteen() {
	forms2_checkbox.checked = true;
	//Ваш код
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;
const form_input_name = formOne.elements.firstName;
const form_input_email = formOne.elements.firstEmail;
const form1_p = document.getElementById("errorMessage");

formOne.addEventListener("submit", function (event) {
	event.preventDefault(); //Отмена отправки
	if (!form_input_name.value && !form_input_email.value) {
		form1_p.innerHTML = "Вы не заполнили поля!";
	} else if (!form_input_name.value) {
		form1_p.innerHTML = "Вы не заполнили поле с именем!";
	} else if (!form_input_email.value) {
		form1_p.innerHTML = "Вы не заполнили поле с адресом почты!";
	} else {
		form1_p.innerHTML = ""; // очистка сообщения об ошибке
		formOne.submit(); // отправка формы, если все поля заполнены
	}

	//Ваш код
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки
const forms_one = document.forms[0];

forms_one.addEventListener("submit", function (event) {
	event.preventDefault(); //Отмена отправки
	//Ваш код
	forms_one.reset();
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor
const selectElement = document.querySelector("#firstSelect");

selectElement.onchange = function () {
	if (selectElement.value == "Опция 1") {
		document.querySelector("body").style.backgroundColor = "#92ee92";
	} else if (selectElement.value == "Опция 2") {
		document.querySelector("body").style.backgroundColor = "rgb(182 203 255)";
	} else if (selectElement.value == "Опция 3") {
		document.querySelector("body").style.backgroundColor = "rgb(255 232 171)";
	}
	// 	//Ваш код
};

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.
const forms_one_ = document.forms[0];
const emailInput = forms_one_.elements.firstEmail;
const errorMessage = document.getElementById("errorMessage");

emailInput.oninput = function () {
	let correctness = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$", "i");
	if (correctness.test(emailInput.value)) {
		emailInput.style.borderColor = "green";
		return true;
	} else {
		errorMessage.textContent = "Некорректный адрес электронной почты";
		emailInput.style.borderColor = "red";
		return false;
	}

	//Ваш код
};

//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector(".b-21").onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll(
		'input[type="checkbox"]'
	);
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {
		event.preventDefault();
		document.getElementById("result21").textContent =
			"Ошибка! Чекбокс не был нажат";
		//Ваш код
	} else {
		document.getElementById("result21").textContent = "Проверка пройдена";
	}
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
	const nameInput = document.forms.formThree.elements.thirdName;

	if (nameInput.value.trim() === "") {
		event.preventDefault();
		document.getElementById("result22").textContent =
			"Ошибка! Поле для имени не заполнено";
	} else {
		document.getElementById("result22").textContent = "Проверка пройдена";
	}
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
const button4 = document.querySelector(".b-13");

button4.addEventListener("change", function () {
	const i_want_to_register = document.forms[3].querySelector(".form__input");
	if (i_want_to_register.checked) {
		button4.disabled = false;
	} else {
		button4.disabled = true;
	}
});

//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"
//Подсказка: для установки атрибута используйте методы forEach и setAttribute

document.querySelector(".b-24").onclick = function () {
	const input_field = document.querySelectorAll("input");
	input_field.forEach(function (input) {
		input.setAttribute("placeholder", "Введите данные");
	});
};

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector(".b-25").onclick = function () {
	const inputs = document.querySelectorAll("input");

	inputs.forEach(function (input) {
		input.addEventListener("focus", function () {
			input.style.border = " #00ff00";
		});

		input.addEventListener("blur", function () {
			//Ваш код
			input.style.border = "black";
		});
	});
};

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").onclick = function (event) {
	event.preventDefault();
	let name_input = document.getElementById("thirdName").placeholder;
	document.getElementById("result26").innerHTML = name_input;
	//Ваш код
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");
const result_input = document.getElementById("result27");
formTwoInputs.forEach(function (input) {
	input.addEventListener("input", function () {
		result_input.innerText = "Изменение внесено";
		//Ваш код
	});
});

//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById("firstSelect");
const options_result = document.getElementById("result28");

selectFormThree.addEventListener("change", function () {
	options_result.innerHTML = "Опция выбрана";
	//Ваш код
});

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = form.elements.thirdName;
const emailInputThree = form.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
	event.preventDefault();

	if (nameInputThree.value && emailInputThree.value) {
		console.log(nameInputThree.value, emailInputThree.value);
		//Ваш код
	} else {
		console.log("Пожалуйста, заполните все поля формы.");
	}
}

formThree.addEventListener("submit", handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById("result30");

formTwo.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
	const selectedOptions = Array.from(checkboxes).map(
		(checkbox) => checkbox.labels[0].textContent
	);
	console.log(selectedOptions);
	//Ваш код
}
