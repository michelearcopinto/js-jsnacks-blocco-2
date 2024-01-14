const insertNumber = document.getElementById('insertNumber');
const sumOutput = document.getElementById('sumOutput');
const numbersContainer = document.getElementById('numbersContainer');
const startButton = document.getElementById('startButton');

let numbersList = document.createElement('ul');
numbersContainer.append(numbersList);

let evenNumbers = [];

startButton.addEventListener('click', function () {

    numbersList.innerHTML = '';

    for (let i = 0; i <= insertNumber.valueAsNumber; i++) {

        let numberElement = document.createElement('li');
        numbersList.append(numberElement);

        if (i % 2 == 0) {

            numberElement.textContent = i;
            evenNumbers.push(i);

        } else {

            numberElement.textContent = `${i + 1} invece di ${i}`;
            numberElement.style.color = 'red';
        }
    }

    let sum = 0;

    for (let i = 0; i < evenNumbers.length; i++) {

        sum += evenNumbers[i];
    }

    sumOutput.value = `La somma è: ${sum}`;

    insertNumber.value = null;
    evenNumbers = [];
})