const users = [

    {
        id: 1,
        name: "Amina",
        email: "hello@amina.uk"
    },

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

const shoppingList = [ "milk", "eggs", "bread", "apples", "coffee", "biscuits"];

users.forEach(user => {
    const newUser = new user(user)
    newUser.save()
   })

   shoppingList.forEach((item, idex) => {
    console.log(item.toUpperCase());
   });

   while (counter <10){
    counter++;
    console.log(counter);
   }

   while(true){
    rand =Math.random();
    console.log(rand);
    if(rand > 0.8){
        break;
    }
   }