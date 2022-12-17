let sign_in = document.getElementById('signin-ui');
let create = document.querySelector("#creat")
let guy = true;
let count = 1;
let Name = window.document.querySelector("#name")
let incorrect = window.document.querySelector("#incorrect-ui");
let banned = window.document.querySelector("#banned-ui");
let passpin = window.document.querySelector("#password")
sign_in.addEventListener('submit', ((e) =>{
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem(`${Name.value}`))
 console.log(arr.cuspassword)
 
 


     if(Name.value == arr.namer && passpin.value == arr.cuspassword){
        e.preventDefault()
        localStorage.setItem(`amount`,arr.cusamount)
        
        localStorage.setItem(`name`,arr.namer)
        
        
        
        location.href = "trans.html"
        count = 0;
    }
    else {
        incorrect.style.display = "block"
    }
}
))


create.addEventListener("click",()=>{
    location.href  = "reg.html"
})