const form_ = document.forms.formOne;
const button_sending = document.querySelector("#sending");
const inputs_ = document.forms.formOne.querySelector("input");
const checkboxes = document.forms.formOne.querySelector(
	'input[type="checkbox"]'
);
let errors = [];

form_.addEventListener("submit", function (event) {
	event.preventDefault();
});

inputs_.forEach(function (input) {
	for (let input of inputs) {
		validity_of_the_form(input);
	}
	let validity = input.validity;
	if (!validity.patternMismatch) {
		validity.classList.add("error");
		document.querySelector("#age_error").innerHTML = errors.validationMessage;
		validity.style.border = "1px solid red";
	}

	if (!validity.rangeOverflow) {
		let max = input.max;
		validity.classList.add("error");
		document.querySelector("#age_error").innerHTML =
			errors.validationMessage + max;
		validity.style.border = "1px solid red";
	}

	if (!validity.rangeUnderflow) {
		let min = input.min;
		validity.classList.add("error");
		document.querySelector("#age_error").innerHTML =
			errors.validationMessage + min;
		validity.style.border = "1px solid red";
	}
});
if (!checkboxes.checked) {
	checkboxes.classList.add("error");
	document.querySelector("#age_error").innerHTML = errors.validationMessage;
}

function clearErrors() {
	// Удаление классов ошибок у полей
	let errorFields = document.getElementsByClassName("error");
	while (errorFields.length > 0) {
		errorFields[0].classList.remove("error");
	}

	// Удаление классов ошибок у checkbox
	let checkboxes = document.getElementsByTagName("input");
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].type === "checkbox") {
			checkboxes[i].classList.remove("error");
		}
	}
}

button_sending.addEventListener("click", function () {
	console.log(input.value);
});
