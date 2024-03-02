const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById('btn');
let color = document.querySelector('.color');
btn.addEventListener('click',()=>
{
  let randomcolor = "#";
  for(let i = 0;i<6;i++)
  {
    randomcolor += hex[random()];
  }
  document.body.style.backgroundColor = randomcolor;
  color.textContent = randomcolor
})

random = ()=>
{
  return Math.floor(Math.random()*hex.length);
}