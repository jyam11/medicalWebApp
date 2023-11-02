# MedicalProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },
     //ES6 enhanced object literal
      openingHours,  


    // Function that accepts two parameters. Will return the item from each array depending on the arguments passed.
    order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Many times in Javascript we have functions with a lot of parameters and it can be hard to know the order of the parameters that is using
    // this function. Instead of defining the parameters manually, we can just pass an object into the function as an argument, and then the
    // function will immediately destructure the object. The orderDelivery function will do just that. We are setting default values on
    // the properties as well.
    orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    //
    orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient, otherIngredients);
    },
};

// <---------------------- DESTRUCTURING AN OBJECT ------------------>

// This will be extremely useful especially when we deal with the result from an API call. 
// Destructuring is to break a complex data structure down into a smaller data structure like a variable.

// Destructuring an object. 
// const {name, openingHours, categories} = restaurant;

// Returns: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// console.log(name, openingHours, categories);

// What if we wanted the variable names to be different from the property names? 
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

// Returns: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// console.log(restaurantName, hours, tags);

// Another useful feature we could use when we receive an object from an API call, we can set default values for the case that we're tyring to read
// a property that does no exist on the object.

// Setting an empty array as default value, and changing the variable name for the starterMenu property to starters.
// const { menu = [], starterMenu: starters = [] } = restaurant;

// Returns: [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// console.log(menu, starters);

// Mutating variables while destructuring objects. Like when we did the switching in the array destructuring lesson.
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// Destructure the object. a should become 23 and b should become 7. When we start a line with a curly brace then Javascript expects a code 
// block. We cannot assign anything to a code block

// Editor will complain and return: Uncaught SyntaxError: Unexpected token '='
// {a, b} = obj;
// console.log(a,b);

// To solve that we must wrap the destructuring assignment inside parentheses. 
// ({a, b} = obj);

// Returns: 23 7
// console.log(a, b);

// Lets create two variables 'open' and 'close' and they should contain the open and close hours for the 'fri' object inside the 'openingHours'
// object

// Nested object destructuring. We know 'fri' 'is an object so we can further destructure that object using '{open, close}' which these
// are the property names of the inner objects.
// const { fri: {open, close} } = openingHours;

// Returns: 11 23
// console.log(open, close);

// Remember you can still change the variable names if you wanted to.
// const { fri: {open: o, close: c} } = openingHours;

// Returns: 11 23
//console.log(o, c);

// Pass an object of options into the orderDelivery method. Common in third party libraries. Remember we only passed in ONE object into this
// function. We did not pass 4 arguments, it's really one argument, the one object. The properties don't have to match the order in
// which we do the destructuring in the function.
// Returns: Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// Since we have default values set, we don't have to pass in all the properties in the object.
// Returns: Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });


// <----------------- DESTRUCTURING AN ARRAY ---------------->
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Destructuring assignment. Whenever Javascript sees it on the left side of the equal sign it knows it should be destructuring.
// When doing, declare the variable with const. Destructuring is unpacking the array.
// const [x, y, z] = arr;

// // Returns: '2 3 4'
// console.log(x, y, z);

// // Returns: (3) [2, 3, 4]
// console.log(arr);

// // What if we wanted retrieve the first two elements of the categories array? We can destructure with the example below
// let [first, second] = restaurant.categories;

// // Returns: 'Italian Pizzeria'
// console.log(first, second);

// // What if we wanted to retrieve the first and thid element of the categories array? We leave an empty space in the destructuring operator
// // which will skip the second element.
// let [main, , secondary] = restaurant.categories;

// // Returns: 'Italian Vegetarian'
// console.log(main, secondary);

// Switching secondary to main and main to temporary without destructuring we would have to use the below
// create temp variable
// const temp = main;

// // Switch main to secondary
// main = secondary;

// // Secondary will be equal to temp. Cannot do 'secondary = main' because by then we have already overwritten main
// secondary = temp;

// // Returns 'Vegetarian Italian'
// console.log(main, secondary);

// Same thing as in 131 - 137 , but using destructuring to switch.
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Have a function and return an array and them immediately destructure the result into different variables. Allows us to return multiple
// // values from a function.
// const [starter, mainCourse] = restaurant.order(2, 0);

// // Returns: Garlic Bread Pizza
// console.log(starter, mainCourse);

// // Nested destructuring of an array.
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;

// // Returns: 2 [5, 6]
// // console.log(i, j); 

// // What if we wanted all the individual values inside the nested array? We use destructuring inside of destructuring. Nested destructuring.
// const [i, , [j, k]] = nested;

// // Returns: 2 5 6
// console.log(i, j, k);

// // Another feature of destructuring is setting default values for variables when we are unpacking the array. This is very useful for
// // when we do not know the length of the array.

// // What if we tried to unpack 3 elements from an array but there are only two?
// // const [p, q, r] = [8,9];

// // // Returns: Undefined
// // console.log(p, q, r);

// // We could instead give the variables default values
// const [p = 1, q = 1, r = 1] = [8,9];

// // Returns: 8 9 1
// console.log(p, q, r);


// SPREAD OPERATOR

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// // Take existing maniMenu array, and add a new element, and create a brand new array
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Spread operator is similiar to destructuring as it helps get elements out of arrays. But the big difference is that the spread operator
// // takes all the elements from the array and it doesn't create new variables. Can only use in places where we would otherwise write values separated by 
// // commas. Spread operator won't work in a template string.

// // Spread operator works on all iterables like arrays, strings, maps, and sets but NOT objects. Multiple values separated by a comma are usually only expected
// // when we pass arguments into a function or when we build a new array.

// // Shallow copy of the mainMenu array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two or more arrays
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // // Spread operator on a string
// // const str = 'Jonas';
// // const letters = [...str, '', 'S.'];
// // console.log(letters);
// // console.log(...str);

// // // create an array and have the window prompt user for the ingredient. This is a good real workd example.
// // const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];
// // console.log(ingredients);

// // // Call the orderPasta function and use the spread operator on the ingredients array to extract all the elements individually.
// // restaurant.orderPasta(...ingredients);

// // In ES2018 the spread operator now works on objects.
// // Spread operator on an object
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giusuppe'};
// console.log(newRestaurant);

// // Shallow copy of an object. Only available in ES2018
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST PATTERN AND REST PARAMETERS

// Rest operator is used to collect multiple elements and condense them into one array. The inverse of the spread operator.

// Destructuring 

// Spread syntax because it is being used on the right hand side of the assignment operator ('=' sign).
// const arr = [1, 2, ...[3, 4]];
// // This is the rest syntax because it is being used on the left hand side of the assignment operator ('=' sign).
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Using rest and spread syntax in combination of destructuring. Grab pizza and risotto, then throw the leftover elements not used in the otherFood array from  
// // the newly created array with all the menu items. When using the rest operator, it MUST be the last item in the array, otherwise JS will not know when to grab
// // the rest of the elements in the array.

// // Rest operator on an array
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Rest operator in objects. Destructuring the object.
// // Grab the saturday element out of the object and store the rest of the days in the weekday object.
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions using rest syntax on parameters

// // Function takes an unknown amount of numbers and adds each element
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spniach');
// restaurant.orderPizza('pepporoni');

// <-------------------SHORT CIRCUITING (&& AND ||)---------------->

// Use ANY data type, return ANY data type,

// In the use case of the OR (||) operator, short circuiting means that if the first value is a truthy value then it will immediately return the first value.
// The second value will never even be read.
// console.log(3 || 'Jonas');

// // Will return Jonas because an empty string is a falsy value.
// console.log('' || 'Jonas');

// // Will return true, because it is truthy,
// console.log(true || 0);

// // Undefined is a falsy value so the second operand will be read and then will return null. Null is also a falsy value
// console.log(undefined || null);

// Will return hello because that is the first truthy value in the chain of OR operators. 0 and empty string is falsy so it will short circuit the entire
// evaulation and return 'Hello'
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-------- AND --------');

// // Short-circuiting using the AND (&&) operator works the opposite way of the OR (||) operator. It will short-circuit when the first value is falsy. Whereas
// // using the OR operator it will short-circuit when the first value is truthy.
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// // Will return null because 'Hello' and 23 are truthy. Null is the first operand that is falsy so it will not read the rest of the evaluation.
// console.log('Hello' && 23 && null && 'Jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // if orderPizza does not exist (undefined) it will short ciruit the evaluation and nothing else will happen. If it is a truthy value then the second 
// // part will be evaluated.
// restaurant.orderPizza && restaurant.orderPizza('spinach', 'mushrooms');

// When using the OR operator it will return the first truthy value of all the operands or will return the last value if all the operands are falsy.
// When using the AND operator it will return the first falsy value of all the operands or will return the last value if all the operands are truthy.


// THE NULLISH (??) COALESCING OPERATOR

// Nullish values are null and undefined. (NOT 0 or '')

// Will return 10
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Will return 0 because the nullish coalescing operator will work with the concept of nullish values instead of falsy values. Only nullish values will
// // short-circuit the evaluation meaning it will go to the second operand.
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// LOGICAL ASSIGNMENT OPERATORS 

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // Assign 10 to numGuests if value is falsy.
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // OR assignment operator. Exactly the same as line 310 and 311.
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish coalescing assignment operator (null or undefined). Will assign a value to a avariable if that exact variable is currently nullish.
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator. REMEMBER this short circuits when first value is falsy assign a value to a variable if the value is currently truthy.
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// // falsy
// rest1.owner &&= '<ANONYMOUS>';

// // truthy
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// <------------------LOOPING ARRAYS THE FOR OF LOOP------------------->

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // entries() method will return a new array iterator object which contains the key value pair of the element and it's index number.
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// <------------ OPTIONAL CHAINING (?) ----------->

// ES2020 introduces optional chaining. If a certain property does not exist then udefined is returned immediately. Optional chaining
// and the nullish coalescing operator rely on nullish values. They are meant to work together most of the time.

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining. Only if mon exists, then the open property will be read. A property exists if it is not null or undefined (nullish).
// console.log(restaurant.openingHours.mon?.open);

// // Check if the openingHours property exists. If it does not then the mon property will not be read and return undefined.
// console.log(restaurant.openingHours?.mon?.open);

// // Real-world example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);

//   // Using the nullish coalescing operator to set 'closed' as a default value.
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Optional chaining on methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Optional chaining on arrays
// const users = [
//   {name: 'Jonas', email: 'hello@jonas.io'},
// ]

// console.log(users[0]?.name ?? 'User array is empty');

// if (users.length > 0) console.log(users[0].name); 
// else console.log('user array empty');

// <------------- LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES -------------->

// If we want just the property names or keys we will use the keys() method
// Returns: thu fri sat
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Returns: (3) ['thu', 'fri', 'sat']
const properties = Object.keys(openingHours);
console.log(properties);

// Returns: We are open on 3 days
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `
}
// Returns: We are open on 3 days: thi, fri, sat,
console.log(openStr);

// If we want the property values themselves we would use the values() method
const values = Object.values(openingHours);
console.log(values);

// // If we want the entire object which is the keys and values we will use the entries() method
const entries = Object.entries(openingHours);

// // looping over the entire object and then destructuring the array inside of the for loop
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// <--------------- SETS --------------->
// A set is a collection of unique values. NO duplicates. Sets can hold a mix of data types. You pass in an iterable into the Set()
// method. The order of a set does not matter. Sets are iterable. Sets are not intended to replace arrays, if you need to store elements
// in order and might contain duplicates, use arrays. If you really need to manipulate data, use arrays as they have access to more
// methods.

const ordersSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);``

// This will return: 'Set(3) {'Pasta', 'Pizza', 'Risotto'}' because it will ignore the duplicates.
// console.log(ordersSet);

// // New set with a string. Will return: 'Set(5) {'J', 'o', 'n', 'a', 's'}'
// console.log(new Set('Jonas'));

// // Will return: '3' as it will count the size of the set ignoring the duplicates. Pasta, pizza, and risotto and that equals 3.
// console.log(ordersSet.size);

// has() method will return true or false. It just checks if the set has the certain string.
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// // What if you accidentally added two new entries into the set of the same value? It will ignore the second one and will only return
// // one value of 'Garlic Bread' in the set.
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// // Deleting an element from a set.
// ordersSet.delete('Risotto');

// // Cannot use the index number to find the value of an element 
// // console.log(ordersSet[0]) will return undefined. If the values are unique, and the order does not matter, then you will not 
// // be able to retrieve the value from the set. Need to know where a value is in a set you would just use the has() method.

// // Delete all the elements from a set
// // ordersSet.clear();
// console.log(ordersSet);

// // Looping through a set
// for (const order of ordersSet) console.log(order);

// Main use case of sets is to remove duplicate values of arrays
// const staff = [
//   'Waiter', 
//   'Chef', 
//   'Waiter', 
//   'Manager', 
//   'Chef', 
//   'Waiter'
// ];

// const staffSet = new Set(staff);

// // Returns: 'Set(3) {'Waiter', 'Chef', 'Manager'}' as there are only 3 unique elements. Waiter, chef, and Manager
// console.log(staffSet);

// REMEMBER spread operator works on all iterables. Use the spread operator to turn the set into an array.
// const staffSet = [...new Set(staff)];

// // Returns '(3) ['Waiter', 'Chef', 'Manager']'
// console.log(staffSet);

// // If we only wanted to know how many different positions there are, and didn't need to unpack the set into an array
// // then use the size property. Will return '3'.
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// // Using the size property to find out how many letters are in my name. Will return '8'
// console.log(new Set('joshuayam').size);


// <-------------------- MAPS --------------->

// A map is a data structure that we can use to map values to keys. Data is stored in key value pairs like in objects. The big difference
// is that the keys can have any types. In objects the keys are basically always strings but in maps we can have any type of key. We could
// have a n object, an array, or even another map as a key.

// Create a new empty map
// const rest = new Map();

// // Set the values in the map by passing in the key name and the value as the parameters. Calling the set() updates the map that is called on
// // and returns the map.
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');

// // Returns: Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}
// console.log(rest.set(2, 'Lisbon, Portugal'));

// // You are able to chain the set() method because each time set() is called it is returning the map.
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open :D')
// .set(false, 'We are closed :(');

// // To read data from a map, you use the get() method which will be available on all maps. When we get the elements the data type of the key
// // matters. If you have a key in a map that is a boolean data type and you use the get() method and pass in a data type that is a string
// // you will get undefined.

// // Returns: Classico Italiano
// console.log(rest.get('name'));

// // If you tried to return true as a string you would get undefined because in the map, the key is a boolean data type not a string.
// // Returns: We are open :D
// console.log(rest.get(true));

// // Returns: Firenze, Italy
// console.log(rest.get(1));

// // Here we use a conditional with the get() method to check if the time is greating than the values in they 'open' and 'close' keys in the map.
// const time = 21;

// // Returns: We are open :D
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Check if map has the 'categories' key
// // Returns: true
// console.log(rest.has('categories'));

// // Delete the '2' key value pair in the map. Lisbon should be gone now.
// rest.delete(2);

// // Returns: {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}
// //console.log(rest);

// // size() returns how many elements are in the map
// // Returns: 7
// console.log(rest.size);

// // Clear, removes all the elements in the map
// // Returns: 0
// // console.log(rest.clear());

// // Using arrays or objects as map keys
// // rest.set([1,2], 'Test');
// // console.log(rest);

// // Create a variable so we can call the set() method and pass in the array. Otherwise will return undefined.
// const arr = [1, 2];
// rest.set(arr, 'Test');

// // We can use it on a DOM element, DOM elements are nothing more than a special type of object.

// // set() method using the h1 element as the key, and value as 'Heading'
// rest.set(document.querySelector('h1'), 'Heading');

// // Returns: 
// // Map(9) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}
// // [[Entries]]
// // 0
// // : 
// // {"name" => "Classico Italiano"}
// // 1
// // : 
// // {1 => "Firenze, Italy"}
// // 2
// // : 
// // {"categories" => Array(4)}
// // 3
// // : 
// // {"open" => 11}
// // 4
// // : 
// // {"close" => 23}
// // 5
// // : 
// // {true => "We are open :D"}
// // 6
// // : 
// // {false => "We are closed :("}
// // 7
// // : 
// // {Array(2) => "Test"}
// // 8
// // : 
// // {h1 => "Heading"}
// console.log(rest);

// // This does not return 'Test' and will instead return undefined because the two arrays are not the same object in the heap. Even though we 
// // declare it the same way in the set() method on line 670. In order to make it work you will have to create it as a variable like on line 669.
// // Returns: undefined
// // console.log(rest.get([1,2]));

// // Returns: Test
// console.log(rest.get(arr));

// <------------------ MAPS: ITERATION --------------->

// Instead of creating a new empty map and then using the set() method to populate the map like in the previous lecture we can create
// maps like this. If we were to add new elements programatically using code then the set() method would be the way to go. If you were to 
// create a new map from scratch, the example below would be the preferred. Does the array of arrays in the question map look similar?
// it is exactly the same array structure returned when calling the Object.entries() method.

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);

// Returns: the question map
//console.log(question);

// Returns: (3) [Array(2), Array(2), Array(2)]
// 0
// : 
// (2) ['thu', {…}]
// 1
// : 
// (2) ['fri', {…}]
// 2
// : 
// (2) ['sat', {…}]
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
// console.log(Object.entries(openingHours));

// Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));

// Returns: Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}
// console.log(hoursMap);

// Below is similar for when we destructured and looped over the object in past lectures but we had to use Object.entries() to convert it into
// an iterable. Objects by default are not iterable. Whereas the map by default is an iterable so no conversion needed.

// Loop over the question map, while also destructuring the map into two variables key and value. Check if the key is a number data type and 
//if so log the key and value to the console.
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// Compare the correct key and the answer the user entered. If it matches then return true. Then we plug it into another question.get()
// which if it returns true then it will print out correct and if it does not then it will return try again
// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// Returns: (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// console.log([...question]);

// Returns: (7) ['question', 1, 2, 3, 'correct', true, false]
// console.log([...question.keys()]);

// Returns: (7) ['What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, 'Correct!', 'Try again!']
// console.log([...question.values()]);

// <--------------- SUMMARY: WHICH DATA STRUCTURE TO USE? -------------------->

// Three sources of data:
// From the program itself: Data written directly in source code (e.g. status messages)
// From the UI: Data input from the user or data written in DOM (e.g. tasks in a todo app)
// From external sources: Data fetched for example from a web API (e.g. recipe objects)

// Where do we store collections of data? We use data structures.
// There are 4 built in data structures for JavaScript.
// If we need a simple list we can use arrays or sets.
// If we need key/value pairs we can use obejcts or maps. Keys will allow us to describe values.

// Data from web API is usually the most common source of data. It wil come in a special data format called JSON. It is essentially
// a long string but can be converted into a JS object as it uses the same formatting as objects and arrays.

// Arrays vs sets and objects vs maps

// Arrays:
// Example: tasks = ['Code', 'Eat', 'Code'];
// - Use when you needed ordered list of values (might contain duplicates)
// - Use when you need to manipulate data.

// Sets:
// Example: tasks = new Set(['Code', 'Eat', 'Code']);
// - Use when you need to work with unique vales.
// - Use when high-performance is really important.
// - Use to remove duplicates from arrays.

// Objects:
// Example: task = { task: 'Code', date: 'today', repeat: 'true'};
// - More 'traditional' key/value store ('abused' objects)
// - Easier to write and access values with . and []
// - Use when you need to include functions (methods). When you need functions as values. And can use the this keyword to access it.
// - Use when working with JSON (can convert to map).

// Maps:
// Example: task = new Map([
//  ['task', 'Code'],
//  ['date, 'today],
//  [false, 'Start coding!']
//  ]);
// - Better performance
// - Keys can have any data type
// - Easy to iterate
// - Easy to compute size
// - Cannot use the this keyword with it.
// - Use when you simply need to map key to values.
// - Use when you need keys that are not strings.

// <---------------------WORKING WITH STRINGS - PART 1---------------------->

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Returns: A
//console.log(plane[0]);

// Returns: B
// console.log('B737'[0]);

// Returns: 16
// console.log(airline.length);

// Returns: 4
// console.log('B737'.length);

// Returns: 6
// Will return the first instance of the letter 'r'
// console.log(airline.indexOf('r'));

// If there are multiple instances of 'r', it will return the last instance of 'r'.
// Returns: 10
// console.log(airline.lastIndexOf('r'));

// It is case sensitive, if you were missing the capital P in Portugal, it would return -1 cause it could not find it.
// Returns: -1
// console.log(airline.indexOf('portugal'));

// Returns: 8
// console.log(airline.indexOf('Portugal'));

// Returns: Air Portugal
// console.log(airline.slice(4));

// Strings are immutable. It would not change the underlying string. Air Portugal woud be a sub string. To use the sub string we would have to use
// it in a variable or a data structure. It returns a new string every time and that is why we're able to console.log it.


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1
// console.log(gk);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Countiho', 'Perisic',];
// console.log(players1Final);

// //5.
// const {
//   odds: 
//   { 
//     team1, 
//     x: draw, 
//     team2
//   },
// } = game;

// console.log(team1, team2, draw);

// //6.
// function printGoals(...playerNames) {
//   for (let i = 0; i < playerNames.length; i++) {
//     console.log(playerNames[i]);
//   }
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7. 
// team1 < team2 && console.log('Team 1 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1.

// The way I did it
// let goalNumber = 1;

// const playersScored = Object.values(game.scored);
// console.log(playersScored);

// for (const player of playersScored) {
//   console.log(`Goal ${goalNumber}: ${player}`);
//   goalNumber++;
// };

// // The way the instructor did it
// for (const [i, player] of game.scored.entries()) 
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2. 

// // The way I did it
// const averageOdds = Object.values(game.odds);
// let total = 0;

// for (let i = 0; i < averageOdds.length; i++) {
//   total += averageOdds[i];
// };

// console.log((total / averageOdds.length).toFixed(2));

// // The way the instructor did it
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
//   average /= odds.length;
//   console.log(average);

// // 3.
// // way I did it
// console.log(
//   `
//   Odd of ${game.team1}: ${game.odds.team1} 
//   Odd of draw: ${game.odds.x}
//   Odd of ${game.team2}: ${game.odds.team2} 
//   `
// );

// // Way the instructor did it
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // Bonus
// const scorers = [
//   { playerName: 'Gnarby', goalsScored: 1, },
//   { playerName: 'Hummels', goalsScored: 1, },
//   { playerName: 'Lewandowski', goalsScored: 2, },
// ];

// console.log(scorers);


///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. 
// We want the values from the gameEvents map
// console.log(gameEvents.values());

// We need to create an array of events, so we have to use the spread operator to unpack it and put into an array.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// If we wanted to calculate it with the extra time key value pair which is the last element in the map.
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


// 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
