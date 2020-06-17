// An algorithim to print the number from 1 to 100.
// 'fizz' will be printed if the number % 3 = 0 (only)
// 'buzz' will be printed if the number % 5 = 0 (only)
// 'fizzbuzz' will be printed if the number % 3 = 0 & number % 5 = 0

for (let i = 0; i < 100; i++) {
    if (((i % 3) == 0) && (i % 5) !=0) {
        console.log('fizz');
    }

    if (((i % 5) == 0) && (i % 3) !=0) {
        console.log('buzz');
    }

    if (((i % 3) == 0) && (i % 5) ==0) {
        console.log('fizzbuzz');
    }

    console.log(i)
}
