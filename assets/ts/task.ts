// @ts-ignore
import {Popup} from "./popup.ts";
// @ts-ignore
import {Card} from "./card.ts";

class Task {

    inactiveToActive () {
        let inactive:NodeListOf<HTMLElement> = document.querySelectorAll(".inactive");

        for ( let i = 0 ; i < inactive.length ; i++ ) {
            inactive[i].addEventListener('click', function changeColors () {
                inactive[i].classList.remove('inactive');
                inactive[i].classList.add('active');

                new Task().inactiveToActive();
                new Task().activeToInactive();
            })
        }
    }

    activeToInactive () {
        let active:NodeListOf<HTMLElement> = document.querySelectorAll(".active");

        for ( let i = 0 ; i < active.length ; i++ ) {
            active[i].addEventListener('click', function changeColors () {
                active[i].classList.remove('active');
                active[i].classList.add('inactive');

                new Task().activeToInactive();
                new Task().inactiveToActive();
            })
        }
    }

    edit () {
        let taskEdit = document.querySelectorAll(".oneTaskEdit");

        for (let i = 0; i < taskEdit.length ; i++) {

            taskEdit[i].addEventListener('click', function editTask () {
                console.log('Click Edit on: ' + i);
                let task = document.querySelectorAll(".oneTask");

                task[i].innerHTML = `<input type='text' id='newContent'><button id='edit' class="mauve">Submit</button`;
                let button = <HTMLButtonElement>document.getElementById('edit') as HTMLButtonElement;

                button.addEventListener('click', function () {
                    let newContent = document.getElementById('newContent') as HTMLInputElement;
                    if (newContent.value.length >= 4) {
                        task[i].innerHTML = '<button class="oneTaskEdit mauve" type="button">Edit</button>' + newContent.value + '<i class="far fa-clock inactive"></i>';
                        console.log('edit : ' + i + " -> " + newContent.value);

                        new Task().add();
                        new Task().delete();
                        new Task().edit();
                        new Popup().open();

                        new Task().inactiveToActive();
                        new Task().activeToInactive();

                        new Card().addCard();
                    } else {
                        console.log('task Edit: ' + i + " are < 4");
                    }
                })
            })
        }
    }

    delete() {
        let deleteButton = document.querySelectorAll(".delete");

        for (let i =0; i<deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', function () {
                document.getElementsByClassName('overlay')[i]!.remove();

                new Task().add();
                new Task().delete();
                new Task().edit();
                new Popup().open();

                new Task().inactiveToActive();
                new Task().activeToInactive();

                new Card().addCard();
            })
        }
    }

    add() {
        let addButton = document.querySelectorAll(".add");
        for(let i=0; i < addButton.length; i++) {

            addButton[i].addEventListener('click', function () {
                console.log('add task for element: ' + i);
                let addTaskOption:NodeListOf<HTMLElement> = document.querySelectorAll(".newTaskOption");
                addTaskOption[i].style.display = "block";
                let addNewTask = document.querySelectorAll(".addNewTask");

                addNewTask[i].addEventListener('click', function () {
                    console.log('create new task for:' + i);

                    let task:NodeListOf<HTMLInputElement> = document.querySelectorAll(".newTask");
                    let list = document.querySelectorAll(".tasks");

                    if (task[i].value.length >= 4) {
                        console.log('new task ' + i + " = " + task[i].value);
                        list[i].innerHTML += `<div>${task[i].value} <i class="far fa-clock inactive"></i></div>`;
                    } else {
                        console.log('New task are not >= 4 letters');
                    }

                    addTaskOption[i].style.display = "none";

                    new Task().add();
                    new Task().delete();
                    new Task().edit();
                    new Popup().open();

                    new Task().inactiveToActive();
                    new Task().activeToInactive();

                    new Card().addCard();
                })
            })
        }
    }
}

export {Task};