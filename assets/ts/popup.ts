// @ts-ignore
import {Task} from "./task.ts";

class Popup {
    open() {
        let see = document.querySelectorAll(".see");

        for (let i = 0; i < see.length ; i++) {
            see[i].addEventListener('click', function () {
                let popup = document.getElementById('popup') as HTMLDivElement;
                popup.style.display = "block";
                let popupContent = document.getElementById("popupContent") as HTMLDivElement;

                popupContent.innerHTML = `
                    <div><h1>Time Tracking</h1></div>
                    <div>
                        <div class="popupInfo">
                            <div class="delete"><i class="far fa-trash-alt"></i></div>
                            <div class="add"><i class="fas fa-plus"></i> </div>
                            <div>
                                <i class="far fa-clock green"></i>
                                <span class="timer">0h</span>
                            </div>
                            <div>
                                <i class="far fa-calendar green"></i>
                                <span class="registration">Il y a 0 jours</span>
                            </div>
                        </div>
                        <div class="popupTask">
                            <div class="title"><h2>Project</h2></div>
                            <div class="tasks">
                                <div class="oneTask"><i class="far fa-calendar green"></i><button class="oneTaskEdit mauve" type="button">Edit</button>Tache 1 <i class="far fa-clock inactive"></i></div>
                                <div class="oneTask"><i class="far fa-calendar green"></i><button class="oneTaskEdit mauve" type="button">Edit</button>Tache 2 <i class="far fa-clock inactive"></i></div>
                            </div>
                        </div>
                    </div>
                `

                // Close button
                let close = document.getElementById('closePopup') as HTMLButtonElement;
                // On click change display of popup for "none
                close.addEventListener('click', function () {
                    popup.style.display = "none";

                    new Task().delete();
                    new Task().add();
                    new Task().edit();
                })
            })
        }
    }
}

export {Popup};