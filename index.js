// Находим форму на странице по ее идентификатору
const form = document.querySelector("#registrationForm");

// Добавляем обработчик события на отправку формы
form.addEventListener("submit", function (event) {
	// Отменяем стандартное действие браузера при отправке формы
	// Это предотвратит перезагрузку страницы
	event.preventDefault();

	// Получаем все элементы ввода и выпадающие списки из формы
	const inputs = form.querySelectorAll("input, select");

	// Переменная, которая будет хранить информацию о том, валидна ли форма
	let isValid = true;

	// Очистка ошибок:
	// Проходим по всем элементам ввода
	inputs.forEach((input) => {
		// Удаляем класс ошибки (если он был)
		input.classList.remove("error");
		// Очищаем сообщение об ошибке (если оно было)
		input.nextElementSibling.textContent = "";
	});

	// Валидация полей:
	// Проходим по всем элементам ввода
	inputs.forEach((input) => {
		// Если текущий элемент ввода не проходит валидацию
		if (!input.checkValidity()) {
			// Добавляем класс ошибки для этого элемента
			input.classList.add("error");
			// Отображаем сообщение об ошибке
			input.nextElementSibling.textContent = input.validationMessage;
			// Устанавливаем флаг валидации в false
			isValid = false;
		}
	});

	// Валидация совпадения паролей:
	// Сравниваем значения полей пароля и подтверждения пароля
	if (form.password.value !== form["confirm-password"].value) {
		// Если пароли не совпадают, добавляем класс ошибки к полю подтверждения
		form["confirm-password"].classList.add("error");
		// Отображаем сообщение об ошибке
		form["confirm-password"].nextElementSibling.textContent =
			"Пароли не совпадают";
		// Устанавливаем флаг валидации в false
		isValid = false;
	}

	// Если все поля формы валидны
	if (isValid) {
		// Выводим в консоль сообщение об успешной валидации
		console.log("Форма валидна!");

		// Очищаем форму
		form.reset();
	}
});

/* const form_ = document.forms.formOne;
const button_sending = document.querySelector("#sending");
const checkboxes = document.forms.formOne.querySelector("#checkbox");
const erorr = document.querySelector("#age_error");
const input_form = document.forms.formOne.querySelectorAll("input");
let errors = [];

function checkValidity(input) {
	let validit = input.validity;
	if (validit.patternMismatch) {
		input_form.classList.add("error");
		input_form.innerHTML = validit.validationMessage + "ошибка";
		input_form.style.borderColor = "red";
	}

	if (validit.rangeOverflow) {
		let max = input.max;
		input_form.classList.add("error");
		input_form.innerHTML = validit.validationMessage + max + "ошибка";
		input_form.style.border = "1px solid red";
	}

	if (validit.rangeUnderflow) {
		let min = input.min;
		input_form.classList.add("error");
		input_form.innerHTML = validit.validationMessage + min + "ошибка";
		input_form.style.border = "1px solid red";
	}
	if (checkboxes.checked) {
		checkboxes.classList.remove("error");
		erorr.textContent = "";
	} else {
		checkboxes.classList.add("error");
		erorr.textContent = "Чекбокс не выбран";
	}
}

function checkAll() {
	input_form.forEach(function (input) {
		checkValidity(input);
	});
}

function clearErrors() {
	erorr.textContent = "";
	input_form.forEach((input) => {
		input.classList.remove("error");
		input.style.border = "none";
	});
	checkboxes.classList.remove("error");
}

button_sending.addEventListener("click", function (event) {
	event.preventDefault();
	checkAll();
	clearErrors();
	checkValidity(input);
}); */
