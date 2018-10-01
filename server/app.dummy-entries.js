const generateDummyEntries = function (connection) {

  //   Poll Table
  //   pollId: "",
  //   title: "",
  //   bgImage: "",
  //   questionsBgImage: "",
  //   bgColor: "",
  //   primaryColor: "",
  //   secundaryColor: "",

  var dummyPoll = 'INSERT INTO polls (title, bgImage, questionsBgImage, bgColor, primaryColor, secundaryColor )' +
    'VALUES ("sal de ahí chivita chivita?", "", "","","","")';

  var dummyQuestion = function (pollId) {
    return 'INSERT INTO questions (pollId, text, type)' +
      'VALUES ( ' + pollId + ', "test question", "radio")'
  };

  var dummyAnswer = function (pollId, questionId) {
    return 'INSERT INTO answers (pollId, questionId, text, valid)' +
      'VALUES ( ' + pollId + ', ' + questionId + ',"test answer", "true")'
  };

  connection.query(dummyPoll,
    function (error, results, fields) {
      if (error) throw error;
      let pollId = results.insertId;
      connection.query(dummyQuestion(pollId),
        function (error, results, fields) {
          if (error) throw error;
          let questionId = results.insertId;
          connection.query(dummyAnswer(pollId, questionId),
            function (error, results, fields) {
              if (error) throw error;
            })
        })
    }
  );

  return connection;
}

module.exports = generateDummyEntries;
