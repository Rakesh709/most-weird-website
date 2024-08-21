

const divInfo = document.createElement('div');
divInfo.setAttribute("title","titleinfo");
divInfo.className="div-info";
divInfo.id="dev-info-id"
divInfo.style.color="white"
divInfo.style.textAlign="center"
divInfo.innerHTML="Rakesh Website"
body.appendChild(divInfo)
// console.log(divInfo);
// console.log(document.body);


//++++++++++++++++++++++++++++++ input field +++++++++++++++++++++++++++++++++++++++++


// let inputfieldEntry = document.getElementById("center-input").addEventListener('click',function(e){
//     console.log("something entered")
// })
// console.log(inputfieldEntry);

//+++++++++++++++++ CLOCK ++++++++++++++++++++++++++++++++

const istClock = document.getElementById("ist-clock")

setInterval(function(){
    const date = new Date();
    istClock.innerHTML = date.toLocaleTimeString()
},1000)


const ustClock = document.getElementById("UST-clock")

setInterval(function(){
    const date = new Date();
    ustClock.innerHTML= date.toLocaleTimeString("en-US", {timeZone: "America/New_York"})
},1000)

const bstClock = document.getElementById("BST-clock")

setInterval(function(){
    const date = new Date();
    bstClock.innerHTML= date.toLocaleTimeString("en-US", {timeZone: "Europe/London"})
},1000)




function checkInput(){
    let input = document.getElementById("center-input").value;
    if(!NaN  && input.trim()!== ''){
        alert(`input is ${input} is the number`)
    }else{
        alert("this is string")
    }
}