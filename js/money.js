document.getElementById('Click-btn').addEventListener('click',function(){
    const foodElementField =document.getElementById('food-input').value;
    const foodElement =parseFloat(foodElementField);
    // console.log(foodElement);
    const rentElementField =document.getElementById('rent-input').value;
    const remtElement =parseFloat(rentElementField);
    // console.log(foodElement, remtElement);
    const clothElementField =document.getElementById('cloth-input').value;
    const clothElement =parseFloat(clothElementField);
    const totalExpenses =foodElement + remtElement + clothElement;
        // console.log(totalExpenses);


    const expensesField =document.getElementById('total-expenses');
    const expensesString =expensesField.innerText;
    const expensesn =parseFloat(expensesString);
    expensesField.innerText =totalExpenses;
    // console.log(expensesNum);
        const ballanceElementField =document.getElementById('ballance-input').value;
        const ballanceElement =parseFloat(ballanceElementField);
        

        const totalAfterMinus = ballanceElement - totalExpenses;
        // console.log(totalAfterMinus);

        const balancefield =document.getElementById('blns');
        const ballanceFieldString =balancefield.innerText;
        const ballanceOutput =parseFloat(ballanceFieldString);
        balancefield.innerText =totalAfterMinus;
    
        
    
})



// persentage ----------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

document.getElementById('save-btn').addEventListener('click',function(){
    const balancefield =document.getElementById('blns');
    const ballanceFieldString =balancefield.innerText;
    const ballanceOutput =parseFloat(ballanceFieldString);
    


    const perInput =document.getElementById('per-input').value;
    const perNum =parseFloat(perInput);
    // console.log(perNum);
    const vagFol = ballanceOutput / 100;
    const perTotal = vagFol * perNum;
    // console.log (perTotal);
    const savingAmountField =document.getElementById('saving-field');
    const savingFieldString =savingAmountField.innerText;
    const savingF =parseFloat(savingFieldString);
    savingAmountField.innerText =perTotal;

    // last amount 
    const remainingAmountField =document.getElementById('last-amount');
    const remainingAmountString = remainingAmountField.innerText;
    const remainingAmount =parseFloat(remainingAmountString);
    const lastAmount =ballanceOutput - perTotal;
    remainingAmountField.innerText =lastAmount

    
})