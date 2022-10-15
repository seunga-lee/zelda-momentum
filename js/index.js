//* auido
const gameStartAudio = new Audio("sound/Sys_GameStart.wav");


//* const of document.querySelector
const loginBox = document.querySelector(".login");
const loginInput = document.querySelector(".login input");
const navbar = document.querySelector(".nav-bar");
const controlBox = document.querySelector(".control-box");
const welcomTitle = document.querySelector(".my-info__welcom");
const mainScreen = document.querySelector("main");

//* local storage
const usernameExist = localStorage.getItem("username");


if (usernameExist !== null){
    loginBox.classList.add('hide');
    navbar.classList.remove('hide');
    controlBox.classList.remove('hide');
    mainScreen.classList.add('show');
    const usernameExist = localStorage.getItem("username");
    welcom(usernameExist)
}

function welcom(savedUsername){
    welcomTitle.innerText = `환영합니다, ${savedUsername}님`;
}


loginBox.addEventListener("submit", function(e){
    e.preventDefault();
    if (loginInput.value !== ''){
        // console.log(loginInput.value);
        localStorage.setItem("username", loginInput.value);
        const savedUsername = loginInput.value;
        loginBox.classList.add('hide');
        gameStartAudio.play();
        navbar.classList.remove('hide');
        controlBox.classList.remove('hide');
        mainScreen.classList.add('show');
        welcom(savedUsername);
    }
})








