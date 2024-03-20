let tries = 5;
let y = Math.floor(Math.random() * 10 + 1);

const lives = document.getElementById("lives");
lives.innerHTML= "";

for (let index = 0; index < tries; index++) {
    lives.innerHTML += '<i class="fa-solid fa-heart fa-sm" style="color: #ff007b;"></i>'
}

document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("Guess").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ");
    }

    else if (x > y) {
        tries--;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        tries--;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}