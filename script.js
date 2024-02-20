// var ele = document.createElement("div");
// ele.innerHTML="This is a dynamic div tag";
// ele.className="main";
// ele.id="main1";

// var a = document.createElement("a");
// a.setAttribute("href","https://www.zenclass.in/class");
// a.setAttribute("target","_blank");
// a.innerHTML="zen class";
// document.body.append(ele,a);

// var ele = document.createElement("div");
// ele.className="container";
// var ele1 = document.createElement("div");
// ele1.className="row";
// var ele2 = document.createElement("div");
// ele2.className="col";
// ele1.append(ele2);
// ele.append(ele1);
// document.body.append(ele);

var labelfirst = document.createElement("label");
labelfirst.setAttribute("for","firstname");
labelfirst.innerHTML = "First Name";

var firstinput = document.createElement("input");
firstinput.setAttribute("id","firstname");
firstinput.setAttribute("type","text");

var break1 = document.createElement("br");
var break2 = document.createElement("br");
var break3 = document.createElement("br");
var break4 = document.createElement("br");
var break5 = document.createElement("br");
var break6 = document.createElement("br");
var break7 = document.createElement("br");
var break8 = document.createElement("br");


var labelmiddle = document.createElement("label");
labelmiddle.setAttribute("for","middlename");
labelmiddle.innerHTML="Middle Name";

var middleinput = document.createElement("input");
middleinput.setAttribute("id","middlename");
middleinput.setAttribute("type","text");

var labellast=document.createElement("label");
labellast.setAttribute("for","lastname");
labellast.innerHTML="Last Name";

var lastinput = document.createElement("input");
lastinput.setAttribute("id","lastname");
lastinput.setAttribute("type","text");

var labelmail = document.createElement("label");
labelmail.setAttribute("for","e-mail");
labelmail.innerHTML = "E-Mail";

var mailinput = document.createElement("input");
mailinput.setAttribute("id","e-mail");
mailinput.setAttribute("type","email");

var button = document.createElement("button");
button.setAttribute("onclick","foo()");
button.innerHTML = "click me";


document.body.append(labelfirst,break1,firstinput,break2,labelmiddle,break3,middleinput,break4,labellast,break5,lastinput,break6,labelmail,break7,mailinput,break8,button);

function foo(){
    var first = document.getElementById("firstname").value;
    console.log(`First Name:${first}`);
    
    var middle = document.getElementById("middlename").value;
    console.log(`Middle Name:${middle}`);

    var last = document.getElementById("lastname").value;
    console.log(`Last Name:${last}`);

    var mail = document.getElementById("e-mail").value;
    console.log(`E-Mail:${mail}`);
}
