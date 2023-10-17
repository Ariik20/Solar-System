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

  weight.textContent = `${sweight}`;

  planetBox.appendChild(allOverPic);
  planetBox.appendChild(calCulationDiv);
};

const obj = {
  earthMass: 9 / 5,
  mercuryMass: 5 / 9,
  venusMass: 3 / 9,
  neptuneMass: 4 / 9,
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
  } else {
    homeses(
      "./IMAGES/neptune.png",
      "neptune",
      (obj.neptuneMass * number).toFixed(1)
    );
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
