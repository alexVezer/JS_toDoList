var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delButton = document.querySelectorAll("li > button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.innerText = "Delete";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
	this.addEventListener("click", removeLi);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markAsDone(event) {
	if(event.target && event.target.matches("li")) {
		event.target.classList.toggle("done");
		/*alert("clicked " + event.target.innerText);*/
}
}

function removeLi(event) {
	/*if(event.target && event.target.matches("li")) {*/
		console.log(event.target.parentNode);
		event.target.parentNode.remove();
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markAsDone);

for( var i=0;i<delButton.length;i++) {
	delButton[i].addEventListener("click", removeLi);
}