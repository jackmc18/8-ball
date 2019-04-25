import { ballAnswer, answers } from '../src/ball-answer.js';
const test = QUnit.test;

QUnit.assert.contains = function(needle, haystack, message) {
  var actual = haystack.indexOf(needle);
  this.pushResult({
    result: (actual >= 0 && actual < haystack.length),
    actual: actual,
    expected: haystack,
    message: message
  });
};

test('Send a question and expect an answer from the array of answers', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const question = 'How will my day go?';
  const expected = answers;
  //Act 
  const result = ballAnswer(question);
  // Call the function you're testing and set the result to a const
  //Assert
  assert.contains(result, expected);
});

test('Send a blank question and expect "Please ask a question"', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const question = '';
  const expected = 'Please ask a question.';
  //Act 
  const result = ballAnswer(question);
  // Call the function you're testing and set the result to a const
  //Assert
  assert.equal(result, expected);
});

test('Send a white space question and expect "Please ask a question"', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const question = '   ';
  const expected = 'Please ask a question.';
  //Act 
  const result = ballAnswer(question);
  // Call the function you're testing and set the result to a const
  //Assert
  assert.equal(result, expected);
});