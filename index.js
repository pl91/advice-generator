// VARIABLES

// body element variable
const body = document.querySelector("body");
const dictionary = document.querySelector("#dictionary")
const elements = document.getElementsByTagName("*");
// const elementsCustom = elements.slice(14,22);
// function elementString() {
// for (let element of elements) {
//   const string = element.toString();
//   const newString = string.slice(14,22);
//   console.log(string);
// }
// }

// font selector variables
const fontSelector = document.querySelector("#font-selector__btn");
const currentSelection = document.querySelector("#current-selection");
const dropdown = document.querySelector("#dropdown");
const selectorIcon = document.querySelector("#font-selector__icon");

// theme toggler/checkbox variable
const themeToggler = document.querySelector("#checkbox");

// fonts array variable
const fonts = document.querySelectorAll(".dropdown__item");

// search input variables
const form = document.querySelector("#form");
const formInput = document.querySelector("#form__search");
const formSearchIcon = document.querySelector("#form__search-icon");

// result variables
const resultWord = document.querySelector("#results__word");
const resultPhonetics = document.querySelector("#results__phonetics");
const resultButton = document.querySelector("#results__button");


// FUNCTIONS

// Event target function (development only) 
// document.addEventListener("click", (e) => {
//   console.log(e.target)
// })

// Show/hide function
// toggle classlist when font selector is clicked
fontSelector.addEventListener("click", () => {
  dropdown.classList.toggle("visually-hidden")
  document.addEventListener("click", (e) => {
    if (e.target === themeToggler || e.target === formInput) {
      dropdown.classList.add("visually-hidden");
   };
  })
  

}); 

// Font-changer loop/function NOT IN USE
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
// form.addEventListener("submit", async (e) => {
//   try {
  // e.preventDefault();
  // const input = formInput.value;
  // const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
  // resultButton.style.display = "block";
  // resultWord.innerHTML = (res.data[0].word);
  // resultPhonetics.innerHTML = (res.data[0].phonetics[0].text);
  // resultButton.innerHTML = (res.data[0].phonetics[0].audio);
  // console.log(res.data[0]);
  // console.log(res.data[0].word);
  // console.log(res.data[0].phonetics);
  // console.log(res.data[0].meanings);

  // resultButton.addEventListener("click", () => {
  //   console.log("play music");
  // })
  // }

//   catch (e) {
//     return console.log("That word does not exist");
//   }
// });


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // resultButton.style.display = "block";
  resultButton.classList.remove("visually-hidden");
// Add invalid class if input is not a string 
  if (!(formInput.value) || !isNaN(formInput.value)) {
    form.classList.add("invalid")
  }
  else if (formInput.value) {
    form.classList.remove("invalid");
  }
}
)

























// NEW DICTIONARY API
// const makeCall = async () => {
// const key = "cf7a9eb0-0a54-4aea-9768-fbaf5b9f5bf7";
// const res = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/pizza?key=cf7a9eb0-0a54-4aea-9768-fbaf5b9f5bf7`);
// console.log(res.data);
// }
