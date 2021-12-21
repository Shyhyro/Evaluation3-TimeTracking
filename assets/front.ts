
import "./css/front.css";
// @ts-ignore
import {Card} from "./ts/card.ts";
// @ts-ignore
import {Task} from "./ts/task.ts";

console.log('loading')

new Card().create('Titre 1');
new Card().create('Titre 2');

new Task().add();
new Task().delete();
new Task().edit();