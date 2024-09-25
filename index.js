

const divInfo = document.createElement("div");
divInfo.setAttribute("title", "titleinfo");
divInfo.className = "div-info";
divInfo.id = "dev-info-id";
divInfo.style.color = "white";
divInfo.style.textAlign = "center";
divInfo.innerHTML = "Rakesh Website";
body.appendChild(divInfo);
// console.log(divInfo);
// console.log(document.body);


//+++++++++++++++++ CLOCK ++++++++++++++++++++++++++++++++

const istClock = document.getElementById("ist-clock");

setInterval(function () {
  const date = new Date();
  istClock.innerHTML = date.toLocaleTimeString();
}, 1000);

const ustClock = document.getElementById("UST-clock");

setInterval(function () {
  const date = new Date();
  ustClock.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
}, 1000);

const bstClock = document.getElementById("BST-clock");

setInterval(function () {
  const date = new Date();
  bstClock.innerHTML = date.toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
  });
}, 1000);


// colour picker

const button = document.querySelectorAll(".button");
//console.log(button);

const colourBody = document.querySelector(".canvas");

//console.log(colourBody);

button.forEach(function (button) {
  //console.log(button)
  button.addEventListener("click", function (e) {
    //console.log(e.target);
    if (e.target.id === "grey") {
      colourBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightgreen") {
      colourBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      colourBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      colourBody.style.backgroundColor = e.target.id;
    }
  });
});


// creation

document.querySelector("#creation").addEventListener("click",function(e){
  console.log(e.target)
        const date = new Date();
        document.querySelector("#creation").innerHTML= date.toLocaleDateString()
        document.querySelector("#creation").style.backgroundColor="lightgreen"
        
        
})



//datatype check 

let datatypeValue= document.querySelector(".datatypeHolder")
let checkValue = document.querySelector(".check")

function checkDataType(value){
  console.log("value is", value);

  if (value.trim() === "") {
    document.querySelector(".finalValue").innerHTML = "It's UNDEFINED";
    return;
  }

  let parseValue;
  
  //to handle boolean value
  if(value ==='true' || value ==="false"){
    parseValue = (value ==='true');
  }else if(!isNaN(value)) {
    parseValue = Number(value);
  }else{
    parseValue = value;
  }

  let dataType = typeof parseValue
  console.log(dataType)

  if(dataType ==="number"){
    document.querySelector(".finalValue").innerHTML = "Its Number"
  }else if(dataType === "string"){
    document.querySelector(".finalValue").innerHTML = "Its String"
  }else if(dataType === "boolean"){
    document.querySelector(".finalValue").innerHTML = "Its Boolean"
  }else{
    document.querySelector(".finalValue").innerHTML = "something wrong !"
  }




}


checkValue.addEventListener("click",()=>{
  checkDataType(datatypeValue.value)
})