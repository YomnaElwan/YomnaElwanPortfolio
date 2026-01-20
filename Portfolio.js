const text = "Hello, I'm Yomna Sayed Ahmed Elwan";
let index = 0;
const speed = 80;
const typingElement = document.getElementById("typingName");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

const paragraph = "I'm a Junior Full Stack .Net Developer who understands business systems and data, not just code.";
let paragraphIndex = 0;
const typingSpeed = 40;
const typingParagraph = document.getElementById("typingParagraph");

function typingElementFunc() {
    if (paragraphIndex < paragraph.length) {
        typingParagraph.innerHTML += paragraph.charAt(paragraphIndex);
        paragraphIndex++;
        setTimeout(typingElementFunc, typingSpeed);
    }
}

window.addEventListener("load", typeEffect);
window.addEventListener("load", typingElementFunc);
