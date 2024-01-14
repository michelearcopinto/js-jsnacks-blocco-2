function generateRandomNum(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const insertNumber = document.getElementById('insertNumber');
const differenceArrays = document.getElementById('differenceArrays');
const arrayOneOutput = document.getElementById('arrayOneOutput');
const arrayTwoOutput = document.getElementById('arrayTwoOutput');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let arrayOne = [];
let arrayTwo = [];
let minimalArray = []

let arrayOneList = document.createElement('ul');
arrayOneOutput.append(arrayOneList);

let arrayTwoList = document.createElement('ul');
arrayTwoOutput.append(arrayTwoList);

startButton.addEventListener('click', function () {

    if (isNaN(insertNumber.valueAsNumber)) {

        alert('Il numero inserito non è valido.');

    } else {

        let liToRemove = document.querySelectorAll('li');

        for (let i = 0; i < liToRemove.length; i++) {

            liToRemove[i].remove();
        }

        console.log(liToRemove)
        liToRemove = [];


        let randomArrayOutputPick = generateRandomNum(1, 2);
        let otherOutputArray, randomArrayPick, otherArray;
        console.log(randomArrayOutputPick);

        if (randomArrayOutputPick === 1) {

            randomArrayOutputPick = arrayOneOutput;
            otherOutputArray = arrayTwoOutput;
            randomArrayPick = arrayOne;
            otherArray = arrayTwo;

        } else if (randomArrayOutputPick === 2) {

            randomArrayOutputPick = arrayTwoOutput;
            otherOutputArray = arrayOneOutput;
            randomArrayPick = arrayTwo;
            otherArray = arrayOne;
        }


        for (let i = 0; i <= insertNumber.valueAsNumber; i++) {

            let arrayElement = document.createElement('li');
            arrayElement.textContent = i;
            randomArrayOutputPick.append(arrayElement);
            randomArrayPick.push(i);
        }


        for (let i = 0; i <= generateRandomNum(0, insertNumber.valueAsNumber); i++) {

            let arrayElement = document.createElement('li');
            arrayElement.textContent = i;
            otherOutputArray.append(arrayElement);
            otherArray.push(i);
            minimalArray.push(i);
        }

        console.log(randomArrayPick);
        console.log(otherArray);

        let incrementale = otherArray.length;

        while (otherArray.length < randomArrayPick.length) {

            let arrayElement = document.createElement('li');
            arrayElement.textContent = incrementale;
            arrayElement.style.color = 'red'
            otherOutputArray.append(arrayElement);
            otherArray.push(incrementale);

            incrementale++;
        }

        console.log(randomArrayPick);
        console.log(otherArray);
        console.log(minimalArray);

        differenceArrays.value = `Differenza di ${randomArrayPick.length - minimalArray.length} elementi`;

        arrayOne = [];
        arrayTwo = [];
        minimalArray = [];

        insertNumber.value = null;
    }
})