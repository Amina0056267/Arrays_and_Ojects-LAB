console.log(1 === "1"); // strict equality
// Coercion
//  Always use triple equals

secretNumber = 9;
userGuess = 9;
if( userGuess === secretNumber){
    console.log("Congrats!");
} else if (userGuess < secretNumber){
    console.log("Lil' bit low...");
} else {
    console.log("Lil' bit high...");
}
