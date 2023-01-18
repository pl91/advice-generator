// const advice = document.querySelector("#advice");
// const button = document.querySelector("button");

// const addAdvice = async () => {
//   const adviceText = await getAdvice();
//   const newP = document.createElement("p");
//   newP.append(adviceText);
//   advice.append(newP);
// };

// const getAdvice = async () => {
//   try {
//   const res = await axios.get("https://api.adviceslip.com/advice");
//   return res.data.slip.advice;}

//   catch (e) {
//     return "NO ADVICE AVAILABLE!";
//   }
// };

// button.addEventListener("click", addAdvice);

const adviceText = document.querySelector("#advice-text");
const adviceId = document.querySelector("#advice-id");
const button = document.querySelector("#dice-icon");

const getAdvice = async () => {
  try {
  const res = await axios.get("https://api.adviceslip.com/advice");
  const id = res.data.slip.id;
  const advice = res.data.slip.advice;
  adviceText.innerHTML = `"${advice}"`;
  adviceId.innerHTML = `Advice #${id}`;
}

  catch (e) {
    return "NO ADVICE AVAILABLE!";
  }
};

button.addEventListener("click", getAdvice);


