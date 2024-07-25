function doFirst(){
    document.querySelector('#signin').onclick = checkForm  //檢查帳密
    document.querySelector('#cancel').onclick = clearInputs  //清空輸入資料
}

function checkForm(){
    let emailInput = document.querySelector('#email').value
    let passwordInput = document.querySelector('#password').value
    
    let emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;  //email的規則
    let passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/  //密碼至少6位數，須包含英文大小寫及數字

    if(emailRule.test(emailInput)){
        if(passwordRule.test(passwordInput)){
            alert(`Not a member yet? Please register first or change another Email account.`)
        }else{
            alert(`Please enter a valid password.`)
        }
    }else{
        alert(`Please enter a valid Email account.`)
    }
}

function clearInputs(){
    document.querySelector('#email').value = ''
    document.querySelector('#password').value = ''  
}




window.addEventListener('load', doFirst)