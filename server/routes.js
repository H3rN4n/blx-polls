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
    handler: (request, h) => {
      const poll = new Poll({
        title: request.body.title,
        questions: request.body.questions
      });

      return poll.save((error, poll) => {
        if (error) {
          console.error(error);
        }
        return poll._id;
      });
    }
  },
  {
    method: ['POST'],
    path: '/api/results',
    handler: async (request, h) => {
      var payload = request.payload;
      
      const result = new Result({
        pollId: payload.pollId,
        contactInfo: payload.contactInfo,
        questionsResult: payload.contactInfo
      });

      result.save((error, result) => {
        if (error) {
          console.error(error);
          return error;
        }

        return result;
      });

      return "Saved";
    }
  }
];
