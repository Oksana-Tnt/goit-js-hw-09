import flatpickr from "flatpickr";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startEl : document.querySelector("[data-start]"),
    daysEl : document.querySelector("[data-days]"),
    hoursEl : document.querySelector("[data-hours]"),
    minutesEl : document.querySelector("[data-minutes]"),
    secondsEl : document.querySelector("[data-seconds]"),
};
        
    const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {        
     if((selectedDates[0]).getTime() < Date.now()){
        alert("error");
        refs.startEl.setAttribute("disabled", "disabled");
        return;
     }

    refs.startEl.removeAttribute("disabled");       
    let countDownDate = selectedDates[0];

    refs.startEl.addEventListener("click", ()=>{
        refs.startEl.setAttribute("disabled", "disabled");
        const intervalId = setInterval(() => {
            const currentTime = Date.now();
            const distance = countDownDate - currentTime;
            const {days, hours, minutes, seconds}=convertMs(distance);
            refs.daysEl.textContent=days;
            refs.hoursEl.textContent=hours;
            refs.minutesEl.textContent=minutes;
            refs.secondsEl.textContent=seconds;
         if (distance < 0) {            
            alert("EXPIRED");
            clearInterval(intervalId);
            refs.startEl.removeAttribute("disabled");
            refs.daysEl.textContent=0;
            refs.hoursEl.textContent=0;
            refs.minutesEl.textContent=0;
            refs.secondsEl.textContent=0;          
         }
      
        }, 1000);     
    });   
 
  },
}; 
  
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  flatpickr("#datetime-picker", options);
