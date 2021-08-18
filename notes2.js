const hello = document.getElementById("hello")
const giveName = document.getElementById("giveName")
const nameButton = document.getElementById("nameButton");
const nameText = document.getElementById("nameText");

function firstAccess(){
    hello.innerText = "Welcome back, " + nameText.value;
    const welcomeMessage = "Welcome back, " + nameText.value;
    localStorage.setItem("welcomeMessage", welcomeMessage);
    giveName.removeChild(nameButton);
    giveName.removeChild(nameText);
}
nameButton.addEventListener("click", firstAccess);

