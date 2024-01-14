document.querySelector('[data-js="form"]').addEventListener('submit', function (event) {
    event.preventDefault();

    var questionInput = document.getElementById('question');
    var answerInput = document.getElementById('answer');
    var tagInput = document.getElementById('tag');
  
    var questionText = questionInput.value.trim();
    var answerText = answerInput.value.trim();
    var tagText = tagInput.value.trim();
  

    // create card elements
    var card = document.createElement('div');
    card.classList.add('quiz-card');
  
    var questionHeading = document.createElement('h3');
    questionHeading.textContent = questionText;
  
    var answerButton = document.createElement('button');
    answerButton.textContent = 'Show Answer';
  
    var answerDiv = document.createElement('div');
    answerDiv.textContent = answerText;
    answerDiv.classList.add('hidden');
  
    var tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags');
    var tagsArray = tagText.split(' ');
    tagsArray.forEach(function (tag) {
      var span = document.createElement('span');
      span.classList.add('tag');
      span.textContent = '#' + tag;
      tagsDiv.appendChild(span);
    });
  
    // Append elements to the card
    card.appendChild(questionHeading);
    card.appendChild(answerButton);
    card.appendChild(document.createElement('br'));
    card.appendChild(document.createElement('br'));
    card.appendChild(answerDiv);
    card.appendChild(document.createElement('br'));
    card.appendChild(document.createElement('br'));
    card.appendChild(tagsDiv);
  
    var formContainer = document.querySelector('[data-js="questions-container"]');
    formContainer.appendChild(card);
  
    // Clear form fields
    questionInput.value = '';
    answerInput.value = '';
    tagInput.value = '';
  });
  