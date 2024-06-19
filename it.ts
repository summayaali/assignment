//create a program a simple frient Friend list

// i. Define an object named people containing an empty array called friends.

let people ={
    friend:
};

//  Create three separate objects, each representing a friend, with properties like firstName,
//lastName, and optionally id.
type Friend ={
    //friends: string[]
    firstName:string;
    lastName:string;
    Id?:number;
};
let friend1:Friend={
    firstName:"zara",
    lastName:"malik",
    Id:1,
};
let friend2:Friend={
     firstName:"ifra",
     lastName:"batool",
     Id:2,
};
let friend3:Friend={
    firstName:"maha",
    lastName:"zia",
    Id:3,
};

//  Add these friend objects to the friends array within the people object.
people.friend.push( friend1,friend2,friend3);
//  Output the entire people object to the console, displaying your information and your
// friend list.
console.log(people);

// Question:02
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".

var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join());

//Question:03
// Implement data structures in TypeScript to represent and manage product
//information.
//Task: Create a program to represent a product catalog using an array and perform basic queries.

//step 1: Define the product iterface.
interface product {
    name: string;
    model: string;
    cost: number;
    quantity: number;
}
//step 2: create three product object.
const Product1:{
    name: "laptop",
    model: "BDA321",
    cost: "5000",
    quantity: "1",
};
const Product2:{
    name: "watch",
    model: "CA093",
    cost: "3000",
    quantity: "10",
};
const Product3:{
    name: "headphones",
    model: "BBG00",
    cost: "1000",
    quantity: "7",
};
//step 3: Initiate the inventory array and add product.
let inventory: product[]=[];
//step 4: add products to the inventory array.
inventory.push;
inventory.push;
inventory.push;
// Step 5: Access and log the quantity property of a specific product 
console.log(`Quantity of ${inventory[2].name}: ${inventory[2].quantity}`);

// Step 6: Explore adding and accessing more elements
// Adding more products
const product4: {
    name: "Tablet",
    model: "PQR567",
    cost: 500,
    quantity: 8
};
inventory.push;

// Logging all products in inventory
console.log("Current Inventory:");
inventory.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product.name}, Quantity: ${product.quantity}`);
});

// Question 4:
let student: student[]=[
    { name: "maheen", senior: true, assignmentsCompleted: true },
    { name: "maham", senior: false, assignmentsCompleted: true },
    { name: "sana", senior: true, assignmentsCompleted: false },
    { name: "saba", senior: false, assignmentsCompleted: false },
    { name: "javeria", senior: true, assignmentsCompleted: true },
];