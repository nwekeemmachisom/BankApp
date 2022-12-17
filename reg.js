let counter = 1;
let title = document.querySelector(".title")
let regtext = document.querySelector("#regtext")
let regform = document.querySelector("#reg_form")
let Username = document.querySelector("#createusername")
let amount= document.querySelector("#createamount")
let pin = document.querySelector("#createpassword")
let regbutt = document.querySelector(".regbutt")
let logbutt = document.querySelector("#logbutt")


regbutt.addEventListener("click",(e)=>{
    e.preventDefault()
    if(Username.value == "" || amount.value == "" || pin.value == ""){
        alert("Input your registration details")
    }
    else{
        let obj = {
            namer : Username.value,
            cusamount : amount.value,
            cuspassword : pin.value
        }
    
        
     localStorage.setItem(`${Username.value}`, JSON.stringify(obj))
    
     location.href = "sign.html"
    
    }
})


logbutt.addEventListener("click",(e)=>{
   e.preventDefault()
    location.href = "sign.html"
})
