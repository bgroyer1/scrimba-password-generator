const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let count = characters.length;
let password1 = ""
let password2 = ""
const password1El = document.querySelector(".password1-el")
const password2El = document.querySelector(".password2-el")
const passwordBtn = document.querySelector(".btn-password-generator")

function randomCharacter() {
    let randomCharacter = Math.floor(Math.random() * 91)
    return characters[randomCharacter]
    console.log(characters[randomCharacter])
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 16; i ++) {
        password += randomCharacter()
        console.log(password)
    }
    return password
}

passwordBtn.addEventListener("click", () => {
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()
}
)

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
