//Utility function
//A simple random number generator
$(document).ready(function(){

	$("#alertButton").on('click', function(event){
		//make it alert randomAge + randomSex + randomWeight
		$("#anotherButton").children().remove();
		var myPerson = personFactory();
		$("#anotherButton").prepend('<p>And they weigh a SHOCKING ' + myPerson.randomWeight + ' lbs.</p>');
		$("#anotherButton").prepend('<p> They are also a ' + myPerson.randomSex + '.</p>');
		$("#anotherButton").prepend('<p>' + myPerson.randomName + ' ' + myPerson.randomLastName + ' is ' + myPerson.randomAge + ' years old.</p>');
	});
});
function Person(randomAge, randomSex, randomWeight, randomName, randomLastName){
	this.randomAge = randomAge;
	this.randomSex = randomSex;
	this.randomWeight = randomWeight;
	this.randomName = randomName;
	this.randomLastName = randomLastName;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function personFactory (argument) {
	// body...
	var randomAge = randomNumber(1, 100);
	var randomSex = randomNumber(0, 1);
	var randomWeight = randomNumber(1, 100);
	var randomName = randomNumber(0, 100);
	var femaleArray = ["Tina", "Sara", "Allison", "Sapphire", "Candy"];
	var maleArray = ["Bert", "Ted", "Jerome", "Warren", "Steve"];
	var lastNameArray = ["Sheckler", "Chipperson", "Hughes", "Bennet", "Fergurson"];
	var randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
	if (randomSex == 0){
		randomSex = "Male";
	} else {
		randomSex = "Female";
	}

	if (randomSex == "Male"){
		randomName = maleArray[Math.floor(Math.random() * maleArray.length)];
	} else {
		randomName = femaleArray[Math.floor(Math.random() * femaleArray.length)];

	}
	return new Person(randomAge, randomSex, randomWeight, randomName, randomLastName);
}









