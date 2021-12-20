class Card {

    create (title: string) {
        let container = document.getElementById('container') as HTMLElement;

        console.log('create');

        container.innerHTML += `
       
            <div class="overlay">
                <div class="delete"><i class="far fa-trash-alt"></i></div>
                <div class="option">
                    <div class="see"><i class="far fa-eye"></i></div>
                    <div class="add"><i class="fas fa-plus"></i> <span class="newTaskOption"><input class="newTask"><button class="addNewTask">Add</button></span></div>
                </div>
                <div class="card">
                    <div class="title"><h2>${title as String}</h2></div>
                    <div class="cardContainer">
                        <div class="info">
                            <div>
                                <i class="far fa-clock green"></i>
                                <span class="timer">1h</span>
                            </div>
                            <div>
                                <i class="far fa-calendar green"></i>
                                <span class="registration">Il y a 0 jours</span>
                            </div>
                        </div>
                        <div class="tasks">
                            <div>Tache 1 <i class="far fa-clock active"></i></div>
                            <div>Tache 1 <i class="far fa-clock inactive"></i></div>
                            <div>Tache 1 <i class="far fa-clock inactive"></i></div>
                            <div>Tache 1 <i class="far fa-clock inactive"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

export {Card};