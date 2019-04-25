const answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.',
  'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.',
  'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don`t count on it.', 'My reply is no.',
  'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

function ballAnswer(question) {
  if(question.trim()) {
    let random = Math.floor(Math.random() * 20); 
    return answers[random];
  }
  return 'Please ask a question.';
}

export { ballAnswer, answers };
