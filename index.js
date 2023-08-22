const form_ = document.forms.formOne;
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
});
