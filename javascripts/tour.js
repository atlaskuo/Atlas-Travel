// 數量選取器功能


let currentNumber = 1;
    const numberElement = document.getElementById('number');

function increment() {
    currentNumber++;
    updateNumber();
}

function decrement() {
    if (currentNumber > 1) {
    currentNumber--;
    updateNumber();
    }
}

function updateNumber() {
    numberElement.textContent = currentNumber;
}
                    