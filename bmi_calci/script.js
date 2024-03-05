const form = document.querySelector('form');


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results");
  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = `give proper value for height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = `give proper value for weight ${weight}`
  }
  else{
    const value = (weight/((height*height)/10000)).toFixed(2);
    if(value <18.6)
  {
   result.innerHTML = `underweight : ${value}` 
  }
   else if(value >=18.6  && value <24.9)
  {
   result.innerHTML = `normal range : ${value}` 
  }
  else if(value >=24.9)
  {
   result.innerHTML = `overweight : ${value}` 
  }

  }
  
})