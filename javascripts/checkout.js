
// 個別數量選取器功能
function increment(itemId) {
    const numberElement = document.getElementById(`number-${itemId}`);
    const currentQuantity = parseInt(numberElement.textContent);
    const newQuantity = currentQuantity + 1;
    numberElement.textContent = newQuantity;
}

function decrement(itemId) {
    const numberElement = document.getElementById(`number-${itemId}`);
    const currentQuantity = parseInt(numberElement.textContent);
    if (currentQuantity > 1) {
        const newQuantity = currentQuantity - 1;
        numberElement.textContent = newQuantity;
    }
}

// // 
// function updateItemTotal(itemId) {
//     let numberElement = document.getElementById(`number-${itemId}`);
//     let itemTotalElement = document.getElementById(`itemTotal-${itemId}`);
    
//     let currentQuantity = parseInt(numberElement.textContent);
//     let itemPrice = parseFloat(itemTotalElement.textContent.replace('$', '')); // 移除美元符號並轉換為浮點數
    
//     let newTotal = (currentQuantity * itemPrice).toFixed(2); // 四捨五入到小數點後兩位
//     itemTotalElement.textContent = `$ ${newTotal}`;
// }

// // 
// function updatePaymentTotals() {
//     const itemTotalElements = document.querySelectorAll('[id^="itemTotal-"]');
    
//     let totalItems = 0;
//     let totalTax = 0;
    
//     itemTotalElements.forEach((element) => {
//         const itemPrice = parseFloat(element.textContent.replace('$', ''));
//         totalItems += itemPrice;
//         totalTax += itemPrice * 0.05;
//     });
    
//     const itemTotalElement = document.getElementById('item-total');
//     const taxTotalElement = document.getElementById('tax-total');
//     const orderTotalElement = document.getElementById('order-total');
    
//     itemTotalElement.textContent = `$ ${totalItems.toFixed(2)}`;
//     taxTotalElement.textContent = `$ ${totalTax.toFixed(2)}`;
    
//     const orderTotal = totalItems + totalTax;
//     orderTotalElement.textContent = `$ ${orderTotal.toFixed(2)}`;
// }

// // 在每次更新數量選取器時呼叫這個函數
// // 例如：updateItemTotal('item1') 或 updateItemTotal('item2')