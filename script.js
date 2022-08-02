const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signBtn = document.querySelector(".signin-button");
const signMsg = document.querySelector(".signin-status");

signBtn.addEventListener("click", signIn);
function signIn(event) {
    event.preventDefault();
    usernameMsg.innerHTML = ""
    passwordMsg.innerHTML = ""
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;
    let ifSendData = true;
    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerHTML = "pleas Enter a Valid Email"
        ifSendData = false;

    }
    if (passwordValue.length <= 4) {
        passwordMsg.innerHTML = "Your Password is too short";
        ifSendData = false;
    }
    else if(ifSendData){
        body=JSON.stringify({
            userName:usernameValue,
            password:passwordValue,

        })
        headers={
            "content-type":"application/JSON"
        }
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"POST",
            body:body,
            headers:headers,
        })
         .then(response=>{
            if(response.ok){
                signMsg.innerHTML= "You signed in successfully"
            }
         })

    }

}