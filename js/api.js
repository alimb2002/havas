// btn DOM and event
var btn1 =document.getElementById('btn1');
btn1.addEventListener('click' , handleClick );
// aside and content dom
var aside = document.getElementById('aside');
var content = document.getElementById('content');

function handleClick(){
  if(btn1.textContent === 'c'){
  btn1.textContent = 'o';
  aside.style.width = 0;
  content.style.width = '100%';
  btn1.style.left = 0;
  aside.style.transitionDuration = '.5s';
  btn1.style.transitionDuration = '.5s';
  content.style.transitionDuration = '.3s';
}else{
  btn1.textContent = 'c';
  aside.style.width = '15%';
  content.style.width = '85%';
  btn1.style.left ='15%';
  content.style.transitionDuration = '.5s';
}
}
