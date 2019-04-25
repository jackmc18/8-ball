const test = QUnit.test;

QUnit.assert.contains = function(needle, haystack, message) {
  var actual = haystack.indexOf(needle) > -1;
  this.push(actual, actual, needle, message);
};

const answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.',
  'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.',
  'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don`t count on it.', 'My reply is no.',
  'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

function ballAnswer(question) {
  if(question) {
    let random = Math.floor(Math.random() * 20); 
    return answers[random];
  }
  return 'Please ask a question.';
}

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