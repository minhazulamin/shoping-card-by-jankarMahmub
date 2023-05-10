function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phoneNumber-field')
    const phoneNumberString = phoneNumberField.value
    const previousPhoneNumber = parseInt(phoneNumberString); 
    let phoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
        
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    
}
function updateTotalPhoneNumberPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total')
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-plus').addEventListener('click', function(){
updatePhoneNumber(true);
updateTotalPhoneNumberPrice(newPhoneNumber)
calculateSubTotal()
})
 
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false)
    updateTotalPhoneNumberPrice(newPhoneNumber)
    calculateSubTotal()
})
 