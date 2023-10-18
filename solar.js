let input = document.querySelector("input");
let planets = document.querySelector(".planets");

//get the button
const button = document.querySelector(".button");

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

const homeses = (pathimage, nameOfPlanet, sweight) => {
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

  weight.textContent = `${sweight}N`;

  planetBox.appendChild(allOverPic);
  planetBox.appendChild(calCulationDiv);
};

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
    homeses("./IMAGES/earth.png", "earth", (obj.earthMass * number).toFixed(1));
  } else if (planets.value === "mercury") {
    homeses(
      "./IMAGES/mercury.png",
      "mercury",
      (obj.mercuryMass * number).toFixed(1)
    );
  } else if (planets.value === "venus") {
    homeses("./IMAGES/venus.png", "venus", (obj.venusMass * number).toFixed(1));
  } else if (planets.value === "neptune") {
    homeses(
      "./IMAGES/neptune.png",
      "neptune",
      (obj.neptuneMass * number).toFixed(1)
    );
  } else if (planets.value === "mars") {
    homeses("./IMAGES/mars.png", "mars", (obj.marsMass * number).toFixed(1));
  } else if (planets.value === "jupiter") {
    homeses(
      "./IMAGES/jupiter.png",
      "jupiter",
      (obj.jupiterMass * number).toFixed(1)
    );
  } else if (planets.value === "pluto") {
    homeses(
      "./IMAGES/pluto.png",
      "pluto",
      (obj.neptuneMass * number).toFixed(1)
    );
  } else if (planets.value === "saturn") {
    homeses(
      "./IMAGES/saturn.png",
      "saturn",
      (obj.saturnMass * number).toFixed(1)
    );
  } else if (planets.value === "uranus") {
    homeses(
      "./IMAGES/uranus.png",
      "uranus",
      (obj.saturnMass * number).toFixed(1)
    );
  } else {
    homeses("./IMAGES/moon.png", "moon", (obj.moonMass * number).toFixed(1));
  }
};

//THE OVERALL FUNCTION

const massMissing = () => {
  if (input.value === "") deleteImage("Enter a number");
  else if (planets.value === "noPlanet") deleteImage("Enter planet");
  else if (planets.value == "noPlanet" && input.value === "")
    deleteImage("Enter a Mass & a Planet");
  else planetsNumbers(Number(input.value));
};

button.addEventListener("click", (e) => {
  massMissing();
});
