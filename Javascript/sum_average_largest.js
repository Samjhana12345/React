var a = [1, 56, 78, 94, 32, 67];
var len = a.length;
var sum = 0;
var average = 0;
var smallest = a[0];
var largest = a[0];
var even = 0;
var odd = 0;

for (var i = 0; i < len; i++) {
    sum += a[i];
    if (a[i] < smallest) {
        smallest = a[i];
    }
    if (a[i] > largest) {
        largest = a[i];
    }
    if (a[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

average = sum / len;
console.log("Sum: " + sum);
console.log("Average: " + average);
console.log("Smallest: " + smallest);
console.log("Largest: " + largest);
console.log("Even: " + even);
console.log("Odd: " + odd);
