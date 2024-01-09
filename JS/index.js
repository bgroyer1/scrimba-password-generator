const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const generateBtn = document.querySelector("#generate-btn");
const password1Div = document.querySelector("#password-div1");
const password2Div = document.querySelector("#password-div2");
const characterLimit = document.querySelector("#character-limit")
const limitSubmit = document.querySelector("#character-limit-submit") 
const p1El = document.querySelector("#p-1")


function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
}


function randomPassword() {
    let password = ""
    for (let i = 0; i < characters.length; i++) {
        if (password.length < 15) {
            password += randomCharacter()
        } else {
            break;
        }
    }
    return password
}

generateBtn.addEventListener("click", () => {
    let password1 = randomPassword()
    let password2 = randomPassword();
    password1Div.textContent = password1
    password2Div.textContent = password2
})

document.getElementById("clipboard1").addEventListener("click", () => {
    var range = document.createRange();
    range.selectNode(password1Div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    p1El.textContent = `Password 1 copied to clipboard`
})

document.getElementById("clipboard2").addEventListener("click", () => {
    var range = document.createRange();
    range.selectNode(password2Div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    p1El.textContent = `Password 2 copied to clipboard`
})