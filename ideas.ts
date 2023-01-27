//? app/state-management

// Has mostly pure functions relating to the data, and mutations to that data that occur on the JavaScript-side ONLY

//? DOM manipulation

// Un-pure functions that modify the DOM so that all DOM manipulations happen in one place. (Makes it easier to debug)

// Files:
// quiz-dom.ts
// question-dom.ts
// prompt-dom.ts

//? Examples

/*
  Showcase of un-pure vs pure functions
  includes 2 un-pure examples, and one pure example!
*/

let arr: number[] = []

function unPure(x: number) {
  arr.push(x)
}

unPure(2) //Modifies an array outside of it's scope

function unPure2(x: number, array: number[]) {
  array.push(x)
}

unPure2(5, arr) //Modifies an array outside of it's scope

function pure(x: number, array: number[]) {
  return array.indexOf(x)
}

arr.push(pure(2, arr)) //Doesn't modify any array outside of it's scope, returns number.

console.log(arr)
