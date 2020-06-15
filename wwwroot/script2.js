var lists=[];
function addfun()
{
const inputs= document.getElementById("input1");
const todo = inputs.value;
const todos={todo,id:Date.now()};
validation(todo);
inputs.style.border ="solid 1px black";
addTodo(todos);
lists.push(todos);
inputs.value="";
var len = lists.length;
document.getElementById("count1").value=len;
}
function validation(item1)
{  
if(item1.trim() == "")
{
var userinput =document.getElementById("input1");
userinput.style.border="solid 2px red";
submit1();
}
}

function addTodo(items)
{
const item = `<li class="item" id=${items.id}>
<input type="checkbox" name="products" onclick="findcheck()"   id="inp${items.id}"  >
${items.todo}    
<span><button id="del${items.id}" class="but2" onclick="delete1(${items.id})" value="${items.id}"> <i class="fa fa-close"></i></span></button>   
</li>`;  
const position ="afterbegin";
var insert= document.getElementById("list");
insert.insertAdjacentHTML(position,item);
}
function delete1(Id)
{
var listvalue=document.getElementById("list");
var butvalue=document.getElementById(Id);
listvalue.removeChild(butvalue);
lists.pop(id=Id);
document.getElementById("count1").value=lists.length;
findcheck();
}
function findcheck()
{
let checkedCount= document.querySelectorAll('input[type="checkbox"]:checked');
document.getElementById("count2").value=checkedCount.length;      
}
