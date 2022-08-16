
document.getElementById('deposite').addEventListener('click',function(){
    const depositeInput= document.getElementById('deposite-input');
    const deposite =parseFloat(depositeInput.value) ;

    const depositeDisplay = document.getElementById('deposite-display');
    const depositeValue= parseFloat(depositeDisplay.innerText) ;
    depositeDisplay.innerText= deposite + depositeValue;

    const balanceDisplay= document.getElementById('balance-display');
    const total= (balanceDisplay.innerText= deposite + depositeValue);
    depositeInput.value='';
})

document.getElementById('withdraw').addEventListener('click',function()
{
    const withdrawInput= document.getElementById('withdraw-input');
    const withdraw =parseFloat(withdrawInput.value) ;

    const withdrawDisplay = document.getElementById('withdraw-display');
    const withdrawValue= parseFloat(withdrawDisplay.innerText) ;
    withdrawDisplay.innerText= withdraw + withdrawValue;
    const balanceDisplay= document.getElementById('balance-display');
    balanceDisplay.innerText= total - withdraw;

})
