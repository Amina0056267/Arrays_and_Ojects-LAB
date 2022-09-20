const my_array = ["milk", "bread", "eggs", "apples"];
const numbers = [1,2,3,4,5];
const empty_array = [];


//  adds to the end of array
groceries.push("dog food");

//  Removes last item
groceries.pop();

// adds new item to beginning of array
groceries.unshift("coffee");

//  removes first item 
groceries.shift();

console.log(groceries);

const user = {
    id: 1,
    name: "Amina",
    email: "hello@amina.uk"
}

const users = [
   { id: 2,
    name: "Bob",
    email: "hello@bob.uk"
   },
   { 
    
    id: 3,
    name: "May",
    email: "hello@May.uk"
   }

]

users[0].email = "email@hotmail.com";

users.push({ id: 4, name: "something", email: "something@hotmail.com"})

console.log(users);