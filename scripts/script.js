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


const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender:'male',
    hobbies :['music', 'skiing']
}
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}
console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`)


let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3]; 

let i = 0
for (let student of students) {
    if (student.program === "CIT" && student.GPA > 3.0) {
        console.log(student);
        i++;
    }
}
console.log(i);