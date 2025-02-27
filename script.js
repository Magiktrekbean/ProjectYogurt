function greet() {
    let name = prompt("Hey girly pop🙋🏿‍♀️! What's your name?");
    let email = prompt("Oh yeah?! BFFLs? What's your email?");
    let emoji = prompt("Cool beans😎. Last question? What's your fav emoji?");

    if (!name && !email && !emoji) {
        alert("Thanks for reading my article!");
    } else if (!name && !email) {
        alert("Thanks for reading my article! I hope you enjoy lots of froyo " + emoji + "!");
    } else if (name && emoji){
        alert ("Thanks for reading my article "+ name + "! I hope you enjoy lots of froyo " + emoji + "!");}
    else if (name && email){
        alert("Okay friend, we will keep in touch via " + email );}
    else if (name){
        alert("Thanks for reading my article " + name + "!");}
        else if (!name) {
        alert("Okay friend, we will keep in touch via " + email + " " + emoji + "!");
    } else {
        alert("Thank you " + name + "! We'll be in touch by email, enjoy lots of frozen yogurt, miss ting! " + emoji);
    }
}

let buyher = document.querySelector(".buyher");
buyher.addEventListener("click", greet);