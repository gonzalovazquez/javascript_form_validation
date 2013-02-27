/**
 * @author Gonzalo Vazquez
 */
console.log("Hello from Validation.js");



//Main function that runs when the user presses SUBMIT
function validateForm(){

//Store the user input into variables
var name = document.getElementById('fname');
var address = document.getElementById('address');
var city = document.getElementById('city');
var province = document.getElementById('province');
var postal = document.getElementById('postal');
var phone = document.getElementById('phone');
var small = document.getElementById('small');
var medium = document.getElementById('medium');
var large = document.getElementById('large');


//Checking for empty fields
checkEmpty(name,"Please put your name");
checkEmpty(address, "Please put your address");
checkEmpty(city, "Please put your city");
checkEmpty(province, "Please put your province")
checkEmpty(postal, "Please put your postal code");
checkEmpty(phone, "Please put your phone number");

//Check syntax of postal code
checkPostal(postal,"Please put the correct format of the postal code");

//Check telephone
checkPhone(phone, "Please put the correct format for your telephone");

//Check to see if size if any selected
checkSize(small, "Please select at least one size");
checkSize(medium, "Please select at least one size");
checkSize(large, "Please select at least one size");

}
//Reset form



//We write a function to see that fields arent empty.
// The function checkEmpty we can pass it an element 
// and a message to display if the value is empty
function checkEmpty(elem, message)
{
	console.log(elem.value);
	if(elem.value.length == 0){
		alert(message);
		elem.focus();
		return false;
	}
	return true;
}

function checkPostal(elem, message){
	var regexp = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
	if(regexp.test(elem.value) == true)
	{
		return true;
		console.log("Good Postal Code");
	}else{
		alert(message);
		console.log("Bad Postal Code");
		return false;
	}	
}

function checkPhone(elem, message){
	var regexp = new RegExp([0-9]);
	if(regexp.test(elem.value) == true)
	{
		return true;
		console.log("Good Telephone");
	}else{
		console.log("Bad Telephone");
		alert(message);
		return false;
	}
}

function checkSize(elem, message){
		if(elem.checked){
			return true;
		}else{
			alert(message);
			return false;
		}
}


function clearForm(){
	console.log("Pressed clear");
	var inputs = document.getElementsByTagName("input");
	for(var i =0; i < inputs.length; i++)
	{
		inputs[i].value = "";
		inputs[i].checked = false;
	}


}