for (let i=1; i< 11; i++) {
    console.log(Math.pow(2,i)); //2**i
}

let j = 1
while (j<11) {
    console.log(Math.pow(2,j)); //2**i
    j++;
}

let input="";
input = prompt("what is your name?");
while (!(isNaN(Number(input)))) {
    alert("please input a name")
    input = prompt("what is your name?");
}

alert(`Hello ${input}`);

let fruits = ['Apple', 'Banana'];
fruits.push('Orange');
//let returnVal = fruits.pop();
//console.log(returnVal);
fruits.unshift('Mango');
//fruits.shift();
//console.log(fruits);

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

for (let item of fruits) {
    console.log(item);
}