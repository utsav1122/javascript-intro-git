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







