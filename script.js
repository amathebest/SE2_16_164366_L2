var maxItemNumb = 30;
var totalQuantity = 0;

function defineMaxItem() {
	var tempMaxNumb = document.getElementById("maxItems").valueAsNumber;
	maxItemNumb = tempMaxNumb;
	document.getElementById("maxItemNumber").innerHTML = maxItemNumb;
}
	
function addItem() {
	if (maxItemNumb > totalQuantity) {
		document.getElementById("adder").style.display = "block";
	} else {
		alert("Max item number reached!");
	}
}