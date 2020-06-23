/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num1, num2, op) {
  num1= Number(num1)
  num2= Number(num2)
  if (op=== '+' || op === 'plus' || op=== 'added to') {
    return num1 + num2
  }else if(op === '-' || op === 'minus' || op=== 'subtracted from'){
    return num1 - num2
  
  }else if(op=== 'x' || op=== 'times'|| op=== 'X' || op==='multiplied by') {
    return num1 * num2
  
  }else if(op=== '/' || op==='divided by') {
    return num1 / num2
  
  }else if (op=== '%' || op==='modulus' || op==='mod') {
    return num1 % num2
  
  }else {
  return "Sorry, that's not a mathematical operation!"
  }
  
  
  }

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;