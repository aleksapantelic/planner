input=document.getElementById('input')
todosUL = document.getElementById('todos')

loadTodos()

function loadTodos(){
    todos=JSON.parse(localStorage.getItem('todos'))
    if(todos !=undefined){
        todos.forEach(todo => AddTodo(todo.txt,todo.isCompleted))
    }
}
inputEl.addEventlistener("keyup",function (event){
    if(event.code == 'Enter'){
        addTodo(inputEl.value,false)
    }
})
function addTodo(todoText,isCompleted){
    todoEl=document.createElement('li')
    todoEl.innerText=todoText
    if(isCompleted){
        todoEl.classList.add('completed')
    }
    todoEl.addEventListener('click', (e)=>{
        clickedElement = e.target;
        clickedElement.classList.toggle('completed')
      //  updateLocalStorage()
    })
    todoEl.addEventListener('click', (e)=>{
        e.preventDefault()
        clickedElement = e.target;
        clickedElement.remove()
      //  updateLocalStorage()
    })
todosUl.appendChild(todoEl)
inputEl.value=''
// updateLocalStorage()

}
