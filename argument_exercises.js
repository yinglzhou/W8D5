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
        // console.log(...args)

        return org.apply(context, args.concat(callArgs))
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