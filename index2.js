function Swap(array, pos1, pos2)
{
let temp = array[pos1];
array[pos1] = array[pos2];
array[pos2] = temp;
}
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min);
}
function random(arr, low, high)
{
var pivot = getRandomInt(low,high);
var temp1 = arr[pivot];
arr[pivot] = arr[high];
arr[high] = temp1;
}
function partition(arr, low, high)
{
random(arr, low, high);
let pivot = arr[high];

let i = (low - 1);
for (let j = low; j <= high- 1; j++)
{
if (arr[j] <= pivot)
{
i++;
Swap(arr, i, j);
}
}
Swap(arr, i + 1, high);
return (i + 1);
}



function quickSort(arr, low, high)
{
if (low < high)
{
let pi = partition(arr, low, high);

quickSort(arr, low, pi - 1);
quickSort(arr, pi + 1, high);
}
}

function printArray(arr, size)
{
let i;
for (i = 0; i < size; i++)
console.log(" " + arr[i]);
}
let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
quickSort(arr, 0, n-1);
console.log("Sorted array: ");
printArray(arr, n);