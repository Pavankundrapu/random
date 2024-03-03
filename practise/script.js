let btn = document.getElementById('btnRate');
let output = document.getElementById('output')

btn.addEventListener('click',()=>
{
  let rate = document.getElementsByName('rate')
  rate.forEach((rate)=>
  {
    if(rate.checked)
    {
      output.innerHTML = `your value is ${rate.value}`
    }
  })
})