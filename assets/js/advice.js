/* Getting the advice */
export async function advice(){
    const requestURL = "https://api.adviceslip.com/advice"
    const request = new Request(requestURL);

    const response = await fetch(request);
    const advice = await response.json();

    //Storage as an object
    var obj = advice["slip"];

   //Transfering the text to the proper place
   transferText(document.querySelector("div.advice__text p"), obj["advice"])
   transferText(document.querySelector("h4.advice__id span"), "#"+obj["id"])
}

/* Transfer the text of the advice to the p element */
export function transferText(target, text){
    target.innerHTML = text;
}
