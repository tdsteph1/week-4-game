//Global Variables
var targetNumber = generateRandomNum();									//invoke function to call a random number 19 to 120

var counter = 0;														//use for a funning sum to keep track of crystal score
var wins = 0;															//keep track of total wins when we get the right number
var loses = 0;															//keep track of loses when we go over the righ number

var param1 = 0;
var param2 = 0;
var param3 = 0;
var param4 = 0;

     


//Create an array with 4 values associated with crystal score clicks.
//Note: You must have 4 random values for each crystal (1-12)
var val1 = generateCrystalRandomValue();
var val2 = generateCrystalRandomValue();
var val3 = generateCrystalRandomValue();
var val4 = generateCrystalRandomValue();

var numberOptions = [val1, val2, val3, val4];							//Array contains 4 random element(integers)

var imageCrystal;														//Global because of the reset() in order to regenerate 4 random values



$("#randomNum").text(targetNumber);




	//Create for-loop with 4 iterations to display 4 images harizontally & store each of the 4 random values(val1-val4) to crystal image
	for(var i = 0; i < numberOptions.length; i++)
	{
	
		//for each iteration we will create an imageCrystal
		 imageCrystal = $("<img>")												//NOTE: use id= pic + i per iteration appending each iterator i to reset attribute using this <img id> method to save us lines of code

		//Each crystal(imageCrystal) will be given the class ".crystal-image"
		//this will allow css to take affect & assign class name to each <img>
		imageCrystal.addClass("crystal-image");

		//Each image crystal will be given a src link to the crystal image
		//NOTE: assign 4 different src's of 4 different crystal images.
		if(i === 0)
		{
			imageCrystal.attr("src", "http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/e9f7d21f0df7f4260bb7ffa71ee478fd67cceb09/04-jquery/02-Homework/Instructions/Images/blue.png");
			imageCrystal.attr("data-crystalvalue1", numberOptions[i]);			//NOTE: Reason for using 4 attributes so we can store the (this) object of a particular imaged clicked and have
			//imageCrystal.addClass("crystal-image");							//data-crystal1 generate another random value for (data-crystal1) each time win(reset) or lose(reset)

		}
		else if(i === 1)
		{
			imageCrystal.attr("src", "http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/e9f7d21f0df7f4260bb7ffa71ee478fd67cceb09/04-jquery/02-Homework/Instructions/Images/green.png");
			imageCrystal.attr("data-crystalvalue2", numberOptions[i]);			//NOTE: Reason for using 4 attributes so we can store the (this) object of a particular imaged clicked and have
			//imageCrystal.addClass("crystal-image");							//data-crystal1 generate another random value for (data-crystal1) each time win(reset) or lose(reset)
			

		}
		else if(i === 2)
		{
			imageCrystal.attr("src", "http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/e9f7d21f0df7f4260bb7ffa71ee478fd67cceb09/04-jquery/02-Homework/Instructions/Images/red.png");
			imageCrystal.attr("data-crystalvalue3", numberOptions[i]);			//NOTE: Reason for using 4 attributes so we can store the (this) object of a particular imaged clicked and have
			//imageCrystal.addClass("crystal-image");							//data-crystal1 generate another random value for (data-crystal1) each time win(reset) or lose(reset)
										

		}
		else if(i === 3)
		{
			imageCrystal.attr("src", "http://ua.bootcampcontent.com/UA-Coding-Bootcamp/07-2017-Class-Repository-FSF/raw/e9f7d21f0df7f4260bb7ffa71ee478fd67cceb09/04-jquery/02-Homework/Instructions/Images/yellow.png");
			imageCrystal.attr("data-crystalvalue4", numberOptions[i]);			//NOTE: Reason for using 4 attributes so we can store the (this) object of a particular imaged clicked and have
			//imageCrystal.addClass("crystal-image");							//data-crystal1 generate another random value for (data-crystal1) each time win(reset) or lose(reset)
			

		}

		//Each imageCrystal will be given a data attribute called data-crystalValue.
		//This data attribute will be set euqal to the array value.
			//imageCrystal.attr("data-crystalvalue", numberOptions[i]);

		//Lastly, each crystal image (with all of its classes & attributes) will get added onto the page
		$("#crystals").append(imageCrystal);



	}




	





//This time, our click event applies to every single crystal
$(".crystal-image").on("click", function()								//NOTE: Each "data-crystalvalue" attribute has its own version of $(.crystal-image).on("click" funciont() method.
{

	//Determining the crystal's value requires us to extract the value from the data attribue.
	//using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
	//Using the .attr("data-crystalvalue") allows us to grab the value since attributes on HTML elements are strings,
	//we must convert it to an integer before adding to the counter.
    //TRY: clicking image 1 and use console.log($(this).attr("data-crystalvalue2") = udefined to see results.

	if($(this).attr("data-crystalvalue1") != undefined)					//If image 1 gets clicked on then set global variable param1(initally 0) = object(this). param1(this) will be passed into the 
	{																	//reset(param1, param2, param3, param4) function to generate a random value when counter == targetNumber OR counter > targetNumber
																		//for each time we click on (image1).
			
		var crystalValue = ($(this).attr("data-crystalvalue1"));		//stores attribte(data-crystalvalue) with relation to image that is clicked
		crystalValue = parseInt(crystalValue);							//converts it from string to int

		param1 = $(this);


	}
	else if($(this).attr("data-crystalvalue2") != undefined)			//If image2 gets clicked on then set global variable param2(initally 0) = object(this). param1(this) will be passed into the 
	{																	//reset(param1, param2, param3, param4) function to generate a random value when counter == targetNumber OR counter > targetNumber
																		//for each time we click on (image2).
		
			
		var crystalValue = ($(this).attr("data-crystalvalue2"));		//stores attribte(data-crystalvalue) with relation to image that is clicked
		crystalValue = parseInt(crystalValue);							//converts it from string to int

		param2 = $(this);

	}
	else if($(this).attr("data-crystalvalue3") != undefined)			//If image3 gets clicked on then set global variable param3(initally 0) = object(this). param1(this) will be passed into the 
	{																	//reset(param1, param2, param3, param4) function to generate a random value when counter == targetNumber OR counter > targetNumber
																		//for each time we click on (image3).
		
		var crystalValue = ($(this).attr("data-crystalvalue3"));		//stores attribte(data-crystalvalue) with relation to image that is clicked
		crystalValue = parseInt(crystalValue);							//converts it from string to int

		param3 = $(this);

	}
	else if($(this).attr("data-crystalvalue4") != undefined)			//If image 4 gets clicked on then set global variable param4(initally 0) = object(this). param1(this) will be passed into the 
	{																	//reset(param1, param2, param3, param4) function to generate a random value when counter == targetNumber OR counter > targetNumber
																		//for each time we click on (image4).

		var crystalValue = ($(this).attr("data-crystalvalue4"));		//stores attribte(data-crystalvalue) with relation to image that is clicked
		crystalValue = parseInt(crystalValue);							//converts it from string to int

		param4 = $(this);

	}
		
		//use if else to see which crystal gets clicked on then pass in the $(this) setting a new random number

		
		


		
	//We then add crystal value to the user's "counter" which is a global variable. 
	//Every click from every crystal adds to the global counter
	counter = counter + crystalValue;

	//Store current total score inside <span id="tatalScore"> inside <div> container
	$("#totalScore").text(counter);

	//If user wins increment win then reset some global variables 
	//else incrments lose then reset some global variables
	if(counter === targetNumber)
	{
		
	
		wins++;
		$("#totalWin").text(wins);
		reset(param1, param2, param3, param4);


		//imageCrystal.attr("data-crystalvalue1", 1);
		//imageCrystal.attr("data-crystalvalue2", 1);
		//imageCrystal.attr("data-crystalvalue3", 1);
		//imageCrystal.attr("data-crystalvalue4", 1);
		
		
	}
	else if(counter > targetNumber)
	{
		
		
		loses++;
		$("#totalLose").text(loses);
		reset(param1, param2, param3, param4);

		//$(this).attr("data-crystalvalue", val1);

		//imageCrystal.attr("data-crystalvalue1", 1);
		//imageCrystal.attr("data-crystalvalue2", 1);
		//imageCrystal.attr("data-crystalvalue3", 1);
		//imageCrystal.attr("data-crystalvalue4", 1);
		
		
	}




});






//Function1
function generateRandomNum()
{
	var num = Math.floor((Math.random() * 102) + 19);
	return num;
}

//Function2
function generateCrystalRandomValue()
{
	var val = Math.floor((Math.random() * 12) + 1);
	return val;
}

//Function3
function reset(cryst1, cryst2, cryst3, cryst4)
{
	
	console.log(cryst1);
	console.log(cryst2);
	console.log(cryst3);
	console.log(cryst4);

	//Reset counter & regenerate random number to try to win and 4 random values associated with each image click score
	counter = 0;
	$("#totalScore").text(counter);

	targetNumber = generateRandomNum();

	 val1 = generateCrystalRandomValue();
	 val2 = generateCrystalRandomValue();
	 val3 = generateCrystalRandomValue();
	 val4 = generateCrystalRandomValue();

	 numberOptions = [val1, val2, val3, val4];	

	 param1 = 0;
	 param2 = 0;
	 param3 = 0;
	 param4 = 0;

	//Display next Target Random Number
	$("#randomNum").text(targetNumber);		

	
	//In order for this to work we only use the parameters that contains $(this) because say
	//if a paramter didn't store a $(this) then you cannot invoke a (.attr) method it one
	//of the parameters (cryst1, cryst2, cryst3, cryst4) is blank. Remember we're passing in a
	//(this) object and there's no guarantee that all cryst parameters equal to an object of a
	//partiscular this(imagecrystal1 imagecrystal2, imagecrystal3, imagecrystal4)
	
	if(cryst1 != 0)
	{

		cryst1.attr("data-crystalvalue1", numberOptions[0]);										//Initaially params(passed to cryst params) are 0 and if we click on image 1 then cryst = this object
	}
	if(cryst2 != 0)
	{
		cryst2.attr("data-crystalvalue2", numberOptions[1]);
	}
	if(cryst3 != 0)
	{
		cryst3.attr("data-crystalvalue3", numberOptions[2]);
	}
	if(cryst4 != 0)
	{
		cryst4.attr("data-crystalvalue4", numberOptions[3]);
	}
	
	
	
	




	

	
	


}
		
	

	

