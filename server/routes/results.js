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

  console.log(req.body);

  var pollId = req.body.pollId;
  var firstname = req.body.contactInfo.firstname;
  var lastname = req.body.contactInfo.lastname;
  var email = req.body.contactInfo.email;
  var country = req.body.contactInfo.country;
  var organization = req.body.contactInfo.organization;
  var jobTitle = req.body.contactInfo.jobTitle;
  var comments = req.body.contactInfo.comments;

  var pollResult = req.body.pollResult.toString();

  //validate email participation on this poll

  connection.query('SELECT * from results WHERE pollId = "' + pollId + '" && email = "' + email + '" ', function (error, results, fields) {

    if (error) {
      res.json({
        "status": 500,
        "error": error,
        "response": null
      });
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
          'comments = "' + comments + '",' +
          'pollResult = "' + pollResult + '"',
          function (err, result) {
            if (err) throw err;
            res.json({
              "status": 200,
              "message": "Thank you for participate",
              "response": {
                "message": "Thank you for participate"
              }
            });
          }
        );
      } else {
        res.json({
          "status": 500,
          "error": "You already participate",
          "response": null
        });
      }
      //If there is no error, all is good and response is 200OK.
    }
  });




});

module.exports = router;
