//PROBLEMA1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
//resultado de console.log(randomCar) es "Tesla"
//resultado de console.log(otherrandomCar) es "Mercedes"
console.log(randomCar)
console.log(otherRandomCar)


//PROBLEMA2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// en la impresion el resultado de name seria error y othername Elon
//console.log(name); 
console.log(otherName);



//PROBLEMA3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
//el console.log(password) seria igual a 12345 y console.log(hashedPssword) es name: 'Phil Smith',age: 47, height: '6 feet'
console.log(password);
console.log(hashedPassword);


//PROBLEMA4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers;//2
//Predict the output
// en la impresion el resultado de la impresion first == second seria 2 , mientras que la impresion de first == third seria 5)

console.log(first == second);
console.log(first == third);


//PROBLEMA5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
// el primer resultado imprime "value", el segundo  1,5,1,8,3,3
//el tercer resultado imprime 1, el cuarto resultado imprime 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//acerte

