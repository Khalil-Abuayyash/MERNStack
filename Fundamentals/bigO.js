// Calculating prime numbers

Number.prototype.isPrime = function() {
    for( let i=2; i<Math.sqrt(this); i++ ) {
           if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
// while( primeCount < 1e5 ) {
//         if( num.isPrime() ) {
//             primeCount++;
//         }
//         num++;
//     }

console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// Fibonacci
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
const startF = performance.now();
rFib(40);
console.log(`This took ${performance.now() - startF} milliseconds to run`);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
const startF1 = performance.now();
iFib(40);
console.log(`This took ${performance.now() - startF1} milliseconds to run`);
// iterative is faster


// Reversing a string
const startS = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`This took ${performance.now() - startS} milliseconds to run`);


//  a more efficient function to reverse a string Not Solved
const startS1 = performance.now();
// const reversed2 = story.split("").reverse().join("");

console.log(reversed2);
console.log(`This took ${performance.now() - startS} milliseconds to run`);

