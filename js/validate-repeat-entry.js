
//LAB 5

var miles;
var gallons;
var mpg;
var again = "y";
// 
do {
    miles = window.prompt("Enter miles driven");
    miles = parseFloat(miles);
    gallons = window.prompt("Enter gallons of gas used");
    gallons = parseFloat(gallons);
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        mpg = parseInt(mpg, 10);
        window.document.write("Miles per gallon: " + mpg);
    } else {
        window.alert("One of both entries are invalid.");
    }
    again = window.prompt("Do you want to run the application again? (y or n)", "y");
    if (again !== "y" && again !== "n") {
        prompt("Do you want to run the application again (y/n");
    }
} while (again === "y");

// There’s a line of code in lab 5 that asks the user if they want to repeat their entry. The 
//code resembled the image outlined below.  

        // again = prompt('Do you want to run the application again? (y or n)') 

// Your job in this part of the assignment is to validate that entry. If it’s anything other 
//than “y” or “n”, the prompt should simply reappear until the user enters a valid entry. 


// Validate Numeric Entries in Lab 6 (Extra Credit 5 points)

// There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. The code resembled the image outlined below.  

        // investment = parseFloat(prompt('How much do you want to invest?'))
        // rate = parseFloat(prompt('Enter interest rate as xx.x'))
        // years = parseInt(prompt('How many years do you want to invest for?'))

// Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.




// 
// 
// LAB 6
// /*eslint-env browser*/
// 
// var miles;
// var gallons;
// var mpg;
// var again = "y";
// 
// do {
    // miles = window.prompt("Enter miles driven");
    // miles = parseFloat(miles);
    // gallons = window.prompt("Enter gallons of gas used");
    // gallons = parseFloat(gallons);
    // if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        // mpg = miles / gallons;
        // mpg = parseInt(mpg, 10);
        // window.document.writeln("Miles per gallon: " + mpg);
    // } else {
        // window.alert("One of both entries are invalid.");
    // }
    // again = window.prompt("Repeat entries? (y or n)", "y");
// } while (again === "y");