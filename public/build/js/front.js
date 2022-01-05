/*! For license information please see front.js.LICENSE.txt */
(()=>{"use strict";var e={"./assets/css/front.css":(e,t,n)=>{n.r(t)},"./assets/ts/card.ts":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const a=n("./assets/ts/task.ts"),s=n("./assets/ts/popup.ts");class i{addCard(){document.getElementById("addCard").addEventListener("click",(function(){console.log("Click create new task");let e=document.getElementById("newCardTitle");e.value.length>=4?((new i).create(e.value),(new a.Task).add(),(new a.Task).delete(),(new a.Task).edit(),(new s.Popup).open(),(new a.Task).inactiveToActive(),(new a.Task).activeToInactive(),(new i).addCard()):console.log("new Card name < 4")}))}create(e){document.getElementById("container").innerHTML+=`\n            <div class="overlay">\n                <div class="delete"><i class="far fa-trash-alt"></i></div>\n                <div class="option">\n                    <div class="see"><i class="far fa-eye"></i></div>\n                    <div class="add"><i class="fas fa-plus"></i> </div>\n                    <div class="newTaskOption"><input class="newTask"><button class="addNewTask">Add</button></div>\n                </div>\n                <div class="card">\n                    <div class="title"><h2>${e}</h2></div>\n                    <div class="cardContainer">\n                        <div class="info">\n                            <div>\n                                <i class="far fa-clock green"></i>\n                                <span class="timer">0h</span>\n                            </div>\n                            <div>\n                                <i class="far fa-calendar green"></i>\n                                <span class="registration">Il y a 0 jours</span>\n                            </div>\n                        </div>\n                        <div class="tasks">\n                            <div class="oneTask"><button class="oneTaskEdit mauve" type="button">Edit</button>Tache 1 <i class="far fa-clock inactive"></i></div>\n                            <div class="oneTask"><button class="oneTaskEdit mauve" type="button">Edit</button>Tache 2 <i class="far fa-clock inactive"></i></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}}t.Card=i},"./assets/ts/popup.ts":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;const a=n("./assets/ts/task.ts");t.Popup=class{open(){let e=document.querySelectorAll(".see");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){let e=document.getElementById("popup");e.style.display="block",document.getElementById("popupContent").innerHTML='\n                    <div><h1>Time Tracking</h1></div>\n                    <div>\n                        <div class="popupInfo">\n                            <div class="delete"><i class="far fa-trash-alt"></i></div>\n                            <div class="add"><i class="fas fa-plus"></i> </div>\n                            <div>\n                                <i class="far fa-clock green"></i>\n                                <span class="timer">0h</span>\n                            </div>\n                            <div>\n                                <i class="far fa-calendar green"></i>\n                                <span class="registration">Il y a 0 jours</span>\n                            </div>\n                        </div>\n                        <div class="popupTask">\n                            <div class="title"><h2>Project</h2></div>\n                            <div class="tasks">\n                                <div class="oneTask"><i class="far fa-calendar green"></i><button class="oneTaskEdit mauve" type="button">Edit</button>Tache 1 <i class="far fa-clock inactive"></i></div>\n                                <div class="oneTask"><i class="far fa-calendar green"></i><button class="oneTaskEdit mauve" type="button">Edit</button>Tache 2 <i class="far fa-clock inactive"></i></div>\n                            </div>\n                        </div>\n                    </div>\n                ',document.getElementById("closePopup").addEventListener("click",(function(){e.style.display="none",(new a.Task).delete(),(new a.Task).add(),(new a.Task).edit()}))}))}}},"./assets/ts/task.ts":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Task=void 0;const a=n("./assets/ts/popup.ts"),s=n("./assets/ts/card.ts");class i{constructor(){this.add=()=>{let e=document.querySelectorAll(".add");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{document.querySelectorAll(".newTaskOption")[t].style.display="block"})),this.addTask(t)}}inactiveToActive(){let e=document.querySelectorAll(".inactive");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){e[t].classList.remove("inactive"),e[t].classList.add("active"),(new i).inactiveToActive(),(new i).activeToInactive()}))}activeToInactive(){let e=document.querySelectorAll(".active");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){e[t].classList.remove("active"),e[t].classList.add("inactive"),(new i).activeToInactive(),(new i).inactiveToActive()}))}edit(){let e=document.querySelectorAll(".oneTaskEdit");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){console.log("Click Edit on: "+t);let e=document.querySelectorAll(".oneTask");e[t].innerHTML="<input type='text' id='newContent'><button id='edit' class=\"mauve\">Submit</button",document.getElementById("edit").addEventListener("click",(function(){let n=document.getElementById("newContent");n.value.length>=4?(e[t].innerHTML='<button class="oneTaskEdit mauve" type="button">Edit</button>'+n.value+'<i class="far fa-clock inactive"></i>',console.log("edit : "+t+" -> "+n.value),(new i).add(),(new i).delete(),(new i).edit(),(new a.Popup).open(),(new i).inactiveToActive(),(new i).activeToInactive(),(new s.Card).addCard()):console.log("task Edit: "+t+" are < 4")}))}))}delete(){let e=document.querySelectorAll(".delete");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){document.getElementsByClassName("overlay")[t].remove(),(new i).add(),(new i).delete(),(new i).edit(),(new a.Popup).open(),(new i).inactiveToActive(),(new i).activeToInactive(),(new s.Card).addCard()}))}addTask(e){let t=document.querySelectorAll(".newTaskOption");document.querySelectorAll(".addNewTask")[e].addEventListener("click",(()=>{let n=document.querySelectorAll(".newTask"),d=document.querySelectorAll(".tasks");n[e].value.length>=4?(d[e].innerHTML+=`<div class="oneTask"><button class="oneTaskEdit mauve" type="button">Edit</button>${n[e].value}<i class="far fa-clock inactive"></i></div>`,(new i).delete(),(new i).edit(),(new a.Popup).open(),(new i).inactiveToActive(),(new i).activeToInactive(),(new s.Card).addCard()):console.log("New task are not >= 4 letters"),t[e].style.display="none"}))}}t.Task=i}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0}),n("./assets/css/front.css");const t=n("./assets/ts/card.ts"),s=n("./assets/ts/task.ts"),i=n("./assets/ts/popup.ts");(new t.Card).create("Projet 1"),(new t.Card).create("Projet 2"),(new s.Task).add(),(new s.Task).delete(),(new s.Task).edit(),(new i.Popup).open(),(new s.Task).inactiveToActive(),(new s.Task).activeToInactive(),(new t.Card).addCard()})()})();
//# sourceMappingURL=front.js.map