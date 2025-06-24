let a=10;
let b=20;
console.log("Arthmetic operators");
console.log("a=",a,", b=",b);
console.log("sum",a+b);
console.log("difference",a-b);
console.log("multiplaction",a*b);
console.log("division",a/b);
console.log("modulas",a%b);
console.log("emponent",a**b);


//assignmentoperators
let x=10;
console.log("Assignment operators");

console.log(x+=5);
console.log(x-=3);
console.log(x*=2);
console.log(x/=4);
console.log(x%=3);


//Comparasion operators
console.log("Comparasion operators");
console.log("is:equal",a==b);
console.log("isstrictequal:",a===b);
console.log("isnotequal",a!=b);
console.log("isstrictnotequal",a!==b);
console.log("isgreater",a>b);
console.log("islessthan",a<b);
console.log("isgreaterthanequal",a>=b);
console.log("islesstahnequal",a<=b);


//logical operators
console.log("logical and",a&&b);
console.log("logical or",a||b);
console.log("logical not",!(a<b));

//bitwise operators
console.log("Bitwise operators");
console.log("bitwiseand",a&b);
console.log("bitwiseor:",a|b);
console.log("bitwiseNot:",~a);
console.log("bitwise Xor:",a^b);
console.log("bitwise leftshift:",a<<b);
console.log("bitwise shiftright",a>>b);

//Ternary operator
let age=20;
let eligibility =(age>=18)? "eligible to vote" : "not eligible to vote";
console.log("ternary operator");
console.log("eligibility:",eligibility);

//type of operator

let typeofvar=typeof a;
console.log("typeof operator:");
console.log("type of variable 'a':",typeofvar);