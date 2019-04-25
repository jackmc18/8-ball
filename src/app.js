const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  console.log(questionInput.value);
});