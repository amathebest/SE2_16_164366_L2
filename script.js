var maxItemNumb = 30; //Actual maximum number of items
var totalQuantity = 0; //Actual total quantity of items that are in the table
var arrayItems = []; //Actual names of items that are in the table. Will be used to check if an inserted item is already in the table.

//Function that sets the maximum number of items that can be inserted in the table, taken from the input field next to it.
function defineMaxItem() {
	var tempMaxNumb = document.getElementById("maxItems").valueAsNumber;
	maxItemNumb = tempMaxNumb;
	if (maxItemNumb > totalQuantity) {
		document.getElementById("maxItemNumber").innerHTML = maxItemNumb;
	} else {
		alert("You already have more items than the number inserted!");
		document.getElementById("maxItems").value = "";
	}
}

//Function that shows the dialog box in which the items can be inserted. Also checks the maximum number of items.
function addItem() {
	if (maxItemNumb > totalQuantity) {
		document.getElementById("adder").style.display = "block";
	} else {
		alert("Max item number reached!");
	}
}

//Function that confirms the insertion of an item into the table. Checks if the maximum number of items is not violated,
//inserts the item in the table and, if the item is already in the table, only updates the quantity.
function insertItem() {
	var itemName, itemQuantity;
	itemName = document.getElementById("name").value;
	itemQuantity = document.getElementById("quantity").valueAsNumber;
	
	if (maxItemNumb >= totalQuantity + itemQuantity) {
		var cose = arrayItems.indexOf(itemName);
		
		if (cose < 0) {
			var row = document.createElement("TR");
			var nameInserted = document.createElement("TD");
			nameInserted.innerHTML = itemName;
			var quantityInserted = document.createElement("TD");
			quantityInserted.innerHTML = itemQuantity;
			
			row.appendChild(nameInserted);
			row.appendChild(quantityInserted);
			
			document.getElementById("items").appendChild(row);
			
			arrayItems.push(itemName);
		} else {
			var myTable = document.getElementById("items");
			var myRow = parseInt(myTable.getElementsByTagName('TR')[cose+1].getElementsByTagName('TD')[1].innerHTML);
			var actualQuantity = myRow + itemQuantity;
			myTable.getElementsByTagName('TR')[cose+1].getElementsByTagName('TD')[1].innerHTML = actualQuantity;
		}
		totalQuantity += itemQuantity;
		document.getElementById("name").value = "";
		document.getElementById("quantity").value = "";
			
		document.getElementById("adder").style.display = "none";
	} else {
		alert("Max item number reached!");
	}
}