var addBtnElem = document.querySelector('#addBtn');
var startTaskElem = document.querySelector('.todo-tasks');

if(localStorage.getItem('todoTasks')) {
   var todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
   let todoList = { todoTasks }
   createHTML(todoList)
} else {
   todoTasks = []
}

if(localStorage.getItem('doingTasks')) {
   var doingTasks = JSON.parse(localStorage.getItem('doingTasks'));
   let doingList = { doingTasks }
   createDoingHTML(doingList)
} else {
   doingTasks = []
}
console.log(doingTasks)
const createTaskInstance = createTask();

function storeTask() {
   let name = document.querySelector('#name').value;
   let description = document.querySelector('#description').value;
   let status = document.querySelector('#status').value;
   let time = document.querySelector('#time').value;
   let date = document.querySelector('#date').value;
   
   createTaskInstance.setTask(name, description, status, time, date);
   createTaskInstance.setTaskList();

   let todoTasks = createTaskInstance.getTaskList();
   let todos = { todoTasks }
   createHTML(todos)

   localStorage.setItem('todoTasks', JSON.stringify(todoTasks))

}

function startTask(evt) {
   if(evt.target.id) {
      todoTasks.forEach(item => {
         if(item.id == evt.target.id) {
            item.status = "Doing";
            createTaskInstance.setDoingList(item);
            let doingTasks = createTaskInstance.getDoingList()
            
            localStorage.setItem('doingTasks', JSON.stringify(doingTasks))
            createDoingHTML(doingTasks)
         }
      });
   }
   
   
}

function createHTML(tasks) {
   let rawTemplate = document.querySelector('.taskTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
   let ourGeneratedHTML = compiledTemplate(tasks);

   let cartItemsElem = document.querySelector('.todo-tasks');
   cartItemsElem.innerHTML = ourGeneratedHTML;
}

function createDoingHTML(tasks) {
   let rawTemplate = document.querySelector('.doingTaskTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
   let ourGeneratedHTML = compiledTemplate(tasks);

   let cartItemsElem = document.querySelector('.doing-tasks');
   cartItemsElem.innerHTML = ourGeneratedHTML;
}


addBtnElem.addEventListener('click', storeTask);

startTaskElem.addEventListener('click', startTask);

//  for (let i = 0; i < startTaskElem.length; i++) {
//    let elem = startTaskElem[i];
//    console.log(elem);
//  }