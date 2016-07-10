/**
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.

Your task is to return number of people in the bus after the last bus station. Take a look on the test cases :)

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
**/
function number(busStops){
var res = 0;
   for(var x=0;x<busStops.length;x++){
			res+=busStops[x].reduce(function(x,y){
      		return x-y;
      });
   }
return res;
}

/**
"""
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
"""
**/
function narcissistic(value){
  var l = String(value).length;
  var res = 0;
  for(var x =0;x<l;x++){
    res += Math.pow(parseInt(String(value)[x]),l);
  }
  return res === value;
}


/**
 *
 """
 In this kata, you must create a digital root function.

 A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

 Here's how it works (Ruby example given):

 digital_root(16)
 => 1 + 6
 => 7

 digital_root(942)
 => 9 + 4 + 2
 => 15 ...
 => 1 + 5
 => 6

 digital_root(132189)
 => 1 + 3 + 2 + 1 + 8 + 9
 => 24 ...
 => 2 + 4
 => 6

 digital_root(493193)
 => 4 + 9 + 3 + 1 + 9 + 3
 => 29 ...
 => 2 + 9
 => 11 ...
 => 1 + 1
 => 2
 """
 * */
function digital_root(n) {
  var strArr = String(n).split("");
  if(n<10){
    return n;
  }else{
    var res = strArr.reduce(function(x,y){
      return parseInt(x) + parseInt(y);
    });
  }


/**"""
  Your goal in this kata is to implement an difference function, which subtracts one list from another.
  It should remove all values from list a, which are present in list b.
  array_diff([1,2],[1]) == [2]
  If a value is present in b, all of its occurrences must be removed from the other:
  array_diff([1,2,2,2,3],[2]) == [1,3]
**/
function array_diff(a, b) {
  var res = []
  for(var x = 0;x<a.length;x++){
    for(var i=0;i<b.length;i++){
      if(a[x] !==b[i]){
        res.push(a[x]);
      }
    }
  }
  return res;
}

/**As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.
**/
function getLastDigit(index) {
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    //create the fibonacci sequence upto the indicated index
    for(var x=2;x<=index;x++){
      fib[x] = fib[x-1] + fib[x-2];
    }
    var last = String(fib[index]); //convert the last element in array to a string
    var arr = last.split("");// split the last element into a string array
    var lastDigit = arr[arr.length-1]; //obtain the last digit from the array
    return parseInt(lastDigit);
}

//console.log(getLastDigit(15));
//console.log(getLastDigit(193150));// 5);
console.log(getLastDigit(300));//, 0);
//console.log(getLastDigit(20001));//, 6);

/**Your task is to write a function 'anArgument' that doesn't have a fixed number of parameters. The function should count the arguments passed to it and return a string that specifies how many arguments were passed in, and states what they were.

If the function call is

anArgument("pigs", "giraffes", "unicorns");
The returned string should say

'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'
If there is only one argument passed in, the string should say

'You gave me 1 argument and it is "pigs".'
If there are two arguments, the string should say

'You gave me 2 arguments and they are "pigs" and "giraffes".'
If there are no arguments, the string should say

'You didn't give me any arguments.'
Punctuation and grammar notes

There are commas after each argument except the last and second-last, which are separated with 'and'
Arguments are presented in quotation marks
The singular: '1 argument' as opposed to multiples: '3 arguments'
Verb agreement: 'and it is' as opposed to 'and they are'*/


/**Your task is to write a function 'anArgument' that doesn't have a fixed number of parameters. The function should count the arguments passed to it and return a string that specifies how many arguments were passed in, and states what they were.

If the function call is

anArgument("pigs", "giraffes", "unicorns");
The returned string should say

'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'
If there is only one argument passed in, the string should say

'You gave me 1 argument and it is "pigs".'
If there are two arguments, the string should say

'You gave me 2 arguments and they are "pigs" and "giraffes".'
If there are no arguments, the string should say

'You didn't give me any arguments.'
Punctuation and grammar notes

There are commas after each argument except the last and second-last, which are separated with 'and'
Arguments are presented in quotation marks
The singular: '1 argument' as opposed to multiples: '3 arguments'
Verb agreement: 'and it is' as opposed to 'and they are'*/



function anArgument() {
	var ans = [];
	if(arguments.length === 0){
		return "You didn't give me any arguments."
	}else if(arguments.length === 1){
		
		return 'You gave me 1 argument and it is ' + '"' + arguments[0]+'"' + ".";
	}else{
		for(var x = 0; x < arguments.length; x++){
			var results = '"' + arguments[x]+'"';
			ans.push(results);
		}
		return 'You gave me ' + arguments.length + ' arguments and they are ' + ans.slice(0,ans.length-1).join(", ") + " and "+ ans.slice(ans.length-1) + ".";
	}
}

console.log(anArgument("chars"));
console.log(anArgument("chairs","table","lamp","sideboard"));//, 'You gave me 4 arguments and they are "chairs", "table", "lamp" and "sideboard".', "Your string isn't returning what was expected. Tip: check the punctuation notes.");

console.log(anArgument("limes","pickles","musk ox"));//, 'You gave me 3 arguments and they are "limes", "pickles" and "musk ox".', "Your string isn't returning what was expected. Tip: check the punctuation notes.");

console.log(anArgument("trains","trains","trains","trains","trains","trains"));//, 'You gave me 6 arguments and they are "trains", "trains", "trains", "trains", "trains" and "trains".
    
/*
Philip's just turned four this year (2016) and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more courious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
*/
function  calculateAge(yrBorn, refYear) {
	if(yrBorn === refYear){
		return "You were born this very year!";
	}else if(refYear > yrBorn){
		var dif = refYear-yrBorn;
		return `You are ${dif} year${(dif>1)?"s":''} old.`;
	}else{
		return `You will be born in ${yrBorn - refYear} year${((yrBorn - refYear)>1)?"s":''}.`;
	}
}

console.log(calculateAge(2012, 2016));//,"You are 4 years old.");
console.log(calculateAge(1989, 2016));//,"You are 27 years old.");
console.log(calculateAge(2000, 2090));//,"You are 90 years old.");
console.log(calculateAge(2000, 1990));//,"You will be born in 10 years.");
console.log(calculateAge(3400, 3400));//,"You were born this very year!"); 
console.log(calculateAge(900, 2900));//"You are 2000 years old.");
console.log(calculateAge(2010, 1990));//,"You will be born in 20 years.");
console.log(calculateAge(2010, 1500));//,"You will be born in 510 years.");
console.log(calculateAge(2011, 2012));//,"You are 1 year old.");
console.log(calculateAge(2000, 1999));//,"You will be born in 1 year.");    