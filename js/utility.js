function calculateSubTotal() {
    const currentPhoneTotal = getElementValueById('phone-total')
    const currentCaseTotal = getElementValueById('case-total')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTexElementValueById('sub-total', currentCaseTotal)

    // calculate tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseInt(taxAmountString)
    setTexElementValueById('tax-total', taxAmount)
    const finalAmount = currentSubTotal + taxAmount;
    setTexElementValueById('final-total', finalAmount)

}

function setTexElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value;
}
function getElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}