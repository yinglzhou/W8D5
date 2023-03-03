function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total; 
}

function sumB(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total; 
}

// console.log(sumB(1,2,3,4))


//version 1 - using argument keyword
//if using argument keyword we have to convert arguments into an array.


// Function.prototype.myBind = function(context) {
//     const args = Array.prototype.slice.call(arguments); //bind time arguments
//     // args = Array.from(arguments)
//     // console.log(args)
//     const org = this;
//     return function(...callArgs) {  //call time arguments
//         // console.log(args)
//         const allArgs = args.slice(1).concat(callArgs)
//         return org.apply(context, allArgs);
//     }
// }


//version 2 - without using argument keyword.

Function.prototype.myBind = function(context, ...args) {
    // const args = arguments;
    const org = this;
    return function(...callArgs) {
        // return org.call(context, ...args, ...callArgs);
        return org.apply(context, [...args, ...callArgs]);  //arg.concat(callArgs)
    }
}


//test cases ===========
class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");

//   markov.says.myBind(pavlov, "meow", "Kush")();
//   markov.says.myBind(pavlov, "meow")("Markov");

// =======================================================


function curriedSum (numArgs) {
    let numbers = [];
    let total = 0;
    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            for (let i =0; i < numbers.length; i++) {
                total += numbers[i];
            }
            return total; 
        }
        return _curriedSum
    }
}

// const summ = curriedSum(4)
// console.log(summ(5)(30)(20));
// console.log(curriedSum(3)(5)(30)(20));


Function.prototype.curry = function(numArgs) {
    let numbers = [];
    const that = this;
    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that.curry(numArgs);
        }
        return that._curriedSum
    }
}



function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(6));
