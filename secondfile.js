console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title=123; 
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
console.log(document.images);

console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='hello';
headerTitle.innerHTML='goodbye'; 
console.log(headerTitle.innerText);
console.log(headerTitle.textContent);
headerTitle.innerHTML='<h3> Hello</h3';
headerTitle.style.borderBottom='solid 3px #000';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var headertitle= document.getElementById('main');
console.log(headertitle);
headertitle.style.color="green";

