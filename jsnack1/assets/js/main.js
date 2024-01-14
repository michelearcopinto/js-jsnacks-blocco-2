const sumOutput = document.getElementById('sumOutput');
const numbersContainer = document.getElementById('numbersContainer');
const startButton = document.getElementById('startButton');

let numeroInserito;

let numeriInseriti = [];

let i = 0;
let sum = 0;

let numbersList = document.createElement('ul');
numbersList.classList.add('fw-bold', 'fs-3', 'text-center');
numbersContainer.append(numbersList);

startButton.addEventListener('click', function () {

    sum = 0;
    sumOutput.value = null;
    numbersList.innerHTML = '';

    while (sum < 50) {

        numeroInserito = prompt(`Inserisci un valore; l'ammontare attuale è di ${sum}`);

        console.log(numeroInserito);

        if (numeroInserito === null) {

            alert("Hai annullato l'inserimento. Il programma termina.");
            break;

        } else if (isNaN(parseInt(numeroInserito))) {

            alert('Inserisci un numero valido');

        } else {

            numeriInseriti.push(parseInt(numeroInserito));

            sum += numeriInseriti[i];

            let numbersElement = document.createElement('li');
            numbersElement.textContent = numeriInseriti[i];
            numbersList.append(numbersElement);

            i++;
        }
    }

    console.log(numeriInseriti);
    numeriInseriti = [];

    if (numeroInserito !== null) {

        alert(`Hai superato il limite di 50 per la somma, hai ottenuto ${sum}`);

    }

    sumOutput.valueAsNumber = sum;
})



/* ESERCIZIO FATTO CON IL CICLO FOR AL CLICK DI UN BUTTON

const insertNumber = document.getElementById('insertNumber');
const sumOutput = document.getElementById('sumOutput');
const errorMessage = document.getElementById('errorMessage');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const numbersContainer = document.getElementById('numbersContainer');

let numbersGroup = [];

let numbersList = document.createElement('ul');
numbersContainer.append(numbersList);

let sum = 0;

startButton.addEventListener('click', function () {

    if (insertNumber.valueAsNumber <= 0 || isNaN(insertNumber.valueAsNumber)) {

        alert('inserisci un numero valido');

    } else {

        let numbersElement = document.createElement('li');
        numbersElement.classList.add('fw-bold', 'fs-3');
        numbersElement.textContent = insertNumber.valueAsNumber;
        numbersList.append(numbersElement);

        numbersGroup.push(insertNumber.valueAsNumber);
        console.log(numbersGroup);

        sum += insertNumber.valueAsNumber;

        sumOutput.valueAsNumber = sum;

        insertNumber.value = null;

        if (sumOutput.valueAsNumber >= 50) {
            alert('Hai superato il limite di 50 per la somma.');

            numbersList.lastElementChild.style.color = 'red'

            errorMessage.innerHTML = `La somma è <strong>${sum}</strong> ed hai sforato di <strong>${sum - 50}</strong>`;
        }
    }
})

resetButton.addEventListener('click', function () {

    let liToRemove = document.querySelectorAll('li');

    for (let i = 0; i < numbersGroup.length; i++) {

        liToRemove[i].remove();
    }

    numbersGroup = [];
    liToRemove = [];
    errorMessage.innerHTML = ""

    sumOutput.value = null;
})

 */


