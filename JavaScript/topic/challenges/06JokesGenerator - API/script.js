const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

const jokeID = document.getElementById("joke");
const jokeBTN = document.getElementById("jokeBtn");

async function tellingFunction(jokeURL) {
    try {

        const calling = await fetch(jokeURL);
        const jsonReply = await calling.json();
        let local = ""
        // const jokeID = document.getElementById("joke");
        if (jsonReply["setup"]) {
            local = jsonReply["setup"] + " " + jsonReply["delivery"];
        }
        else {
            local = jsonReply["joke"];

        }
        jokeID.innerHTML = local
    }
    catch {
        console.log("error found");
        return "Error found"
    }
}
console.log(jokeID);

jokeBTN.addEventListener("click", () => {
    console.log(jokeID);
    tellingFunction(apiUrl)
})
tellingFunction(apiUrl)