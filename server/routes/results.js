var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   connection.query('SELECT * from results', function (error, results, fields) {
//     if (error) {
//       res.send(JSON.stringify({
//         "status": 500,
//         "error": error,
//         "response": null
//       }));
//       //If there is error, we send the error in the error section with 500 status
//     } else {
//       res.send(JSON.stringify({
//         "status": 200,
//         "error": null,
//         "response": results
//       }));
//       //If there is no error, all is good and response is 200OK.
//     }
//   });
// });

router.post('/', function (req, res) {

  connection.on('error', function (err) {
    console.log(err);
    res.send({
      success: false,
      message: 'database error',
      error: err
    });
    return;
  });

  var pollId = req.body.pollId;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var country = req.body.country;
  var organization = req.body.organization;
  var jobTitle = req.body.jobTitle;
  var comments = req.body.comments;

  //validate email participation on this poll

  connection.query('SELECT * from results WHERE pollId = "' + pollId + '" && email = "' + email + '" ', function (error, results, fields) {

    if (error) {
      res.send(JSON.stringify({
        "status": 500,
        "error": error,
        "response": null
      }));
      //If there is error, we send the error in the error section with 500 status
    } else {

      if (!results.length) {
        connection.query('INSERT INTO results SET ' +
          'pollId = "' + pollId + '",' +
          'firstname = "' + firstname + '",' +
          'lastname = "' + lastname + '",' +
          'email = "' + email + '",' +
          'country = "' + country + '",' +
          'organization = "' + organization + '",' +
          'jobTitle = "' + jobTitle + '",' +
          'comments = "' + comments + '"',
          function (err, result) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
          }
        );
      } else {
          res.send(JSON.stringify({
            "status": 500,
            "error": "You already participate",
            "response": null
          }));
      }
      //If there is no error, all is good and response is 200OK.
    }
  });




});

module.exports = router;
