let input = document.querySelector("input");
let planets = document.querySelector(".planets");

//get the button
const button = document.querySelector(".button");

const planetBox = document.querySelector(".imageBox");
const planetChildren = document.querySelector("img");

//fn for checking state
const deleteImage = (desiredOutPut) => {
  planetBox.innerHTML = "";
  const desired = document.createElement("p");
  desired.textContent = desiredOutPut;
  //styling the replacement
  desired.style.color = "white";
  desired.style.fontSize = "20px";
  planetBox.appendChild(desired);
};

//fn to add image and mass of planet
const replacePlanet = (pathimage, nameOfPlanet, sweight) => {
  const planetBox = document.querySelector(".imageBox");
  const calCulationDiv = document.createElement("div");
  const allOverPic = document.createElement("img");
  allOverPic.classList.add("images");

  const weight = document.createElement("p");
  const divContent = document.createElement("div");
  const worded = document.createElement("p");
  worded.style.color = "white";
  weight.classList.add("rounded");
  divContent.appendChild(weight);
  divContent.classList.add("divContent");
  calCulationDiv.appendChild(worded);
  calCulationDiv.appendChild(divContent);
  calCulationDiv.classList.add("flexDiv");

  //replacements
  planetBox.innerHTML = "";
  //for the image
  allOverPic.src = pathimage;
  worded.textContent = `The weight on ${nameOfPlanet} is `;
  worded.style.fontSize = "20px";

  weight.textContent = `${sweight}N`;

  planetBox.appendChild(allOverPic);
  planetBox.appendChild(calCulationDiv);
};

//obj for gravity
const obj = {
  earthMass: 9.81,
  mercuryMass: 3.7,
  venusMass: 8.8,
  neptuneMass: 11.15,
  marsMass: 3.7,
  jupiterMass: 24.79,
  plutoMass: 0.62,
  saturnMass: 10.4,
  uranusMass: 8.69,
  moonMass: 1.625,
};
//calculations on planets
const planetsNumbers = (number) => {
  if (planets.value === "earth") {
    replacePlanet(
      "./IMAGES/earth.png",
      "earth",
      (obj.earthMass * number).toFixed(1)
    );
  } else if (planets.value === "mercury") {
    replacePlanet(
      "./IMAGES/mercury.png",
      "mercury",
      (obj.mercuryMass * number).toFixed(1)
    );
  } else if (planets.value === "venus") {
    replacePlanet(
      "./IMAGES/venus.png",
      "venus",
      (obj.venusMass * number).toFixed(1)
    );
  } else if (planets.value === "neptune") {
    replacePlanet(
      "./IMAGES/neptune.png",
      "neptune",
      (obj.neptuneMass * number).toFixed(1)
    );
  } else if (planets.value === "mars") {
    replacePlanet(
      "./IMAGES/mars.png",
      "mars",
      (obj.marsMass * number).toFixed(1)
    );
  } else if (planets.value === "jupiter") {
    replacePlanet(
      "./IMAGES/jupiter.png",
      "jupiter",
      (obj.jupiterMass * number).toFixed(1)
    );
  } else if (planets.value === "pluto") {
    replacePlanet(
      "./IMAGES/pluto.png",
      "pluto",
      (obj.plutoMass * number).toFixed(1)
    );
  } else if (planets.value === "saturn") {
    replacePlanet(
      "./IMAGES/saturn.png",
      "saturn",
      (obj.saturnMass * number).toFixed(1)
    );
  } else if (planets.value === "uranus") {
    replacePlanet(
      "./IMAGES/uranus.png",
      "uranus",
      (obj.uranusMass * number).toFixed(1)
    );
  } else {
    replacePlanet(
      "./IMAGES/moon.png",
      "moon",
      (obj.moonMass * number).toFixed(1)
    );
  }
};

//The overall fn
const massMissing = () => {
  if (planets.value === "noPlanet" && input.value === "")
    deleteImage("Enter  mass and  planet");
  else if (input.value === "") deleteImage("Enter a number");
  else if (isNaN(input.value)) deleteImage("Please enter a number");
  else if (planets.value === "noPlanet") deleteImage("Enter planet");
  else planetsNumbers(Number(input.value));
};

button.addEventListener("click", (e) => {
  massMissing();
  //reset the input values
  input.value = "";
  planets.value = "noPlanet";
});
