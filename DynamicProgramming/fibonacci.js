const fib = (n) => {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

const fibOpti = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 2;
	memo[n] = fibOpti(n - 1, memo) + fibOpti(n - 2, memo);
	return memo[n];
};

console.log(fibOpti(50));
