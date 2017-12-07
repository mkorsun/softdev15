var fibonacci = function(n) {
    if(n < 2) {
        return 1;
    } else {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
};

var gcd = function(a,b) {
    while(b != 0) {
	t=b;
	b=a % b;
	a=t;}
    return a;
};

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var Students = ['Max', 'shan', 'ved', 'ray', 'ish', 'aneesh', 'piotr', 'jake', 'james'];

var randomStudent = function(){
    return Students[getRandomInt(0,Students.length)];
};

		   


