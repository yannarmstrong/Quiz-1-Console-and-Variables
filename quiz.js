const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
console.log("Welcome to Yann's Fahrenheit to Celsius temperature converter.");
f=prompt("What is the temperature in Fahrenheit? ");
console.log("Here is the temperature in Celcius:",(f-32)*5/9);
//Program 2: Grade Calculator
console.log("Welcome to Yann's grade calculator.")
Grade=prompt("What is your current grade? (Just the number) ")
if (90<=Grade){
    grade="A";
    console.log("You have an", grade);
}
else if (80<=Grade<=89){
    grade="B";
    console.log("You have a", grade);
}
else if (70<=Grade<=79){
    grade="C";
    console.log("You have a", grade);
}
else if (60<=Grade<=69){
    grade="D";
    console.log("You have a", grade);
}
else {
    grade="F";
    console.log("You have a", grade);
}
//Program 3: Leap Year Checker

//Program 4: Largest Number Finder
