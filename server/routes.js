// routes.js

const Poll = require('./models/Poll');
const Result = require('./models/Result');

module.exports = [{
    method: 'GET',
    path: '/api/polls/{id}',
    handler: (request, h) => {
      return Poll.findOne({
        _id: request.params.id
      }, (error, poll) => {
        if (error) {
          console.error(error);
        }

        return poll.questions.map((question) => {
          return question.answers = question.answers.map((answer) => {
            delete answer.correct;
            return answer;
          });
        });

      });
    }
  },
  {
    method: ['PUT', 'POST'],
    path: '/api/polls/{id}',
    handler: function (request, h) {
      const poll = new Poll({
        title: request.body.title,
        questions: request.body.questions
      });

      return poll.save(function (error, poll) {
        if (error) {
          console.error(error);
        }
        return poll;
      });
    }
  },
  {
    method: ['POST'],
    path: '/api/result',
    handler: function (request, h) {
      const result = new Result({
        pollId: request.body.pollId,
        contactInfo: request.body.contactInfo,
        questionsResult: request.body.contactInfo
      });

      return result.save(function (error, result) {
        if (error) {
          console.error(error);
        }
        return result;
      });
    }
  }
];
