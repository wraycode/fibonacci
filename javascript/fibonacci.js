//
//  Counts the fibonacci sequence
//  node fibonacci.js
//

generateFibonacci();

function generateFibonacci(start = 1, end = 100) {

  var stack = [start];

  for (var i=start; i<end; i++) {

    stackCount = stack.length;

    if (stackCount <= 2) {

      stack.push(1)

    } else  {

        evalIdx1 = stack[stack.length -2];
        evalIdx2 = stack[stack.length -1];
        stack.push(evalIdx1 + evalIdx2);
    }

    console.log(stack[i])

  }

}
