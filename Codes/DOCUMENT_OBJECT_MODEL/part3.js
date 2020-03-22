var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

console.log("connected");
headOne.addEventListener('mouseover', function(){
  headOne.textContent = "Mouse currently over";
  headOne.style.color = 'red';
})

headOne.addEventListener('mouseout', function(){
  headOne.textContent = "HOVER OVER ME";
  headOne.style.color = 'black';
})

headTwo.addEventListener('click', function(){
  headTwo.textContent = "Mouse clicked";
  headTwo.style.color = "blue";
})

headThree.addEventListener('dbclick', function(){
  headThree.textContent = "Mouse clicked";
  headThree.style.color = "blue";
})
