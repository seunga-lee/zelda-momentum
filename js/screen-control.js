const clickButton = new Audio("sound/Sys_Apptool_Buttonon.wav");

const navTitleWidth = document.querySelector(".nav-bar__title");

const mainTitle = document.querySelector(".nav-bar__column-main");
const questTitle = document.querySelector(".nav-bar__column-quest");
const infoTitle = document.querySelector(".nav-bar__column-info");

const mainButton = document.querySelector(".main-screen");
const questButton = document.querySelector(".quest-screen");
const infoButton = document.querySelector(".my-info-screen");

const screen = document.querySelector("main");

var currentScreen = 1; //포스트잇에 저장한다고 생각하면 됨!

infoTitle.addEventListener('click', function(){
    clickButton.play();
    infoTitle.classList.add('title-selected');
    questTitle.classList.remove('title-selected');
    mainTitle.classList.remove('title-selected');
    mainButton.classList.add('button-blur');
    questButton.classList.add('button-blur');
    infoButton.classList.remove('button-blur');
    screen.style.transform = 'translateX(0)';
    navTitleWidth.style.transform = 'translateX(0)';
    currentScreen = 1;
})

questTitle.addEventListener('click', function(){
    clickButton.play();
    infoTitle.classList.remove('title-selected');
    mainTitle.classList.remove('title-selected');
    questTitle.classList.add('title-selected');
    mainButton.classList.add('button-blur');
    infoButton.classList.add('button-blur');
    questButton.classList.remove('button-blur');
    screen.style.transform = 'translateX(100vw)';
    navTitleWidth.style.transform = 'translateX(64px)';
    currentScreen = 2;
})

mainTitle.addEventListener('click', function(){
    clickButton.play();
    infoTitle.classList.remove('title-selected');
    questTitle.classList.remove('title-selected');
    mainTitle.classList.add('title-selected');
    questButton.classList.add('button-blur');
    infoButton.classList.add('button-blur');
    mainButton.classList.remove('button-blur');
    screen.style.transform = 'translateX(200vw)';
    navTitleWidth.style.transform = 'translateX(114px)';
    currentScreen = 3;
})

infoButton.addEventListener('click', function(){
    clickButton.play();
    infoTitle.classList.add('title-selected');
    questTitle.classList.remove('title-selected');
    mainTitle.classList.remove('title-selected');
    mainButton.classList.add('button-blur');
    questButton.classList.add('button-blur');
    infoButton.classList.remove('button-blur');
    screen.style.transform = 'translateX(0)';
    navTitleWidth.style.transform = 'translateX(0)';
    currentScreen = 1;
})

questButton.addEventListener('click', function(){
    clickButton.play();
    infoTitle.classList.remove('title-selected');
    mainTitle.classList.remove('title-selected');
    questTitle.classList.add('title-selected');
    mainButton.classList.add('button-blur');
    infoButton.classList.add('button-blur');
    questButton.classList.remove('button-blur');
    screen.style.transform = 'translateX(100vw)';
    navTitleWidth.style.transform = 'translateX(64px)';
    currentScreen = 2;
})

mainButton.addEventListener('click', function(){
    clickButton.play();
    infoTitle.classList.remove('title-selected');
    questTitle.classList.remove('title-selected');
    mainTitle.classList.add('title-selected');
    questButton.classList.add('button-blur');
    infoButton.classList.add('button-blur');
    mainButton.classList.remove('button-blur');
    screen.style.transform = 'translateX(200vw)';
    navTitleWidth.style.transform = 'translateX(114px)';
    currentScreen = 3;
})
