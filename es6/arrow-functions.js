class Counter {
  constructor() {
    // start the initial count at 0
    this.count = 0;
  }

  countUp() {
    // 0 (correct)
    console.log(this.count);

    // every second...
    setInterval(
      // anonymous functions USUALLY change the value of "this"
      //("this" is no longer "myCounter", it's something else)
      //function () {
      () => {

        //dislay the old count
        console.log("BEFORE " + this.count);

        // increase the count
        this.count += 1;

        // then display the new count
        console.log("AFTER " + this.count);
      },
      1000
    );
  } //countUp()
}// class Counter

const myCounter = new Counter();
myCounter.countUp();


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evens = numbers.filter(function(singleNumber){
  return singleNumber % 2 === 0;
});


// ARROW functions can make code more streamlined
// 1. if the function has EXACTLY one parameter, you can omit the parenthesis
// (x) => {    became     x => {
// 2. if the function has ONLY ONE LINE, you can omit the curly braces.
// () => {  conole.log('blah'); }  becomes  () => conole.log('blah')
// 3. if the function has ONLY ONE LINE, you can omit the "return".
// x => return x + 1   becomes  x => x + 1
evens = numbers.filter(singleNumber =>
  singleNumber % 2 === 0);
