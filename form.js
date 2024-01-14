
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   console.log(event.target);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector('[data-js="form"]');
//     const questionsContainer = document.querySelector('[data-js="questions-container"]');
  
//     form.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       const question = document.getElementById("question").value;
//       const answer = document.getElementById("answer").value;
//       const tag = document.getElementById("tag").value;
  

//       const card = document.createElement("div");
//       card.classList.add("card");
  
//       const questionElement = document.createElement("p");
//       questionElement.textContent = `Question: ${question}`;
  
//       const answerElement = document.createElement("p");
//       answerElement.textContent = `Answer: ${answer}`;
  
//       const tagElement = document.createElement("p");
//       tagElement.textContent = `Tag: ${tag}`;
  

//       card.appendChild(questionElement);
//       card.appendChild(answerElement);
//       card.appendChild(tagElement);
  
//       questionsContainer.appendChild(card);
  

//       form.reset();
//     });
//   });
  
  