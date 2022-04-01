function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueText = inputField.value;
    const value = parseFloat(valueText);
    inputField.value = '';
    return value;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldInputValue = fieldTag.innerText;
    const value = parseFloat(fieldInputValue);
    fieldTag.value = '';
    return value;

}

function updateTotal(fieldId, amount){
    // const totalValue = document.getElementById(fieldId);
    // const previousTotalText = totalValue.innerText;
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    // totalValue.innerText = newTotal;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function updateBalance(amount , isAdding){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceText = balanceTag.innerText;
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    
    if(isAdding == true){
       
     newBalance = previousBalance + amount;

    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;

}


document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    if( amount > 0){
       
        updateTotal('deposit-total' , amount);
        updateBalance(amount , true);
    }
   });

document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if( amount > 0 && amount<= balance){
        
        updateTotal('withdraw-total', amount);
        updateBalance(amount , false);
    }
  });