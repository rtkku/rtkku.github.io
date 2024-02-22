const pageTitle = document.querySelector("#pageTitle");
const container = document.querySelector(".container");
const selectYears = document.querySelector("#years");
const yearTitle = document.querySelector("#yearTitle");

const personsData = {
  "1": ["Bart Simpson", "Tom", "Taz", "Homer Simpson", "Stewie Griffin"],
  "2": [
    "Tommy Pickles",
    "Dexter",
    "Chuckie Finster",
    "Bender",
    "Batman",
    "Scrooge McDuck",
  ],
  "3": [
    "SpongeBob SquarePants",
    "Arnold",
    "Lisa Simpson",
    "Pinky",
    "Bubbles",
    "Mickey Mouse",
    "Peter Griffin",
  ],
  "4": [
    "Johnny Bravo",
    "Rocko",
    "Fievel Mousekewitz",
    "The Brain",
    "Groundskeeper Willie",
    "Fry",
    "Marge Simpson",
    "Ralph Wiggum",
  ],
};

const showPersons = (year) => {
  const persons = personsData[year];
  yearTitle.innerHTML =
    selectYears.options[selectYears.selectedIndex].textContent;
  // Fade out the container smoothly
  container.style.opacity = "0";
  setTimeout(() => {
    container.innerHTML = "";
    for (let idx = 0; idx < persons.length; idx++) {
      container.innerHTML += `
          <div class="profile">
              <img src="images/${year}/${idx}.jpg" alt="" />
              <p>${persons[idx]}</p>
          </div>
      `;
    }
    // Fade in the container smoothly
    container.style.opacity = "1";
  }, 300);
};

selectYears.addEventListener("change", () => {
  showPersons(selectYears.value);
  pageTitle.innerHTML =
    selectYears.options[selectYears.selectedIndex].textContent;
});

showPersons("1");
