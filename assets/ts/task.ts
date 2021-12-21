class Task {

    delete() {
        let deleteButton = document.querySelectorAll(".delete");
        for (let i =0; i<deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', function () {
                console.log('delete: ' + i);

                document.getElementsByClassName('overlay')[i]!.remove();
            })
        }
    }

    add() {
        let addButton = document.querySelectorAll(".add");

        for(let i=0; i < addButton.length; i++) {
            console.log('create add task event for :' + i);

            addButton[i].addEventListener('click', function () {

                console.log('add task for element: ' + i);

                let addTaskOption:NodeListOf<HTMLElement> = document.querySelectorAll(".newTaskOption");
                addTaskOption[i].style.display = "block";

                let addNewTask = document.querySelectorAll(".addNewTask");

                addNewTask[i].addEventListener('click', function () {
                    console.log('create new task for:' + i)

                    let task:NodeListOf<HTMLInputElement> = document.querySelectorAll(".newTask");
                    let list = document.querySelectorAll(".tasks");

                    if (task[i].value.length >= 4) {
                        console.log('new task ' + i + " = " + task[i].value);
                        list[i].innerHTML += `
                            <div>${task[i].value} <i class="far fa-clock inactive"></i></div>
                        `
                    }
                    else {
                        console.log('New task are not >= 4 letters');
                    }
                    addTaskOption[i].style.display = "none";
                })
            })
        }
    }
}

export {Task};