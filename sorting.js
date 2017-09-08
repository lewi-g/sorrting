'use strict';

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  // console.log(left);
  // console.log(right);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
//   console.log(array[outputIndex]);
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) { 
      array[outputIndex++] = left[leftIndex++];
      console.log(array[outputIndex]);
      // what is happening for the outputIndex++?
      // array[outputIndex] = left[leftIndex];
      // outputIndex++;
      // leftIndex++;
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function quickSort(array, start=0, end=array.length) {
  start = start;
  end = end;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      console.log(array);
      j++;
    }
  }
  swap(array, end-1, j);
  console.log(array);
  return j;
}


// console.log(partition([1,2,3,100,5,7],0,2));

const left = [0, 5,4, 7, 8, 9,1,2,3,6,11, 12, 50];
const array = [];
// mergeSort(left);


// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
const arrayOfInt = [2, 4, 5, 3,6,8,19,100,78, 10];
// merge(left, arrayOfInt, []);

function countingSort(arr, min, max) {
  var i, z = 0, count = [];
  //tracks how many elements in original array
  for (i = min; i <= max; i++) {
    count[i] = 0;
  }
  //prepares count array
  for (i=0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  //everything sorting is happening here
  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
      console.log(i);
    }
  }
  return arr;
}

// countingSort(arrayOfInt, 2, 10);
// Write an algorithm to shuffle an array into a random order in-place 
//(i.e. without creating a new array).
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
const randomizeArray = arr => {
  const randomIndex = Math.floor(Math.random()* arr.length);
  let leftSideIndex = randomIndex;
  let rightSideIndex = randomIndex;
  
  while (leftSideIndex >= 0 && rightSideIndex < arr.length ) {
    swap(arr, leftSideIndex, rightSideIndex);
    leftSideIndex--;
    rightSideIndex++;
  }
  return (arr);
}
console.log(randomizeArray(arrayOfInt));

function shuffle(arr) {
  //Swap every element with a randomly-chosen one. On average, each
  //element will be moved twice; every element will be moved at least
  //once, but some will be moved three times or more.
  for (var i = 0; i < arr.length; ++i) {
    var j = Math.floor(Math.random() * arr.length);
    swap(arr, i, j);
    // var tmp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = tmp;
  }
  return arr;
}

// Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?
const books = ['Atlas Shrugged', 'War and Peace', 'Art of War',
'4 hour work week', 'the five dysfunctions of a team', 'Mistborn Trilogy', 'the Way of Kings', 
'the last lecture', 'the emperor\'s soul', 'the last geisha', 'the jungle book', 'more than two', '4 hour cookbook', 'yoga for beginners'];

// function sortByInsertion(arr) {
//     1) Set aside a shelf or bit of table space to do the sorting.
//     2) Grab a book and put it onto the shelf.
//     3) Grab the next book, and place it either left or right of the first book, according to position.
//     4) Grab the third, and put it left, between, or right.
//     5) Continue until you have no more books.
//     }

function sortByInsertion(arr) {
    const shelf = [];



    shelf.push(arr[0])
    
    for(let i = 1, j =0; i < arr.length; i++) {
        if(arr[i] < shelf[j]) {

        } else {

        }
    }
}


console.log(mergeSort(books))