// const when = document.querySelector(".when");
// let planet = document.querySelector("input");
let input = document.querySelector("input");
let planets = document.querySelector(".planets");
// let selectedPlanet = planets.value;

//get the button
const button = document.querySelector(".button");

//major culprits
const planetBox = document.querySelector(".imageBox");
const planetChildren = document.querySelector("img");
const deleteImage = (desiredOutPut) => {
  planetBox.innerHTML = "";
  const desired = document.createElement("p");
  desired.textContent = desiredOutPut;
  //styling the replacement
  desired.style.color = "white";
  desired.style.fontSize = "20px";
  planetBox.appendChild(desired);
};

//calculations on planets
const planetsNumbers = (number) => {
  let earth = ((9 / 5) * number).toFixed(1);
  let mercury = ((5 / 9) * number).toFixed(1);
  let venus = ((3 / 9) * number).toFixed(1);
  let neptune = ((4 / 9) * number).toFixed(1);
  //The changes on the modern
  const calCulationDiv = document.createElement("div");
  const allOverPic = document.createElement("img");
  allOverPic.classList.add("images");

  const weight = document.createElement("p");
  const divContent = document.createElement("div");
  const worded = document.createElement("p");
  worded.style.color = "white";
  // worded.textContent = "The weight on earth is ";
  weight.classList.add("rounded");
  weight.style.color = "white";
  weight.style.fontWeight = "bold";
  weight.style.fontSize = "24px";

  // divContent.appendChild(worded);

  divContent.appendChild(weight);
  divContent.classList.add("divContent");
  calCulationDiv.appendChild(worded);
  calCulationDiv.appendChild(divContent);
  calCulationDiv.classList.add("flexDiv");
  // calCulationDiv.appendChild(weight);

  // const insideOfCalDiv
  // planetBox.removeChild(planetChildren);
  if (planets.value == "noPlanet") deleteImage("Enter planet");
  else if (planets.value === "earth") {
    //first remove the known element
    planetBox.innerHTML = "";
    //for the image
    allOverPic.src = "./earth.png";
    // earthPicture.classList.add("images")

    //for the div and calcaltions
    worded.textContent = "The weight on earth is ";

    weight.textContent = `${earth}`;

    planetBox.appendChild(allOverPic);
    planetBox.appendChild(calCulationDiv);
    // reset();
  } else if (planets.value === "mercury") {
    // planetBox.removeChild(planetChildren);
    planetBox.innerHTML = "";

    //for the image
    allOverPic.src = "./mercury.png";
    // earthPicture.classList.add("images")

    //for the div and calcaltions
    worded.textContent = "The weight on mercury is ";

    weight.textContent = ` ${mercury}`;

    planetBox.appendChild(allOverPic);
    planetBox.appendChild(calCulationDiv);
    // reset();
  } else if (planets.value === "venus") {
    // planetBox.removeChild(planetChildren);
    planetBox.innerHTML = "";

    //for the image
    allOverPic.src = "./venus.png";
    // earthPicture.classList.add("images")
    worded.textContent = "The weight on venus is ";

    //for the div and calcaltions
    weight.textContent = `${venus}`;

    planetBox.appendChild(allOverPic);
    planetBox.appendChild(calCulationDiv);
    // reset();
  } else {
    // planetBox.removeChild(planetChildren);
    planetBox.innerHTML = "";

    //for the image
    allOverPic.src = "./neptune.png";
    // earthPicture.classList.add("images")

    //for the div and calcaltions
    worded.textContent = "The weight on neptune is ";

    weight.textContent = `${neptune}`;

    planetBox.appendChild(allOverPic);
    planetBox.appendChild(calCulationDiv);
    // reset();
  }
  // input.value = "";
  // planets.value = "noPlanet";
};

//THE OVERALL FUNCTION

const massMissing = () => {
  if (input.value === "") deleteImage("Enter a number");
  else planetsNumbers(Number(input.value));
  // planets.value = "noPlanet";
};

button.addEventListener("click", (e) => {
  massMissing();
  //reset
});
