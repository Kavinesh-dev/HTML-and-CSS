"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({
    time,
    address,
    dish1,
    dish2,
    starterIndex,
    mainIndex,
  }) {
    console.log(
      `Your order ${dish1[starterIndex]}, ${dish2[mainIndex]} will be delivered to [${address}] at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "11:04 am",
  address: "Via Del Sol, 24 California",
  dish1: restaurant.starterMenu,
  dish2: restaurant.mainMenu,
  starterIndex: 2,
  mainIndex: 1,
});

/*********************************************/
//DESTRUCTURING ARRAY
/*********************************************/

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

/**Switching variables
const temp = first;
first = second;
second = temp;
console.log(first, second);*/

[first, second] = [second, first];
console.log(first, second);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring the nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, h]] = nested;
console.log(i, j, h);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
