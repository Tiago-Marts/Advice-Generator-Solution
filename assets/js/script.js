import { rollDice } from "./dice.js"
import { transferText, advice } from "./advice.js"

window.onload = () => {
    /* Getting the elements after loading*/
    const button = document.querySelector("button.submit")
    const text = document.querySelector("p.advice__text");
    const span = document.querySelector("h4.advice__id span");
    const dice = document.querySelector("button.submit div.dice")
    
    //Just to speed up things
    const dots = "<section class='load'> <div class='dots'></div> <div class='dots'></div> <div class='dots'></div> </section>"

    advice()
    rollDice()

    /* On clicking the button generanting a new advice */
    button.addEventListener("click", async () => {
        transferText(text, "Await" + dots)
        transferText(span, dots)


        setTimeout(() => {
            advice()
        }, 2000)

    });

    /* On clicking the button generanting a new number */
    button.addEventListener("click", async () => {

        //Removing
        dice.classList.remove("rolled")
        dice.classList.add("roll");

        setTimeout(() => {
            rollDice()
        }, 2000)

    });
}