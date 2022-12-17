let transcation = document.getElementById('transcation-ui')
let transactionMessage = window.document.querySelector("#transactionMessage-ui")

let exitMessage = window.document.querySelector("#exit-ui")
// let arr = JSON.parse(localStorage.getItem("cuspassword"))
let butt = document.querySelector("#butt")

let Nname = localStorage.getItem(`name`)
let accbal = localStorage.getItem(`amount`)
console.log(Nname)


transcation.addEventListener('submit' , ((e) =>{
    e.preventDefault();
        let inputElements = document.getElementsByName('transaction')
        
        for (let element of inputElements){
            if (element.checked){
               transcationFunction(element, element.id)
            }
        }
}))

function transcationFunction(element, transaction){ // Function for performing transaction
    if (transaction == 'checkBalance'){
        transactionMessage.innerHTML = `<p>${Nname} , Your transcation was successful</p>
    <p>Your Account Balance is ${accbal} Naira  </p>
    <p><b>Select A Transaction Above for another transaction</b></p>
        `
        element.checked = false;
     
    }
      

    else if (transaction == 'withdraw'){
        
        let withdraw = parseFloat(prompt('Enter Amount you want to withdraw'));
        if (withdraw <= accbal){
        accbal = accbal - withdraw;
        transactionMessage.innerHTML = `<p>${Nname}, Your transcation was successful</p>
<p>Your Account Balance is ${accbal} Naira  </p>
<p><b>Select A Transaction Above for another transaction</b></p>
    `
        element.checked = false
        }
        else  {
            transactionMessage.innerHTML = `<p>Insufficient Funds. Unsuccessful Transaction`
        }
}


else if (transaction == 'deposit'){
   
    let deposit = parseFloat(prompt('Enter Amount you want to deposit'));
    if (deposit <= 100000 && deposit != 0){
    accbal = parseFloat(accbal) + deposit;
transactionMessage.innerHTML = `<p>${Nname}, Your transcation was successful</p>
<p>Your Account Balance is ${accbal} Naira  </p>
<p><b>Select A Transaction Above for another transaction</b></p>
    `
    element.checked = false
     
    }
    
    else{
        transactionMessage.innerHTML = `<p>Deposition Limits exceeded. Unsuccessful Transaction`
    }
}

else if (transaction == 'sign-out'){
    localStorage.removeItem(`amount`)
    localStorage.removeItem(`name`)
    location.href = "sign.html"
    exitMessage.style.display = 'block'
    transcation.style.display = 'none'
    transactionMessage.style.display = 'none'
    element.checked = false
}

}

