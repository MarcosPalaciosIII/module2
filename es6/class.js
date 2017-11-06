class SortedList {
  constructor() {
    //every sorted list starts with nothing inside
      this.listArray = [];
    // every sortd list starts in 0 since it starts with nothing
      this.length = 0;
  }

  add(myNumber) {
    //add number to array
    this.listArray.push(myNumber);
    //update the length
    this.length =  this.listArray.length;
    //make sure its sorted
    this.listArray.sort(function (numberA, numberB) {
      // when sorting numbers subtracting works
      // (doesn't work for sorting strings)
      return numberA - numberB;
    });
  }
}// class SortedList

var myList = new SortedList();

myList.add(100);
myList.add(777);
myList.add(4);
myList.add(99);

console.log(myList);

// [4, 99, 100, 777]
// length: 4



// old constructor function syntax

// function SortedList () {
//   // every sortd list starts in 0 since it starts with nothing
//   this.length = 0;
//   //every sorted list starts with nothing inside
//   this.listArray = [];
// }
//
// SortedList.prototype.add = function (myNumber) {
//   //add number to array
//   this.listArray.push(myNumber);
//   //update the length
//   this.length =  this.listArray.length;
//   //make sure its sorted
//   this.listArray.sort(function (numberA, numberB) {
//     // when sorting numbers subtracting works
//     // (doesn't work for sorting strings)
//     return numberA - numberB;
//   });
// };
