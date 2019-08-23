function createTask(data) {
   let name = "";
   let description = "";
   let status = "";
   let time = new Date;
   let date = new Date;
   let id = 0;

   let taskList = data || []
   let toDoList = [];
   let doingList = [];
   let doneList = [];

   function setTask(theName, theDesc, theStatus, theTime, theDate) {
     name = theName;
     description = theDesc;
     status = theStatus;
     time = theTime;
     date = theDate;
     id++
   }
   function setTaskList() {
      taskList.push({
         name,
         description,
         status,
         time,
         date,
         time,
         id
      })
   }
   function getTaskList() {
     return taskList;
   }

   // function setToDoList(obj) {
   //    toDoList.push(obj);
   // }
   function setDoingList(obj) {
      doingList.push(obj);
   }
   function getDoingList() {
      return doingList
   }

   function setDoneList(obj) {
      doneList.push(obj);
   }

   // function setToDoList(obj) {
   //    toDoList.push(obj);
   // }
   function setDoingList(obj) {
      doingList.push(obj);
   }
   function setDoneList(obj) {
      doneList.push(obj);
   }

   return {
      setTask,
      setTaskList,
      // setToDoList,
      setDoingList,
      setDoneList,

      getTaskList,
      getDoingList

      
   }

  
}