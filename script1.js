function fibonacciRecursive(n) {
    
    if (n === 0 || n === 1) {
        return n;
    }
    
    
    
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}


console.log(fibonacciRecursive(6)); 