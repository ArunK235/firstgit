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
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
}

// difference between querselector and queryselector all is queryselector returns single element but queryselectorall returns for multple elements.