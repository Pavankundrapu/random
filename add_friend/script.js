let friend = document.getElementById('btn')
let remove = document.getElementById('remove')
let relation = document.getElementById('relation')

friend.addEventListener('click',()=>
{
  relation.innerHTML = "current relation: friends"
  friend.innerHTML = "added friend"
  remove.innerHTML = "remove"
  relation.style.color = "green"
})
remove.addEventListener('click',()=>
{
  relation.innerHTML = "current relation: enemies"
  remove.innerHTML = "removed enemy"
  friend.innerHTML = "add friend"
  relation.style.color = "red"
})
