var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("c-list");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//2nd comment start

var button2 = document.getElementById("enter2");
var input2 = document.getElementById("userinput2");
var ul2 = document.getElementById("c-list2");


function inputLength2() {
	return input2.value.length;
}

function createListElement2() {
	var li2 = document.createElement("li");
	li2.appendChild(document.createTextNode(input2.value));
	ul2.appendChild(li2);
	input2.value = "";
}
function addListAfterClick2() {
	if (inputLength2() > 0) {
		createListElement2();
	}
}

function addListAfterKeypress2(event) {
	if (inputLength2() > 0 && event.keyCode === 13) {
		createListElement2();
	}
}

button2.addEventListener("click", addListAfterClick2);

input2.addEventListener("keypress", addListAfterKeypress2);

//2nd comment end

//1st comment start

var button1 = document.getElementById("enter1");
var input1 = document.getElementById("userinput1");
var ul1 = document.getElementById("c-list1");


function inputLength1() {
	return input1.value.length;
}

function createListElement1() {
	var li1 = document.createElement("li");
	li1.appendChild(document.createTextNode(input1.value));
	ul1.appendChild(li1);
	input1.value = "";
}
function addListAfterClick1() {
	if (inputLength1() > 0) {
		createListElement1();
	}
}

function addListAfterKeypress1(event) {
	if (inputLength1() > 0 && event.keyCode === 13) {
		createListElement1();
	}
}

button1.addEventListener("click", addListAfterClick1);

input1.addEventListener("keypress", addListAfterKeypress1);