const colors = ["green", "red","yellow" , "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click',()=>
{  let random = randomNum()
   document.body.style.backgroundColor = colors[random];
   color.textContent = colors[random];
})

randomNum = ()=>{
  //math.random() gives a random number between 0-1 in decimals
return Math.floor(Math.random()*colors.length)
}