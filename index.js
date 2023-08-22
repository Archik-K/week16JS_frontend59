const form_ = document.forms.formOne;
const button_sending = document.querySelector("#sending");
const checkboxes = document.forms.formOne.querySelector("#checkbox");
const erorr = document.querySelector("#age_error");
let inputs = document.querySelectorAll("input");
let errors = [];

form_.addEventListener("submit", function (event) {
	event.preventDefault();
});

function checkValidity(input) {
	let validity = input.validity;
	if (validity.patternMismatch) {
		validity.classList.add("error");
		erorr.innerHTML = validity.validationMessage + "ошибка";
		validity.style.border = "1px solid red";
	}

	if (validity.rangeOverflow) {
		let max = input.max;
		validity.classList.add("error");
		erorr.innerHTML = validity.validationMessage + max + "ошибка";
		validity.style.border = "1px solid red";
	}

	if (validity.rangeUnderflow) {
		let min = input.min;
		validity.classList.add("error");
		erorr.innerHTML = validity.validationMessage + min + "ошибка";
		validity.style.border = "1px solid red";
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
	inputs.forEach(function (input) {
		checkValidity(input);
	});
}

function clearErrors() {
	erorr.textContent = "";
	const inputs = document.forms.formOne.querySelectorAll("input");
	inputs.forEach((input) => {
		input.classList.remove("error");
		input.style.border = "none";
	});
	checkboxes.classList.remove("error");
}

button_sending.addEventListener("click", function () {
	checkAll();
	clearErrors();
	checkValidity();
});
