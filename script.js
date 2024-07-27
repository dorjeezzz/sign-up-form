const submit = document.querySelector("#sub");
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirm_password");
const n1 = document.querySelector("#fname");
const n2 = document.querySelector("#lname");
const e1 = document.querySelector("#email");
const e2 = document.querySelector("#phonenum");
const txt = document.querySelector("#match");

function verify(x, y){
    return x == y;
}

submit.addEventListener("click", (e)=>{
    let pass1 = document.querySelector("#password").value;
    let pass2 = document.querySelector("#confirm_password").value;
    let flag = verify(pass1, pass2);
    //console.log(flag);
    if (!flag){
        txt.textContent = "*Passwords do not match";
        p1.style.borderColor = "red";
        p2.style.borderColor = "red";
        e.preventDefault();
    }
});

//next need to confirm p1 and p2 textcontent is equal else can't submit