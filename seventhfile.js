var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);
//add
function addItem(e){
    e.preventDefault();
    //console.log(1);
    //get input value
    var newitem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item';
    //console.log(li);
    //add textnode to the input value
    li.appendChild(document.createTextNode(newitem));
    itemList.appendChild(li);
    //create del button
    var deletebtn= document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    //append textNode
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    //creaatw edit button
    var editbtn= document.createElement('button');
    editbtn.className='btn btn-danger btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);
}
//delete event
itemList.addEventListener('click', removeitem);
function removeitem(e){
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}