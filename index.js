const form_ = document.forms.formOne;
const button_sending = document.querySelector("#sending");
const checkboxes = document.forms.formOne.querySelector("#checkbox");
let errors = [];

form_.addEventListener("submit", function (event) {
	event.preventDefault();
});

function checkValidity(input) {
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
	const inputs = document.forms.formOne.querySelector("input");
	for (let input of inputs) {
		checkValidity(input);
	}
	if (checkboxes.checked) {
		checkboxes.classList.remove("error");
		document.querySelector("#age_error").textContent = "";
	} else {
		checkboxes.classList.add("error");
		errorMessage.textContent = "Чекбокс не выбран";
	}
}

function clearErrors() {
	document.querySelector("#age_error").textContent = "";

	const inputs = document.forms.formOne.querySelectorAll("input");
	inputs.forEach((input) => {
		input.classList.remove("error");
		input.style.border = "none";
	});
	checkboxes.classList.remove("error");
}

button_sending.addEventListener("click", function () {});
