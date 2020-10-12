// 1
function splitAndMerge(str, joiner) {
	let words = str.split(" ");
	let chars = new Array();
	words.forEach(function(word) {
		Array.prototype.push.apply(chars, word.split(""));
	});
	return chars.join(joiner);
}

console.log(splitAndMerge("My name is John", " "));

// 2
function convert(obj) {
	let arr = new Array();
	Object.keys(obj).forEach(function(key) {
		Array.prototype.push.apply(arr, new Array([key, obj[key]]));
	});
	return arr;
}

let demoObj = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(convert(demoObj));

// 3
function toCamelCase(str) {
	let words = str.split(/-|_/);
	for (let i = 1; i < words.length; i++) {
		words[i] = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase());
	}
	return words.join("");
}
console.log(toCamelCase("the_stealth-warrior"));

// 4
function reverseString(str) {
	let words = str.split(" ");
	words.forEach(function(word, index) {
		words[index] = word.split("").reverse().join("");
	});
	return words.join(" ");
}

console.log(reverseString(" A fun little challenge! "));

// 5
function stringExpansion(str) {
	let chars = str.split("");
	for (let i = 0; i < chars.length; i++) {
		if (chars[i].match(/\D/) && i > 0 && chars[i - 1].match(/\d/)) {
			chars[i] = chars[i].repeat(chars[i - 1]);
		}
	}
	return chars.join("").replace(/\d/g, "");
}

console.log(stringExpansion("3D2a5d2f")); // expected DDDaadddddff
console.log(stringExpansion("3d332f2a")); // expected dddffaa
console.log(stringExpansion("abcde")); // expected abcde

// 6
function largest(... numbers) {
    return Math.max.apply(null, numbers);
}

function smallest(... numbers) {
    return Math.min.apply(null, numbers);
}

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

// 7
function transform(arr) {
	let transformedArray = arr;
	transformedArray.forEach(function(item, index) {
		transformedArray[index] = function() {
			return item;
		};
	});
	return transformedArray;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50

// 8
function sum(... numbers) {
	let result = 0;
	numbers.forEach(function(number) {
		result += number;
	});
	return result;
}

console.log(sum(1,3,5,7));

// 9
function countDown(startPoint) {
	setInterval(function() {
		if (startPoint >= 0) {
			console.log(startPoint);
			startPoint--;
		} else {
			return;
		}
	}, 1000);
}

countDown(3);

// 10
// Not implemented yet!
