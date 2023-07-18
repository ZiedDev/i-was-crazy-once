let text = "";
const textContainer = document.getElementById("text");

const sentence1 = "\nCrazy?";
const sentence2 = "\nI was Crazy once.";
const sentence3 = "\nThey locked me in a room.";
const sentence4 = "\nA rubber room.";
const sentence5 = "\nA rubber room with rats.";
const sentence6 = "\nRats made me crazy.";

const sentencesArray = [sentence1, sentence2, sentence3, sentence4, sentence5, sentence6];

let j = 0;
let i = 0;

document.addEventListener("keydown", () => {

    if (i >= sentencesArray[j].length) {
        j++;
        i = 0;
        console.log(`i: ${i}
        j: ${j}`);
    }

    if (j < sentencesArray.length) {
        text = text + String(sentencesArray[j].charAt(i));
        textContainer.textContent = text;
        i++;
    } else {
        j = 0;
    }

    window.scrollTo(0, document.body.scrollHeight);
});

document.addEventListener("touchstart", () => {

    if (i >= sentencesArray[j].length) {
        j++;
        i = 0;
        console.log(`i: ${i}
        j: ${j}`);
    }

    if (j < sentencesArray.length) {
        text = text + String(sentencesArray[j].charAt(i));
        textContainer.textContent = text;
        i++;
    } else {
        j = 0;
    }

    // window.scrollTo(0, document.body.scrollHeight);
});