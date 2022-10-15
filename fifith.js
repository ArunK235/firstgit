//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #000';

//var seconditem= document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';
// we can use style='diplay-none; for making unvisible

//queryselectorall()
var titles=document.querySelectorAll('.title');
console.log(titles);
//var seconditem= document.querySelectorAll('li:nth-child(2)');
//seconditem.style.Color='green';


var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
for(var i=0; i<even.length;i++){
    even[0].style.backgroundColor='green';
}

// difference between querselector and queryselector all is queryselector returns single element but queryselectorall returns for multple elements.
