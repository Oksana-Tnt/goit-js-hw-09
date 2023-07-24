const refs = {
    startEl : document.querySelector("[data-start]"),
    stopEl : document.querySelector("[data-stop]"),
    bodyEl : document.querySelector("body"),
};

let timerId = null;

refs.startEl.addEventListener("click", onClickStart);
refs.stopEl.addEventListener("click", onClickStop);


function onClickStart(){

    timerId = setInterval(() => {   

        refs.bodyEl.style.backgroundColor=getRandomHexColor();  

        refs.startEl.setAttribute("disabled", "disabled");
      }, 1000);
}

function onClickStop(){

    clearInterval(timerId);

    refs.startEl.removeAttribute("disabled");
}

function getRandomHexColor() {

    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

  }
