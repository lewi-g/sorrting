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
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) { 
      array[outputIndex++] = left[leftIndex++];// what is happening for the outputIndex++?
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
  // console.log(array);
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

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
  // return array;
}
console.log(partition([1,2,3,100,5,7],0,2));

const left = [0, 5,4, 7, 8, 9,1,2,3,6];
const array = [];
// mergeSort(left);
