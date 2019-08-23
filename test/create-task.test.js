describe("Create Task Function", function() {
    it('should be able to store and display new task', function(){
        const createTaskInstance = createTask();

        createTaskInstance.setTask("Style html", "The description", "To do", "20/01/2018", "20/01/2018", 0);
        createTaskInstance.setTaskList();
        let result = [
            {name:"Style html", description:"The description", state:"To do", time:"20/01/2018", date:"20/01/2018", id: 0}
        ]
        assert.deepEqual(createTaskInstance.getTaskList(), result);
       
    });

    
    
    
    
});