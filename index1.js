function findTriplet(A, arr_size, sum)
{
let l, r;
A.sort((a,b) => a-b);

for (let i = 0; i < arr_size - 2; i++) {

l = i + 1;

r = arr_size - 1;
while (l < r) {
if (A[i] + A[l] + A[r] == sum)
{
console.log("Triplet is " + A[i] + ", "
+ A[l] + ", " + A[r]);
return true;
}
else if (A[i] + A[l] + A[r] < sum)
l++;
else // A[i] + A[l] + A[r] > sum
r--;
}
}
return false;
}
let A = [ 3,6,5,2,10 ];
let sum = 11;
let arr_size = A.length;
findTriplet(A, arr_size, sum);

