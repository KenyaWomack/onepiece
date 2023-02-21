let myName = "Kenya";
alert("Welcome to my page!");


let userName = prompt("What is your name?");
console.log(userName);

alert("Hello," + userName);

document.write("Hello to you!");


let animeChoice = prompt("Do you like One Piece? Type yes or no");
console.log(animeChoice);

if(animeChoice == "yes"){
    document.write("I do too!");
} else if (animeChoice == "no"){
  let anime =  prompt("What anime do you like to watch?");
    document.write("I like " + anime + " too.");
}else {
    document.write("I'll have to check that one out!");
}

document.write("Thank you for visiting my page!");
