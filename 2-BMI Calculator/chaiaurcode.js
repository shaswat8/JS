const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height) ) {
        results.innerHTML = `Please provide a valid height ${height}`;
   }
   else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight ${weight}`;
   }
   else{
   const bmi =  (weight / ((height * height)/10000)).toFixed(2)
   // show the result
   result.innerHTML = `<span>${bmi}</span>`
   let message = '';
   if(bmi < 18.6) { 
    message = 'You are underweight';

   }else if(bmi >= 18.6 && bmi < 24.9) {
    message = 'You are normal';
   }else {
    message = 'You are overweight';
   }
    result.innerHTML += `<span>${message}</span>`

   }   

});