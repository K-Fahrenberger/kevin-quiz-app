document.addEventListener("DOMContentLoaded", function () {
  var questionInput = document.getElementById("question");
  var answerInput = document.getElementById("answer");
  var charLimit = 150;

  var questionCount = document.getElementById("questionCount");
  var answerCount = document.getElementById("answerCount");

  function updateCharacterCount(input, countElement) {
    var remainingChars = charLimit - input.value.length;
    countElement.textContent = remainingChars + " characters left";
  }

  questionInput.addEventListener("input", function () {
    updateCharacterCount(questionInput, questionCount);
  });

  answerInput.addEventListener("input", function () {
    updateCharacterCount(answerInput, answerCount);
  });

  document
    .querySelector('[data-js="form"]')
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var questionText = questionInput.value.trim();
      var answerText = answerInput.value.trim();
      var tagText = document.getElementById("tag").value.trim();

      // Check if the input lengths exceed 150 characters
      if (questionText.length > charLimit || answerText.length > charLimit) {
        alert("Question and answer should be limited to 150 characters.");
        return; // Stop form submission if lengths are exceeded
      }

      // create card elements
      var card = document.createElement("div");
      card.classList.add("quiz-card");

      var questionHeading = document.createElement("h3");
      questionHeading.textContent = questionText;

      var answerButton = document.createElement("button");
      answerButton.textContent = "Show Answer";

      var answerDiv = document.createElement("div");
      answerDiv.textContent = answerText;
      answerDiv.classList.add("hidden");

      var tagsDiv = document.createElement("div");
      tagsDiv.classList.add("tags");
      var tagsArray = tagText.split(" ");
      tagsArray.forEach(function (tag) {
        var span = document.createElement("span");
        span.classList.add("tag");
        span.textContent = "#" + tag; //additional tags
        tagsDiv.appendChild(span);
      });

      // Append elements to the card
      card.appendChild(questionHeading);
      card.appendChild(answerButton);
      card.appendChild(document.createElement("br"));
      card.appendChild(document.createElement("br"));
      card.appendChild(answerDiv);
      card.appendChild(document.createElement("br"));
      card.appendChild(document.createElement("br"));
      card.appendChild(tagsDiv);

      var formContainer = document.querySelector(
        '[data-js="questions-container"]'
      );
      formContainer.appendChild(card);

      // Clear form fields and reset character counters
      questionInput.value = "";
      answerInput.value = "";
      document.getElementById("tag").value = "";

      // Update character count elements after form submission
      updateCharacterCount(questionInput, questionCount);
      updateCharacterCount(answerInput, answerCount);
    });
});
