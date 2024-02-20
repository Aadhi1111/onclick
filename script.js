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

function foo(){
    var fn=document.getElementById("firstname").value;
    var mn=document.getElementById("middlename").value;
    var ln=document.getElementById("lastname").value;
    var em=document.getElementById("email").value;
    console.log(fn);
    console.log(mn);
    console.log(ln);
    console.log(em);
}