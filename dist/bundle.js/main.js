// (()=>{"use strict";console.log(5),console.log("hola, preciosa")})();




let Counter = function() {
	let c = 0;

	return {
		inc() {
			c++;
			return c;
		},
		// current() {
		// 	return c;
		// }
	};
};


let myCounter = Counter();

myCounter.inc();
myCounter.inc();
// myCounter.inc();



// console.log(myCounter.inc());
// console.log(myCounter.inc());
// console.log(myCounter.inc());

// myCounter.inc();
// console.log(myCounter.inc());
// myCounter.inc();
// console.log(myCounter.current());
// myCounter.inc();
// console.log(myCounter.current());
// myCounter.inc();

// console.log(myCounter.current());

// let x = "5";
// let y = 6;

// console.log(x+y == 56);

// let a = {
// 	uno : 123,
// 	dos: "yes"
// };

let b = [123, "oh", 567, true, "hello"];

// console.log(b[12]);

// for (var i = 0; i < b.length; i++) {
// 	console.log(b[i].length);
// 	console.log(typeof(b[i]));
// }

// for (var i = 0; i < b.length; i++) {
// 	// var q = b[i] + "";
// 	// console.log(q + " : " + q.length);
// 	console.log(b[i] + " " + typeof b[i]);
// }

// function hello() {
// 	var sum = 0;

// 	for (var i = 0; i<arguments.length; i++) {
// 		var sum = sum + arguments[i];
// 	}
// 	console.log(sum);
	
// }

// let oh =  {
// 	name: "mua"
// };

// hello(1,1, 14, 1, 1, 31, 13, 1, 1, 881);

// function getName() {
// 	return this.name;
// }

// console.log(getName.call(oh));

let obj1 = {
	number: 10,
};

let obj2 = {
	number: 20,
};

function sum() {
	let number = this.number;

	for (let arg of arguments) {
		number += arg;
	}

	return number;
}

console.log(sum.call(obj2, 1, 2, 3, 4, 5));


function Counter1(a) {
	this.counter = a;
}

let c = new Counter1(100);

console.log(c);


// function rec(numero) {
// 	console.log(numero);
// 	numero -= 1;
// 	rec(numero);
// }

// rec(10);
let Arr1 = [
	{
		name: "Helen",
		age: "25",
		height: "990",
	},

	{
		name: "Helen",
		age: "54",
		height: "990",
	},

	{
		name: "Helen",
		age: "19",
		height: "990",
	},

	{
		name: "Helen",
		age: "48",
		height: "990",
	}

]

function fff(arg) {
	for (var i = 0; i < arg.length; i++) {
		arg[i].valueOf = function() {
			return this.age;
		}
		console.log(arg[i].valueOf)
	}
}


fff(Arr1);

console.log(Arr1);

let arr2 = [1,2,3,4,5,6,7];

arr2.splice(arr2.length, 0, 100, 200, 300);

console.log(arr2);









