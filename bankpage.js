// .preventDefault()

// let div = document.getElementById("div").innerHTML = "<b>hello</b>"
// document.getElementById("div").style.color = "red"
// let p = document.getElementById("p").innerHTML = "hello"
// console.log(div)

// let div = document.createElement("div")
// div.innerHTML = "<b>hello</b>"
// document.body.append(div)
//let password = 1234;
let accountBalance = 10000;
let counter = 1;
let sign_in = document.getElementById('signin-ui');
let Name = document.getElementById('name');
let transcation = document.getElementById('transcation-ui')
let incorrect = document.getElementById('incorrect-ui')
let banned = document.getElementById('banned-ui');
let transactionMessage = document.getElementById('transactionMessage-ui');
let exitMessage = document.getElementById('exit-ui');
let create = document.querySelector("#creat")
let passwordInput = document.getElementById('password')//Password inputed by client
let title = document.querySelector(".title")
let regtext = document.querySelector("#regtext")
let regform = document.querySelector("#reg_form")
let Username = document.querySelector("#createusername")
let amount= document.querySelector("#createamount")
let pin = document.querySelector("#createpassword")
let log = document.querySelector(".log")
let logbutt = document.querySelector("#logbutt")
let regbutt = document.querySelector(".regbutt")
let userarray=[]
let count = 0
let guy = true
// randomusers.me/api
function reg() {
    
    guy = false
    counter = 1
}
function collect() {
    
    let userobj ={
        usename : Username.value,
        userpassword : pin.value,
        useramount : amount.value
    }
    userarray.push(userobj)
    // console.log(userarray[count].name)
    // count++
    
    
    
    if(sign_in.children[6] == undefined){
        div = document.createElement("div")
        div.innerHTML = '<button class="createacc" onclick="reg()">Create Account</button>'
        sign_in.appendChild(div)
        
    }
   
    
}

