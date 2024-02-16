const numberElement = document.getElementById("number");
function updateNumber() {
    let currentNumber = 1;
    function update() {
        numberElement.textContent = currentNumber;
        numberElement.classList.add("currentNumber");
        currentNumber++;
        if (currentNumber > 10) {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(update, 300);
}

updateNumber();

// ---------------------------------------------
const numberElement2 = document.getElementById("number2");
function updateNumber2() {
    let currentNumber2 = 1;
    function update2() {
        numberElement2.textContent = currentNumber2;
        numberElement2.classList.add("currentNumber2");
        currentNumber2++;
        if (currentNumber2 > 59) {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(update2, 50);
}

updateNumber2();
// -----------------------------------------------------------------
const numberElement3 = document.getElementById("number3");
function updateNumber3() {
    let currentNumber3 = 1;
    function update3() {
        numberElement3.textContent = currentNumber3;
        numberElement3.classList.add("currentNumber3");
        currentNumber3++;
        if (currentNumber3 > 16) {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(update3, 200);
}

updateNumber3();