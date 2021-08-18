const hello = document.getElementById("hello")
const giveName = document.getElementById("giveName")
const nameButton = document.getElementById("nameButton");
const nameText = document.getElementById("nameText");

function firstAccess(){
    hello.innerText = "Welcome back, " + nameText.value;
    const welcomeMessage = "Welcome back, " + nameText.value;
    localStorage.setItem("welcomeMessage", welcomeMessage);
}

function removeButton(){
    giveName.removeChild(nameButton);
}

function removeTextBox(){
    giveName.removeChild(nameText);
}

function nextAccess(){
    const welcomeMessage = localStorage.getItem("welcomeMessage");
    hello.innerText = welcomeMessage;
    removeButton()
    removeTextBox()
}

if (localStorage.length == 0){
    nameButton.addEventListener("click", firstAccess);
    nameButton.addEventListener("click", removeButton);
    nameButton.addEventListener("click", removeTextBox);
} else {
   nextAccess();
} 
