function fibonacci (n) {
    let a = 1;
    let b = 1;
    let c = 0;

    if (n === 0) {
        console.log( n + ' element ciągu Fibonacciego wynosi: ' + 0 );
        return 0;
    } else if ( n === 1 || n === 2) {
        console.log( n + ' element ciągu Fibonacciego wynosi: ' + 1 );
        return 1;
    } else if ( n > 2) {
        for ( i = 0; i < n - 2; i++ ) {
            c = a + b;
            a = b;
            b = c;
        }
        console.log( n + ' element ciągu Fibonacciego wynosi: ' + c );
        return c;
    }
}
console.log(fibonacci(8));