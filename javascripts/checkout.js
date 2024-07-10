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
