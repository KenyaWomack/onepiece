function greeting() {
    let userName = prompt("What is your name?");
    console.log(userName);

    alert("Hello," + userName);

    document.write("Hello to you " + userName);
}

function validateForm(answer) {
    if (answer === "") {
        alert(answer + " must be filled out");
        console.log(answer);
        return false;

    }
}

greeting();


// let myName = "Kenya";
alert("Welcome to my page!");




function likesAnime() {
    let animeChoice = prompt("Do you like One Piece? Type yes or no");
    console.log(animeChoice);
    validateForm(animeChoice)
    if (animeChoice == "yes") {
        document.write("I do too!");
    } else if (animeChoice == "no") {
        let anime = prompt("What anime do you like to watch?");
        document.write("I like " + anime + " too.");
    } else {
        document.write("I'm not sure what that one is. I'll have to check that one out!");
    }
}

likesAnime();
    

function ending() {
    document.write("Thank you for visiting my page!");
}

ending();

let myNumber =parseInt(prompt("How many stars would you give One Piece? 1-5"));
// let answer = prompt("Only numbers 1-5 please")

while (myNumber < 1 || myNumber > 5) {
    myNumber = prompt("Please choose again - Only numbers 1-5 please");
}

for (let i = 1; i <= myNumber; i++) {
    let img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpnDIQumZ4M76KIk21xmtrk0pDPIOXLzKbA&usqp=CAU";
    let image = document.getElementById("picture");
    image.appendChild(img);
    
}

let x = 5

while (x < 5) {
    console.log(x)
    x++;
}