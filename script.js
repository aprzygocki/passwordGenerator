// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// 

// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('Uppercase');
const lowercaseEl = document.getElementById('Lowercase');
const numbersEl = document.getElementById('Numbers');
const symbolsEl = document.getElementById('Symbols');
const generateEl = document.getElementById('Generate');

const randomFunc = {
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol,
};

// generate event listener
generate.addEventListener("click", () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
        
    resultEl.innerText =generatePassword (
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length,
    );
});
// copy password to clipboard
generate.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if (!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert ('Password copied to clipboard!');
})
// generate password function
function generatePassword(
    lower,
    upper,
    number,
    symbol,
    length,
){
let generatedPassword = '';
const typesCount = lower + upper + number + symbol;

console.log ('typesCount: ', typesCount);

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter (item => Object.values(item)[0])
console.log ('typesCount: ', typesArr);

if(typesCount === 0){
    return '';
}
for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        console.log('funcName:', funcName);

        generatedPassword += randomFunc [funcName]();
    })
}
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}
// generator functions - visit http://www.net-comber.com/charset.html to see character set chart
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26) +97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26) +65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*26) +48);
}
function getRandomSymbol() {
    const symbols = '~!@#$%^&*_+=-`;:,./<>?\{}|'
    return symbols [Math.floor(Math.random()*symbols.length)];
}

console.log(getRandomLower());