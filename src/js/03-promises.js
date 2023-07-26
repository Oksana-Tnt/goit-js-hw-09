import Notiflix from 'notiflix';


 const formEl = document.querySelector(".form");
 
 formEl.addEventListener("submit", onSubmitForm);

 function onSubmitForm(event){  
  event.preventDefault();
  let count=1;

  setTimeout(()=>{
  const intervalId = setInterval(()=>{
  const delay = Number(formEl.elements.delay.value) + Number(formEl.elements.step.value);

    if(count=== Number(formEl.elements.amount.value)){
      clearInterval(intervalId);
    }
    
  createPromise(count, delay)      
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  count +=1 ;
 
  }, Number(formEl.elements.step.value)); 
 }, Number(formEl.elements.delay.value));   
 };

function createPromise(position, delay) {
  return new Promise ((res, rej)=>{ 
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res ({position, delay});
      } else {
        rej ({position, delay});
      }   
  });  
}
