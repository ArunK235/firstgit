//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='hello';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow';
//li.style.backgroundColor='#f4f4f4'; 
//for(var i=0; i<li.length;i++){
    //li[i].style.backgroundColor='#f4f4f4';
//}
// even if class is not mentioned by using tagname its applied to item5
//but by using classname it is not applied


var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
//items.style.backgroundColor='#f4f4f4'; 
for(var i=0; i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}