var add;
var balance;
balance = 0;
balance += add;
var withdraw;


function addMoney (){
    add = window.prompt("Enter amount to add");
    alert("You have just added N" + add + " to your account.");
 }
    

 function withdrawMoney (){
     withdraw = window.prompt("Enter amount to withdraw");
    alert("You have just withdrawn N" + withdraw + " from your account.");
 }

 function checkBalance (){
     alert("You have N" + balance + "left in your account");
   
 }