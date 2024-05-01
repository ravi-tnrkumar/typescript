let a = 13;
let b,c;

//Null coalescing operation op1 ?? op2 => right operand is evaluated when left operand is null/ undefined/ NaN
c= a?? a;
console.log("c from a= " + c);
c= b?? b;
console.log("c from b =" + c);