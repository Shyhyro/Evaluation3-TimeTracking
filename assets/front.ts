// Imports
import "./css/front.css";
// @ts-ignore
import {Card} from "./ts/card.ts";
// @ts-ignore
import {Task} from "./ts/task.ts";
// @ts-ignore
import {Popup} from "./ts/popup.ts";

// Calls
new Card().create('Projet 1');
new Card().create('Projet 2');

new Task().add();
new Task().delete();
new Task().edit();
new Popup().open();

new Task().inactiveToActive();
new Task().activeToInactive();

new Card().addCard();