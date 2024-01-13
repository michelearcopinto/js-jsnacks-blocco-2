function generateRandomNum(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

let rightNumber = generateRandomNum(1, 100);
console.log(rightNumber);

let numeroInserito;

while (parseInt(numeroInserito) !== rightNumber) {

    numeroInserito = prompt("Inserisci un valore da 1 a 100, prova a indovinare il numero estratto casualmente!");

    console.log(numeroInserito);

    if (numeroInserito === null) {

        alert("Hai annullato l'inserimento. Il programma termina.");
        break;

    } else if (isNaN(parseInt(numeroInserito))) {

        alert('Inserisci un numero valido');

    } else if (parseInt(numeroInserito) < rightNumber) {

        alert('Il numero è troppo basso.');

    } else if (parseInt(numeroInserito) > rightNumber) {

        alert('Il numero è troppo alto.');
    }
}

if (numeroInserito !== null) {

    alert('Il numero è corretto.');

}




/*  ESERCIZIO FATTO CON CICLO FOR

function generateRandomNum(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const insertNumber = document.getElementById('insertNumber');
const rightNumberOutput = document.getElementById('rightNumberOutput');
const hintMessage = document.getElementById('hintMessage');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const numbersContainer = document.getElementById('numbersContainer');

let numbersGroup = [];

for (let i = 1; i <= 100; i++) {

    numbersGroup.push(i);
}

console.log(numbersGroup);

let rightNumber = generateRandomNum(1, 100);
console.log(rightNumber);

let numbersList = document.createElement('ul');
numbersContainer.append(numbersList);

startButton.addEventListener('click', function () {

    if (isNaN(insertNumber.valueAsNumber) || insertNumber.valueAsNumber === null) {

        alert('Il valore inserito non è corretto')
    } else {

        let numbersElement = document.createElement('li');
        numbersElement.classList.add('fw-bold', 'fs-3');
        numbersElement.textContent = insertNumber.valueAsNumber;
        numbersList.append(numbersElement);

        if (insertNumber.valueAsNumber !== rightNumber) {

            numbersList.lastElementChild.style.color = 'red';
            hintMessage.style.color = 'red';

            if (insertNumber.valueAsNumber < rightNumber) {

                hintMessage.innerHTML = 'Il numero è troppo basso.';

            } else if (insertNumber.valueAsNumber > rightNumber) {

                hintMessage.innerHTML = 'Il numero è troppo alto.';
            }

        } else if (insertNumber.valueAsNumber === rightNumber) {

            numbersList.lastElementChild.style.color = 'green';
            hintMessage.style.color = 'green';

            rightNumberOutput.valueAsNumber = rightNumber;
            hintMessage.innerHTML = 'Il numero è corretto.';

            startButton.classList.add('disabled')
        }

        insertNumber.value = null;
    }
})

resetButton.addEventListener('click', function () {

    let liToRemove = document.querySelectorAll('li');

    for (let i = 0; i < liToRemove.length; i++) {

        liToRemove[i].remove();
    }

    liToRemove = [];
    hintMessage.innerHTML = ""

    rightNumber = generateRandomNum(1, 100);
    console.log(rightNumber);

    rightNumberOutput.value = null;

    startButton.classList.remove('disabled')
})

 */