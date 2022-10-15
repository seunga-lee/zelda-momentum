const deleteSound = new Audio("sound/Sys_AppAlbum_DeSelectAll.wav");
const deletedSoundSecond = new Audio("sound/Sys_Window_Open_01.wav")
const openSound = new Audio("sound/Sys_Do_Start.wav")

const toDoForm = document.querySelector('.quest__input-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.input-quest__list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
    const li = e.target.parentElement;
    deletedSoundSecond.play();
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != li.id);
    saveToDos();
}

function paintToDo(newToDoObj){
   const li = document.createElement("li");
   li.id = newToDoObj.id;
   const span = document.createElement("span");
   const button = document.createElement("button");
   button.innerText = "×";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
    span.innerText = newToDoObj.text;
   toDoList.appendChild(li);
}

function handleToDoSubmit (e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo, 
        id: Date.now(),
    };
    openSound.play();
    toDos.push(newToDoObj);
    toDoInput.value = '';
    paintToDo(newToDoObj); //! 다른곳으로 값을 보낼 떄는 인자 안에 꼭 넣어주기!
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo); //? (item) => {paintToDo(item); 와 완전히 같은 사용법
    toDos = parsedToDos;
}