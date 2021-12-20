class Task {

    delete() {
        let deleteButton = document.querySelectorAll(".delete");
        for (let i =0; i<deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', function (e) {
                console.log('delete: ' + i);

                //delete.document.getElementsByClassName('overlay' + i);
            })
        }
    }

    add() {
        let addButton = document.querySelectorAll(".add");

        for(let i=0; i < addButton.length; i++) {
            addButton[i].addEventListener('click', function (e) {
                console.log('add task for element: ' + i);

                let addTaskOption = document.querySelectorAll(".newTaskOption");

            })
        }
    }
}

export {Task};