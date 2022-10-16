var itemlist=document.querySelector('#items');
//parentelement
console.log(itemlist.parentElement);
console.log(itemlist.parentElement.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
//laast elemenet child
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';
//lastchild
console.log(itemlist.lastChild);
//firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello 1';
//firstchild
console.log(itemlist.lastChild);
nextsibling, nextelementsibling, previoussibling,previousnextsibling
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
//createelement
var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello 1';
//set attribute
newdiv.setAttribute('title', 'helloworld');
//create textnode
var newdivtext= document.createTextNode('helloworld');
//console.log(newdivtext);
console.log(newdiv);
newdiv.appendChild(newdivtext);

var container= document.querySelector('header .container');
var h1=document.querySelector('header h1');
newdiv.style.fontSize= '30px';
container.insertBefore(newdiv, h1);
var div = document.getElementById('items')  
var  newChild = document.createElement('p')  
newChild.textContent = 'hello world'  
div.prepend(newChild);





