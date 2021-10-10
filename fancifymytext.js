let biggerButton = document.getElementById("Bigger");
let fancyRadio = document.getElementById("FancyShmancy");
let boringRadio = document.getElementById("BoringBetty");
let textArea = document.getElementById("Text");
let Moo = document.getElementById("Moo");


biggerButton.addEventListener("click", () => {
    textArea.style.fontSize = "4em";
});

fancyRadio.addEventListener("change", () => {
    addStyles();
})

boringRadio.addEventListener("change", () => {
    removeStyles();
})

Moo.addEventListener("click", () => {
    textArea.style.textTransform = "uppercase";
    changeText();
})


const changeText = () => {
    let sentences = textArea.value.split(".");
    let updatedSentences = sentences.map((sentence) => {
        return sentence = sentence + "-Moo";
    })
    console.log(updatedSentences);
    let newSentences = updatedSentences.join(".");
    textArea.value = newSentences;
}

const addStyles = () => {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
    boringRadio.checked = false; 
}

const removeStyles = () => {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none"
    fancyRadio.checked = false;
}