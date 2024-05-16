//const firstname = "Angelina-Maria";
//const lastname = "O'Neel";

function generateRandomEmail() {
    const mailbox = Math.random().toString(35);
    //.toString(35).substring(2, 10);
    const domain = "example.com";
    return `${mailbox}@${domain}`;
  }

  console.log(generateRandomEmail());

const num = 125;
console.log(num.toString(35));

console.log(Math.random());
console.log(Math.random().toString(35).substring(2, 5));

function findMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const n = sortedArr.length;
  
  if (n % 2 === 0) {
      return (sortedArr[n/2 - 1] + sortedArr[n/2]) / 2;
  } else {
      return sortedArr[Math.floor(n/2)];
  }
}

// Example usage:
const array = [5, 2, 1, 3, 4];
const median = findMedian(array);
console.log("Median of the array is:", median);

const str = 'Hello World!';
console.log(str.split('').reverse().join(''));