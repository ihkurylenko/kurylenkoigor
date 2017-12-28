================================================================
What will be an output of code below?
================================================================

(function() {
	console.log(1); 
	setTimeout(function(){console.log(2)}, 1000); 
	setTimeout(function(){console.log(3)}, 0); 
	console.log(4);
})();

================================================================
Please write the output of code below
================================================================

var obj1 = {
	name: 'Igor',
	surname: 'Kurylenko'
};

obj2 = obj1;
obj1.name = 'Anonymous';

console.log(obj1);
console.log(obj2);

================================================================
Please write the output of code below. Consider how to improve this code using closures
================================================================

for (var i = 1; i < 5; i++) {
	setTimeout(function() { 
		console.log(i); 
		}, 1000*i);
}

================================================================
Consider the code snippet below. What will the console output be and why?
================================================================

(function (x) {
	return (function(y) {
		console.log(x);
	})(2);
})(1);

================================================================
We have a menu on web page. If we click on menu item we want to see index of this item in console. For example when we click on
first menu item we want to see message in console: Click in item with index 0!
================================================================

<ul class="menu">
	<li class="menu__item">
		<p class="menu__item-content">text 1</p>
	</li>
	<li class="menu__item">
		<p class="menu__item-content">text 2</p>
	</li>
	<li class="menu__item">
		<p class="menu__item-content">text 3</p>
	</li>
</ul>

================================================================
Will show a maximum number in array
================================================================

let arr = [3, 5, 16, 122, 45];

console.log(Math.max(...arr));

================================================================
Will sort an array from less to greater number
================================================================

var arr1 = [1, 2, 6, 8, 16, 5, 22, 1089, 56];

function compareNumbers(a , b) {
	if (a < b) {
		return 1;
	}
	if (a > b) {
		return -1;
	}
};

arr1.sort(compareNumbers);

console.log(arr1);

================================================================
Will sort an array between two spesific numbers
================================================================

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }


console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6


================================================================
Counter function that counts gradually step by step but if we put a specific number as an argument it will show it and continue count
================================================================


function makeCounter() {
	var currentCount = 1;
	return function(param) {
		if (param) {
			console.log(param);
			return
		};
		return console.log(currentCount++);
	};

};

var counter = makeCounter();

(counter());		// 1
(counter());		// 2
(counter());		// 3
(counter(30));	// 30
(counter());		// 5



