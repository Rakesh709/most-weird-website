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

document.querySelector("#creation").addEventListener("click", function (e) {
  console.log(e.target);
  let shortThoughts = [
    "What is the purpose of dreams?",
    "Do we all see colors the same way?",
    "Is free will an illusion?",
    "Can time exist without change?",
    "What defines true happiness?",
    "Is reality subjective or objective?",
    "Do we have a soul, or are we just biology?",
    "Can something come from nothing?",
    "What if the universe is alive?",
    "Does consciousness exist outside the brain?",
    "Can technology ever replace human emotion?",
    "What if deja vu is a glitch in reality?",
    "Is math a human invention or a discovery?",
    "Why do we fear the unknown?",
    "Are we living in a multiverse?",
    "What if space and time are the same thing?",
    "Does language shape our thoughts?",
    "Is it possible to truly know another person?",
    "Could immortality be a curse rather than a blessing?",
    "What if reality is just a shared dream?",
  ];

  let text = (document.querySelector("#creation").innerHTML =
    shortThoughts[Math.floor(Math.random() * 20) + 1]);
  document.querySelector("#creation").style.backgroundColor = "grey";
  document.querySelector("#creation").style.color = "white";
  document.querySelector("#creation").style.fontSize = "24px";
  document.querySelector("#creation").style.textAlign = "center";
});

//datatype check

let datatypeValue = document.querySelector(".datatypeHolder");
let checkValue = document.querySelector(".check");

function checkDataType(value) {
  console.log("value is", value);

  if (value.trim() === "") {
    document.querySelector(".finalValue").innerHTML = "It's UNDEFINED";
    return;
  }

  let parseValue;

  //to handle boolean value
  if (value === "true" || value === "false") {
    parseValue = value === "true";
  } else if (!isNaN(value)) {
    parseValue = Number(value);
  } else {
    parseValue = value;
  }

  let dataType = typeof parseValue;
  console.log(dataType);

  if (dataType === "number") {
    document.querySelector(".finalValue").innerHTML = "Its Number";
  } else if (dataType === "string") {
    document.querySelector(".finalValue").innerHTML = "Its String";
  } else if (dataType === "boolean") {
    document.querySelector(".finalValue").innerHTML = "Its Boolean";
  } else {
    document.querySelector(".finalValue").innerHTML = "something wrong !";
  }
}

checkValue.addEventListener("click", () => {
  checkDataType(datatypeValue.value);
});

// fake datagenerater

let genButton = document.getElementById("genButton");

async function getFakeData() {
  try {
    const resp = await fetch("https://randomuser.me/api/");

    const data = await resp.json();

    const results = data.results[0];

    const fullName = `${results.name.title} ${results.name.first} ${results.name.last}`;
    const age = results.dob.age;

    const email = results.email;
    const picture = results.picture.large;

    let dataContainer = document.getElementById("apiData");
    dataContainer.innerHTML = `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Age:</strong> ${age} years</p>
      <p><strong>Email:</strong> ${email}</p>
      <img src="${picture}" alt="User Picture" />
    `;
  } catch (error) {
    console.log("Some error occured");
  }
}

genButton.addEventListener("click", getFakeData);
