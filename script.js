var maxItemNumb = 30;
var totalQuantity = 0;

function defineMaxItem() {
	var tempMaxNumb = document.getElementById("maxItems").valueAsNumber;
	maxItemNumb = tempMaxNumb;
	if (maxItemNumb > totalQuantity) {
		document.getElementById("maxItemNumber").innerHTML = maxItemNumb;
	} else {
		alert("You already have more items than the number inserted!");
	}
}

function addItem() {
	if (maxItemNumb > totalQuantity) {
		document.getElementById("adder").style.display = "block";
	} else {
		alert("Max item number reached!");
	}
}

function insertItem() {
	var itemName, itemQuantity;
	itemName = document.getElementById("name").value;
	itemQuantity = document.getElementById("quantity").valueAsNumber;
	
	if (maxItemNumb >= totalQuantity + itemQuantity) {
		var row = document.createElement("TR");
		var nameInserted = document.createElement("TD");
		nameInserted.innerHTML = itemName;
		var quantityInserted = document.createElement("TD");
		quantityInserted.innerHTML = itemQuantity;
		
		row.appendChild(nameInserted);
		row.appendChild(quantityInserted);
		
		document.getElementById("items").appendChild(row);
		
		totalQuantity += itemQuantity;
		document.getElementById("name").value = "";
		document.getElementById("quantity").value = "";	
		
		document.getElementById("adder").style.display = "none";
	} else {
		alert("Max item number reached!");
	}
}