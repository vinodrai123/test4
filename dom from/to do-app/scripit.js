$(document).ready(function(){
    function addTask(){
       const taskText = $('#task-input').val();
       
       if (taskText !==''){
            const listItem =`<li>${taskText}<button class="delete-task">delete</button></li>`;
            $('#task-list').append(listItem);
            $('#task-input').val('')
       }
    }
    $('#add-task').click(function(){
        addTask();
    });
    $('#task-input').keypress(function(event){
        if(event.keycode === 13){
            addTask();
        }
    });
    $('#task-list').on('click','.delete-task',function(){
        $(this).parent().remove();
    });
})


