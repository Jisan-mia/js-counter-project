const counterValue = document.getElementById("counter-value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		const btnClass = e.target.classList;
		if (btnClass.contains("increase")) {
			count++;
		} else if (btnClass.contains("decrease")) {
			count--;
		} else if (btnClass.contains("reset")) {
			count = 0;
		}

		//set the color of counterValue to green when count is above 0 and red when count is less than 0;

		if (count > 0) {
			counterValue.style.color = "green";
		}
		if (count < 0) {
			counterValue.style.color = "red";
		}
		if (count === 0) {
			counterValue.style.color = "black";
		}

		counterValue.innerText = count;
	});
});
