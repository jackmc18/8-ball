import { ballAnswer } from './ball-answer.js';

const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit');
const answerMessage = document.getElementById('message');

submitButton.addEventListener('click', () => {
  const question = questionInput.value;
  const answer = ballAnswer(question);
  answerMessage.textContent = 'Your answer: ' + answer;
});