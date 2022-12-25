//Getting the elements
const dice = document.querySelector("button.submit div.dice")

/* Generanting a random class number to the dice div */
const numbers = ["one", "two", "three", "four", "five", "six"];

export async function rollDice(){
    //Create random number
    var index = Math.floor(Math.random() * 6);
    var number = numbers[index];

    //Check if is different from the last class generated and apply or re-generate
    dice.classList.contains(number)? rollDice() : dice.classList = "dice " + number
    dice.classList.add("rolled") 
}