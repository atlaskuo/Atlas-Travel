// numberpicker
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

// according
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // 切換 "active" class，以突顯控制面板的按鈕
    this.classList.toggle("active");

    // 獲取下一個同級元素，即面板
    var panel = this.nextElementSibling;

    // 隱藏其他已打開的面板
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.display = "none";
      }
    }

    // 切換顯示/隱藏狀態
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}