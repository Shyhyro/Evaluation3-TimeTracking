class Popup {
    open() {
        let see = document.querySelectorAll(".see");

        for (let i = 0; i < see.length ; i++) {
            see[i].addEventListener('click', function () {
                let popup = document.getElementById('popup') as HTMLDivElement;
                popup.style.display = "block";

                let close = document.getElementById('closePopup') as HTMLButtonElement;

                close.addEventListener('click', function () {
                    popup.style.display = "none";
                })
            })
        }
    }
}

export {Popup};