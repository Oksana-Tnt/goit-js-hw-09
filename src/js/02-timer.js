import flatpickr from "flatpickr";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputEl : document.querySelector("#datetime-picker"),
    startEl : document.querySelector("[data-start]"),
    daysEl : document.querySelector("[data-days]"),
    hoursEl : document.querySelector("[data-hours]"),
    minutesEl : document.querySelector("[data-minutes]"),
    secondsEl : document.querySelector("[data-seconds]"),
};

refs.startEl.addEventListener("click", onClickStart);
        
    const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
        onClose(selectedDates) {  
           
        if((selectedDates[0]).getTime() < Date.now()){
            Notiflix.Report.warning("Please choose a date in the future");
            makeDisableButton();
             return;
        }
            
        makeAbleButton();   
        Notiflix.Notify.success("Well done");         
    },
}; 

flatpickr("#datetime-picker", options);

function onClickStart() {    
    
    makeDisableButton();

    const intervalId = setInterval(() => {        
    
    const distance = calcDistance(getDate());
        
    fillCountDown(distance);
        
        if (distance < 0) {  
            
            Notiflix.Report.success("EXPIRED");
            
            clearInterval(intervalId);
            
            makeAbleButton();
            
            fillCountDown(0);        
        }
      
    }, 1000);
};   
   
function getDate() {
    let date = refs.inputEl._flatpickr.selectedDates[0].getTime();
    return date;
}

function calcDistance(value) {     
    const currentTime = Date.now();
    const distance = value - currentTime;
    return distance;
}

function fillCountDown(value) {
    const { days, hours, minutes, seconds } = convertMs(value);
    refs.daysEl.textContent=days;
    refs.hoursEl.textContent=hours;
    refs.minutesEl.textContent=minutes;
    refs.secondsEl.textContent=seconds;
}; 

function makeAbleButton() {
    refs.startEl.removeAttribute("disabled");
};

function makeDisableButton() {
    refs.startEl.setAttribute("disabled", "disabled");
};

function addLeadingZero(value){
    return String(value).padStart(2, "0");
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };


