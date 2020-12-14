var list= document.getElementById("list");

function addTodo(){

    var todoItems=document.getElementById("todo_items");

    //create li tag with text node
    var li= document.createElement('li');
    var liText= document.createTextNode(todo_items.value);
li.appendChild(liText)

list.appendChild(li)
 


//create delete button
var delBtn= document.createElement("button")
var dltText=document.createTextNode("DELETE")
delBtn.setAttribute("class","btn")
delBtn.setAttribute("OnClick","deleteItems(this)")
delBtn.appendChild(dltText )
todo_items.value=""

//create edit button
var editBtn=document.createElement("button")
var editText=document.createTextNode("EDIT")
editBtn.setAttribute("class","btn")
editBtn.appendChild(editText)
editBtn.setAttribute("onClick","editItems(this)")

li.appendChild(delBtn)
li.appendChild(editBtn)

if(todo_items.value==""){


    try {
        adddlert("Welcome guest!");
      }
      catch(err) {
window.alert("null value")
      }
}

}
 function deleteItems(e)
 {
e.parentNode.remove()
 }
 
 function deleteAll()
 {
list.innerHTML=""
 }

 function editItems(edit)
 {
    // console.log(e.parentNode.firstChild.NodeValue)  
    // var val=e.parentNode.firstChild.nodeValue;

    var editValue= prompt("Enter edit Value",edit.parentNode.firstChild.NodeValue)
    edit.parentNode.firstChild.nodeValue=editValue;

 }