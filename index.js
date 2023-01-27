// VARIABLES

// body element variable
const body = document.querySelector("body");

// font selector variables
const fontSelector = document.querySelector("#font-selector__btn");
const currentSelection = document.querySelector("#current-selection");
const dropdown = document.querySelector("#dropdown");
const selectorIcon = document.querySelector("#font-selector__icon");

// theme toggler/checkbox variable
const themeToggler = document.querySelector("#checkbox");

// fonts array variable
const fonts = document.querySelectorAll(".dropdown__item");

// font selector components for auto-close loop/function
const selectorComponents = [fontSelector, currentSelection, selectorIcon, dropdown, fonts[0], fonts[1], fonts[2]];

// search input variable
const searchForm = document.querySelector("#form");

// FUNCTIONS

// Event target function (development only) 
// document.addEventListener("click", (e) => {
//   console.log(e.target)
// })

// Show/hide function
// toggle classlist when font selector is clicked
fontSelector.addEventListener("click", () => {
  dropdown.classList.toggle("show");
// itirate over selectorComponents for auto-close feature
  for (let component of selectorComponents) {
    document.addEventListener("click", (e) => {
      if (e.target === component) {
        console.log("selector component")
      }
      else if (e.target === body) {
        dropdown.classList.remove("show");
        console.log("body");
      }
    })
  }
});

// Font-changer loop/function
for (let font of fonts) {
  font.addEventListener("click", (e) => {
    if ((e.target = font)) {
      currentSelection.innerHTML = font.innerHTML;
      body.style.fontFamily = font.id;
    }
  })
}

// ThemeToggle function
themeToggler.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// searchWord

// searchForm.addEventListener("change", async () => {
//   const res = await axios.get("https://api.adviceslip.com/advice");
//   console.log("submitted")
//   console.log(res);
// })



// const test = async () => {
//   const res = await axios.get("https://api.adviceslip.com/advice");
//   console.log(res);
// }

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
  console.log(res);
  console.log("im going through changes");
});
