
// 卡片1
function changeQuantity(direction) {
    const elem = document.querySelector(`#quantity`);
    const hiddenQuantityElem = document.querySelector(`#hiddenQuantity`);
    let quantity = parseInt(elem.getAttribute('quantity'));
    

    if (direction === '-') {
        quantity--;
    } else if (direction === '+') {
        quantity++;
    } else {
        alert("What's wrong with you?");
    }

    elem.innerHTML = quantity;
    elem.setAttribute('quantity', quantity);

    // 要透過程式觸發事件要補最下面一行
    hiddenQuantityElem.value = quantity;
    hiddenQuantityElem.dispatchEvent(new Event('change'));

}


function calSubTotal() {
    const subTotal = document.querySelector(`#subTotal`);
    const quantity = parseInt(event.target.value);
    const price = parseFloat(event.target.getAttribute('price'));

    subTotal.innerHTML = (quantity * price).toFixed(2);
}

// 卡片2
function changeQuantity2(direction) {
    const elem = document.querySelector(`#quantity2`);
    const hiddenQuantityElem = document.querySelector(`#hiddenQuantity2`);
    let quantity = parseInt(elem.getAttribute('quantity'));

    if (direction === '-') {
        quantity--;
    } else if (direction === '+') {
        quantity++;
    } else {
        alert("What's wrong with you?");
    }

    elem.innerHTML = quantity;
    elem.setAttribute('quantity', quantity);

    // 觸發事件
    hiddenQuantityElem.value = quantity;
    hiddenQuantityElem.dispatchEvent(new Event('change'));
}

function calSubTotal2(event) {
    const subTotal = document.querySelector(`#subTotal2`);
    const quantity = parseInt(event.target.value);
    const price = parseFloat(event.target.getAttribute('price'));

    subTotal.innerHTML = (quantity * price).toFixed(2);

}

// // 觸發異常，先寫在HTML裡
// // 計算 item-total
// function calculateItemTotal(event) {
//     const price1 = parseFloat(document.querySelector('#hiddenQuantity').getAttribute('price'));
//     const quantity1 = parseInt(document.querySelector('#hiddenQuantity').value);
//     const price2 = parseFloat(document.querySelector('#hiddenQuantity2').getAttribute('price'));
//     const quantity2 = parseInt(document.querySelector('#hiddenQuantity2').value);

//     const itemTotal = (price1 * quantity1) + (price2 * quantity2);
//     return itemTotal;
// }

// // 計算 tax-total
// function calculateTaxTotal(itemTotal) {
//     const taxRate = 0.05;
//     const taxTotal = itemTotal * taxRate;
//     return taxTotal;
// }

// // 更新總價顯示
// function updateTotalPrices() {
//     const itemTotal = calculateItemTotal();
//     const taxTotal = calculateTaxTotal(itemTotal);
//     const orderTotal = itemTotal + taxTotal;

//     document.querySelector('#item-total').textContent = `US $${itemTotal.toFixed(2)}`;
//     document.querySelector('#tax-total').textContent = `US $${taxTotal.toFixed(2)}`;
//     document.querySelector('#order-total').textContent = `US $${orderTotal.toFixed(2)}`;
// }

// // 監聽數量選取器的變化，更新總價
// document.querySelector('#hiddenQuantity').addEventListener('change', updateTotalPrices);
// document.querySelector('#hiddenQuantity2').addEventListener('change', updateTotalPrices);
