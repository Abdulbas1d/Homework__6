// 1-Misol

// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
// for (let property in myObject) {
//     console.log(property);
// };




// 2-Misol

// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
  
// delete myObject.age;
// console.log(myObject);




// 3-Misol

// const myObject = {
//    name: 'John',
//    age: 30,
//    city: 'New York'
// };
  
// const numberOfProperties = Object.keys(myObject).length;
// console.log(numberOfProperties); 




// 4-Misol

// const myNestedObject = {
//     outerKey: {
//       innerKey1: 'value1',
//       innerKey2: 'value2'
//     },
//     anotherOuterKey: {
//       innerKey3: 'value3',
//       innerKey4: 'value4'
//     }
// };
  
// console.log(myNestedObject.outerKey.innerKey1);
// console.log(myNestedObject.anotherOuterKey.innerKey3); 



// 5-Misol

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'blue',
//     mileage: 15000,
//     owner: {
//       name: 'John Doe',
//       age: 35,
//       address: '123 Main St, Anytown, USA'
//     },
//     drive: function() {
//       console.log('The car is being driven.');
//     },
//     honk: function() {
//       console.log('Beep beep!');
//     }
// };
  
// console.log(car.make);
// console.log(car.owner.name);
// car.drive();
// car.honk(); 




// 6-Misol

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.drive = function() {
//       console.log('The car is being driven.');
//     };
// }
  
// const myCar = new Car('Toyota', 'Camry', 2022);
  
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);
// myCar.drive(); 