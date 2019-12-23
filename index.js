var newPerson=document.getElementById('new-person');
var newBill=document.getElementById('new-bill');
var addbutton=document.getElementsByTagName('button')[0];
var friends=document.getElementById('friends');
var bills=document.getElementById('bills');
var items=document.getElementById('items');
var billBtn=document.getElementById('billBtn');
var listFriends=document.getElementById('listFriends');
var listAmount=document.getElementById('listAmount');



listFriends.innerHTML=newPerson;


var createFriends=function(friendString){
    var listItem=document.createElement('li');
    
    var label=document.createElement('label');
    var editInput = document.createElement('Input');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');



    
    editInput.type='text';
    editButton.innerText='Edit';
    deleteButton.innerText='Delete';
    editButton.className='edit';
    deleteButton.className='delete';
    label.innerHTML=friendString;

    
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;

}

var createBills=function(billString){
    var listItem=document.createElement('li');
    
    var label=document.createElement('label');
    var editInput = document.createElement('Input');
    var showButton=document.createElement('button');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');



    
    editInput.type='text';
    showButton.innerHTML='Show';
    showButton.className='show';
    editButton.innerHTML='Edit';
    deleteButton.innerHTML='Delete';
    editButton.className='edit';
    deleteButton.className='delete';
    label.innerHTML=billString;

    
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(showButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;

}


var addPeople=function(){
    var listItem=createFriends(newPerson.value);
    if(newPerson.value ===" "){
        alert("please add a friend");
    }
    else{
        friends.appendChild(listItem);
        bindTaskEvents(listItem);
        

        newPerson.value=" ";
    }
}



var addBills=function(){

    for(var i=0;createBills.children.length;i++){

    }
    var listItem=createBills(items.value);
    if(items.value ===" "){
        alert("enter the items");
    }
    else{
        
        bills.appendChild(listItem);
        billEvents(listItem);
        
        
        

        items.value==" ";
    }
}

addbutton.addEventListener('click',addPeople);
billBtn.addEventListener('click',addBills);



var editFriend=function(){
    var listItem=this.parentNode;
    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector('label');
    var button=document.getElementsByClassName('edit');

    
    

    editInput.value=label;
    this.innerHTML='SAVE';
}


var deleteFriend=function(){
    var listItem=this.parentNode;
    var ul=listItem.parentNode;

    ul.removeChild(listItem);

}

var showDetails=function(){

    var listAmount=this.parentNode;
    var showButton=document.getElementsByClassName('show');






}
var bindTaskEvents = function (taskListItem) {
    
    //Select ListItems Children
   
    var editButton = taskListItem.querySelector('button.edit');
    var deleteButton = taskListItem.querySelector('button.delete');
  
    //bind editTask to edit button
    editButton.onclick = editFriend;
  
    //bind deleteTask to delete button
    deleteButton.onclick = deleteFriend;
  
    
    
  }

  var taskFriends=function(){
      var listItem=this.parentNode;
      friends.appendChild(listItem);
      bindTaskEvents(listItem);
  }
var taskBills=function(){
    var listItem=this.parentNode;
    bills.appendChild(listItem);
    billEvents(listItem);
}


  var billEvents = function (taskListItem) {
    
    //Select ListItems Children
   var showButton=taskListItem.querySelector('button.show');
    var editButton = taskListItem.querySelector('button.edit');
    var deleteButton = taskListItem.querySelector('button.delete');


    showButton.onclick=showDetails;

    //bind editTask to edit button
    editButton.onclick = editFriend;
  
    //bind deleteTask to delete button
    deleteButton.onclick = deleteFriend;


  
    
    
  }

  
for(var i=0;i<friends.children.length;i++){
    bindTaskEvents(friends.children[i]);
}

for(var i=0;i<bills.children.length;i++){
    billEvents(bills.children[i]);
    
}
