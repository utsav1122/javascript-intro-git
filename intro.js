// String in JS :
//In JavaScript, Strings are values made up of text and can contain letters, numbers, symbols, punctuation, and even emojis!

// Numbers in JS :
// Numbers are values that can be used in mathematical operations. You don’t need any special syntax for numbers — just write them straight into JavaScript.

// Booleans :
// In JavaScript, a boolean value is one that can either be TRUE or FALSE. If you need to know “yes” or “no” about something, then you would want to use the boolean function. It sounds extremely simple, but booleans are used all the time in JavaScript programming, and they are extremely useful. Anything that needs to be “on” or “off”, “yes” or “no”, “true” or “false”, or which just has a temporary purpose, is usually a good fit for booleans.

// Operators :
// Operators are the symbols between values that allow different operations like addition, subtraction, multiplication, and more.

// Variables :
// Variables are named values and can store any type of JAVA SCRIPT value

// Function :
// JAVA SCRIPT function are reusable blocks of code that perform a specific task , taking some from of input and returning the output

// Conditionals :
// Conditional statements control behaior in JS and determine whether or not pieces of code can run . There are multiple differnt types of conditional in JS

// Array :
// Arrays are container-like values that can hold other values. The values inside an array are called elements.
// Array elements don’t all have to be the same type of value. Elements can be any kind of JavaScript value — even other arrays.

// Objects :
// JS Objects are variavles that contain multiple data  values The value within a JS objects are known as properties. Object use keys to name values , much like how  is done with variables.

// Local Scope and function
function myLocalScope(){
    var myVar = 10;
    console.log(myVar);
}
myLocalScope();

// Local and Global Scope 
var outerwear = "T-Shrit";
function myOutfit(){
    var outerwear = "Shirt"
    return outerwear;
}
console.log(outerwear);

// Return a value of a function with a function 
function minusFive(sum){
    return sum  -5;
}
console.log(minusFive(20) );


function timesFive(num){
    return num*5;
}
console.log(timesFive(6));

// Understanding undefined value Returned from a function
//var sum = 100;
function  addFive(){
  //sum = sum + 10;
  sum =+10;
}
 console.log(addFive(2));

 // Assinment with returned value
var changed = 100;
function change(num){
    return(num+6)/2
}
changed = change(10);
console.log(changed);

var processed = 0;
function processArg(num){
    return(num+10)/5;
}
processed = processArg(6);
console.log(processed);
  
// Stand Line 
function nextInLine(arr,item){
    return arr.shift(item);
    arr.push(item);
} 
var testArr = [1,2,3,4,5];
console.log("Before:",JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:",JSON.stringify(testArr));

// Boolean value (A data type im JS);
function welcometoBooleans(){
    return false;
}
console.log(welcometoBooleans);

function ourTrueorFalse(isitTrue){
    if(isitTrue){
        return "Yes it is true";
    }
    return "No it is false";
}
console.log(ourTrueorFalse(false));


function trueorfalse(wasthatTrue){
   if(wasthatTrue){
    return "Yes that was true";
   }
   return "No that was false";
}
console.log(trueorfalse(true));

// Comparison with equality Operator 
function testequal(val){
    if(val==12){
        return "equal";
    }
    return "Not equal";
}

console.log(testequal(12));

// Comparison with the strcit equality Oprator
function testStrict(val){
    if(val===10){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

function testStrict(val){
    if(val===10){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict('10'));

// Practice Comparing Diffenrt values 
function compareEuality(a,b){
    if(a==b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEuality(10,'10'));

// Comparison with the Inequality Operator
// Setup 
function testnotequal(val){
    if(val !==10){
        return "Not equal";
    }
    return "equal"
}
console.log(testnotequal(10));

function testnotequal(val){
    if(val !==10){
        return "Not equal";
    }
    return "equal"
}
console.log(testnotequal('10'));

// Comparison with the Strict Inequaltiy Operator
function  testStrictNotEqual(val){
    if(val !==70){
        return "Not equal";
    }
    return "equal";
}
console.log(testStrictNotEqual(70));

// Comparison with the logical and operator 
function testGreaterthen(val){
    if(val>100){
        return "more than 100";
    }
    return "less than 100";
}
console.log(testGreaterthen(10000));

//Comparison with the less than oprator 
function testlessthan(val){
    if(val<25){
        return "less than 25 ";
    }
    if(val<55){
    return "less than 55"
    }
    return "55 or over"
}
console.log(testlessthan(10));

// Comparison with the less than or equal to operator 
function testlessthanorequal(val){
    if(val<=12){
        return "smaller than or equal to 12"
    }
    if(val<=24){
        return "smaller than or equal to 24"
    }
    return "more than 24"
}
console.log(testlessthanorequal(10));

// Comparison with the logical and Operator
function testLogicalAnd(val){
    if(val<=15 && val>=25){
        return "Yes"
    }
    return "No"
}
console.log(testLogicalAnd(20));

// Comparison with the Logical or Operator
function testLogicalOr(val){
    if(val<10 || val>20){
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(50));

// Else Statment 
function testElse(val){
    var result = ""
    if(val<5){
        result ="Bigger than 10"
    } else{
        result ="5 or smaller "
    }
    return result ;
}
console.log(testElse(5));

// Else if Statement
function testElseIf(val){
    if(val>10){
        return "Greater than 10"
    } else if(val<5){
        return "Smaller than 5"
    } else{
        return "Between 5 or 10"
    }
}
console.log(testElseIf(6));

// Logical Order in IF Else Statement
function orderMyLogical(val){
    if(val<5){
        return "Less than 5";
    } else if (val<10){
        return "Less than 10";
    } else {
        return "Greater than or equal to 10"
    }
}
console.log(orderMyLogical(5));

// Chaining IF ELSE statement
function testSize(num){
    if(num<5){
        return "UTSAV";
    }else if(num<10){
        return "Small"
    } else if(num<15){
        return "Medium"
    } else if(num<20){
        return "Large"
    }else {
        return "Huge"
    }
}
console.log(testSize(20));

// GOLF CODE 
var names =["Hole-in-one","Eagle","Bridle"];
function golfScore(par,strokes){
    if(strokes==1){
        return names[0]
    }else if (strokes <= par  -2){
        return names[1]
    }
    else if (strokes == par  -1){
        return names[2]
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par +1){
        return names[4]
    }
    else if (strokes == par  +2){
        return names[5]
    }
    else if (strokes >= par  +3){
        return names[6]
    }
}
console.log(golfScore(5,4));

/* 
Strokes   Return
1         "Hole in one!"
<= par -2   "Eagle"
par -1     "Bridle"
par         "par"
par +1      "Bogey"
*/

// Swich Statement
function caseinSwitch(val){
    var answer = "" ;
    switch(val){
        case 1 :
        answer = "Alpha"
        break ;

       case 2 :
        answer = "Beta"
        break ;

       case 3:
        answer = "Gama"
        break ;


       case 4 :
        answer = "Delta"
        break ;

    }
    return answer;
}
console.log(caseinSwitch(4));

// Default option in Switch statement
function switchofStuff(val){
    var answer  = "" ; 
    switch(val){
       case "a" :
             answer = "Apple"
             break ;
        
        case "b" :
             answer = "Bird"
             break ;
            
         case "c" :
             answer = "Cat"
             break ;
             default :
             answer = "Stuff"
    }
    return answer;
}
 console.log(switchofStuff("a"));

 // Multiple Indentical option in Switch Options
 function sequentialSizes(val){
    var answer = "";
    switch(val){
         case 1 :
         case 2 :
         case 3 :
         answer = "Low";
         break ;

         case 4 :
         case 5 :
         case 6 :
         answer = "Med";
         break ;

         case 7 :
         case 8 :
         case 9 :
         answer = "High";
         break ;
    }
    return answer ;
 }
 console.log(sequentialSizes(6));

 // Replacing IF Else chains with Switch
function chaintoSwitch(val){
    var answer = "";
        switch(val){
            case "bob":
                answer = "UTSAV";
                break ;
             case 42:
                answer = "The answer";
                break ;
             case 1 :
                 answer = "He is no.1 "   
        }
    }
console.log(chaintoSwitch())

// Returning boolean values from Function
function isless(a,b){
    return a<b;
}
console.log(isless(10,15));

// Returning Early pattern from function
function abtest(a,b){
    if(a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+ Math.pow(Math.sqrt(b)),(2)))
}
console.log(abtest(5,6))

// Counting Cards
var count = 0;
function cc(card){
    switch(card){
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
            count ++ ;
            break ;
        case 10 :
        case "J":
        case "K" :
        case "A" :
            count -- ;
            break ;
    }
    var holdbet = 'Hold'
    if (count>0){
        holdbet = 'bet'
    }
    return count + "" + holdbet ;
}
cc(2);cc(3);cc(7);cc('K');cc('A');
console.log(cc(2,"K"))

// Built a JAVA SCRIPT objects
var ourdog = {
    "name " : "UTSAV" ,
    "legs"  : 4 ,
    "tails" : 1 ,
    "friends" : "lots of",
};
console.log(ourdog);

var mydog = {
    "name" : "UTSAV" ,
    "friends" : "Nobody",
};
console.log(mydog);

// Accessing Object Properties with DOT notation
var testobj = {
    "hat" : "ballcap",
    "shirt" : "jersy",
    "shoes" : "cleats",
}
var hatvalue = testobj.hat ;
var shirtvalue = testobj.shirt ;
console.log(hatvalue);
console.log(shirtvalue);

// Accessing Object Properties with bracket notation 
var testobj = {
    "an entree" : "humburger",
    "my side " : "veggies",
    "the drink " : "water",
}
var entreeValue = testobj["an entree"];
var sideValue  = testobj["my side"] ;
console.log(entreeValue);
console.log(sideValue);

// Accessing Object Properties with Variables 
var testobj = {
    10 : "Messi",
    11 : "Di Maria",
    1 : "Lisnardo Martinez",
};
var playernumber = 11;
var player = testobj[playernumber];
console.log(testobj);

//Updating Object Properties
var ourDog = {
    "name" : "Camper",
    "legs" : "2",
    "tails" : "1",
};
ourDog.name ="Happy Camper";
console.log(ourDog);

// We use dot(.) notation to set object properties to a new value

// Add new Properties to an Object
var ourDog = {
    "name" : "Camper",
    "legs" : "2",
    "tails" : "1",
};
ourDog["bark"] = "Wooffff!"
console.log(ourDog);

// Delete Properties from Object 
var ourDog = {
    "name" : "Camper",
    "legs" : "2",
    "tails" : "1",
};
delete ourDog.bark ;
console.log(ourDog);

// Using Objects for Lookups 
function phoneticLookup(val) {
      var result = "";
      var lookup = {
         "alpha ": "Adams",
         "bravo ": "Boston",
         "charlie": "Chicago",
         "delta": "Denvar",
         "echo ": "Easy",
         "foxtrot": "frank"
    };
     result = lookup(val);
     return result ;
}
console.log(phoneticLookup(aplha));

// Testing Objects for Properties
var myobj = {
    gift : "Mesii T-Shirt",
    pet : "Tommy",
    bed : "1....",
};
function checkObj(checkProp){
    return "Change me!";
}
console.log(checkObj(gift));



































