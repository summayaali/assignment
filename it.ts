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








/