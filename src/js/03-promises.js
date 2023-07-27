import Notiflix from 'notiflix';


 const formEl = document.querySelector(".form");
 
 formEl.addEventListener("submit", onSubmitForm);

  function onSubmitForm(event) {

  event.preventDefault();

  const firstDelay = Number(formEl.elements.delay.value);
  const stepDelay = Number(formEl.elements.step.value);
  const amount = Number(formEl.elements.amount.value);

  setTimeout(() => {  
    
    for (let i = 0; i < amount; i += 1) {

      createPromise(i, stepDelay)
        .then(({ position, delay}) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${i+1} in ${i*stepDelay + firstDelay}ms`);
        })
        .catch(({ position, delay}) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${i+1} in ${i*stepDelay + firstDelay}ms`);
        }); 
    }
  
  }, firstDelay);
  
};

function createPromise(position, delay) {
  return new Promise((res, rej) => { 
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, position*delay);       
  });  
}
