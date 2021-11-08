const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.querySelector("#todo-form input") 똑같음
const toDoList = document.getElementById("todo-list");
const noToDo = document.querySelector(".todo span");

const TODOS_KEY = "todos"

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    //어떤 버튼이 눌려진건지 알기 위해, path와 targat을 보자. 
    //console.dir(event)이렇게 쓰고 확인해보면 됨. 
    //parentNode 또는 parentElement 를 확인하자, 그럼 button의 parent가 누구인지 알 수 있다
    //console.dir(event.target.parentElement)하면 각각 해당되는 li들이 나옴
    //then we can also get InnerText, event.target.parentElement.innerText 
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //여기있는 이 toDo는 toDos DB에 있는 요소 중 하나
    //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 뜻
    //그러나! li.id는 string타입, toDo.id는 number 타입
    //그래서 parseInt해주기 
    saveToDos();   
    
}





function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //inside of span put newTodo 
    //newTodo가 object(id와 text item이 있는) 로 가져오기 때문에 .text 붙여저야함 

    const button = document.createElement("button");
    button.innerText = "❌";
    button.title = "delete this todo."
    
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    //put span inside of li
    li.appendChild(button);
    toDoList.appendChild(li);
    //put li inside of toDoList
    //append must be put at the end
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //toDoInput.value를 비운다고해서 newTodo가 없어지는 게 아니다, input의 value를 newToDo저장된다!
    const newToDoObj = {
        text:newTodo,
        id: Date.now(),
    }
    //id를 주는 이유: 각각의 li item을 구별하고 싶어서 
    
    toDos.push(newToDoObj); 
    //이제 이걸 localStorage에 저장하고 싶은데, array는 저장안된다, 오직 텍스트만 저장가능,    
    paintToDo(newToDoObj);
    saveToDos();

}



toDoForm.addEventListener("submit",handleTodoSubmit)

//event Argument 그냥 주는 것 처럼, item도 그냥 주는 것임
//function sayHello(item) {
//    console.log("this is the turn of as " + item)
//}

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //parsedToDos.forEach(sayHello);
    //합쳐진 하나의 string이 아닌 object나 array로써 각각 하나의 항목들에 '하나의' 함수 넣기
    //만약 우리가 사용하는 item이 어떤건지 모르면 무용지물 
    //동일한 코드(function안쓰는 short cut!) = parsedToDos.forEach((item) => console.log("this is the turn of ", item"))
    //heißt arrow function 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 여기서 좀 더 훈련가능 foreach()
    toDos = parsedToDos;
    //const toDos = []; 에서 나중에 값을 변경할 수 있는 let toDos = [];로 바꿈
    //그리고 거기에 old toDos들을 넣어서 새로고침했을 때 덮어씌어지지 않게 

    parsedToDos.forEach(paintToDo);

}